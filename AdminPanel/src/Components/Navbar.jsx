import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);

  const handleToggle = () => {
    toggleTheme();
    console.log(`Theme changed to: ${theme === "light" ? "dark" : "light"}`);
    alert(`Theme changed to: ${theme === "light" ? "dark" : "light"}`);
  };

  return (
    <nav className="navbar px-3 d-flex justify-content-between">
      <button 
        className="btn" 
        onClick={handleToggle}
        style={{
          fontSize: "30px",
          border: "none",
          cursor: "pointer"
        }}
      >
        {theme === "light" ? "🌞" : "🌜"}
      </button>

      <div
        className="rounded-circle bg-secondary"
        style={{ width: "40px", height: "40px" }}
      ></div>
    </nav>
  );
};

export default Navbar;
