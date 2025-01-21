import { ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturedArticleProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
  onShare: (title: string) => void;
}

export function FeaturedArticle({ 
  title, 
  description, 
  image, 
  imageAlt, 
  link, 
  onShare 
}: FeaturedArticleProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="article-title">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            to={link}
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            Lire la suite
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare(title)}
            title="Partager cet article"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}