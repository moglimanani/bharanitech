import axios from 'axios';

// Create instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', 
  // withCredentials: true, // needed for cookie-based auth (Laravel sessions)
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// Request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Example: attach token if using bearer tokens
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.warn('Unauthorized - maybe redirect to login');
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
