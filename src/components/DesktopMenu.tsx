import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/types/nav";

interface DesktopMenuProps {
  items: NavItem[];
  currentPath: string;
  onNewsletterClick: () => void;
}

export function DesktopMenu({ items, currentPath, onNewsletterClick }: DesktopMenuProps) {
  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {items.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`nav-link font-medium ${
            currentPath === item.path ? "text-primary" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <Button 
        variant="default" 
        className="ml-4"
        onClick={onNewsletterClick}
      >
        Newsletter
      </Button>
    </div>
  );
}