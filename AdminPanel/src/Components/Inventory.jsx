import React, { useState, useEffect, useMemo, useRef } from "react";
import { fetchInventory } from "../Services/api";

const Inventory = () => {
  const [state, setState] = useState({
    inventory: [],
    loading: true,
    searchTerm: "",
  });

  const { inventory, loading, searchTerm } = state;

  const searchInputRef = useRef(null);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        const data = await fetchInventory();
        setState((prev) => ({ ...prev, inventory: data }));
      } catch (error) {
        console.error("Failed to fetch inventory:", error);
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    };

    loadInventory();

    // searchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!loading) {
      console.log(searchInputRef.current);
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 1000);
    }
  }, [loading]);
  
  useEffect(()=>{
    
  })

  const filteredInventory = useMemo(() => {
    return inventory.filter((item) =>
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [inventory, searchTerm]);

  const handleSearch = (e) => {
    setState((prev) => ({
      ...prev,
      searchTerm: e.target.value,
    }));
  };

  if (loading) {
    return <div className="p-4">Loading inventory...</div>;
  }

  return (
    <div className="p-4">
      <h2>Inventory</h2>

      <input
        type="text"
        placeholder="Search by Item Name"
        className="form-control mb-3"
        value={searchTerm}
        onChange={handleSearch}
        ref={searchInputRef}
      />

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Supplier</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {filteredInventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.supplier}</td>
              <td>{item.category}</td>
              <td>Rs.{item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
