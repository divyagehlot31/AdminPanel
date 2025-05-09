import React from "react";
import { NavLink, useMatch, useMatches, useNavigate } from "react-router-dom";

//////////////////////
// usematch

function NavBar() {
  const match = useMatch("/dashboard");
  const matches = useMatches();
  const navigate = useNavigate();

  const data = matches.find((m) => m.pathname === "/dashboard");
  const user = data?.data.user;

  const HandleLogout = () => {
    navigate("/");
  };

  return (
    <nav>
      {match && user ? (
        <>
          <button onClick={HandleLogout}> Logout</button>
          <br />
          <span style={{ color: "white" }}>Welcome {user} </span>
        </>
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
