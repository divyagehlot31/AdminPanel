import React,{useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Analytics from "./components/Analytics";
import Inventory from "./components/Inventory";
import {ThemeProvider} from "./components/GlobalContext";


function App() {
  // const { val } = useContext(GlobalContext);
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    if (activePage === "dashboard") return <Dashboard />;
    if (activePage === "inventory") return <Inventory />;
    if (activePage === "analytics") return <Analytics />;
    if (activePage === "orders") return <Orders />;
    return <h2 className="p-4">Page Not Found</h2>;
  };

  return (
    <ThemeProvider>
      <div className="d-flex">
        <Sidebar setActivePage={setActivePage} />
        <div className="flex-grow-1">
          <Navbar />
          {renderPage()}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
