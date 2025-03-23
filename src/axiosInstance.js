import axios from "axios";
// إنشاء Axios Instance
const axiosInstance = axios.create({
  baseURL: "https://sphinx-go.vercel.app/api/v1/vendor",
  withCredentials: true, // مهم لو بتستخدمي HttpOnly Cookies
});

// Interceptor لإضافة Access Token لكل الطلبات
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor لمعالجة انتهاء صلاحية التوكن
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // جلب Access Token جديد باستخدام Refresh Token
        const { data } = await axios.get(
          "https://sphinx-go.vercel.app/api/v1/vendor/refresh-token",
          { withCredentials: true }
        );
        // تحديث Access Token في localStorage
          localStorage.setItem("token", data.access_token);
          console.log("hello refresh token" ,data);
          
        // إعادة المحاولة بالـ AccessToken الجديد
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.access_token}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh Token Expired - Redirecting to Login" ,refreshError.response.data);
        localStorage.removeItem("token");
        window.location.href = "/"; // إعادة التوجيه إلى تسجيل الدخول
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
