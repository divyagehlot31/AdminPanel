import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Analytics from "./components/Analytics";
import Inventory from "./components/Inventory";
import { ThemeProvider } from "./components/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const { val } = useContext(GlobalContext);
  // const [activePage, setActivePage] = useState("dashboard");

  // const renderPage = () => {
  //   if (activePage === "dashboard") return <Dashboard />;
  //   if (activePage === "inventory") return <Inventory />;
  //   if (activePage === "analytics") return <Analytics />;
  //   if (activePage === "orders") return <Orders />;
  //   return <h2 className="p-4">Page Not Found</h2>;
  // };

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="d-flex">
          {/* <Sidebar setActivePage={setActivePage} /> */}
          <Sidebar/>
          <div className="flex-grow-1">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/orders" element={<Orders />} />
              <Route
                path="*"
                element={<h2 className="p-4">Page Not Found</h2>}
              />
            </Routes>
            {/* {renderPage()} */}
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
