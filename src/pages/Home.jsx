import React from "react";
import { useProducts } from "../context/ProductsContext";

const Home = () => {
  const { products } = useProducts();

  const filterProducts = products.filter((_product) => {
    return (
      _product.category === "men's clothing" ||
      _product.category === "women's clothing"
    );
  });

  return (
    <div>
      {" "}
      <section className="py-10">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm max-auto md:max-w-none md:mx-2">
            {filterProducts.map((product) => (
              <div className="w-full h-[300px] bg-red-400" key={product.id}>
                {product.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
