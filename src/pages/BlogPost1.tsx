import { Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import { Link, useNavigate } from "react-router-dom";

export default function BlogPost1() {
  const { toast } = useToast();
  const navigate = useNavigate();

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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Navigation */}
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
      <title>5 Techniques pour Gérer le Stress Parental | Bien-Être des Parents</title>
      <meta
        name="description"
        content="Découvrez 5 techniques simples pour réduire le stress parental et retrouver sérénité. Appliquez ces conseils pratiques dès aujourd'hui et améliorez votre bien-être !"
      />

      {/* Article Header */}
      <div className="mb-8">
        <img
          src="/lovable-uploads/a565a03e-c070-49b9-bf82-15bf64e4635a.png"
          alt="Parent détendu pratiquant la respiration profonde"
          className="w-full h-[400px] object-cover rounded-lg mb-6"
        />
        <h1 className="hero-title mb-4">
          5 Techniques Simples pour Gérer le Stress Parental
        </h1>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">10 min de lecture</span>
            <span className="bg-accent px-3 py-1 rounded-full text-sm">
              Stress parental
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
          La parentalité est une aventure merveilleuse, mais elle peut aussi être une source importante de stress. 
          Jongler entre les responsabilités familiales, professionnelles et personnelles peut rapidement devenir accablant. 
          Heureusement, il existe des techniques simples et efficaces pour gérer le stress parental et retrouver sérénité. 
          Voici 5 stratégies à adopter dès aujourd'hui.
        </p>

        <h2>Comprendre les Causes du Stress Parental</h2>
        <p>
          Avant d'agir, il est important de comprendre les origines de votre stress. 
          Parmi les causes les plus courantes :
        </p>
        <ul>
          <li>La charge mentale (penser à tout pour tout le monde)</li>
          <li>Le manque de temps pour soi</li>
          <li>Les attentes sociales ou familiales</li>
          <li>Les imprévus du quotidien (crises des enfants, organisation chamboulée)</li>
        </ul>
        <p>
          Identifier vos sources de stress est la première étape pour mieux les gérer.
        </p>

        <h2>Technique 1 : Respiration Profonde</h2>
        <p>
          La respiration profonde est une méthode rapide et efficace pour calmer instantanément votre esprit. 
          Voici comment pratiquer :
        </p>
        <ol>
          <li>Asseyez-vous confortablement</li>
          <li>Inspirez lentement par le nez pendant 4 secondes</li>
          <li>Retenez votre souffle pendant 4 secondes</li>
          <li>Expirez doucement par la bouche pendant 6 secondes</li>
          <li>Répétez ce cycle 5 à 10 fois</li>
        </ol>
        <p>
          Cet exercice aide à réduire la tension et à améliorer votre concentration.
        </p>

        <h2>Technique 2 : Prendre du Temps pour Soi</h2>
        <p>
          Se détacher des responsabilités parentales, ne serait-ce que 10 minutes par jour, 
          peut faire des merveilles. Quelques idées :
        </p>
        <ul>
          <li>Faire une promenade rapide</li>
          <li>Lire quelques pages d'un livre</li>
          <li>Prendre un bain relaxant</li>
        </ul>
        <p>
          <strong>Astuce :</strong> Planifiez ces moments dans votre agenda comme vous le feriez pour un rendez-vous important.
        </p>

        <h2>Technique 3 : Organisation Efficace</h2>
        <p>
          Une bonne organisation permet de réduire le stress lié à la gestion du quotidien. Essayez :
        </p>
        <ul>
          <li><strong>Déléguer :</strong> Confiez certaines tâches aux membres de la famille</li>
          <li><strong>Planifier :</strong> Utilisez un agenda ou une application pour organiser vos journées</li>
          <li><strong>Prioriser :</strong> Focalisez-vous sur ce qui est essentiel et laissez de côté les tâches non urgentes</li>
        </ul>

        <h2>Technique 4 : Communiquer ses Besoins</h2>
        <p>
          Il est important de partager vos besoins et vos limites avec votre entourage. Par exemple :
        </p>
        <ul>
          <li>Exprimez ce que vous ressentez à votre partenaire ou à un proche</li>
          <li>N'hésitez pas à demander de l'aide (pour la garde des enfants, par exemple)</li>
        </ul>
        <p>
          Une communication ouverte permet de mieux distribuer la charge mentale.
        </p>

        <h2>Technique 5 : Pratiquer la Gratitude</h2>
        <p>
          La gratitude est une puissante technique pour changer votre perspective. 
          Chaque soir, notez 3 choses positives de votre journée, même les plus petites 
          (un sourire de votre enfant, un moment calme, etc.).
        </p>
        <p>
          Cet exercice simple vous aidera à vous concentrer sur les aspects positifs de votre vie.
        </p>

        <h2>Conclusion</h2>
        <p>
          Le stress parental est inévitable, mais ces techniques vous aideront à le gérer 
          et à retrouver un équilibre. Commencez par appliquer une ou deux de ces stratégies 
          aujourd'hui et observez les effets sur votre bien-être.
        </p>
      </article>

      {/* CTA Section */}
      <div className="my-12 p-8 bg-accent rounded-lg">
        <h3 className="text-2xl font-heading font-semibold mb-4">
          Envie d'aller plus loin ?
        </h3>
        <p className="mb-6">
          Téléchargez notre guide gratuit "7 jours pour une parentalité sereine" 
          et recevez des conseils exclusifs directement dans votre boîte mail.
        </p>
        <Button size="lg" className="w-full md:w-auto">
          Télécharger le guide gratuit
        </Button>
      </div>

      {/* Newsletter Section */}
      <section className="my-12">
        <NewsletterSignup />
      </section>

      {/* Related Posts */}
      <RelatedPosts currentPostId={1} posts={blogPosts} />
    </div>
  );
}
