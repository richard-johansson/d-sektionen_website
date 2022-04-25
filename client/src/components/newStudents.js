import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function NewStudents() {
    return (
        <div>
            <img src={require("./newStudents.jpg")} className="img-fluid" alt="Nya studenter"></img>

            <div className="container">
                <h2 className="mt-3">Om programmen</h2>
                    <a>D-sektionen representerar idag tre stycken civilingenjörsutbildningar inom data/IT, 
                        en kandidatutbildning inom programmering och en masterutbildning inom programmering. 
                        Dessa är:
                    </a>
                    <ul>
                        <li>
                            <a>Civilingenjörsprogrammet i datateknik</a>
                        </li>
                        <li>
                            <a>Civilingenjörsprogrammet i informationsteknologi</a>
                        </li>
                        <li>
                            <a>Civilingenjörsprogrammet i mjukvaruteknik</a>
                        </li>
                        <li>
                            <a>Kandidatprogrammet i innovativ programmering</a>
                        </li>
                        <li>
                            <a>Masterprogrammet i Computer Science</a>
                        </li>
                    </ul> 
            </div>
        </div>
    );
}