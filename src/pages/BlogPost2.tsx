import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function BlogPost2() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Comment Trouver du Temps pour Soi en Tant que Parent",
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

        {/* SEO Meta Tags */}
        <title>Comment Trouver du Temps pour Soi en Tant que Parent | Bien-Être des Parents</title>
        <meta
          name="description"
          content="Découvrez des stratégies pratiques pour trouver du temps pour vous en tant que parent. Des conseils concrets pour intégrer des moments de pause dans votre quotidien chargé."
        />

        {/* Article Header */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/3e350d6f-1da4-4c81-a796-96e135b1b1de.png"
            alt="Parent prenant un moment de détente pour lire dans un environnement cosy"
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <h1 className="hero-title mb-4">
            Comment Trouver du Temps pour Soi en Tant que Parent
          </h1>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">8 min de lecture</span>
              <span className="bg-accent px-3 py-1 rounded-full text-sm">
                Temps pour soi
              </span>
            </div>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="lead">
            La parentalité peut souvent laisser peu de place à vos besoins personnels. 
            Pourtant, prendre du temps pour soi est essentiel pour être un parent épanoui et présent. 
            Voici des stratégies simples pour intégrer du temps pour vous dans votre quotidien chargé.
          </p>

          <h2>Pourquoi les Parents Manquent de Temps pour Eux</h2>
          <p>
            Entre les tâches domestiques, le travail et les besoins des enfants, 
            il peut sembler impossible de trouver un moment pour soi. Souvent, 
            les parents placent leurs propres besoins en bas de leur liste de priorités, 
            ce qui peut mener à un stress accru et une fatigue émotionnelle.
          </p>

          <h2>3 Stratégies pour Intégrer du Temps pour Soi</h2>
          
          <h3>1. Planifiez votre Temps Personnel</h3>
          <ul>
            <li>Bloquez des moments pour vous dans votre agenda comme vous le feriez pour un rendez-vous professionnel.</li>
            <li>Communiquez clairement avec votre famille sur ces moments pour vous assurer qu'ils soient respectés.</li>
          </ul>

          <h3>2. Simplifiez Votre Routine</h3>
          <ul>
            <li>Identifiez des tâches qui peuvent être déléguées ou simplifiées.</li>
            <li>Concentrez-vous sur l'essentiel et laissez de côté les activités non prioritaires.</li>
          </ul>

          <h3>3. Profitez des Micro-Pauses</h3>
          <ul>
            <li>Même quelques minutes peuvent suffire pour se ressourcer.</li>
            <li>Essayez des activités rapides comme la respiration profonde, la lecture d'un chapitre ou une marche de 10 minutes.</li>
          </ul>

          <h2>Exemples d'Activités Rapides pour Se Ressourcer</h2>
          <ul>
            <li>Faire des étirements</li>
            <li>Écouter une chanson apaisante</li>
            <li>Noter des pensées positives dans un carnet</li>
          </ul>

          <h2>Faire de Votre Bien-être une Priorité Familiale</h2>
          <p>
            Montrez à vos enfants qu'il est important de prendre soin de soi. 
            Cela leur apprend par l'exemple l'importance de l'équilibre et de l'autonomie.
          </p>

          <h2>Conclusion</h2>
          <p>
            Trouver du temps pour soi en tant que parent n'est pas un luxe, mais une nécessité. 
            En appliquant ces stratégies, vous pourrez réduire votre stress et être plus présent pour vos proches.
          </p>
        </article>

        {/* CTA Section */}
        <div className="my-12 p-8 bg-accent rounded-lg">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Ne manquez pas nos conseils hebdomadaires
          </h3>
          <NewsletterSignup />
        </div>

        {/* Related Posts */}
        <RelatedPosts currentPostId={2} posts={blogPosts} />
      </div>
    </div>
  );
}
