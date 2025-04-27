import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2>Dashboard</h2>
      <div className="row mt-4">
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Total Orders</h5>
            <p>120</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Total Products</h5>
            <p>80</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Total Users</h5>
            <p>50</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="card p-3">
            <h5>Revenue</h5>
            <p>Rs.5000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
