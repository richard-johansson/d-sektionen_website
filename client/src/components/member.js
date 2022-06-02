import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";
import { useAuth0 } from "@auth0/auth0-react";
import MemberBookings from "./memberBookings";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

export default function Member() {
    const { user, isAuthenticated } = useAuth0();
    let content;

    if (!isAuthenticated)
    {
        content = 
            <div className="col align-items-center">
                <div className="row">
                    <a>Du måste logga in för att få åtkomst till medlemssidan!</a>
                </div>
                <div className="row-md-2">
                    <LoginButton/>
                </div>
            </div>;
    }
    else
    {
        content = 
            <div className="row">
                <div className="col-md-3 border-right text-center">        
                    <div className="row">
                        <img className="rounded-circle m-auto align-items-center" style={{width:"150px"}} src={user?.picture}></img>
                    </div>
                    <div className="row">
                        <h4 className="text-break">{user?.name}</h4>
                        <a className="text-break">{user?.email}</a>
                    </div>
                </div>
                <div className="col-md-9 border-right">
                    <div className="row">
                        <h2>Medlemstjänster</h2>
                        <a>Välkommen till D-sektionens medlemssida {user?.given_name}. Nedan finns våra tjänster för medlemmar.</a>
                        <Link to="/medlem/boka">
                            <button type="button" className="btn btn-secondary">Boka bil</button>
                        </Link>
                        <h2>Aktuella bokningar</h2>
                        <MemberBookings email={user.email}/>
                    </div>
                </div>
            </div>;
    }

    return (
        <div className="container rounded bg-white mt-5 mb-5">
            {content}
        </div>
    );
}