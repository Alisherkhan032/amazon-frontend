import React from "react";
import { calculateDiscount } from "../../utils/discountCalculate";
import {AddToCartButton} from '../Button/Button'

const ProductCard = ({ image, title, description, oldPrice, newPrice }) => {
  return (
    <div className="bg-white  border border-gray-200 rounded-lg overflow-hidden ">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-2 py-4">
        <h3 className="text-sm font-bold">{title}</h3>

        {/* Description with truncation */}
        <p className="text-gray-600 text-sm font-normal line-clamp-3">{description}</p>

        {/* Price Section */}
        <div className="flex items-center mt-1 gap-x-4">
          <div className="text-red-500 text-xl font-light">
            -{calculateDiscount(oldPrice, newPrice)}%
          </div>

          <div className="relative text-xl font-medium">
            <span className="absolute top-0 left-0 text-xs font-normal -ml-2 ">
              ₹
            </span>
            {newPrice}
          </div>
        </div>

        {/* MRP Section */}
        <div className="flex items-center mt-1 text-[0.65rem]">
            <span className="ml-2  font-medium text-gray-500">
            M.R.P :{" "}
            </span>
          <span className="ml-1 text-gray-500 line-through">
            ₹{oldPrice}
          </span>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4">
            <AddToCartButton />
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
