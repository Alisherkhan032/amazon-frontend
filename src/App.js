import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MainComponent from "./components/MainComponent/MainComponent";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import AuthPages from "./pages/AuthPages";
import { useSelector } from "react-redux";
import {setCartItems } from "./slices/cartSlice"
import axios from "axios";


function App() {
  const user = useSelector(state => state.auth.currentUser);
  
  const fetchCartData = async () => {
    try {
      const response = await axios.get('http://localhost:3030/cart', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      const cartData = response.data; 
      console.log(cartData); 
      
    } catch (error) {
      console.error("Error fetching cart data:", error.message);
      return null; 
    }
  };
  

  useEffect(() => {
    if(user && user.token){
      // fetchCartData();
    }
  }, [user]);
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<AuthPages />} />
          <Route path='/profile' element = {<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
