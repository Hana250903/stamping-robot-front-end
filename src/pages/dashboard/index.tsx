"use client";

import { Grid, Box, Typography, Link } from "@mui/material";
import ProfitExpense from "@/components/dashboards/ProfitExpense";
import TrafficDistribution from "@/components/dashboards/TrafficDistribution";
import ProductSales from "@/components/dashboards/ProductSales";
import UpcomingSchedule from "@/components/dashboards/UpcommingSchedule";
import TopPayingClients from "@/components/dashboards/TopPayingClients";
import ProductCards from "@/components/dashboards/ProductCards";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Biểu đồ lợi nhuận */}
      <Grid item xs={12} lg={8}>
        <ProfitExpense />
      </Grid>

      {/* Phân tích lưu lượng & Doanh số */}
      <Grid item xs={12} lg={4}>
        <Box mb={3}>
          <TrafficDistribution />
        </Box>
        <ProductSales />
      </Grid>

      {/* Lịch trình sắp tới */}
      <Grid item xs={12} lg={4}>
        <UpcomingSchedule />
      </Grid>

      {/* Khách hàng trả tiền cao nhất */}
      <Grid item xs={12} lg={8}>
        <TopPayingClients />
      </Grid>

      {/* Danh sách sản phẩm */}
      <Grid item xs={12}>
        <ProductCards />
      </Grid>

      {/* Footer */}
      <Grid item xs={12} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Distributed by{" "}
          <Link href="https://www.themewagon.com/" target="_blank" color="primary">
            ThemeWagon
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Design and Developed by{" "}
          <Link href="https://www.wrappixel.com/" target="_blank" color="primary">
            wrappixel.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
