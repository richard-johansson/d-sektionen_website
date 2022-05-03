import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Member() {
    return (
        <div>
            <a>Välkommen till medlemssidan!</a>
            <button type="button" class="btn btn-secondary">Boka bil</button>
        </div>
    );
   }