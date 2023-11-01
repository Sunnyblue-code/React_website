import React from "react";
import logo from "./../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_logo">
        <img src={logo} alt="Website logo" />
      </div>
      <div className="nav_links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
