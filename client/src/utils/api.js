// src/utils/api.js - Frontend API utility
import axios from 'axios';

// For Vercel deployment - API routes are at /api/*
const API_URL = process.env.REACT_APP_API_URL || '';

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/skills`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending contact message:', error);
    throw error;
  }
};
