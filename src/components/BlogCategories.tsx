import { Button } from "@/components/ui/button";

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export function BlogCategories({ categories, selectedCategory, onCategorySelect }: BlogCategoriesProps) {
  return (
    <section className="mb-12">
      <h2 className="section-title">Catégories</h2>
      <div className="flex flex-wrap gap-4">
        <Button
          key="all"
          variant={selectedCategory === null ? "default" : "secondary"}
          className="flex-1 sm:flex-none"
          onClick={() => onCategorySelect(null)}
        >
          Tous les articles
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="flex-1 sm:flex-none"
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
}