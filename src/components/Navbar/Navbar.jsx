import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo">Traxpense</div>
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
