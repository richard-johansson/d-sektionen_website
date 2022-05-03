import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import Schedule from "./scheduler";

export default function BookCar() {
    return (
        <div className="container">
            <h2>Bilbokning</h2>
            <a>Här kan du boka sektionsbilarna.</a>
            <Schedule />
        </div>
    );
}