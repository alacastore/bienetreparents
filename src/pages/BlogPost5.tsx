import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { GuideDownloadDialog } from "@/components/resources/GuideDownloadDialog";

export default function BlogPost5() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showGuideDialog, setShowGuideDialog] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "5 Techniques pour Gérer le Stress Parental",
        url: window.location.href,
      });
    } else {
      toast({
        title: "Lien copié !",
        description: "Vous pouvez maintenant le partager.",
      });
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4" />
            Retour
          </Button>
        </div>

        <div className="mb-8">
          <img
            src="/lovable-uploads/a565a03e-c070-49b9-bf82-15bf64e4635a.png"
            alt="Parent gérant le stress"
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <h1 className="hero-title mb-4">
            5 Techniques pour Gérer le Stress Parental
          </h1>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">7 min de lecture</span>
              <span className="bg-accent px-3 py-1 rounded-full text-sm">
                Stress parental
              </span>
            </div>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <p className="lead">
            Une routine matinale bien structurée peut transformer votre journée. 
            Découvrez comment créer des habitudes matinales qui vous permettront 
            de commencer chaque jour avec calme et énergie.
          </p>

          <h2>Pourquoi une Routine Matinale Change Tout</h2>
          <p>
            Les premières heures de la journée déterminent souvent le ton pour le reste 
            de la journée. Une routine efficace peut vous aider à :
          </p>
          <ul>
            <li>Réduire le stress matinal</li>
            <li>Augmenter votre productivité</li>
            <li>Améliorer votre bien-être général</li>
            <li>Créer des moments de qualité en famille</li>
          </ul>

          <h2>3 Étapes Clés pour une Routine Matinale Sereine</h2>
          
          <h3>1. Se Lever 15 Minutes Plus Tôt</h3>
          <p>
            Ces quelques minutes supplémentaires peuvent faire toute la différence :
          </p>
          <ul>
            <li>Évitez de consulter votre téléphone immédiatement</li>
            <li>Prenez le temps de vous étirer doucement</li>
            <li>Buvez un grand verre d'eau</li>
            <li>Profitez du calme avant le réveil des enfants</li>
          </ul>

          <h3>2. Inclure une Activité Apaisante</h3>
          <p>
            Choisissez une activité qui vous ressource :
          </p>
          <ul>
            <li>Méditation de 5 minutes</li>
            <li>Exercices de respiration</li>
            <li>Yoga doux</li>
            <li>Lecture inspirante</li>
            <li>Journal intime</li>
          </ul>

          <h3>3. Planifier sa Journée</h3>
          <p>
            Prenez 5 minutes pour organiser votre journée :
          </p>
          <ul>
            <li>Notez vos 3 priorités principales</li>
            <li>Consultez votre agenda</li>
            <li>Préparez votre liste de tâches</li>
            <li>Anticipez les besoins de la famille</li>
          </ul>

          <h2>Conseils pour Maintenir votre Routine</h2>
          <p>
            Pour que votre routine matinale devienne une habitude :
          </p>
          <ul>
            <li>Commencez progressivement avec de petits changements</li>
            <li>Préparez ce que vous pouvez la veille</li>
            <li>Adaptez votre routine selon les jours</li>
            <li>Soyez indulgent avec vous-même</li>
          </ul>

          <h2>Impliquer les Enfants</h2>
          <p>
            Créez une routine qui inclut toute la famille :
          </p>
          <ul>
            <li>Établissez des rituels du matin amusants</li>
            <li>Responsabilisez les enfants avec des tâches adaptées</li>
            <li>Créez un tableau visuel de la routine</li>
            <li>Célébrez les petites victoires</li>
          </ul>

          <h2>Gérer les Imprévus</h2>
          <p>
            Même la meilleure routine peut être perturbée :
          </p>
          <ul>
            <li>Ayez un plan B pour les jours difficiles</li>
            <li>Restez flexible et adaptable</li>
            <li>Concentrez-vous sur l'essentiel</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Adopter une routine matinale n'a pas besoin d'être compliqué. 
            Commencez petit, ajustez selon vos besoins, et observez les 
            changements positifs dans votre quotidien familial.
          </p>
        </article>

        <div className="my-12 p-8 bg-accent rounded-lg">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Envie d'aller plus loin ?
          </h3>
          <p className="mb-6">
            Téléchargez notre guide gratuit "7 Jours pour une Parentalité Sereine" 
            et recevez nos conseils hebdomadaires pour une parentalité plus épanouie.
          </p>
          <Button onClick={() => setShowGuideDialog(true)}>
            Télécharger le guide gratuit
          </Button>
        </div>

        <RelatedPosts currentPostId={5} posts={blogPosts} />
      </div>

      <GuideDownloadDialog 
        open={showGuideDialog} 
        onOpenChange={setShowGuideDialog} 
      />
    </div>
  );
}