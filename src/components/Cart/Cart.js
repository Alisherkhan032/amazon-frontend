import React, { useState } from "react";
import products from "../../assets/products";
import { YellowButton } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, toggleSelect } from "../../slices/cartSlice";
import { EMI_OPTIONS } from "../../constants/Options";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, increment) => {
    dispatch(updateQuantity({ id, increment }));
  };

  const handleToggleSelect = (id)=>{
    dispatch(toggleSelect({id}));
  }

  return (
    <div className="flex flex-col lg:flex-row gap-x-8 p-8 bg-gray-100">
      {/* Left Section: Shopping Cart Items */}
      <div className="flex flex-col w-full lg:w-2/3 border border-gray-300 bg-white p-4 shadow-md">
        <h2 className="text-2xl font-medium mb-4">Shopping Cart</h2>
        <button className="text-blue-500 cursor-pointer hover:underline text-left mb-2">
          Deselect all items
        </button>
        <span className="text-right text-sm mb-1 text-gray-600">price</span>

        <div className="w-full h-[0.5px] bg-gray-300 mb-4"></div>

        {/* Render products dynamically */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className={`flex gap-x-4 border-b border-gray-300 pb-4 mb-4 ${
              !item.selected ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => handleToggleSelect(item.id)}
                className="mt-2 h-4 w-4 cursor-pointer"
              />
              <img
                src={item.image}
                alt={item.title}
                className="h-48 rounded object-cover"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-green-600 text-xs font-medium mb-2">
                In stock
              </p>
              <p className="text-gray-500 font-normal text-xs">
                Eligible for FREE Shipping
              </p>
              {/* Spacer to push this section to the bottom */}
              <div className="mt-auto flex items-center">
                <div className="border-4 border-yellow-400 font-medium rounded-3xl py-1 flex justify-between items-center space-x-6 px-2">
                  <button
                    className="font-bold"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    {item.quantity === 1 ? <i className="fi fi-rs-trash "></i> : <i class="fi fi-rr-minus-small"></i>}
                  </button>
                  <div className="pb-1">{item.quantity}</div>
                  <button
                    className="font-bold"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    <i class="fi fi-rr-plus-small"></i>
                  </button>
                </div>
                <button className="text-blue-500 text-sm ml-4">Delete</button>
                <button className="text-blue-500 text-sm ml-4">
                  Save for later
                </button>
              </div>
            </div>

            <p className="font-semibold text-gray-900">
              ₹{item.newPrice * item.quantity}
            </p>
          </div>
        ))}
      </div>

      {/* Right Section: Subtotal */}
      <div className="flex flex-col w-full lg:w-1/3 border border-gray-300 bg-white p-6 shadow-md h-fit">
        <div className="mb-4">
          <p className="text-lg">
            Subtotal ({cartItems.filter((item) => item.selected).length} items):{" "}
            {/* <span className="font-semibold">₹{subtotal}</span> */}
            <div className="flex  items-center my-2">
              <input className="w-4 h-4" type="checkbox" name="" id="" />
              <span className="ml-2 text-base font-medium">
                This order contains a gift
              </span>
            </div>
          </p>
          <p className="text-red-500 text-sm">You saved ₹1,400.00!</p>
        </div>
        <YellowButton title="Proceed to Buy" />

        <div className="mt-4">
          <label htmlFor="emi" className="block text-sm font-medium  mb-1">
            EMI Options
          </label>
          <select
            id="emi"
            name="emi"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-black  "
          >
            {EMI_OPTIONS.map((option) => (
              <option key={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Cart;
