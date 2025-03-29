import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import withAuth from "../withAuth"; // Import HOC

const HomePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Header />
      </div>
    </div>
  );
};

export default withAuth(HomePage); // Bọc HomePage bằng withAuth để bảo vệ
