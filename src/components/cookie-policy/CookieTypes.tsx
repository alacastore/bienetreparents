import React from "react";

const CookieTypes = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Types de cookies utilisés sur Bien-Être des Parents
      </h2>
      <ol className="list-decimal pl-6">
        <li className="mb-4">
          <p>
            <strong>Cookies strictement nécessaires</strong> :
          </p>
          <ul className="list-disc pl-6">
            <li>
              Ces cookies sont indispensables pour le bon fonctionnement du site et
              ne peuvent pas être désactivés.
            </li>
            <li>Exemple : gestion de vos préférences de confidentialité.</li>
          </ul>
        </li>
        <li className="mb-4">
          <p>
            <strong>Cookies de performance et d'analyse</strong> :
          </p>
          <ul className="list-disc pl-6">
            <li>
              Ces cookies nous aident à comprendre comment les visiteurs utilisent
              le site afin d'améliorer son fonctionnement.
            </li>
            <li>Exemple : analyse du trafic et des pages les plus consultées.</li>
          </ul>
        </li>
        <li className="mb-4">
          <p>
            <strong>Cookies de fonctionnalité</strong> :
          </p>
          <ul className="list-disc pl-6">
            <li>
              Ces cookies permettent d'offrir une expérience utilisateur améliorée
              en mémorisant vos choix (langue, préférences, etc.).
            </li>
          </ul>
        </li>
        <li className="mb-4">
          <p>
            <strong>Cookies de ciblage ou publicitaires</strong> :
          </p>
          <ul className="list-disc pl-6">
            <li>
              Ces cookies collectent des informations sur vos habitudes de
              navigation pour vous proposer des publicités pertinentes.
            </li>
            <li>
              Note : Bien-Être des Parents ne partage pas ces données avec des
              tiers.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  );
};

export default CookieTypes;