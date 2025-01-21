import { BlogSection } from "@/components/BlogSection";
import { BlogPost } from "@/types/blog";

interface RecentArticlesProps {
  posts: BlogPost[];
  onShare: () => void;
}

export function RecentArticles({ posts, onShare }: RecentArticlesProps) {
  return (
    <BlogSection
      title="Articles récents"
      posts={posts}
      onShare={onShare}
      showViewAll={true}
    />
  );
}