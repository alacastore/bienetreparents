import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import CookieManagement from "@/components/CookieManagement";
import CookieIntroduction from "@/components/cookie-policy/CookieIntroduction";
import CookieTypes from "@/components/cookie-policy/CookieTypes";
import BrowserInstructions from "@/components/cookie-policy/BrowserInstructions";
import CookieRetention from "@/components/cookie-policy/CookieRetention";
import PolicyUpdate from "@/components/cookie-policy/PolicyUpdate";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Gestion des Cookies - Bien-Être des Parents</title>
        <meta
          name="description"
          content="Politique et gestion des cookies du site Bien-Être des Parents"
        />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Gestion des Cookies
        </h1>

        <CookieIntroduction />
        <CookieTypes />

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">
            Gérer vos préférences de cookies
          </h2>
          <p className="mb-6">
            Vous pouvez ajuster vos préférences de cookies à tout moment en
            utilisant le panneau de configuration ci-dessous :
          </p>
          <div className="not-prose bg-accent rounded-lg p-6">
            <CookieManagement />
          </div>
        </section>

        <BrowserInstructions />
        <CookieRetention />
        <PolicyUpdate />
      </main>
    </>
  );
};

export default CookiePolicy;