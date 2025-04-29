import React, { useState, useEffect } from 'react';
import { fetchOrders, fetchCategories } from '../Services/api';

const Analytics = () => {
  const [data, setData] = useState({
    orders: [],
    categories: [],
  });

  const { orders, categories } = data;

  useEffect(() => {
    const loadData = async () => {
      const ordersData = await fetchOrders();
      const categoriesData = await fetchCategories();

      setData({
        orders: ordersData,
        categories: categoriesData,
      });
    };

    loadData();
  }, []);

  const total = orders.length;
  const pending = orders.filter((e) => e.status === 101).length;
  const completed = orders.filter((e) => e.status === 300).length;

  if (!orders.length || !categories.length) {
    return <p className="p-4">Loading analytics...</p>;
  }
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Analytics Overview</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text fs-4">{total}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">Pending Orders</h5>
              <p className="card-text fs-4">{pending}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Completed Orders</h5>
              <p className="card-text fs-4">{completed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header bg-dark text-white">
          Product Categories ({categories.length})
        </div>
        <ul className="list-group list-group-flush">
          {categories.map((cat) => (
            <li key={cat.id} className="list-group-item">
              <strong>{cat.name}</strong>: {cat.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
