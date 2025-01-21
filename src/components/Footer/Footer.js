import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4  w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
          {/* Brand Logo */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold">Amazon.in</h2>
            <p className="text-sm mt-2"></p>
          </div>
          
          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="text-sm hover:text-blue-400">About Us</a></li>
              <li><a href="/services" className="text-sm hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="text-sm hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="text-sm hover:text-blue-400">FAQ</a></li>
              <li><a href="/returns" className="text-sm hover:text-blue-400">Returns</a></li>
              <li><a href="/shipping" className="text-sm hover:text-blue-400">Shipping Info</a></li>
              <li><a href="/privacy" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-700">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-sm text-center text-gray-400">
            &copy; 2025 Amazon.in. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-2 space-x-8">
            <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
