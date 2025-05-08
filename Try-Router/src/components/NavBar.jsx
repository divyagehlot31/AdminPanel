import React from "react";
import { NavLink, useMatch, useNavigate } from "react-router-dom";

//////////////////////
// usematch

function NavBar() {
  const match = useMatch("/dashboard");
  const navigate = useNavigate();

  const HandleLogout = () => {
    navigate("/");
  }

  return (
    <nav>
      {match ? (
        
          <button onClick={HandleLogout}> Logout</button>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </>
      )}
    </nav>
  );
}

export default NavBar;
