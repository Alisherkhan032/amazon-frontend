import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../slices/authSlice';
import { authService } from '../services/authService';

export const useAuth = () => {
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const { token, refresh_token: refreshToken } = await authService.login(credentials);
      dispatch(setCurrentUser({ username: credentials.username }));
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/profile');
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  const handleRegister = async (userData) => {
    try {
      await authService.register(userData);
      setSuccessMessage('User created successfully!');
      return true;
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong!');
      return false;
    }
  };

  return {
    error,
    successMessage,
    setError,
    setSuccessMessage,
    handleLogin,
    handleRegister
  };
};