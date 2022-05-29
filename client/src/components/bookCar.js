import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import Bookings from "./scheduler";
import { useAuth0 } from "@auth0/auth0-react";


export default function BookCar() {
    const {isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/medlem')
        }
    },[isAuthenticated])
    
    if(!isAuthenticated) {
        return (<div></div>)
    }

    return (
        <div className="container">
            <h2>Bilbokning</h2>
            <a>Här kan du boka sektionsbilarna.</a>
            <Bookings user={user} />
        </div>
    );
}