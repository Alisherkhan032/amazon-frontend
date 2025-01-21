import React from 'react';

export const AuthInput = ({ 
  label, 
  name, 
  type, 
  value, 
  onChange, 
  placeholder, 
  helperText 
}) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
      placeholder={placeholder}
      required
    />
    {helperText && (
      <p className="text-xs text-gray-600 mt-1">{helperText}</p>
    )}
  </div>
);