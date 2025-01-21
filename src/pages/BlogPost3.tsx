import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function BlogPost3() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Équilibrer Vie Pro et Familiale Sans Culpabilité",
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
      <title>Équilibrer Vie Pro et Familiale Sans Culpabilité | Bien-Être des Parents</title>
      <meta
        name="description"
        content="Découvrez comment concilier carrière et vie de famille sans culpabilité. Des conseils pratiques pour les parents qui cherchent à trouver leur équilibre."
      />

      {/* Article Header */}
      <div className="mb-8">
        <img
          src="https://source.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Parent travaillant avec son enfant à proximité"
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />
        <h1 className="hero-title mb-4">
          Équilibrer Vie Pro et Familiale Sans Culpabilité
        </h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">12 min de lecture</span>
            <span className="bg-accent px-3 py-1 rounded-full text-sm">
              Organisation familiale
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
          Concilier carrière et vie de famille est un défi majeur pour beaucoup de parents. 
          Cependant, il est possible de trouver un équilibre sans culpabilité grâce à ces astuces pratiques.
        </p>

        <h2>Les Défis de la Double Casquette Parent-Professionnel</h2>
        <p>
          Les attentes élevées au travail et à la maison peuvent créer une pression immense. 
          Cela mène souvent à un sentiment de culpabilité : être insuffisant à la fois dans sa carrière 
          et dans son rôle de parent.
        </p>

        <h2>Techniques pour une Meilleure Gestion du Temps</h2>
        
        <h3>1. Fixez des Priorités Quotidiennes</h3>
        <ul>
          <li>Identifiez 2-3 tâches essentielles pour chaque journée</li>
          <li>Ne cherchez pas à tout faire</li>
          <li>Concentrez-vous sur ce qui a le plus d'impact</li>
        </ul>

        <h3>2. Pratiquez le Découpage des Tâches</h3>
        <ul>
          <li>Fractionnez les tâches complexes en plus petites étapes réalisables</li>
          <li>Adaptez-vous au temps disponible</li>
          <li>Célébrez les petites victoires</li>
        </ul>

        <h3>3. Apprenez à Dire Non</h3>
        <ul>
          <li>Refusez les engagements qui ne sont pas essentiels</li>
          <li>Évitez la surcharge</li>
          <li>Protégez votre temps et votre énergie</li>
        </ul>

        <h2>Fixer des Limites Claires Entre Travail et Famille</h2>
        <p>
          Il est crucial d'établir des frontières nettes entre vie professionnelle et personnelle :
        </p>
        <ul>
          <li>Lorsque vous êtes à la maison, mettez de côté les distractions liées au travail</li>
          <li>Pendant le travail, expliquez à vos proches que vous devez être concentré</li>
          <li>Créez des rituels de transition entre les deux sphères</li>
        </ul>

        <h2>Apprendre à Déléguer et à S'appuyer sur son Réseau</h2>
        <p>
          La délégation est une compétence clé pour maintenir l'équilibre :
        </p>
        <ul>
          <li>Impliquez votre conjoint dans les tâches quotidiennes</li>
          <li>Responsabilisez vos enfants selon leur âge</li>
          <li>N'hésitez pas à demander de l'aide à votre entourage</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Un équilibre vie pro-familiale est atteignable en adoptant une approche réaliste 
          et en pratiquant l'autocompassion. Ne visez pas la perfection, mais plutôt un équilibre 
          qui vous convient, à vous et à votre famille.
        </p>
      </article>

      {/* CTA Section */}
      <div className="my-12 p-8 bg-accent rounded-lg">
        <h3 className="text-2xl font-heading font-semibold mb-4">
          Besoin de plus de conseils ?
        </h3>
        <p className="mb-6">
          Inscrivez-vous à notre newsletter pour recevoir des conseils hebdomadaires 
          sur l'organisation et le bien-être parental.
        </p>
        <NewsletterSignup />
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPostId={3} posts={blogPosts} />
      </div>
    </div>
  );
}
