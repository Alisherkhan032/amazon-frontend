import React from 'react';
import { Link } from 'react-router-dom';
import AmazonIcon from '../../assets/amazon_logo.png';

export const AuthLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-white">
    <header className="flex space border-b bg-primary-dark border-gray-300 py-3">
      <Link to="/">
        <img src={AmazonIcon} alt="Amazon" className="h-8 mx-auto ml-4" />
      </Link>
    </header>
    <div className="flex-grow flex justify-center px-4">
      <div className="w-full max-w-[350px] my-4">
        {children}
      </div>
    </div>
  </div>
);  