import React, { useState } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import AmazonIcon from "../../assets/amazon_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, setLoading } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {BASE_URL} from '../../utils/config';

export function Auth(){
  const user = useSelector((state) => state.auth.currentUser);
  const location = useLocation();
  const loading = useSelector((state) => state.auth.loading);
  if(loading){
    return <div>Loading...</div>
  }
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

const AuthPages = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    if (isLoginView) {
      axios
        .post(`${BASE_URL}/login`, {
          username: formData.username,
          password: formData.password,
        })
        .then((response) => {
          const { token, refresh_token : refreshToken } = response?.data;
          dispatch(setCurrentUser({user : {username : formData.username}}));
          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", refreshToken);
          navigate("/");
        })
        .catch((err) => {
          const errMessage =
            err?.response?.data?.message || "Something went wrong";
          setError(errMessage);
        });
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long");
        return;
      }
      const { username, password } = formData;
      axios
        .post(`${BASE_URL}/register`, {
          username: formData.username,
          password: formData.password,
        })
        .then((response) => {
          setFormData({
            username: "",
            password: "",
            confirmPassword: "",
          });
          setSuccessMessage("User created successfully!");
        })
        .catch((err) => {
          const errMessage =
            err?.response?.data?.message || "Something went wrong!";
          setError(errMessage);
        });

      setLoading(false);
    }
  };

  if (successMessage) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <div className="flex space border-b bg-primary-dark border-gray-300 py-3">
          <Link to="/">
            <img src={AmazonIcon} alt="Amazon" className="h-8 mx-auto ml-4" />
          </Link>
        </div>
        <div className="flex-grow flex justify-center items-center px-4">
          <div className="w-full max-w-[350px] text-center">
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <div className="text-green-600 mb-4 text-xl">
                {successMessage}
              </div>
              <p className="mb-4">
                Your account has been created successfully.
              </p>
              <button
                onClick={() => {
                  setIsLoginView(true);
                  setSuccessMessage("");
                }}
                className="text-blue-600 hover:text-orange-700 hover:underline"
              >
                Please click here to login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex space border-b bg-primary-dark border-gray-300 py-3">
        <Link to="/">
          <img src={AmazonIcon} alt="Amazon" className="h-8 mx-auto ml-4" />
        </Link>
      </div>

      {error && (
        <div className="justify-center flex mt-2 text-red-500">{error}</div>
      )}

      <div className="flex-grow flex justify-center px-4">
        <div className="w-full max-w-[350px] my-4">
          <div className="border border-gray-300 rounded-lg p-6 bg-white">
            <h1 className="text-3xl font-normal mb-4">
              {isLoginView ? "Sign-In" : "Create account"}
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                  placeholder={isLoginView ? "" : "At least 6 characters"}
                  required
                />
                {!isLoginView && (
                  <p className="text-xs text-gray-600 mt-1">
                    Passwords must be at least 6 characters.
                  </p>
                )}
              </div>

              {!isLoginView && (
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1">
                    Re-enter password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                    required
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 mt-2"
              >
                {
                  loading ? 'Loading...' : isLoginView ? 'Sign-In' : 'Create your Amazon account'
                }
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-4">
              By continuing, you agree to Amazon's{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-orange-700 hover:underline"
              >
                Conditions of Use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-orange-700 hover:underline"
              >
                Privacy Notice
              </a>
              .
            </p>

            {isLoginView && (
              <div className="mt-4">
                <div className="text-xs text-gray-600">
                  <a href="#" className="hover:text-orange-700 hover:underline">
                    Need help?
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative mt-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {isLoginView ? "New to Amazon?" : "Already have an account?"}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {isLoginView ? "Create your Amazon account" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
