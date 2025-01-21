import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { BlogHero } from "@/components/BlogHero";
import { BlogCategories } from "@/components/BlogCategories";
import { BlogSection } from "@/components/BlogSection";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import Navbar from "@/components/Navbar";

const blogPosts = [
  {
    id: 1,
    title: "5 Techniques pour Gérer le Stress Parental",
    description: "Découvrez des méthodes simples et efficaces pour retrouver votre calme en quelques minutes. Des solutions pratiques pour tous les parents.",
    category: "Stress parental",
    image: "/lovable-uploads/a565a03e-c070-49b9-bf82-15bf64e4635a.png",
    slug: "5-techniques-stress-parental",
    popular: true
  },
  {
    id: 2,
    title: "Comment Trouver du Temps pour Soi en Tant que Parent",
    description: "Apprenez à organiser votre temps et à créer des moments pour vous, même avec un emploi du temps chargé. Des conseils testés par des parents.",
    category: "Temps pour soi",
    image: "photo-1721322800607-8c38375eef04",
    slug: "trouver-temps-pour-soi",
    popular: true
  },
  {
    id: 3,
    title: "Équilibrer Vie Pro et Familiale Sans Culpabilité",
    description: "Des stratégies concrètes pour concilier carrière et vie de famille. Découvrez comment d'autres parents y sont parvenus.",
    category: "Organisation familiale",
    image: "photo-1581091226825-a6a2a5aee158",
    slug: "equilibrer-vie-pro-familiale",
    popular: true
  },
  {
    id: 4,
    title: "10 Exercices de Relaxation pour Parents Débordés",
    description: "Des exercices rapides et efficaces pour retrouver votre calme en quelques minutes, même dans les moments les plus stressants.",
    category: "Bien-être mental",
    image: "photo-1486312338219-ce68d2c6f44d",
    slug: "exercices-relaxation-parents",
  },
  {
    id: 5,
    title: "Routine Matinale pour Parents : Commencez la Journée Sereinement",
    description: "Une méthode simple pour planifier efficacement sa journée et gagner en productivité tout en restant présent pour ses enfants.",
    category: "Organisation familiale",
    image: "photo-1498050108023-c5249f4df085",
    slug: "routine-matinale-parents",
  }
];

const categories = [
  "Stress parental",
  "Organisation familiale",
  "Temps pour soi",
  "Bien-être mental"
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularPosts = blogPosts.filter(post => post.popular);

  const handleShare = async () => {
    try {
      // Vérifie si l'API de partage est disponible ET si nous avons la permission
      if (navigator.share && navigator.canShare && navigator.canShare({ url: window.location.href })) {
        await navigator.share({
          title: "Blog Bien-Être des Parents",
          url: window.location.href,
        });
      } else {
        // Fallback : copie le lien dans le presse-papier
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Lien copié !",
          description: "Vous pouvez maintenant le partager.",
        });
      }
    } catch (error) {
      // En cas d'erreur, on utilise toujours le fallback de copie
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié !",
        description: "Vous pouvez maintenant le partager.",
      });
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* SEO Meta Tags */}
        <title>Blog Bien-Être des Parents | Conseils et Astuces pour Parents</title>
        <meta
          name="description"
          content="Explorez des articles pratiques pour aider les parents à gérer le stress, équilibrer leur vie et trouver du temps pour eux. Découvrez nos conseils maintenant !"
        />

        <BlogHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <BlogCategories categories={categories} />

        <BlogSection
          title="Articles récents"
          posts={filteredPosts}
          onShare={handleShare}
          showViewAll={true}
        />

        <BlogSection
          title="Articles populaires"
          posts={popularPosts}
          onShare={handleShare}
        />

        {/* Newsletter Section */}
        <section className="bg-accent rounded-lg p-8 mb-12">
          <NewsletterSignup />
        </section>
      </div>
    </div>
  );
}