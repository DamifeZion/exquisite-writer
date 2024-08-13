// config/axiosConfig.js
import axios from 'axios';

export const createAxiosInstance = (baseURL: string) => {
  // Create an Axios instance with the provided base URL
  const axiosInstance = axios.create({
    baseURL: baseURL, // Dynamic base URL
    timeout: 10000,   // Timeout after 10 seconds
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add a request interceptor (if needed, but no token here)
  axiosInstance.interceptors.request.use(
    config => {
      // Modify the config before the request is sent, if needed
      return config;
    },
    error => {
      // Handle the request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    response => {
      // Any status code within the range of 2xx triggers this function
      return response;
    },
    error => {
      // Handle errors globally if needed
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};
