import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-secondary" onClick={() => logout({ returnTo: window.location.href })}>
      Logga ut
    </button>
  );
};

export default LogoutButton;