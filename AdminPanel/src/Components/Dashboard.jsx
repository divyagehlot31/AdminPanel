import React from "react";

const Dashboard = () => {
 

 
  return (
    <div className="p-4">
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Total Orders</h5>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Total Products</h5>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Revenue</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
