import React from "react";

const PolicyUpdate = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Mises à jour de cette politique
      </h2>
      <p>
        Nous nous réservons le droit de modifier la présente politique de gestion
        des cookies pour refléter les évolutions réglementaires ou technologiques.
        Toute mise à jour sera publiée sur cette page avec la date de
        modification.
      </p>
      <p className="mt-4">
        <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString()}
      </p>
      <p className="mt-4">
        Pour toute question ou demande concernant l'utilisation des cookies sur
        notre site, contactez-nous à :{" "}
        <a
          href="mailto:contact@bienetreparents.fr"
          className="text-primary hover:underline"
        >
          contact@bienetreparents.fr
        </a>
      </p>
    </section>
  );
};

export default PolicyUpdate;