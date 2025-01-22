import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainComponent from "./components/MainComponent/MainComponent";
import Cart from "./components/Cart/Cart";
import Login, { Auth } from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentUser, setLoading } from "./slices/authSlice";
import {BASE_URL} from './utils/config';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    const fetchUser = async (refreshToken) => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(`${BASE_URL}/user`, {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        console.log("response data:", response.data);
        dispatch(setCurrentUser(response.data));
      } catch (error) {
        console.error("Error fetching cart data:", error.message);
      } finally{
        dispatch(setLoading(false));
      }
    };
    const refreshToken = localStorage.getItem("refreshToken");
    fetchUser(refreshToken);
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainComponent />} />

          <Route element={<Auth />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
