import React from "react";
import { Link } from "react-router-dom";

// imported CSS
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link to="/">
        <div className="logo">
          <img src="/images/traxpense_logo.png" alt="logo" />
        </div>
      </Link>
      <div className="user">
        <div className="user_image">
          <img src="/images/profile-image.png" alt="profile" />
        </div>
        <div className="user_name">Riyaz</div>
      </div>
    </div>
  );
};

export default Navbar;
