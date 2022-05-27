import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import Bookings from "./scheduler";
import { useAuth0 } from "@auth0/auth0-react";


export default function BookCar() {
    const {isAuthenticated, user } = useAuth0();
    const navigate = useNavigate();
    let email = ""

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/medlem')
        }
    },[isAuthenticated])
    
    console.log(isAuthenticated);
    if(!isAuthenticated) {
        return (<div></div>)
    }
    email = user.email;
    console.info("from parent: ",email)

    return (
        <div className="container">
            <h2>Bilbokning</h2>
            <a>Här kan du boka sektionsbilarna.</a>
            <Bookings email={email} />
        </div>
    );
}