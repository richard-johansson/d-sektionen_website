import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-md navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
        <img
            width = "56"
            src = {require("./D-logo-color-whiteBG.png")} >
        </img>
        Datateknologsektionen
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapsibleNavbar">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Sökande</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Företag</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Om sektionen</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Medlem</a>
          </li>
       </ul>
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Logga in</a>
        </li>
       </ul>
       </div>
     </nav>
   </div>
 );
}