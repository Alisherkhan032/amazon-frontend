import React from "react";
import { calculateDiscount } from "../../utils/discountCalculate";
import {AddToCartButton} from '../Button/Button'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { Link } from "react-router-dom";
import { WhiteButton } from "../Button/Button";

const ProductCard = ({ product}) => {
  const dispatch = useDispatch();
  const isProductInCart = useSelector(state => state.cart.items.find(item => item.id === product.id));
  const user = useSelector(state => state?.auth?.currentUser?.user)
  const handleAddToCart = (product) => {
    dispatch(addToCart({product}));
  }

  return (
    <div className="bg-white  border border-gray-200 rounded-lg overflow-hidden ">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <div className="px-3 py-4">
        <h3 className="text-sm font-bold">{product.title}</h3>

        {/* Description with truncation */}
        <p className="text-gray-600 text-sm font-normal line-clamp-3">{product.description}</p>

        {/* Price Section */}
        <div className="flex items-center mt-1 gap-x-4">
          <div className="text-red-500 text-xl font-light">
            -{calculateDiscount(product.oldPrice, product.newPrice)}%
          </div>

          <div className="relative text-xl font-medium">
            <span className="absolute top-0 left-0 text-xs font-normal -ml-2 ">
              ₹
            </span>
            {product.newPrice}
          </div>
        </div>

        {/* MRP Section */}
        <div className="flex items-center mt-1 text-[0.65rem]">
            <span className="ml-2  font-medium text-gray-500">
            M.R.P :{" "}
            </span>
          <span className="ml-1 text-gray-500 line-through">
            ₹{product.oldPrice}
          </span>
        </div>

        {/* Add to Cart Button */}
        { user && (
            isProductInCart ? (
                <Link to="/cart" className="block w-full mt-4">
                    <WhiteButton title = 'Go to Cart' />
                </Link>
            ) : (
                <div className="mt-4" onClick={() => handleAddToCart(product)}>
                    <AddToCartButton />
                </div>
            )
        )}

      </div>
    </div>
  );
};

export default ProductCard;
