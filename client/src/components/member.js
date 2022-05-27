import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Member() {
    const { user, isAuthenticated } = useAuth0();
    let button, greeting;
    if (isAuthenticated)
    {
        button = 
            <Link to="/medlem/boka">
                <button type="button" class="btn btn-secondary">Boka bil</button>
            </Link>;
        greeting = "Välkommen till medlemssidan " + user?.name;
    }
    else
    {
    button = <LoginButton/>;
    greeting = "Du måste logga in för att få åtkomst till medlemssidan!";
    }

    return (
        <div>
            <a>{greeting}</a>
            {button}   
        </div>
    );
   }