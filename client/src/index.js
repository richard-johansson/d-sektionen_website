import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Auth0Provider
        domain="dev-ggkqhg-q.eu.auth0.com"
        clientId="FvqbmcqiFR7DbjSlgHVnKZrYtXlGCbGC"
        redirectUri={window.location.href}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);