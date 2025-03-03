import { useMemo, useState } from 'react';
import { Box, Card, CardContent, IconButton, Tooltip, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { MoreVert, ArrowDownward } from "@mui/icons-material";
import Chart from "react-apexcharts";

const ProfitExpenseCard = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const chartOptions = useMemo(() => ({
        series: [
            { name: "Pixel", data: [9, 5, 3, 7, 5, 10, 3] },
            { name: "Ample", data: [6, 3, 9, 5, 4, 6, 4] },
        ],
        chartOptions: {
            grid: { borderColor: 'rgba(0,0,0,0.1)', strokeDashArray: 3 },
            plotOptions: { bar: { horizontal: false, columnWidth: "35%", borderRadius: 8 } },
            chart: { fontFamily: 'inherit', type: "bar" as "bar", height: 360, offsetY: 10, toolbar: { show: false } },
            dataLabels: { enabled: false },
            stroke: { show: true, width: 5, colors: ["transparent"] },
            xaxis: {
                type: "category" as "category",
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisTicks: { show: false },
                axisBorder: { show: false },
                labels: { style: { colors: "#a1aab2" } },
            },
            yaxis: { labels: { style: { colors: "#a1aab2" } } },
            fill: { opacity: 1 },
            tooltip: { theme: "dark" },
            legend: { show: false },
            responsive: [{ breakpoint: 767, options: { stroke: { show: false, width: 5, colors: ["transparent"] } } }],
        },
    }), []);

    return (
        <Card elevation={10} className="pa-3">
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight={600}>Profit & Expenses</Typography>
                    <IconButton onClick={handleClick}>
                        <MoreVert />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Action</MenuItem>
                        <MenuItem onClick={handleClose}>Another action</MenuItem>
                        <MenuItem onClick={handleClose}>Something else here</MenuItem>
                    </Menu>
                </Box>
                <Box pt={7}>
                    <Chart type="bar" height={370} options={chartOptions.chartOptions} series={chartOptions.series} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfitExpenseCard;
