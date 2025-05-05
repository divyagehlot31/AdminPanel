import React, { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

const Navbar = () => {
  const { val, setVal } = useContext(GlobalContext);

const handleTheme=()=>{
  console.log("theme changed" , val ? "🌞" : "🌜"
  )

  setVal(!val)
}

  return (
    <nav className="navbar px-3 d-flex justify-content-between">
      <button 
        className="btn"
        onClick={handleTheme}
        style={{
          fontSize: "30px",
          border: "none",
          marginLeft:"auto",
          cursor: "pointer"
        }}
      >
        {val ? "🌞" : "🌜"}
      </button>

      <div
        className="rounded-circle bg-secondary"
        style={{ width: "40px", height: "40px" }}
      ></div>
    </nav>
  );
};

export default Navbar;
