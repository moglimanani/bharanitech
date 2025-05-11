import { useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '../api/axiosInstance';

export const useAxiosErrorHandler = (showError: (message: string) => void) => {
  useEffect(() => {
    const errorInterceptor = axiosInstance.interceptors.response.use(
      response => response,
      error => {
        let message = 'Something went wrong.';

        if (error.response) {
          // Server responded with a status outside 2xx
          const errorData = error.response.data?.error
          if(errorData && Object.keys(errorData).length > 0){
            const errorArr: string[] = Object.values(errorData)
            message = errorArr[0]
          } else {
              message = error.response.data?.message || `Error ${error.response.status}`;
          }
        } else if (error.request) {
          // No response received
          message = 'No response from server. Please check your connection.';
        } else {
          // Error setting up request
          message = error.message;
        }

        showError(message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(errorInterceptor);
    };
  }, [showError]);
};
