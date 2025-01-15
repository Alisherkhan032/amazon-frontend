import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary-light text-white text-base font-normal p-3">
      <div className=" flex items-center">
        {/* Logo */}
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="hover:text-gray-300 flex gap-x-1 items-center">
          <i class="fi fi-bs-menu-burger text-xl -mb-1"></i>
          <span className=''>All</span>
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
          {/* <button className="hover:text-gray-300">Home Improvement</button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
