import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Member() {
    const { user, isAuthenticated } = useAuth0();
    let button, greeting;
    let content;
    if (!isAuthenticated)
    {
        content = 
            <div className="col-md-4 align-items-center">
                <div className="row">
                    <a>Du måste logga in för att få åtkomst till medlemssidan!</a>
                </div>
                <div className="row">
                    <LoginButton/>
                </div>
            </div>;
    }
    else
    {
        content = 
            <div className="row">
                <div className="col-md-4 border-right align-items-center text-center">        
                    <div className="row">
                        <img class="rounded-circle mt-5" style={{width:"150px"}} src={user?.picture}></img>
                    </div>
                    <div className="row">
                        <h4>{user?.name}</h4>
                        <a>{user?.email}</a>
                    </div>
                </div>
                <div className="col-md-8 border-right">
                    <div className="row">
                        <h2>Boka bilen</h2>
                        <a>lorem ipsum soret tala hobob mobar</a>
                        <Link to="/medlem/boka">
                            <button type="button" className="btn btn-secondary">Boka bil</button>
                        </Link>
                        <h2>Aktuella bokningar</h2>
                    </div>
                </div>
            </div>;
    }

    useEffect(() => {
        if (isAuthenticated) {
            fetch(`http://localhost:5001/medlem/boka/hamta_alla_med_email/${user.email}`, {
                method : "get",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            .then(response => {
                return response.json();
              })
            .then(data => {
                console.log(data)
            })
        }
    }, [isAuthenticated])

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            {content}
        </div>
    );
}