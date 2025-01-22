import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCurrentUser } from "../../slices/authSlice";
import axios from "axios";
import { resetCart } from "../../slices/cartSlice";
import { capitalize } from "lodash";

const AccountDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser?.user);

  const handleLogout = () => {
    dispatch(removeCurrentUser());
    dispatch(resetCart())
    const refreshToken = localStorage.getItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    axios
      .post("http://localhost:5001/logout", { token: refreshToken })
      .then((response) => {
        Navigate("/login");
      })
      .catch((err) => console.error(err));
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col leading-3 ml-1">
        <span className="text-white text-sm font-medium">
        {`Hello, ${user?.username ? capitalize(user.username) : "Guest"}`}
        </span>
        <span className="text-white font-semibold">Account & Lists</span>
      </div>

      <div className="relative">
        {isHovered && (
          <div className="absolute right-0 w-[480px] bg-white border border-gray-200 text-black shadow-xl rounded-lg mt-1 transform transition-all duration-200 ease-out opacity-100 translate-y-0">
            {(
              <div className="p-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3 text-lg text-gray-900">
                      Your Lists
                    </h3>
                    <div className="space-y-3">
                      {[
                        "Create a Wish List",
                        "Wish from Any Website",
                        "Baby Wishlist",
                        "Discover Your Style",
                      ].map((item) => (
                        <Link
                          key={item}
                          className="block text-gray-600 hover:text-orange-600 hover:underline transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Link to="/profile">
                      <h3 className="font-bold mb-3 text-lg text-gray-900">
                        Your Account
                      </h3>
                    </Link>
                    <div className="space-y-3">
                      {[
                        "Your Orders",
                        "Your Wish List",
                        "Your Recommendations",
                        "Your Prime Membership",
                      ].map((item) => (
                        <Link
                          key={item}
                          className="block text-gray-600 hover:text-orange-600 hover:underline transition-colors duration-200"
                        >
                          {item}
                        </Link>
                      ))}
                      {user ? (
                        <button
                          onClick={() => handleLogout()}
                          className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-200"
                        >
                          Sign Out
                        </button>
                      ) : (
                        <Link to="/login">
                          <button
                            onClick={() => handleLogout()}
                            className="text-red-600 hover:text-red-700 hover:underline transition-colors duration-200"
                          >
                            Sign In
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountDropdown;
