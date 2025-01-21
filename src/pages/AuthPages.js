import React, { useState } from 'react';
import { AuthLayout } from '../components/Auth/AuthLayout';
import { AuthForm } from '../components/Auth/AuthForm';
import { SuccessMessage } from '../components/Auth/SuccessMessage';
import { useAuth } from '../hooks/useAuth';

const AuthPages = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { 
    error, 
    successMessage, 
    setError, 
    setSuccessMessage, 
    handleLogin, 
    handleRegister 
  } = useAuth();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!isLoginView) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    const { username, password } = formData;
    
    if (isLoginView) {
      await handleLogin({ username, password });
    } else {
      const success = await handleRegister({ username, password });
      if (success) {
        setFormData({ username: '', password: '', confirmPassword: '' });
      }
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError('');
    setSuccessMessage('');
  };

  return (
    <AuthLayout>
      {successMessage ? (
        <SuccessMessage 
          message={successMessage}
          onLoginClick={() => {
            setIsLoginView(true);
            setSuccessMessage('');
          }}
        />
      ) : (
        <>
          <AuthForm
            isLoginView={isLoginView}
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            error={error}
          />

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
            onClick={toggleView}
            className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {isLoginView ? "Create your Amazon account" : "Sign in"}
          </button>
        </>
      )}
    </AuthLayout>
  );
};

export default AuthPages;