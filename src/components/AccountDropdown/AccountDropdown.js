import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { resetCart } from "../../slices/cartSlice";
import { removeCurrentUser } from "../../slices/authSlice";
import axios from "axios";

const modalStyle = {
  position: "absolute",
  top: "100%",
  left: "calc(50% - 20px)",
  transform: "translate(-50%, 10px)",
  width: 600,
  maxWidth: "500%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 3,
  zIndex: 1000,
};

const AccountAndList = () => {
  const user = useSelector((state) => state.auth?.currentUser?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogout = () => {
    dispatch(removeCurrentUser());
    dispatch(resetCart());
    const refreshToken = localStorage.getItem("refreshToken");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    axios
      .post("http://localhost:5001/logout", { token: refreshToken })
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.error(err));
  };

  const handleOpen = () => setIsHovered(true);
  const handleClose = () => setIsHovered(false);

  const handleNavigate = () => {
    navigate("/profile");
  };

  return (
    <div className="relative z-50">
      {isHovered && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-40"
          style={{ pointerEvents: "none" }}
        ></div>
      )}

      <div
        className="relative  hidden md:flex flex-col text-sm cursor-pointer border border-transparent hover:border-white z-[3000]"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
        onClick={handleNavigate}
      >
        <p className="font-semibold">
          {user ? `Hello, ${user?.username}` : "Hello, Guest"}
        </p>
        <p className="font-bold">Account & Lists</p>

        {isHovered && (
          <Box
            sx={modalStyle}
            className="absolute -mt-2 bg-white shadow-lg border rounded-lg"
          >
            <div className="flex justify-between bg-sky-100 px-3 pt-3 rounded-lg">
              <div className="text-sm mb-2 text-gray-600">
                Who is shopping? Select a profile.
              </div>
              <p className="text-sky-700  flex items-center mb-4">
                <Link to="/profile" className="hover:underline">Manage Profiles {" "} </Link>
                <i className="fi fi-ts-angle-small-right font-medium mt-1"></i>
              </p>
            </div>

            <div className="flex space-x-6 border-t pt-4">
              <div className="w-1/2">
                <h4 className="text-md font-bold mb-2 text-gray-900">
                  Your Lists
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <Link className="hover:underline">Shopping List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Create a Wish List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Wish from Any Website
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Baby Wishlist</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Discover Your Style</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Explore Showroom</Link>
                  </li>
                </ul>
              </div>

              <div className="w-1/2">
                <h4 className="text-md font-bold mb-2 text-gray-900">
                  Your Account
                </h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    <Link to="/profile" className="hover:underline">
                      Your Account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Orders</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Wish List</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Your Recommendations
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Recalls and Product Safety Alerts
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Your Prime Membership
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Prime Video</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Memberships & Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Your Seller Account</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Devices</Link>
                  </li>
                  <li>
                    <Link className="hover:underline">
                      Register for a free Business Account
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:underline">Switch Accounts</Link>
                  </li>
                  <li>
                    {user ? (
                      <Link
                        onClick={handleLogout}
                        className="hover:underline text-red-500"
                      >
                        Sign out
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="hover:underline text-blue-500"
                      >
                        Sign in
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        )}
      </div>
    </div>
  );
};

export default AccountAndList;
