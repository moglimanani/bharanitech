import axiosInstance from './axiosInstance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

const httpService = {
  get: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await axiosInstance.get<T>(url, config);
  },

  post: async <TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<TResponse> => {
    const response = await axiosInstance.post<TResponse>(url, data, config);
    return response.data
  },

  put: async <TResponse, TRequest = unknown>(
    url: string,
    data?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<TResponse>> => {
    return await axiosInstance.put<TResponse>(url, data, config);
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return await axiosInstance.delete<T>(url, config);
  },
};

export default httpService;
