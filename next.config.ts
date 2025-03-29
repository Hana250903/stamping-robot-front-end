import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,


  // Tắt source maps để tránh lỗi khi dev
  productionBrowserSourceMaps: false,

  // Cho phép CORS nếu cần thiết (chỉ dùng khi gặp lỗi CORS)
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // CÓ THỂ PHẢI CHỈNH LẠI CHO PHÙ HỢP
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,POST,DELETE" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Authorization, Accept, Content-Type" },
        ],
      },
    ];
  },
};

module.exports = {
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};

export default nextConfig;
