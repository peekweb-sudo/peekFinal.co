import React from "react";
import aset from "../../Assetprop/art.js"
import { Link } from "react-router-dom";
import "./nav.css"
function Navigation() {
  return (
    <>
      <header>
        <nav className="container">
            <img src={aset.logo} alt="logo" />
            <ul>
                <li><a href="#Home">Home</a></li>
                 <li><a href="#About">About</a></li>
                <li><a href="#Portfolio">PortFolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <button  className="btn"><Link to="/signin">SignIn</Link></button>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
