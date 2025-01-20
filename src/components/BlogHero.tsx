import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function BlogHero({ searchQuery, setSearchQuery }: BlogHeroProps) {
  return (
    <section className="text-center mb-12">
      <h1 className="hero-title mb-4">
        Découvrez nos conseils pour une parentalité épanouie
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Des astuces concrètes, des méthodes éprouvées et des outils pour aider les parents à retrouver sérénité et équilibre au quotidien.
      </p>
      
      <div className="max-w-xl mx-auto flex gap-2">
        <Input
          type="search"
          placeholder="Rechercher un article..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}