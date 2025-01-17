import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../assets/products";

const ProductList = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
  return (
    <div className="p-4 min-h-screen absolute top-[80vh]  mx-auto w-full z-10 bg-transparent">
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
