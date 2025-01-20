import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-accent py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-title mb-6">
            Retrouvez sérénité et équilibre dans votre vie de parent
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Des solutions bienveillantes et pratiques pour vous aider à gérer votre stress
            et à trouver l'équilibre parfait entre vie professionnelle et familiale.
          </p>
          <Button size="lg" className="text-lg">
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
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Link
                    to={article.link}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-secondary py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Rejoignez notre communauté</h2>
          <p className="text-lg mb-8">
            Recevez chaque semaine des conseils pratiques et des ressources
            exclusives pour votre bien-être parental.
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
    title: "5 techniques rapides pour gérer le stress parental",
    excerpt: "Découvrez des méthodes simples et efficaces pour retrouver votre calme en quelques minutes.",
    image: "/placeholder.svg",
    link: "/blog/5-techniques-stress-parental",
  },
  {
    title: "Comment trouver du temps pour soi",
    excerpt: "Des astuces concrètes pour créer des moments de pause dans votre emploi du temps chargé.",
    image: "/placeholder.svg",
    link: "/blog/trouver-temps-pour-soi",
  },
  {
    title: "Équilibrer vie pro et familiale",
    excerpt: "Les meilleures stratégies pour concilier carrière et parentalité sans culpabilité.",
    image: "/placeholder.svg",
    link: "/blog/equilibrer-vie-pro-familiale",
  },
];

export default Index;