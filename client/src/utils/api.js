import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const getSkills = async () => {
  const response = await axios.get(`${API_URL}/skills`);
  return response.data;
};

export const sendContactMessage = async (data) => {
  const response = await axios.post(`${API_URL}/contact`, data);
  return response.data;
};