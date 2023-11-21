import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="logo">Traxpense</div>
      <div className="footer_details">
        <div className="terms">Terms of Services</div>
        <div className="privacy">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;