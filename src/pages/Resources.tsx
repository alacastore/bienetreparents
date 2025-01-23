import { Helmet } from "react-helmet";
import { useState } from "react";
import { Download, PlayCircle, Headphones, CheckSquare } from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { GuideDownloadDialog } from "@/components/resources/GuideDownloadDialog";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { ResourceSection } from "@/components/resources/ResourceSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Resources = () => {
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const { toast } = useToast();

  const handleChecklistDownload = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('guides')
        .download('checklist-routine-matinale.pdf');

      if (error) {
        throw error;
      }

      // Créer un URL pour le fichier téléchargé
      const url = window.URL.createObjectURL(data);
      
      // Créer un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = url;
      link.download = 'checklist-routine-matinale.pdf';
      
      // Déclencher le téléchargement
      document.body.appendChild(link);
      link.click();
      
      // Nettoyer
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Téléchargement réussi",
        description: "Votre checklist a été téléchargée avec succès.",
      });
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      toast({
        title: "Erreur de téléchargement",
        description: "Impossible de télécharger la checklist pour le moment.",
        variant: "destructive",
      });
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
        <ResourceSection title="Nos guides pratiques">
          <ResourceCard
            icon={Download}
            title="7 Jours pour une Parentalité Sereine"
            description="Un guide étape par étape pour transformer votre quotidien de parent"
            buttonText="Télécharger le guide"
            onClick={() => setShowEmailDialog(true)}
          />
        </ResourceSection>

        {/* Vidéos et Podcasts */}
        <ResourceSection title="Vidéos et Podcasts">
          <ResourceCard
            icon={PlayCircle}
            title="Exercices de relaxation express"
            description="Des exercices simples et rapides pour les parents débordés"
            buttonText="Regarder la vidéo"
            buttonVariant="secondary"
          />
          <ResourceCard
            icon={Headphones}
            title="Équilibrer vie pro et vie familiale"
            description="Conseils pratiques pour mieux gérer son temps"
            buttonText="Écouter le podcast"
            buttonVariant="secondary"
          />
        </ResourceSection>

        {/* Checklists et Modèles */}
        <ResourceSection title="Checklists et Modèles">
          <ResourceCard
            icon={CheckSquare}
            title="Routine matinale pour parents occupés"
            description="Une checklist pour des matins plus sereins"
            buttonText="Télécharger la checklist"
            buttonVariant="outline"
            onClick={handleChecklistDownload}
          />
        </ResourceSection>

        {/* Newsletter Section */}
        <section className="bg-accent rounded-lg p-8 mt-16">
          <NewsletterSignup />
        </section>
      </main>

      <GuideDownloadDialog
        open={showEmailDialog}
        onOpenChange={setShowEmailDialog}
      />
    </div>
  );
};

export default Resources;