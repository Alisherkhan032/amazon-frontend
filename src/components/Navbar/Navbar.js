import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-primary-light text-white text-base font-normal p-3">
        <div className="flex items-center">
          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Sidebar Toggle Button */}
            <button
              className="hover:text-gray-300 flex gap-x-1 items-center"
              onClick={toggleSidebar}
            >
              <i className="fi fi-bs-menu-burger text-xl -mb-1"></i>
              <span>All</span>
            </button>
            <button className="hover:text-gray-300">Fresh</button>
            <button className="hover:text-gray-300">MX Player</button>
            <button className="hover:text-gray-300">Sell</button>
            <button className="hover:text-gray-300">Amazon Pay</button>
            <button className="hover:text-gray-300">Gift Cards</button>
            <button className="hover:text-gray-300">Buy Again</button>
            <button className="hover:text-gray-300">AmazonBasics</button>
            <button className="hover:text-gray-300">Gift Ideas</button>
            <button className="hover:text-gray-300">Today's Deals</button>
            <button className="hover:text-gray-300">Customer Service</button>
            <button className="hover:text-gray-300">Browsing History</button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar 
        open={isSidebarOpen} 
        toggleDrawer={handleCloseSidebar}
      />
    </>
  );
};

export default Navbar;