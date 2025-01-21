import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
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
    image: "/lovable-uploads/3e350d6f-1da4-4c81-a796-96e135b1b1de.png",
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

export const categories = [
  "Stress parental",
  "Organisation familiale",
  "Temps pour soi",
  "Bien-être mental"
];