import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Conditions Générales d'Utilisation - Bien-Être des Parents</title>
        <meta
          name="description"
          content="Conditions générales d'utilisation du site Bien-Être des Parents. Découvrez nos termes et conditions d'utilisation."
        />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 prose prose-gray max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales d'Utilisation (CGU)</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Préambule</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site <strong>Bien-Être des Parents</strong> (ci-après "le Site"). 
            En accédant au Site, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces termes, vous êtes invité à ne pas utiliser le Site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
          <p><strong>Nom du site :</strong> Bien-Être des Parents</p>
          <p><strong>Propriétaire :</strong> [Nom ou raison sociale du propriétaire]</p>
          <p><strong>Adresse e-mail :</strong> contact@bienetreparents.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description des services</h2>
          <p>Le Site propose :</p>
          <ul>
            <li>Un blog contenant des articles informatifs sur le bien-être parental.</li>
            <li>Des guides pratiques téléchargeables destinés à accompagner les parents dans leur quotidien.</li>
            <li>Une newsletter contenant des conseils et des astuces exclusifs.</li>
          </ul>
          <p>L'utilisation des contenus est soumise au respect des présentes CGU.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
          <p>
            Tous les contenus présents sur le Site (textes, images, vidéos, infographies, guides téléchargeables, etc.) 
            sont protégés par les lois relatives à la propriété intellectuelle.
          </p>
          <p><strong>Interdictions :</strong></p>
          <ul>
            <li>Toute reproduction, modification, diffusion, ou exploitation des contenus sans autorisation préalable écrite est strictement interdite.</li>
            <li>L'utilisation des contenus à des fins commerciales est formellement prohibée.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Utilisation du Site</h2>
          <h3 className="text-xl font-semibold mb-3">4.1 Comportement des utilisateurs</h3>
          <ul>
            <li>Vous vous engagez à utiliser le Site de manière responsable et dans le respect des lois et réglementations en vigueur.</li>
            <li>Vous ne devez pas :
              <ul>
                <li>Accéder ou tenter d'accéder au Site par des moyens illégaux.</li>
                <li>Diffuser des informations fausses, diffamatoires ou nuisibles via les formulaires de contact ou les commentaires.</li>
              </ul>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-4">4.2 Téléchargement de guides</h3>
          <ul>
            <li>Les guides proposés sont gratuits et destinés à un usage strictement personnel.</li>
            <li>Toute redistribution ou revente des guides est interdite.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
          <h3 className="text-xl font-semibold mb-3">5.1 Limitation de responsabilité</h3>
          <ul>
            <li>Le Site fournit des informations générales à titre informatif. Il ne constitue en aucun cas un substitut à des conseils professionnels (médicaux, juridiques, etc.).</li>
            <li>Bien-Être des Parents ne peut être tenu responsable des éventuels dommages directs ou indirects résultant de l'utilisation du Site ou des contenus proposés.</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Disponibilité du Site</h3>
          <ul>
            <li>Nous mettons tout en œuvre pour garantir l'accessibilité du Site, mais nous ne pouvons garantir une disponibilité continue.</li>
            <li>Nous nous réservons le droit de suspendre temporairement ou définitivement le Site pour maintenance ou mise à jour.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Protection des données personnelles</h2>
          <p>
            Vos données personnelles sont collectées et traitées conformément à notre <Link to="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
          <p>
            L'utilisation des cookies sur le Site est décrite dans notre <Link to="/gestion-cookies" className="text-primary hover:underline">Politique de Gestion des Cookies</Link>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Modification des CGU</h2>
          <p>
            Bien-Être des Parents se réserve le droit de modifier les présentes CGU à tout moment. 
            Les modifications seront publiées sur cette page et entreront en vigueur dès leur mise en ligne.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p>
            Pour toute question relative aux présentes CGU, vous pouvez nous contacter à l'adresse suivante : 
            <a href="mailto:contact@bienetreparents.fr" className="text-primary hover:underline ml-1">
              contact@bienetreparents.fr
            </a>
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-8">
          <strong>Dernière mise à jour :</strong> [Date de mise à jour]
        </p>
      </main>
    </div>
  );
};

export default Legal;
