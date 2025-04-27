import React from "react";

const Sidebar = ({ setActivePage }) => {
  
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "300px", height: "100vh" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Admin</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <button
            className="nav-link text-white btn btn-dark text-start w-100"
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white btn btn-dark text-start w-100"
            onClick={() => setActivePage("category")}
          >
            Category
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white btn btn-dark text-start w-100"
            onClick={() => setActivePage("inventory")}
          >
            Inventory
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white btn btn-dark text-start w-100"
            onClick={() => setActivePage("orders")}
          >
            Orders
          </button>
        </li>
        <li>
          <button
            className="nav-link text-white btn btn-dark text-start w-100"
            onClick={() => setActivePage("analytics")}
          >
            Analytics
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
