import React from 'react';
import { AuthInput } from './AuthInput';
import { LegalText } from './LegalText';

export const AuthForm = ({ 
  isLoginView, 
  formData, 
  onInputChange, 
  onSubmit, 
  error 
}) => (
  <div className="border border-gray-300 rounded-lg p-6 bg-white">
    <h1 className="text-3xl font-normal mb-4">
      {isLoginView ? "Sign-In" : "Create account"}
    </h1>
    
    {error && (
      <div className="text-red-500 mb-4">{error}</div>
    )}

    <form onSubmit={onSubmit}>
      <AuthInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={onInputChange}
      />

      <AuthInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={onInputChange}
        placeholder={isLoginView ? "" : "At least 6 characters"}
        helperText={!isLoginView && "Passwords must be at least 6 characters."}
      />

      {!isLoginView && (
        <AuthInput
          label="Re-enter password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={onInputChange}
        />
      )}

      <button
        type="submit"
        className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 mt-2"
      >
        {isLoginView ? "Sign-In" : "Create your Amazon account"}
      </button>
    </form>

    <LegalText />

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
);