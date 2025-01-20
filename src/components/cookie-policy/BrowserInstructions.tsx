import React from "react";

const BrowserInstructions = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-semibold mb-4">
        Désactivation des cookies dans votre navigateur
      </h2>
      <p>
        Vous pouvez également configurer votre navigateur pour bloquer ou supprimer
        les cookies :
      </p>
      <ul>
        <li>
          <a
            href="https://support.google.com/chrome/answer/95647?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Chrome
          </a>
        </li>
        <li>
          <a
            href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a
            href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Safari
          </a>
        </li>
        <li>
          <a
            href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Microsoft Edge
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BrowserInstructions;