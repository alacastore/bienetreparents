import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-[#f4f4f4] text-[#555] py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Copyright */}
          <div className="text-sm">
            © 2025 Bien-Être des Parents. Tous droits réservés.
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
            <Link
              to="/mentions-legales"
              className="hover:underline transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              to="/politique-de-confidentialite"
              className="hover:underline transition-colors duration-200"
            >
              Politique de confidentialité
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              to="/gestion-cookies"
              className="hover:underline transition-colors duration-200"
            >
              Gestion des cookies
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              to="/conditions-generales"
              className="hover:underline transition-colors duration-200"
            >
              CGU
            </Link>
          </div>

          {/* Contact */}
          <div className="text-sm">
            Contact :{" "}
            <a
              href="mailto:contact@bienetreparents.fr"
              className="hover:underline transition-colors duration-200"
            >
              contact@bienetreparents.fr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;