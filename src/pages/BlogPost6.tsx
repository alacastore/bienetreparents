import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";

export default function BlogPost6() {
  const post = blogPosts[5]; // Index 5 corresponds to the 6th post

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BlogHeader
          title={post.title}
          description={post.description}
          image={post.image}
          readTime="8 min"
          category={post.category}
        />

        <div className="prose prose-lg max-w-none">
          <h2>Les Bienfaits d'une Routine Familiale</h2>
          <p>
            Une routine familiale bien établie apporte structure et stabilité à votre quotidien. 
            Elle permet de réduire le stress, d'améliorer la communication et de créer des moments 
            privilégiés avec vos enfants.
          </p>

          <h2>Étapes pour Créer une Routine Apaisante</h2>
          <ol>
            <li>Identifiez les moments clés de la journée</li>
            <li>Impliquez tous les membres de la famille</li>
            <li>Commencez progressivement</li>
            <li>Restez flexible et adaptable</li>
            <li>Célébrez les petites victoires</li>
          </ol>

          <h2>Exemple de Routine Apaisante</h2>
          <ul>
            <li>
              <strong>Matin :</strong> Réveil calme, petit-déjeuner en famille, préparation sereine
            </li>
            <li>
              <strong>Après-midi :</strong> Retour d'école, goûter, devoirs, temps libre
            </li>
            <li>
              <strong>Soir :</strong> Dîner en famille, routine du coucher apaisante
            </li>
          </ul>

          <div className="my-8 p-6 bg-accent rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Téléchargez notre modèle de routine familiale
            </h3>
            <p className="mb-4">
              Recevez gratuitement notre guide pratique pour mettre en place une routine 
              qui fonctionne pour toute la famille.
            </p>
            <BlogNewsletter />
          </div>
        </div>

        {/* Section Articles Similaires */}
        <RelatedPosts currentPostId={6} posts={blogPosts} />
      </div>
    </div>
  );
}