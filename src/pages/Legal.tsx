import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mentions Légales - Bien-Être des Parents</title>
        <meta
          name="description"
          content="Mentions légales et informations juridiques de Bien-Être des Parents"
        />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-12 prose prose-slate max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Identification de l'éditeur du site</h2>
          <p><strong>Nom du site :</strong> Bien-Être des Parents</p>
          <p><strong>Adresse URL :</strong> www.bienetreparents.fr</p>
          <p><strong>Propriétaire :</strong> [Nom ou raison sociale du propriétaire]</p>
          <p><strong>Adresse :</strong> [Adresse complète de l'éditeur]</p>
          <p><strong>Adresse e-mail :</strong> contact@bienetreparents.fr</p>
          <p><strong>Numéro de téléphone :</strong> [Numéro de contact]</p>
          <p><strong>Forme juridique :</strong> [Forme juridique de l'entreprise ou mention "Particulier"]</p>
          <p><strong>Numéro SIRET :</strong> [Numéro d'immatriculation de l'entreprise, si applicable]</p>
          <p><strong>Directeur de la publication :</strong> [Nom du responsable de la publication]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hébergeur du site</h2>
          <p><strong>Nom :</strong> [Nom de l'hébergeur]</p>
          <p><strong>Adresse :</strong> [Adresse complète de l'hébergeur]</p>
          <p><strong>Site web :</strong> [URL du site de l'hébergeur]</p>
          <p><strong>Numéro de téléphone :</strong> [Numéro de contact de l'hébergeur]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, graphismes, icônes, etc.) 
            est protégé par le droit d'auteur et le droit de la propriété intellectuelle. Toute reproduction, 
            distribution, modification, adaptation, retransmission ou publication, même partielle, de ces éléments 
            est strictement interdite sans l'accord écrit préalable du propriétaire du site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
          <p>
            Les informations fournies sur ce site sont destinées à des fins informatives et générales. 
            Bien-Être des Parents s'efforce d'assurer l'exactitude des informations publiées, mais ne 
            saurait être tenu responsable des erreurs ou omissions.
          </p>
          <p>
            L'utilisation des informations présentes sur ce site se fait sous la responsabilité exclusive 
            de l'utilisateur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
          <p><strong>Données collectées :</strong> Les informations collectées via les formulaires (nom, 
          adresse e-mail, etc.) sont destinées exclusivement à la gestion de votre demande ou inscription 
          à la newsletter.</p>
          <p><strong>Responsable du traitement :</strong> [Nom ou raison sociale du responsable]</p>
          <p><strong>Droits des utilisateurs :</strong> Vous disposez d'un droit d'accès, de rectification, 
          et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à l'adresse 
          suivante : contact@bienetreparents.fr</p>
          <p><strong>Cookies :</strong> Ce site utilise des cookies pour améliorer l'expérience utilisateur 
          et analyser le trafic. Vous pouvez modifier vos préférences en matière de cookies via la page 
          « Gestion des cookies ».</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Liens hypertextes</h2>
          <p>
            Le site Bien-Être des Parents peut contenir des liens vers d'autres sites web. Nous déclinons 
            toute responsabilité quant au contenu de ces sites externes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications</h2>
          <p>
            Bien-Être des Parents se réserve le droit de modifier ou de mettre à jour les présentes mentions 
            légales à tout moment. Nous vous invitons à consulter cette page régulièrement.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Dernière mise à jour :</strong> [Date de la dernière mise à jour des mentions légales]
        </p>
      </main>
    </div>
  );
};

export default Legal;