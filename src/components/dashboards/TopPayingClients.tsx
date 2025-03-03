import React, { useMemo, useState } from 'react';
import { Box, Card, CardContent, IconButton, Tooltip, Typography, Avatar, Menu, MenuItem } from "@mui/material";
import { MoreVert, ArrowDownward } from "@mui/icons-material";
import Chart from "react-apexcharts";
import { ApexOptions } from 'apexcharts';

const chartOptions: ApexOptions = {
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 4,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 4,
        },
    },
    chart: {
        fontFamily: 'Roboto, sans-serif',
        type: 'bar',
        height: 370,
        offsetY: 0,
        toolbar: {
            show: true,
        },
    },
    xaxis: {
        type: 'category', // Ensure this is one of "category", "datetime", or "numeric"
    },
    // ... other options
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                    },
                },
            },
        },
    ],
};

const ProfitExpenseCard: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card elevation={10} className="pa-3">
            <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" fontWeight={600}>Profit & Expenses</Typography>
                    <IconButton onClick={handleClick}>
                        <MoreVert />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {['Action', 'Another action', 'Something else here'].map((text, index) => (
                            <MenuItem key={index} onClick={handleClose}>{text}</MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box pt={7}>
                    <Chart type="bar" height={370} options={chartOptions} series={chartOptions.series} />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProfitExpenseCard;