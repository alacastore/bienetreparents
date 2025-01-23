import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { Logo } from "@/components/Logo";
import { MobileMenu } from "@/components/MobileMenu";
import { DesktopMenu } from "@/components/DesktopMenu";
import { NavItem } from "@/types/nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/a-propos" },
    { name: "Blog", path: "/blog" },
    { name: "Ressources", path: "/ressources" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNewsletterSuccess = () => {
    setShowNewsletter(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-[9999]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Logo />

            <DesktopMenu 
              items={navItems}
              currentPath={location.pathname}
              onNewsletterClick={() => setShowNewsletter(true)}
            />

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-600"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <MobileMenu
            items={navItems}
            currentPath={location.pathname}
            onItemClick={() => setIsOpen(false)}
            onNewsletterClick={() => setShowNewsletter(true)}
          />
        )}
      </nav>

      <Dialog open={showNewsletter} onOpenChange={setShowNewsletter}>
        <DialogContent className="sm:max-w-[500px]">
          <NewsletterSignup onSuccess={handleNewsletterSuccess} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;