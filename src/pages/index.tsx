import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

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

export default HomePage;