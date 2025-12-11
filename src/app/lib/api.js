import axios from "axios";

// ===============================
// AXIOS INSTANCE
// ===============================
const api = axios.create({
  baseURL: "https://YOUR_BACKEND_URL/api", // <-- Apna API base URL daalna
  timeout: 15000,
});

// ===============================
// REQUEST INTERCEPTOR (token auto add)
// ===============================
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // token from login

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ===============================
// RESPONSE INTERCEPTOR
// ===============================
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Backend validation error
    if (error.response && error.response.status === 422) {
      console.error("Validation Error:", error.response.data);
    }

    
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      console.error("Session Expired! Login again.");
    }

    return Promise.reject(error);
  }
);

// ===============================
// READY-TO-USE API FUNCTIONS
// ===============================

// Login
export const loginUser = (data) => api.post("/login", data);

// Get all packages
export const getPackages = () => api.get("/packages");

// Get single package
export const getPackageById = (id) => api.get(`/packages/${id}`);

// Book a package
export const bookPackage = (data) => api.post("/book-package", data);

// Get user bookings
export const getUserBookings = (id) => api.get(`/user-bookings/${id}`);

// Export axios instance
export default api;
