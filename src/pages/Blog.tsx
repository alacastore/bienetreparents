import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/components/BlogPost";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useToast } from "@/hooks/use-toast";

const blogPosts = [
  {
    id: 1,
    title: "Comment gérer le stress parental en 5 étapes simples",
    description: "Découvrez des méthodes simples et efficaces pour retrouver votre calme en quelques minutes. Des solutions pratiques pour tous les parents.",
    category: "Stress parental",
    image: "photo-1649972904349-6e44c42644a7",
    slug: "5-techniques-stress-parental",
    popular: true
  },
  {
    id: 2,
    title: "5 astuces pour trouver du temps pour soi quand on est parent",
    description: "Apprenez à organiser votre temps et à créer des moments pour vous, même avec un emploi du temps chargé. Des conseils testés par des parents.",
    category: "Temps pour soi",
    image: "photo-1721322800607-8c38375eef04",
    slug: "trouver-temps-pour-soi",
    popular: true
  },
  {
    id: 3,
    title: "Équilibrer vie professionnelle et familiale sans culpabilité",
    description: "Des stratégies concrètes pour concilier carrière et vie de famille. Découvrez comment d'autres parents y sont parvenus.",
    category: "Organisation familiale",
    image: "photo-1581091226825-a6a2a5aee158",
    slug: "equilibrer-vie-pro-familiale",
    popular: true
  },
  {
    id: 4,
    title: "10 exercices de respiration pour parents pressés",
    description: "Des exercices rapides et efficaces pour retrouver votre calme en quelques minutes, même dans les moments les plus stressants.",
    category: "Bien-être mental",
    image: "photo-1486312338219-ce68d2c6f44d",
    slug: "exercices-respiration-parents",
  },
  {
    id: 5,
    title: "Comment organiser sa journée en 30 minutes",
    description: "Une méthode simple pour planifier efficacement sa journée et gagner en productivité tout en restant présent pour ses enfants.",
    category: "Organisation familiale",
    image: "photo-1498050108023-c5249f4df085",
    slug: "organiser-journee-30-minutes",
  },
  {
    id: 6,
    title: "Les meilleures applications pour aider les parents",
    description: "Une sélection d'applications pratiques pour faciliter l'organisation familiale et gagner du temps au quotidien.",
    category: "Organisation familiale",
    image: "photo-1460925895917-afdab827c52f",
    slug: "meilleures-applications-parents",
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Blog Bien-Être des Parents",
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
    <div className="relative mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* SEO Meta Tags */}
        <title>Blog Bien-Être des Parents | Conseils et Astuces pour Parents</title>
        <meta
          name="description"
          content="Explorez des articles pratiques pour aider les parents à gérer le stress, équilibrer leur vie et trouver du temps pour eux. Découvrez nos conseils maintenant !"
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="hero-title mb-4">
            Découvrez nos conseils pour une parentalité épanouie
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Des astuces concrètes, des méthodes éprouvées et des outils pour aider les parents à retrouver sérénité et équilibre au quotidien.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex gap-2">
            <Input
              type="search"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="section-title">Catégories</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="secondary"
                className="flex-1 sm:flex-none"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Recent Articles Section */}
        <section className="mb-12">
          <h2 className="section-title">Articles récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPost
                key={post.id}
                post={post}
                onShare={handleShare}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg">
              Voir tous les articles
            </Button>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="mb-12">
          <h2 className="section-title">Articles populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularPosts.map((post) => (
              <BlogPost
                key={post.id}
                post={post}
                onShare={handleShare}
              />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-accent rounded-lg p-8 mb-12">
          <NewsletterSignup />
        </section>
      </div>
    </div>
  );
}
