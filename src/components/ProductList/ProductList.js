import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../assets/products";

const ProductList = () => {
  return (
    <div className="p-4 min-h-screen absolute top-[80vh] max-w-7xl mx-auto w-full">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {products.map((product) => (
          <div className="w-[220px]">
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
