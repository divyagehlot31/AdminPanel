import React, { useEffect, useState, useMemo, useRef, useId } from "react";
import { fetchOrders } from "../Services/api";

const Orders = () => {
  const [state, setState] = useState({
    orders: [],
    loading: true,
    searchTerm: "",
    sortOrder: "asc",
  });

  const { orders, loading, searchTerm, sortOrder } = state;

  const searchInputRef = useRef(null);

  const searchInputId = useId();
  console.log("Search input id", searchInputId);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchOrders();
        setState((prev) => ({ ...prev, orders: data }));
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    loadOrders();

    // searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!loading) {
      searchInputRef.current?.focus();
    }
  }, [loading]);

  //code status
  const getStatusLabel = (status) => {
    if ([101, 102, 103, 200, 201].includes(status)) {
      return "Pending";
    } else if ([300, 305, 308].includes(status)) {
      return "Completed";
    } else if ([400, 415, 418, 424, 426, 451].includes(status)) {
      return "Cancelled";
    } else if ([500, 502, 507].includes(status)) {
      return "Refunded";
    } else {
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
    const filtered = orders.filter((order) =>
      order.customer?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date);
    });

    return sorted;
  }, [orders, searchTerm, sortOrder]);

  const handleSearch = (e) => {
    setState((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  if (loading) {
    return <div className="p-4">Loading orders...</div>;
  }

  const handleSortToggle = () => {
    setState((prev) => ({
      ...prev,
      sortOrder: prev.sortOrder === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="p-4">
      <h2>Orders</h2>
      <label htmlFor={searchInputId} className="form-label"></label>
      <input
        id={searchInputId}
        type="text"
        placeholder="Search by Customer Name"
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleSearch}
        ref={searchInputRef}
      />

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>
              Date
              <button
                className="btn btn-sm btn-outline-primary ms-2"
                onClick={handleSortToggle}
              >
                {state.sortOrder === "asc" ? "↓" :"↑" }
              </button>
            </th>
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
              <td>Rs.{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
