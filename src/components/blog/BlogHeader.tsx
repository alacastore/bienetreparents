import { ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface BlogHeaderProps {
  title: string;
  description: string;
  image: string;
  readTime: string;
  category: string;
}

export function BlogHeader({ title, description, image, readTime, category }: BlogHeaderProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
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
    <div className="mb-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          className="flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />
      <h1 className="hero-title mb-4">{title}</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{readTime}</span>
          <span className="bg-accent px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <Button variant="outline" size="icon" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}