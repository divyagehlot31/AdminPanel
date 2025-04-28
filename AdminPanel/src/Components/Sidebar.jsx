import React, {useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Sidebar = ({ setActivePage, activePage }) => {
  const [showSidebarButton, setShowSidebarButton] = useState(true);

  return (
    <>
      {showSidebarButton && (
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSidebar"
          aria-controls="offcanvasSidebar"
          style={{
            position: "fixed",   
            top: "20px",         
            left: "20px",        
            zIndex: "1",      
            width: "40px", 
            height: "40px",
            padding: "0",
            fontSize: "20px",
          }}
        >
          ☰ 
        </button>
      )}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSidebar"
        aria-labelledby="offcanvasSidebarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <button className="nav-link" onClick={() => setActivePage("dashboard")}>Dashboard</button>
            </li>
           
            <li className="nav-item mb-3">
              <button className="nav-link" onClick={() => setActivePage("inventory")}>Inventory</button>
            </li>
            <li className="nav-item mb-3">
              <button className="nav-link" onClick={() => setActivePage("orders")}>Orders</button>
            </li>
            <li className="nav-item mb-3">
              <button className="nav-link" onClick={() => setActivePage("analytics")}>Analytics</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
