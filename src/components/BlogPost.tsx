import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BlogPostProps {
  post: {
    title: string;
    description: string;
    category: string;
    image: string;
    slug: string;
  };
  onShare: () => void;
}

export function BlogPost({ post, onShare }: BlogPostProps) {
  return (
    <Card>
      <CardHeader>
        <img
          src={`https://source.unsplash.com/${post.image}`}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardTitle className="text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{post.description}</p>
        <div className="mt-4">
          <span className="inline-block bg-accent text-sm rounded-full px-3 py-1">
            {post.category}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link to={`/blog/${post.slug}`}>Lire l'article</Link>
        </Button>
        <Button variant="ghost" size="icon" onClick={onShare}>
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}