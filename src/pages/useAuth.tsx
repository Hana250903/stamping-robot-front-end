import { createContext, useContext, useState, ReactNode } from "react";

// Tạo Context
const AuthContext = createContext<{
  acToken: string | null;
  login: (token: string) => void;
  logout: () => void;
} | null>(null);

// ✅ AuthProvider để bọc toàn bộ ứng dụng
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [acToken, setAcToken] = useState<string | null>(null);

  const login = (token: string) => {
    setAcToken(token);
    localStorage.setItem("accessToken", token); // ✅ Lưu vào localStorage
  };

  const logout = () => {
    setAcToken(null);
    localStorage.removeItem("accessToken"); // ✅ Xóa token khi logout
  };

  return (
    <AuthContext.Provider value={{ acToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
