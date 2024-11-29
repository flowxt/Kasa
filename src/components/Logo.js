import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importés depuis la balise images sont accessibles dans public. Ex : Souvent il faut faire ./logo192.png pour que ca s'affiche */}
      <img src="./logo.png" alt="logo" />
    </div>
  );
};

export default Logo;
