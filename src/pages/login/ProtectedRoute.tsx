import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem("token"); // Kiểm tra token

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
