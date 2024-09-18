import React from "react";
import ProductCard from "./productcard";
import products from "../assets/productsData"; // Yuqoridagi massivni import qiling

const Home = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default Home;
