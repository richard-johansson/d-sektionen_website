import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Logging() {
    return (
        <div className="container">
            <h2>Loggbok</h2>
            <a>Här kan du logga körda kilometer med någon av sekionens bilar.</a>
            <ul>
                <li>
                    <a>Den som hyr bilen ansvarar för att kontrollera mätarställningen vid start och slut.</a>
                </li>
                <li>
                    <a>Om den som hyr bilen inte loggar körningen kan Datateknologsektionen kräva betalning
                    för hela den sträcka som saknas i loggboken, även om det är flera personer/utskott som
                    har hyrt bilen under den perioden.</a>
                </li>
            </ul> 
            <form className="mt-3 needs-validation" novalidate>
                <div className="mb-3">
                    <label htmlFor="start-distance" className="form-label">
                        Mätarställning vid start
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="start-distance" 
                        min="0"
                        placeholder="t.ex. 12345" 
                        required>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="stop-distance" className="form-label">
                        Mätarställning vid slut
                    </label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="stop-distance"
                        min="0"
                        placeholder="t.ex. 12356" 
                        required>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}