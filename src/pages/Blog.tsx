import { useState } from "react";
import { BlogHero } from "@/components/BlogHero";
import { BlogCategories } from "@/components/BlogCategories";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { RecentArticles } from "@/components/RecentArticles";
import { PopularArticles } from "@/components/PopularArticles";
import { useShare } from "@/hooks/useShare";
import { blogPosts, categories } from "@/data/blogData";
import Navbar from "@/components/Navbar";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const handleShare = useShare();
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <title>Blog Bien-Être des Parents | Conseils et Astuces pour Parents</title>
        <meta
          name="description"
          content="Explorez des articles pratiques pour aider les parents à gérer le stress, équilibrer leur vie et trouver du temps pour eux. Découvrez nos conseils maintenant !"
        />

        <BlogHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <BlogCategories 
          categories={categories} 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        <RecentArticles 
          posts={filteredPosts}
          onShare={handleShare}
        />

        <PopularArticles 
          posts={blogPosts}
          onShare={handleShare}
        />

        <section className="bg-accent rounded-lg p-8 mb-12">
          <NewsletterSignup />
        </section>
      </div>
    </div>
  );
}