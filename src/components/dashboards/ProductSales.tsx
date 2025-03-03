import { useMemo } from 'react';
import { ApexOptions } from 'apexcharts';
import { Box, Card, CardContent, IconButton, Tooltip, Typography, Avatar } from "@mui/material";
import { ArrowDownward, AttachMoney } from "@mui/icons-material";
import Chart from "react-apexcharts";

const ProductSalesCard = () => {
    const areachartOptions: ApexOptions = useMemo(() => ({
        chart: {
            id: "sparkline3",
            type: "area",
            height: 60,
            sparkline: { enabled: true },
            fontFamily: 'inherit',
            foreColor: "#adb0bb",
        },
        series: [{
            name: "Earnings",
            color: "#8763da",
            data: [25, 66, 20, 40, 12, 58, 20],
        }],
        stroke: { curve: "smooth", width: 2 },
        fill: { colors: ["#f3feff"], type: "solid", opacity: 0.05 },
        markers: { size: 0 },
        tooltip: { theme: "dark", fixed: { enabled: true, position: "right" }, x: { show: false } },
    }), []);

    return (
        <Card elevation={10} className="withbg">
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center" pt={2}>
                    <Typography variant="h5">Product Sales</Typography>
                    <Tooltip title="Earnings">
                        <IconButton color="error">
                            <AttachMoney />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box mt={2}>
                    <Typography variant="h4">$6,820</Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                        <Avatar sx={{ bgcolor: "error.light" }}>
                            <ArrowDownward color="error" fontSize="small" />
                        </Avatar>
                        <Typography variant="subtitle1" fontWeight="bold" ml={2}>+9%</Typography>
                        <Typography variant="subtitle1" color="text.secondary" ml={2}>last year</Typography>
                    </Box>
                </Box>
            </CardContent>
            <Box mt={3}>
                <Chart type="area" height={60} options={areachartOptions} series={areachartOptions.series} />
            </Box>
        </Card>
    );
};

export default ProductSalesCard;