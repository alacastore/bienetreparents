import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/nav";

interface MobileMenuProps {
  items: NavItem[];
  currentPath: string;
  onItemClick: () => void;
  onNewsletterClick: () => void;
}

export function MobileMenu({ items, currentPath, onItemClick, onNewsletterClick }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block px-3 py-2 nav-link font-medium ${
              currentPath === item.path ? "text-primary" : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={onItemClick}
          >
            {item.name}
          </Link>
        ))}
        <Button 
          variant="default" 
          className="w-full mt-4"
          onClick={() => {
            onNewsletterClick();
            onItemClick();
          }}
        >
          Newsletter
        </Button>
      </div>
    </div>
  );
}