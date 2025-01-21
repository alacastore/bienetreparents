import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Download, PlayCircle, Headphones, CheckSquare } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ressources - Bien-Être des Parents | Guides et Outils Pratiques</title>
        <meta
          name="description"
          content="Accédez à des guides, vidéos et outils pratiques pour une parentalité épanouie. Téléchargez nos contenus exclusifs maintenant."
        />
      </Helmet>

      <Navbar />

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
                <Button className="w-full">Télécharger le guide</Button>
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
    </div>
  );
};

export default Resources;
