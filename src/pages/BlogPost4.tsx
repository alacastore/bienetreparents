import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogNewsletter } from "@/components/blog/BlogNewsletter";
import { RelatedPosts } from "@/components/RelatedPosts";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";

export default function BlogPost4() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BlogHeader
          title="10 Exercices de Relaxation pour Parents Débordés"
          description="Découvrez 10 exercices simples et rapides de relaxation pour parents débordés. Des techniques efficaces pour retrouver calme et sérénité au quotidien."
          image="/lovable-uploads/42b2ee83-d58c-4bec-9940-307a11673bfc.png"
          readTime="8 min de lecture"
          category="Bien-être mental"
        />

        <article className="prose prose-lg max-w-none">
          <p className="lead">
            La relaxation est essentielle pour réduire le stress et améliorer votre santé mentale. 
            Voici 10 exercices simples et rapides pour retrouver votre calme, même dans un emploi 
            du temps chargé.
          </p>

        <h2>Pourquoi la Relaxation Est Essentielle pour les Parents</h2>
        <p>
          Un esprit apaisé permet de mieux gérer les défis de la parentalité. Ces exercices 
          de relaxation sont conçus pour être réalisés en quelques minutes, s'intégrant 
          facilement dans votre quotidien chargé.
        </p>

        <h2>1. Respiration Abdominale</h2>
        <p>
          La respiration abdominale est une technique simple mais efficace :
        </p>
        <ul>
          <li>Asseyez-vous confortablement</li>
          <li>Posez vos mains sur votre ventre</li>
          <li>Inspirez profondément en gonflant le ventre</li>
          <li>Expirez lentement en rentrant le ventre</li>
          <li>Répétez 5-10 fois</li>
        </ul>

        <h2>2. Méditation Express (5 Minutes)</h2>
        <p>
          Une courte méditation peut faire des merveilles :
        </p>
        <ul>
          <li>Fermez les yeux</li>
          <li>Concentrez-vous sur votre respiration</li>
          <li>Observez vos pensées sans les juger</li>
          <li>Revenez doucement à votre respiration si l'esprit s'égare</li>
        </ul>

        <h2>3. Étirements Doux</h2>
        <p>
          Des étirements simples pour relâcher les tensions :
        </p>
        <ul>
          <li>Rotation douce de la tête</li>
          <li>Haussement des épaules</li>
          <li>Étirements des bras</li>
          <li>Flexions latérales du tronc</li>
        </ul>

        <h2>4. Relaxation Progressive des Muscles</h2>
        <p>
          Cette technique aide à relâcher les tensions musculaires :
        </p>
        <ul>
          <li>Contractez chaque groupe musculaire pendant 5 secondes</li>
          <li>Relâchez lentement</li>
          <li>Commencez par les pieds et remontez jusqu'à la tête</li>
        </ul>

        <h2>5. Pause Visuelle</h2>
        <p>
          Accordez-vous une pause visuelle régulière :
        </p>
        <ul>
          <li>Regardez au loin pendant 20 secondes</li>
          <li>Fermez les yeux pendant 20 secondes</li>
          <li>Répétez 3 fois</li>
        </ul>

        <h2>6. Mini-Massage Express</h2>
        <p>
          Des auto-massages rapides pour soulager les tensions :
        </p>
        <ul>
          <li>Massez doucement vos tempes</li>
          <li>Pétrissez la base du cou</li>
          <li>Massez les points de pression des mains</li>
        </ul>

        <h2>7. Exercice de Gratitude</h2>
        <p>
          Prenez un moment pour la gratitude :
        </p>
        <ul>
          <li>Notez mentalement 3 choses positives de votre journée</li>
          <li>Concentrez-vous sur les sensations de bien-être</li>
        </ul>

        <h2>8. Visualisation Positive</h2>
        <p>
          Imaginez un lieu apaisant pendant 1-2 minutes :
        </p>
        <ul>
          <li>Fermez les yeux</li>
          <li>Visualisez un endroit calme et serein</li>
          <li>Concentrez-vous sur les détails</li>
        </ul>

        <h2>9. Respiration 4-7-8</h2>
        <p>
          Une technique de respiration apaisante :
        </p>
        <ul>
          <li>Inspirez pendant 4 secondes</li>
          <li>Retenez pendant 7 secondes</li>
          <li>Expirez pendant 8 secondes</li>
        </ul>

        <h2>10. Pause Mindfulness</h2>
        <p>
          Une minute de pleine conscience :
        </p>
        <ul>
          <li>Observez votre environnement</li>
          <li>Notez 3 sons, 3 choses que vous voyez, 3 sensations</li>
          <li>Respirez calmement</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          En intégrant ces exercices dans votre quotidien, vous pourrez réduire votre stress 
          et retrouver énergie et calme. La clé est de les pratiquer régulièrement, même 
          quelques minutes par jour.
        </p>
        </article>

        <BlogNewsletter
          title="Besoin de plus d'exercices ?"
          description="Téléchargez notre guide complet d'exercices de relaxation pour parents débordés et recevez des conseils hebdomadaires directement dans votre boîte mail."
        />

        <RelatedPosts currentPostId={4} posts={blogPosts} />
      </div>
    </div>
  );
}
