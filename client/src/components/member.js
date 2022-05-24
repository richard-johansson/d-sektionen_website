import React from "react";
import { Link } from "react-router-dom";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Member() {
    return (
        <div>
            <a>Välkommen till medlemssidan!</a>
            <Link to="/medlem/boka">
                <button type="button" class="btn btn-secondary">Boka bil</button>
            </Link>
        </div>
    );
   }