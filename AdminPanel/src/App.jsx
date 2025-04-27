import React,{useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Category from "./components/Category";
import Orders from "./components/Orders";
import Analytics from "./components/Analytics";

import Inventory from "./components/Inventory";
import { GlobalProvider} from "./components/GlobalContext";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    if (activePage === "dashboard") return <Dashboard />;
    if (activePage === "category") return <Category />;
    if (activePage === "inventory") return <Inventory />;
    if (activePage === "analytics") return <Analytics />;
    if (activePage === "orders") return <Orders />;
    return <h2 className="p-4">Page Not Found</h2>;
  };

  return (
    <GlobalProvider>
      <div className="d-flex">
        <Sidebar setActivePage={setActivePage} />
        <div className="flex-grow-1">
          <Navbar />
          {renderPage()}
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
