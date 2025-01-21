import { BlogSection } from "@/components/BlogSection";
import { BlogPost } from "@/types/blog";

interface PopularArticlesProps {
  posts: BlogPost[];
  onShare: () => void;
}

export function PopularArticles({ posts, onShare }: PopularArticlesProps) {
  const popularPosts = posts.filter(post => post.popular);

  return (
    <BlogSection
      title="Articles populaires"
      posts={popularPosts}
      onShare={onShare}
    />
  );
}