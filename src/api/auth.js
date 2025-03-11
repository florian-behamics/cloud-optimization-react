import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user ', error);
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/authenticate`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    localStorage.setItem('token', response.data.message);
    return response.data;
  } catch (error) {
    console.error('Error logging in ', error);
    throw error;
  }
};
