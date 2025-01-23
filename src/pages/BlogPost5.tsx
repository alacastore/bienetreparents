import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            Le stress parental est une réalité quotidienne pour de nombreux parents. 
            Découvrez 5 techniques efficaces pour le gérer et retrouver votre sérénité.
          </p>

          <h2>1. La Technique de la Respiration 4-7-8</h2>
          <p>
            Cette technique simple mais puissante peut être pratiquée n'importe où, n'importe quand :
          </p>
          <ul>
            <li>Inspirez pendant 4 secondes</li>
            <li>Retenez votre respiration pendant 7 secondes</li>
            <li>Expirez lentement pendant 8 secondes</li>
            <li>Répétez 3-4 fois</li>
          </ul>

          <h2>2. La Pause Consciente de 2 Minutes</h2>
          <p>
            Lorsque vous sentez la tension monter :
          </p>
          <ul>
            <li>Arrêtez tout ce que vous faites</li>
            <li>Fermez les yeux</li>
            <li>Concentrez-vous sur vos sensations physiques</li>
            <li>Observez vos pensées sans les juger</li>
          </ul>

          <h2>3. L'Ancrage par les 5 Sens</h2>
          <p>
            Pratiquez cet exercice pour vous reconnecter au moment présent :
          </p>
          <ul>
            <li>Identifiez 5 choses que vous voyez</li>
            <li>4 choses que vous pouvez toucher</li>
            <li>3 sons que vous entendez</li>
            <li>2 odeurs que vous percevez</li>
            <li>1 goût que vous ressentez</li>
          </ul>

          <h2>4. La Visualisation Positive</h2>
          <p>
            Prenez un moment pour :
          </p>
          <ul>
            <li>Imaginer un lieu apaisant</li>
            <li>Visualiser des moments de joie avec vos enfants</li>
            <li>Vous rappeler vos succès parentaux</li>
            <li>Projeter une résolution positive de la situation stressante</li>
          </ul>

          <h2>5. Le Journal des Gratitudes</h2>
          <p>
            Chaque soir, notez :
          </p>
          <ul>
            <li>3 moments positifs de votre journée de parent</li>
            <li>2 qualités que vous appréciez chez votre enfant</li>
            <li>1 chose pour laquelle vous êtes reconnaissant(e)</li>
          </ul>

          <h2>Mettre ces Techniques en Pratique</h2>
          <p>
            Pour intégrer ces techniques dans votre quotidien :
          </p>
          <ul>
            <li>Commencez par une seule technique à la fois</li>
            <li>Pratiquez régulièrement, même quand vous n'êtes pas stressé(e)</li>
            <li>Adaptez ces techniques à votre situation</li>
            <li>Partagez-les avec votre partenaire ou d'autres parents</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Le stress parental est normal, mais il ne doit pas prendre le contrôle 
            de votre vie. En pratiquant régulièrement ces techniques, vous développerez 
            une plus grande résilience face aux défis quotidiens de la parentalité.
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