import React from "react";
import logofooter from "../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logofooter} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
