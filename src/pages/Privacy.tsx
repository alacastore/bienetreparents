import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Politique de Confidentialité - bienetreparents.fr</title>
        <meta
          name="description"
          content="Politique de confidentialité du site bienetreparents.fr. Découvrez comment nous protégeons vos données personnelles."
        />
      </Helmet>

      <Navbar />

      <main className="container mx-auto px-4 py-24 prose prose-gray max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment le site <strong>bienetreparents.fr</strong> collecte, 
            utilise, conserve et protège vos données personnelles conformément aux réglementations en vigueur, notamment 
            le Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsable du traitement des données</h2>
          <p><strong>Nom du site :</strong> bienetreparents.fr</p>
          <p><strong>Propriétaire :</strong> [Nom ou raison sociale du propriétaire]</p>
          <p><strong>Adresse :</strong> [Adresse complète du responsable]</p>
          <p><strong>Contact :</strong> contact@bienetreparents.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Données collectées</h2>
          <p>Nous collectons les informations suivantes lorsque vous utilisez notre site :</p>
          
          <h3 className="text-xl font-semibold mt-4 mb-2">1. Informations fournies par l'utilisateur :</h3>
          <ul>
            <li>Nom</li>
            <li>Adresse e-mail</li>
            <li>Message envoyé via le formulaire de contact</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">2. Données collectées automatiquement :</h3>
          <ul>
            <li>Adresse IP</li>
            <li>Données de navigation (pages visitées, durée des visites, etc.)</li>
            <li>Cookies (voir section dédiée aux cookies ci-dessous)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Finalité des données collectées</h2>
          <p>Les données collectées sont utilisées pour les finalités suivantes :</p>

          <h3 className="text-xl font-semibold mt-4 mb-2">1. Gestion des demandes :</h3>
          <ul>
            <li>Répondre aux messages envoyés via le formulaire de contact.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">2. Amélioration de l'expérience utilisateur :</h3>
          <ul>
            <li>Analyser le trafic et les comportements des utilisateurs pour améliorer notre contenu.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4 mb-2">3. Envoi d'informations :</h3>
          <ul>
            <li>Envoyer des newsletters et des informations sur les nouvelles ressources disponibles (uniquement si vous vous êtes inscrit).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Durée de conservation des données</h2>
          <p>Vos données personnelles sont conservées uniquement pour la durée nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
          <ul>
            <li>Données de contact : conservées pendant 1 an après la dernière interaction.</li>
            <li>Données liées aux newsletters : conservées jusqu'à désinscription.</li>
            <li>Cookies : durée définie par le type de cookie (voir section Cookies).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Partage des données</h2>
          <p>Vos données personnelles ne sont pas vendues ou partagées avec des tiers, sauf dans les cas suivants :</p>
          <ul>
            <li><strong>Hébergement du site :</strong> Les données peuvent être stockées sur les serveurs de notre hébergeur [Nom de l'hébergeur].</li>
            <li><strong>Conformité légale :</strong> Si requis par la loi ou une autorité judiciaire.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ol>
            <li><strong>Droit d'accès :</strong> Vous pouvez demander à accéder aux données personnelles que nous détenons sur vous.</li>
            <li><strong>Droit de rectification :</strong> Vous pouvez demander à corriger ou mettre à jour vos données.</li>
            <li><strong>Droit de suppression :</strong> Vous pouvez demander la suppression de vos données, sauf si leur conservation est requise par la loi.</li>
            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer à l'utilisation de vos données à des fins spécifiques.</li>
            <li><strong>Droit à la portabilité :</strong> Vous pouvez demander que vos données soient transférées à un tiers.</li>
          </ol>
          <p className="mt-4">Pour exercer ces droits, contactez-nous à : contact@bienetreparents.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Gestion des cookies</h2>
          <p>Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Les types de cookies utilisés incluent :</p>
          <ul>
            <li><strong>Cookies fonctionnels :</strong> Nécessaires pour le bon fonctionnement du site.</li>
            <li><strong>Cookies analytiques :</strong> Permettent de mesurer l'audience et les performances du site.</li>
          </ul>
          <p className="mt-4">
            Vous pouvez gérer vos préférences en matière de cookies via la page{" "}
            <a href="/gestion-cookies" className="text-primary hover:underline">
              Gestion des cookies
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données personnelles 
            contre tout accès non autorisé, perte, destruction ou altération. Cela inclut :
          </p>
          <ul>
            <li>L'utilisation de protocoles de chiffrement (SSL).</li>
            <li>Des accès restreints aux données.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications de la politique de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. 
            Les modifications seront publiées sur cette page avec une date de mise à jour.
          </p>
          <p className="mt-4"><strong>Dernière mise à jour :</strong> [Date de mise à jour]</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute question ou préoccupation concernant cette politique de confidentialité, 
            contactez-nous à : <a href="mailto:contact@bienetreparents.fr" className="text-primary hover:underline">
              contact@bienetreparents.fr
            </a>
          </p>
        </section>

      </main>
    </div>
  );
};

export default Privacy;
