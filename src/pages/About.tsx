import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>À propos - Bien-Être des Parents | Notre Mission et Nos Valeurs</title>
        <meta
          name="description"
          content="Découvrez notre mission et nos valeurs chez Bien-Être des Parents. Nous vous aidons à vivre une parentalité sereine avec des conseils et ressources adaptés."
        />
      </Helmet>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="hero-title mb-6">
            Notre Mission : Accompagner les Parents vers une Vie Plus Sereine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chez Bien-Être des Parents, nous croyons que chaque parent mérite de se sentir soutenu et épanoui. 
            Nous offrons des ressources pratiques pour vous aider à surmonter les défis quotidiens et profiter 
            pleinement de votre rôle de parent.
          </p>
        </section>

        {/* Mission et Valeurs */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/lovable-uploads/9480113a-b3df-418c-a264-f7b7a92a4d55.png"
                alt="Un moment de sérénité en famille"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            <div>
              <h2 className="section-title">Pourquoi nous avons créé Bien-Être des Parents ?</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Notre plateforme est née d'une conviction simple : les parents ont besoin 
                  d'un espace bienveillant où trouver des solutions concrètes à leurs défis quotidiens.
                </p>
                <p>
                  Nos valeurs fondamentales guident chacune de nos actions :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Bienveillance :</strong> Un accompagnement sans jugement</li>
                  <li><strong>Simplicité :</strong> Des solutions pratiques et accessibles</li>
                  <li><strong>Équilibre :</strong> Une approche holistique du bien-être parental</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* À qui s'adresse ce site */}
        <section className="bg-accent rounded-lg p-8 mb-16">
          <h2 className="section-title text-center mb-8">À qui s'adresse ce site ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Parents Actifs</h3>
              <p className="text-gray-600">
                Des solutions concrètes pour équilibrer vie professionnelle et familiale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Jeunes Parents</h3>
              <p className="text-gray-600">
                Un accompagnement bienveillant dans les premiers pas de la parentalité.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Parents Stressés</h3>
              <p className="text-gray-600">
                Des techniques efficaces pour gérer le stress et retrouver la sérénité.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="section-title">Rejoignez notre communauté</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez nos ressources et rejoignez notre communauté pour une parentalité épanouie.
          </p>
          <Link to="/ressources">
            <Button size="lg" className="text-lg">
              Voir nos ressources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default About;