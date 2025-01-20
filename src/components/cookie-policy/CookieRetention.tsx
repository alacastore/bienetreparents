import React from "react";

const CookieRetention = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Durée de conservation des cookies
      </h2>
      <p>
        Les cookies ont une durée de vie limitée, définie en fonction de leur
        objectif :
      </p>
      <ul>
        <li>Cookies strictement nécessaires : durée de la session.</li>
        <li>
          Cookies de performance et de fonctionnalité : entre 6 mois et 1 an.
        </li>
        <li>
          Cookies de ciblage ou publicitaires : jusqu'à 13 mois (maximum
          recommandé par le RGPD).
        </li>
      </ul>
    </section>
  );
};

export default CookieRetention;