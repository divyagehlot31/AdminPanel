import React, { useEffect, useReducer } from "react";
import { fetchOrders, fetchInventory } from "../Services/api";

const initialState = {
  orders: [],
  inventory: [],
  loading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        orders: action.orders,
        inventory: action.inventory,
        loading: false,
      };
    default:
      return state;
  }
}
 function Dashboard() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const ordersData = await fetchOrders();
      const inventoryData = await fetchInventory();
      dispatch({
        type: "SET_DATA",
        orders: ordersData,
        inventory: inventoryData,
      });
    };

    fetchData();
  }, []);

  if (state.loading) return <p className="text-center mt-4">Loading...</p>;

  const lowStockItems = state.inventory.filter(item => item.stock < 10);

  return (
    <div className="container mt-4">
      <h2 className="text-primary">Dashboard</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5>Total Orders</h5>
              <p className="fs-4">{state.orders.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5>Total Amount</h5>
              <p className="fs-4">
                Rs.{state.orders.reduce((sum, o) => sum + parseFloat(o.amount), 0).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* inventory */}
      <div className="mt-4">
        <h4 className="text-danger">Low Stock Items (Less than 10)</h4>
        {lowStockItems.length === 0 ? (
          <p>All inventory items are sufficiently stocked.</p>
        ) : (
          <ul className="list-group">
            {lowStockItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.name} ({item.category})</span>
                <span className="badge bg-warning text-dark">Stock: {item.stock}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard