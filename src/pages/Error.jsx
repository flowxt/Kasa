import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ContentError from "../components/ContentError";

const Error = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <Navigation />
      </div>
      <div>
        <ContentError />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Error;
