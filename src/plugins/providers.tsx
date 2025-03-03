"use client";

import ConfigProvider from "antd/es/config-provider";
import themeConfig from "./themeConfig";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import dynamic from "next/dynamic";

// ApexCharts (thay thế VueApexCharts)
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={themeConfig} >
      <PerfectScrollbar>{children} </PerfectScrollbar>
    </ConfigProvider>
  );
}
