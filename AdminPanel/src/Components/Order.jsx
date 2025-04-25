import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("https://680b44a1d5075a76d98a73e7.mockapi.io/Order")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.customer} | {order.amount} | {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
