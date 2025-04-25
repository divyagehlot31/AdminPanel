import React from "react";
import "./Navbar.css"; //

const Navbar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="navbar">
      <button
        className={`nav-btn ${selectedTab === "dashboard" ? "active" : ""}`}
        onClick={() => setSelectedTab("dashboard")}
      >
        Dashboard
      </button>
      <button
        className={`nav-btn ${selectedTab === "orders" ? "active" : ""}`}
        onClick={() => setSelectedTab("orders")}
      >
        Orders
      </button>
      <button
        className={`nav-btn ${selectedTab === "categories" ? "active" : ""}`}
        onClick={() => setSelectedTab("categories")}
      >
        Categories
      </button>
    </div>
  );
};

export default Navbar;
