import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function HomePage() {
    return (
        <div>
            <img src={require("./homeimg.jpg")} class="img-fluid" alt=":("></img>
        </div>
    );
   }