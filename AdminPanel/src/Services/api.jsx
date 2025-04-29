//order
export const fetchOrders = async () => {
    const response = await fetch("https://680b44a1d5075a76d98a73e7.mockapi.io/Order");
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    return await response.json();
  };
  
  // category
  export const fetchCategories = async () => {
    const response = await fetch("https://680b44a1d5075a76d98a73e7.mockapi.io/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return await response.json();
  };
  

  // inventory
export const fetchInventory = async () => {
  const response = await fetch("https://680f2c7167c5abddd1941be3.mockapi.io/Inventory");
  if (!response.ok) {
    throw new Error("Failed to fetch inventory");
  }
  return await response.json();
};

  