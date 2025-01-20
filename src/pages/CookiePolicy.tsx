import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import CookieManagement from "@/components/CookieManagement";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politique des Cookies - Bien-Être des Parents</title>
        <meta name="description" content="Politique de gestion des cookies du site Bien-Être des Parents" />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 py-8 prose prose-slate max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Gestion des Cookies</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Qu'est-ce qu'un cookie ?</h2>
          <p>Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, smartphone, tablette) lorsque vous visitez un site web. Les cookies permettent au site de fonctionner efficacement, d'améliorer votre expérience utilisateur et de collecter des informations pour des analyses ou des personnalisations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Types de cookies utilisés sur Bien-Être des Parents</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p className="font-semibold">Cookies strictement nécessaires :</p>
              <ul className="list-disc pl-6">
                <li>Ces cookies sont indispensables pour le bon fonctionnement du site et ne peuvent pas être désactivés.</li>
                <li>Exemple : gestion de vos préférences de confidentialité.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Cookies de performance et d'analyse :</p>
              <ul className="list-disc pl-6">
                <li>Ces cookies nous aident à comprendre comment les visiteurs utilisent le site afin d'améliorer son fonctionnement.</li>
                <li>Exemple : analyse du trafic et des pages les plus consultées.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Cookies de fonctionnalité :</p>
              <ul className="list-disc pl-6">
                <li>Ces cookies permettent d'offrir une expérience utilisateur améliorée en mémorisant vos choix (langue, préférences, etc.).</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Cookies de ciblage ou publicitaires :</p>
              <ul className="list-disc pl-6">
                <li>Ces cookies collectent des informations sur vos habitudes de navigation pour vous proposer des publicités pertinentes.</li>
                <li>Note : Bien-Être des Parents ne partage pas ces données avec des tiers.</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Gérer vos préférences de cookies</h2>
          <p>Vous pouvez ajuster vos préférences de cookies à tout moment :</p>
          <div className="not-prose bg-accent rounded-lg p-6 my-6">
            <CookieManagement />
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Désactivation des cookies dans votre navigateur</h2>
          <p>Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies :</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4">
            <Button variant="outline" asChild>
              <a href="https://support.google.com/chrome/answer/95647?hl=fr" target="_blank" rel="noopener noreferrer">
                Google Chrome
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer">
                Mozilla Firefox
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                Safari
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                Microsoft Edge
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Durée de conservation des cookies</h2>
          <p>Les cookies ont une durée de vie limitée, définie en fonction de leur objectif :</p>
          <ul className="list-disc pl-6">
            <li>Cookies strictement nécessaires : durée de la session.</li>
            <li>Cookies de performance et de fonctionnalité : entre 6 mois et 1 an.</li>
            <li>Cookies de ciblage ou publicitaires : jusqu'à 13 mois (maximum recommandé par le RGPD).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Conséquences de la désactivation des cookies</h2>
          <p>Le refus ou la suppression de certains cookies peut altérer votre expérience sur notre site :</p>
          <ul className="list-disc pl-6">
            <li>Certaines fonctionnalités pourraient être indisponibles.</li>
            <li>Le contenu peut ne pas être adapté à vos préférences.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Mises à jour de cette politique</h2>
          <p>Nous nous réservons le droit de modifier la présente politique de gestion des cookies pour refléter les évolutions réglementaires ou technologiques. Toute mise à jour sera publiée sur cette page avec la date de modification.</p>
          <p className="font-semibold mt-4">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-heading font-semibold mb-4">Contact</h2>
          <p>Pour toute question ou demande concernant l'utilisation des cookies sur notre site, contactez-nous à : <a href="mailto:contact@bienetreparents.fr">contact@bienetreparents.fr</a></p>
        </section>
      </main>
    </>
  );
};

export default CookiePolicy;