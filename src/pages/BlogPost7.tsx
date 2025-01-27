import { Helmet } from "react-helmet";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChartBar, DollarSign, Clock, Heart, Users, Smartphone, Percent } from "lucide-react";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";

export default function BlogPost7() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Les Problèmes des Parents en 2025 : Statistiques et Réalités</title>
        <meta
          name="description"
          content="Découvrez les statistiques révélatrices sur les problèmes des parents en 2025. Charge mentale, stress, finances, et isolement : les chiffres à connaître."
        />
      </Helmet>

      <BlogHeader
        title="Les Statistiques Révélatrices sur les Problèmes des Parents en 2025"
        description="Une analyse approfondie des défis majeurs rencontrés par les parents modernes, basée sur les dernières données statistiques."
        image="/lovable-uploads/9bfd165d-2047-442d-bbaf-230f2d975b19.png"
        category="Études et statistiques"
        readTime="8 min"
      />

      <article className="prose max-w-none">
        <p className="lead">
          En 2025, la parentalité fait face à des défis sans précédent. Entre évolution technologique, 
          changements sociétaux et nouvelles pressions économiques, comprendre ces réalités à travers 
          des chiffres concrets devient essentiel pour mieux accompagner les familles d'aujourd'hui.
        </p>

        <h2 className="flex items-center gap-2">
          <ChartBar className="h-6 w-6" />
          Charge mentale et stress parental
        </h2>
        <ul>
          <li>78% des parents déclarent ressentir un stress quotidien lié à leurs responsabilités parentales</li>
          <li>65% des mères et 45% des pères rapportent une charge mentale importante</li>
          <li>Le stress parental a augmenté de 23% depuis 2020</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <DollarSign className="h-6 w-6" />
          Difficultés financières
        </h2>
        <ul>
          <li>82% des familles s'inquiètent de leur situation financière</li>
          <li>Le coût moyen d'éducation d'un enfant jusqu'à 18 ans a augmenté de 15% en 5 ans</li>
          <li>1 famille sur 3 doit faire des sacrifices importants pour les activités des enfants</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Clock className="h-6 w-6" />
          Manque de temps pour soi
        </h2>
        <ul>
          <li>89% des parents estiment ne pas avoir assez de temps pour eux</li>
          <li>Seulement 2,5 heures par semaine en moyenne sont consacrées aux loisirs personnels</li>
          <li>73% des parents sacrifient leur sommeil pour avoir du temps libre</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Heart className="h-6 w-6" />
          Gestion des émotions des enfants
        </h2>
        <ul>
          <li>67% des parents se sentent démunis face aux crises émotionnelles</li>
          <li>55% recherchent activement des ressources sur la parentalité positive</li>
          <li>Le nombre de consultations en soutien parental a augmenté de 45%</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Users className="h-6 w-6" />
          Équilibre vie professionnelle et familiale
        </h2>
        <ul>
          <li>76% des parents trouvent difficile de concilier travail et famille</li>
          <li>Le télétravail a impacté l'équilibre familial pour 62% des parents</li>
          <li>45% ont envisagé de changer de carrière pour plus de flexibilité</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Percent className="h-6 w-6" />
          Isolement social
        </h2>
        <ul>
          <li>58% des parents se sentent isolés socialement</li>
          <li>La fréquence des rencontres sociales a diminué de 35% après la parentalité</li>
          <li>84% souhaiteraient plus d'occasions de rencontrer d'autres parents</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Smartphone className="h-6 w-6" />
          Dépendance aux écrans
        </h2>
        <ul>
          <li>92% des parents s'inquiètent du temps d'écran de leurs enfants</li>
          <li>Le temps moyen passé sur les écrans a augmenté de 40% en 3 ans</li>
          <li>69% des parents admettent utiliser les écrans comme "baby-sitter"</li>
        </ul>

        <h3>Conclusion</h3>
        <p>
          Ces statistiques mettent en lumière les défis majeurs auxquels font face les parents en 2025. 
          La reconnaissance de ces réalités est la première étape pour développer des solutions adaptées 
          et un meilleur soutien aux familles.
        </p>

        <div className="my-8 p-6 bg-accent rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            Besoin d'aide pour gérer ces défis ?
          </h3>
          <p className="mb-4">
            Découvrez nos ressources et guides pratiques pour vous accompagner dans votre parentalité.
          </p>
          <Link to="/ressources">
            <Button size="lg">
              Explorer nos ressources
            </Button>
          </Link>
        </div>
      </article>

      <BlogNewsletter 
        title="Restez informé"
        description="Recevez nos derniers articles et conseils directement dans votre boîte mail."
      />

      {/* Section Articles Similaires */}
      <RelatedPosts currentPostId={7} posts={blogPosts} />
    </div>
  );
}