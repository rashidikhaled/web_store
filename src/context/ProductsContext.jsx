import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

// import api services function
import { getProducts } from "../api/apiService/apiService";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const _products = await getProducts();
      setProducts(_products);
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductsProvider;
export { useProducts };
