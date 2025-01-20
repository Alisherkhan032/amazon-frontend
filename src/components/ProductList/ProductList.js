import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../assets/products";

const ProductList = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
  return (
    <div className="p-4 min-h-screen relative -top-56  mx-auto w-full z-10 ">
      <div className="flex flex-wrap items-center justify-center gap-4  ">
        {products.map((product) => (
          <div className="w-[220px]">
            <ProductCard
              product={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
