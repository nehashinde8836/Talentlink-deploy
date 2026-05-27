import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://talentlink-um0f.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_BASE,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export default apiClient;


