import axios from 'axios';

// Use your deployed backend URL
const API_URL = process.env.REACT_APP_API_URL || 'https://portfolio-backend-xxxx.onrender.com';

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Fallback to empty array instead of throwing
    return [];
  }
};

export const getSkills = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/skills`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    // Fallback data
    return [
      { _id: '1', name: 'MongoDB', description: 'NoSQL database', icon: '🍃', color: 'bg-green-500' },
      { _id: '2', name: 'Express.js', description: 'RESTful APIs', icon: '⚡', color: 'bg-gray-700' },
      { _id: '3', name: 'React', description: 'Modern UI', icon: '⚛️', color: 'bg-blue-500' },
      { _id: '4', name: 'Node.js', description: 'Backend server', icon: '🟢', color: 'bg-green-600' }
    ];
  }
};

export const sendContactMessage = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/contact`, formData);
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};