import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

apiClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error?.response?.data?.error);
  }
);
