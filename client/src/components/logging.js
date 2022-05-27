import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Logging() {
    const {isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect( () => {
        if(!isAuthenticated) {
           return navigate('/medlem');
        }
    }, [])

    return (
        <div className="container">
            <h2>Loggbok</h2>
            <a>Här kan du logga körda kilometer med någon av sekionens bilar.</a>
        </div>
    );
}