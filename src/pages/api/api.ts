import axios from "axios";

// Tạo một instance của Axios với cấu hình mặc định
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
    timeout: 10000, // 10 giây timeout
    headers: {
        "Content-Type": "application/json",
    },
});

// Middleware: Thêm token vào request (nếu có)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            if (config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Middleware: Xử lý lỗi response
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

// 🟢 API: Lấy danh sách yêu cầu đóng dấu
export const getStampingRequests = async () => {
    try {
        const response = await api.get("/stamping-requests");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 🟢 API: Lấy lịch sử đóng dấu
export const getStampingHistory = async () => {
    try {
        const response = await api.get("/stamping-history");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 🟢 API: Lấy danh sách bảo trì
export const getMaintenanceSchedule = async () => {
    try {
        const response = await api.get("/maintenance-schedule");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 🟢 API: Lấy danh sách người dùng
export const getUsers = async () => {
    try {
        const response = await api.get("/users");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 🟢 API: Đăng nhập
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// 🟢 API: Đăng xuất
export const logoutUser = async () => {
    try {
        const response = await api.post("/auth/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Xuất mặc định Axios instance
export default api;
