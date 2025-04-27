import React, { useEffect, useState, useMemo } from "react";
import { fetchOrders } from "../Services/api";

const Orders = () => {
  const [state, setState] = useState({
    orders: [],
    loading: true,
    searchTerm: "",
  });

  const { orders, loading, searchTerm } = state;

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setState(prev => ({ ...prev, orders: data }));
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setState(prev => ({ ...prev, loading: false }));
      }
    };

    loadOrders();
  }, []);

  //code status
  const getStatusLabel = (status) => {

    if ([101, 102, 103, 200, 201].includes(status)) {
      return "Pending";
    }
    else if ([300, 305, 308].includes(status)) {
      return "Completed";
    }
    else if ([400, 415, 418, 424, 426, 451].includes(status)) {
      return "Cancelled";
    }
    else if ([500, 502, 507].includes(status)) {
      return "Refunded";
    }
    else {
      return "Pending";
    }
  };


//status labele color badge
  const getStatusClass = (status) => {
    const statusLabel = getStatusLabel(status);
    
    switch (statusLabel) {
      case "Completed":
        return "bg-success";
      case "Pending":
        return "bg-warning";
      case "Cancelled":
        return "bg-danger";
      case "Refunded":
        return "bg-info";
      default:
        return "bg-secondary";
    }
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      order.customer?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [orders, searchTerm]);

  const handleSearch = (e) => {
    setState(prev => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  if (loading) {
    return <div className="p-4">Loading orders...</div>;
  }

  return (
    <div className="p-4">
      <h2>Orders</h2>

      <input
        type="text"
        placeholder="Search by Customer Name"
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleSearch}
      />

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>
                <span className={`badge ${getStatusClass(order.status)}`}>
                  {getStatusLabel(order.status)}
                </span>
              </td>
              <td>{new Date(order.date).toLocaleDateString()}</td>
              <td>${order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;