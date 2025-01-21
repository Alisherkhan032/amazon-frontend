import React from 'react';

export const SuccessMessage = ({ message, onLoginClick }) => (
  <div className="border border-gray-300 rounded-lg p-6 bg-white">
    <div className="text-green-600 mb-4 text-xl">{message}</div>
    <p className="mb-4">Your account has been created successfully.</p>
    <button
      onClick={onLoginClick}
      className="text-blue-600 hover:text-orange-700 hover:underline"
    >
      Please click here to login
    </button>
  </div>
);