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
// import axios from "axios";

// const API_BASE_URL = "https://sphinx-go.vercel.app/api/v1/vendor"; // عدلها حسب API الخاص بك

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   withCredentials: true, // إذا كنت تستخدم الـ Cookies
// });

// // متغيرات تخزين التوكن
// let isRefreshing = false;
// let refreshSubscribers = [];

// // دالة لإضافة الاشتراكات عند تحديث التوكن
// const subscribeTokenRefresh = (cb) => {
//   refreshSubscribers.push(cb);
// };

// const onRefreshed = (newToken) => {
//   refreshSubscribers.forEach((cb) => cb(newToken));
//   refreshSubscribers = [];
// };

// // **Interceptor للطلبات (Request)**
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem("access_token");
//     if (accessToken) {
//       config.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // **Interceptor للاستجابات (Response)**
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // **إذا كان الخطأ بسبب انتهاء صلاحية التوكن**
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve) => {
//           subscribeTokenRefresh((token) => {
//             originalRequest.headers["Authorization"] = `Bearer ${token}`;
//             resolve(axiosInstance(originalRequest));
//           });
//         });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const refreshToken = localStorage.getItem("refresh_token");
//         const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
//           refreshToken,
//         });

//         const newAccessToken = response.data.accessToken;
//         localStorage.setItem("access_token", newAccessToken);
//         onRefreshed(newAccessToken);
//         isRefreshing = false;

//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         isRefreshing = false;
//         localStorage.removeItem("access_token");
//         localStorage.removeItem("refresh_token");
//         window.location.href = "/login"; // إعادة التوجيه لصفحة تسجيل الدخول
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;