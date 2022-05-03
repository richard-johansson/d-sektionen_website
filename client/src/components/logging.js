import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import Schedule from "./scheduler";

export default function Logging() {
    return (
        <div className="container">
            <h2>Loggbok</h2>
            <a>Här kan du logga körda kilometer med någon av sekionens bilar.</a>

            <Schedule />
        </div>
    );
}