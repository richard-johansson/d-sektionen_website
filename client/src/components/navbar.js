import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink, Link } from "react-router-dom";

import LoginButton from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logoutButton";

// Here, we display our Navbar
export default function Navbar() {
  // Logic to show either login or logout button
  const { user, isAuthenticated } = useAuth0();
  let button, greeting;
  if (isAuthenticated)
  {
    button = <LogoutButton />;
    greeting = "Välkommen " + user?.name + "!";
  }
  else
  {
    button = <LoginButton/>;
    greeting = "";
  }

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
              <a className="nav-link" href="#">Sektionen</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/medlem">Medlem</Link>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ms-auto">
            <div class="container pe-4">
              <div className="row">
                {greeting}
              </div>
              <div className="row">
                {button}
               </div>
            </div>
          </ul>
        </div>
        {/* <span className="navbar-nav">
        <li className="nav-item">
          <div className="row">
            {greeting}
          </div>
          <div className="row">
            {button}
          </div>
        </li>
        </span> */}
     </nav>
   </div>
 );
}
