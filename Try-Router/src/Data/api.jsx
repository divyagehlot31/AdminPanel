

export const fetchApi = async () => {
  try {
    const res = await fetch("https://680f2c7167c5abddd1941be3.mockapi.io/Inventory");
    const data = await res.json();
    return data;
    
  }catch (error) {
    console.log(error.message);
  }
}

  