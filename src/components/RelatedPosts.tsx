import { Link } from "react-router-dom";
import { BlogPost } from "@/types/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedPostsProps {
  currentPostId: number;
  posts: BlogPost[];
}

export function RelatedPosts({ currentPostId, posts }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-heading font-semibold mb-6">Articles similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
                <div className="mt-2">
                  <span className="inline-block bg-accent text-xs rounded-full px-2 py-1">
                    {post.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}