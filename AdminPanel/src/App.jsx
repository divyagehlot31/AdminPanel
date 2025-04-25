import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Orders from './Components/Order';
import Categories from './Components/Categories';
import Dashboard from './Components/Dashboard';

function App() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const renderContent = () => {
    switch (selectedTab) {
      case "orders":
        return <Orders />;
      case "categories":
        return <Categories />;
      case "dashboard":
      default:
        return <Dashboard/>;
    }
  };

  return (
    <div>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div style={{ padding: '20px' }}>{renderContent()}</div>
    </div>
  );
}

export default App;
