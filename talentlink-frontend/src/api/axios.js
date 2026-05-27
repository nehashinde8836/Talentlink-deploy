import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'https://talentlink-um0f.onrender.com/api';

export default axios.create({
  baseURL: API_BASE,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});


