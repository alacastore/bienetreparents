import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
      <img 
        src="/lovable-uploads/7288a34b-5e44-445a-b444-bc72cbc5f929.png" 
        alt="Logo Bien-Être des Parents" 
        className="h-8 w-auto"
      />
      <h1 className="text-xl font-heading font-bold text-primary">
        Bien-Être des Parents
      </h1>
    </Link>
  );
}