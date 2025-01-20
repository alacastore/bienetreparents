import { BlogPost } from "@/components/BlogPost";

interface BlogSectionProps {
  title: string;
  posts: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    slug: string;
  }>;
  onShare: () => void;
  showViewAll?: boolean;
}

export function BlogSection({ title, posts, onShare, showViewAll }: BlogSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            post={post}
            onShare={onShare}
          />
        ))}
      </div>
      {showViewAll && (
        <div className="text-center mt-8">
          <Button size="lg">
            Voir tous les articles
          </Button>
        </div>
      )}
    </section>
  );
}