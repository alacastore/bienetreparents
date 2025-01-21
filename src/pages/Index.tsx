import { ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  
  const handleShare = (articleTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: articleTitle,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      toast({
        title: "Lien copié !",
        description: "Vous pouvez maintenant le partager avec vos amis.",
      });
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-title mb-6">
            Retrouvez sérénité et équilibre dans votre vie de parent grâce à des solutions pratiques
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            Découvrez des solutions concrètes pour réduire votre stress, organiser votre quotidien 
            et profiter pleinement de la parentalité. Des conseils simples et efficaces pour une vie 
            de famille plus sereine.
          </p>
          <Button 
            size="lg" 
            className="text-lg"
            onClick={() => navigate('/ressources')}
          >
            Explorez nos ressources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Articles Populaires</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={article.image}
                  alt={article.imageAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={article.link}
                      className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    >
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare(article.title)}
                      title="Partager cet article"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center mb-12">Ce que disent les parents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Rejoignez notre communauté</h2>
          <p className="text-lg mb-4">
            Recevez chaque semaine des astuces exclusives pour simplifier votre vie de parent
            et accédez à notre guide gratuit "7 jours pour une parentalité sereine".
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit">S'inscrire</Button>
          </form>
        </div>
      </section>
    </div>
  );
};

const featuredArticles = [
  {
    title: "Comment gérer le stress parental en 5 étapes simples",
    excerpt: "Découvrez des méthodes simples et efficaces pour retrouver votre calme en quelques minutes. Cliquez pour transformer votre quotidien !",
    image: "/lovable-uploads/a565a03e-c070-49b9-bf82-15bf64e4635a.png",
    imageAlt: "Parent pratiquant une technique de respiration pour gérer le stress",
    link: "/blog/5-techniques-stress-parental",
  },
  {
    title: "5 astuces pour trouver du temps pour soi quand on est parent",
    excerpt: "Des solutions concrètes pour créer des moments de pause dans votre emploi du temps chargé. Découvrez comment reprendre le contrôle !",
    image: "/lovable-uploads/9480113a-b3df-418c-a264-f7b7a92a4d55.png",
    imageAlt: "Parent profitant d'un moment de détente",
    link: "/blog/trouver-temps-pour-soi",
  },
  {
    title: "Comment équilibrer vie professionnelle et familiale sans culpabilité",
    excerpt: "Les meilleures stratégies pour concilier carrière et parentalité. Apprenez à organiser votre temps efficacement !",
    image: "/lovable-uploads/7288a34b-5e44-445a-b444-bc72cbc5f929.png",
    imageAlt: "Parent travaillant de la maison avec son enfant",
    link: "/blog/equilibrer-vie-pro-familiale",
  },
];

const testimonials = [
  {
    content: "Grâce aux conseils du site, j'ai enfin trouvé un équilibre entre ma vie professionnelle et ma vie de maman. Les techniques de gestion du stress sont particulièrement efficaces !",
    name: "Sophie Martin",
    role: "Maman de 2 enfants",
    avatar: "/placeholder.svg",
  },
  {
    content: "Les articles sont vraiment pratiques et faciles à mettre en place au quotidien. J'apprécie particulièrement la newsletter hebdomadaire qui me rappelle de prendre soin de moi.",
    name: "Thomas Dubois",
    role: "Papa de 3 enfants",
    avatar: "/placeholder.svg",
  },
  {
    content: "Un véritable guide pour les parents qui cherchent à mieux gérer leur temps et leur énergie. Les ressources proposées sont d'une grande aide !",
    name: "Marie Lambert",
    role: "Maman solo",
    avatar: "/placeholder.svg",
  },
];

export default Index;