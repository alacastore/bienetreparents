import { Button } from "@/components/ui/button";

interface BlogCategoriesProps {
  categories: string[];
}

export function BlogCategories({ categories }: BlogCategoriesProps) {
  return (
    <section className="mb-12">
      <h2 className="section-title">Catégories</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="secondary"
            className="flex-1 sm:flex-none"
          >
            {category}
          </Button>
        ))}
      </div>
    </section>
  );
}