import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Download, PlayCircle, Headphones, CheckSquare } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Resources = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Code d'erreur pour une violation d'unicité
          toast({
            title: "Email déjà inscrit",
            description: "Vous pouvez télécharger directement le guide.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Merci de votre inscription !",
          description: "Le téléchargement va commencer automatiquement.",
        });
      }

      // Déclencher le téléchargement
      const link = document.createElement('a');
      link.href = '/guides/7-jours-parentalite-sereine.pdf';
      link.download = '7-jours-parentalite-sereine.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowEmailDialog(false);
      setEmail("");
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Une erreur est survenue",
        description: "Impossible de traiter votre demande pour le moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ressources - Bien-Être des Parents | Guides et Outils Pratiques</title>
        <meta
          name="description"
          content="Accédez à des guides, vidéos et outils pratiques pour une parentalité épanouie. Téléchargez nos contenus exclusifs maintenant."
        />
      </Helmet>

      <main id="top" className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-heading font-bold text-center mb-8">
          Ressources pour une Parentalité Sereine
        </h1>

        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Découvrez nos outils et contenus exclusifs pour vous accompagner dans votre quotidien de parent.
        </p>

        {/* Guides Pratiques */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8">Nos guides pratiques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-primary" />
                  7 Jours pour une Parentalité Sereine
                </CardTitle>
                <CardDescription>
                  Un guide étape par étape pour transformer votre quotidien de parent
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full"
                  onClick={() => setShowEmailDialog(true)}
                >
                  Télécharger le guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vidéos et Podcasts */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8">Vidéos et Podcasts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  Exercices de relaxation express
                </CardTitle>
                <CardDescription>
                  Des exercices simples et rapides pour les parents débordés
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Regarder la vidéo</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Équilibrer vie pro et vie familiale
                </CardTitle>
                <CardDescription>
                  Conseils pratiques pour mieux gérer son temps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">Écouter le podcast</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Checklists et Modèles */}
        <section className="mb-16">
          <h2 className="text-2xl font-heading font-semibold mb-8">Checklists et Modèles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  Routine matinale pour parents occupés
                </CardTitle>
                <CardDescription>
                  Une checklist pour des matins plus sereins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">Télécharger la checklist</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-accent rounded-lg p-8 mt-16">
          <NewsletterSignup />
        </section>
      </main>

      <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Téléchargez votre guide gratuit</DialogTitle>
            <DialogDescription>
              Entrez votre email pour recevoir le guide "7 Jours pour une Parentalité Sereine" et nos conseils hebdomadaires.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDownload} className="space-y-4">
            <Input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Traitement en cours..." : "Télécharger le guide"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;