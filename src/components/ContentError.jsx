import React from "react";

const ContentError = () => {
  return (
    <div className="contentError">
      <h2>404</h2>
      <p>Oups! la page que vous demandez n'existe pas.</p>
      <a href="/">Retourner sur la page d'accueil</a>
    </div>
  );
};

export default ContentError;
