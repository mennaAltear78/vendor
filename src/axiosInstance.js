// axiosInstance.js
import axios from "axios";

const axiosInstance = (accessToken, refreshToken) => {
  const instance = axios.create({
    baseURL: "https://sphinx-go.vercel.app/api/v1/vendor",
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && !originalRequest._retry) {
         // ✅ Prevents infinite loops when refreshing tokens.
        // ✅ Ensures a request is retried only ONCE to avoid performance issues.
       // ✅ Makes API interactions more efficient by handling expired tokens properly
        originalRequest._retry = true; //prevent inifnit loop
        const newToken = await refreshToken();
        if (newToken) {
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return instance.request(originalRequest);  // ✅ Correctly retry the request

        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default axiosInstance;
