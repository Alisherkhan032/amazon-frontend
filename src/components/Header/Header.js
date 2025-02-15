import React from "react";
import AmazonIcon from "../../assets/amazon_logo.png";
import { USER_NAME, USER_ADDRESS } from "../../constants/headerConstants";
import India from "../../assets/india.png";
import { CATEGORY_OPTIONS, COUNTRY_OPTIONS } from "../../constants/Options";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import { capitalize } from "lodash";

const Header = () => {
  const totalItemsInCart = useSelector((state) => state.cart.items.length);
  const name =
    useSelector((state) => state.auth.currentUser?.user?.username) || "Guest";
  // console.log('name', user.name);
  return (
    <div className="bg-primary-dark text-white flex items-center justify-between gap-x-4 px-4 sticky top-0 z-20">
      {/* left side */}
      <div className="flex items-center py-1">
        <div>
          <Link to="/">
            <img
              src={AmazonIcon}
              alt="Amazon"
              className="h-8 mr-4"
            />
          </Link>
        </div>

        <div className="flex pb-2">
          {/* Icon */}
          <div className="pt-4 ">
            <i className="fi fi-rs-marker text-base"></i>
          </div>

          {/* Text */}
          <div className="flex flex-col leading-3 ml-1 mt-1">
            <span className="text-gray-300 text-sm font-normal">
              Deliver to {capitalize(name)}
            </span>
            <span className="text-white font-semibold">{USER_ADDRESS}</span>
          </div>
        </div>
      </div>

      {/* filter and search */}
      <div className="flex items-center flex-1">
        {/* Category select */}
        <div className="">
          <select
            className="h-10 w-full bg-gray-300 rounded-l-md text-center text-black appearance-none"
            name=""
            id=""
          >
            {CATEGORY_OPTIONS.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search bar */}
        <div className="flex-1 flex items-center  focus-within:w-full">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="h-10 w-full bg-gray-100 text-black pl-2 pr-10 focus:outline-none"
          />
        </div>

        {/* Search button */}
        <div>
          <button className="bg-[#febd69] h-10 px-4 rounded-r-md">
            <i className="fi fi-br-search pb-4 text-[#37342e]  text-2xl"></i>
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-x-4">
        <div className="flex gap-x-1">
          <img className="h-6" src={India} alt="" />
          <select name="" id="" className="bg-primary-dark appearance-none">
            {COUNTRY_OPTIONS.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <AccountDropdown />

        <div className="flex flex-col leading-3 ml-1">
          <span className="text-white text-sm font-medium">Returns</span>
          <span className="text-white font-semibold">& Orders</span>
        </div>

        <div className="flex items-center gap-x-3">
          <Link to="/cart" className="flex items-center gap-x-2">
            <div className="text-white text-3xl font-medium flex justify-center -space-x-5 -space-y-1">
              <i class="fi fi-rs-dolly-flatbed-empty"></i>
              <span className="text-[#ff9442] font-semibold text-xl ml-4">
                {totalItemsInCart}
              </span>{" "}
            </div>
            <div className=" flex flex-col justify-center -space-y-4">
              {/* Number on top */}
              <span className="text-white text- font-semibold ml-2">Cart</span>{" "}
              {/* Text "Cart" at the bottom */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
