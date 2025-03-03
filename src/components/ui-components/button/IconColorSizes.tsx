"use client";

import { Button, Stack } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const btns = [
    { color: "primary", size: "small" },
    { color: "secondary", size: "medium" },
    { color: "success", size: "medium" },
    { color: "error", size: "large" },
    { color: "warning", size: "large" },
] as const;

export default function IconButtons() {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
        >
            {btns.map((btn, index) => (
                <Button key={index} color={btn.color} size={btn.size} variant="text">
                    <NotificationsIcon />
                </Button>
            ))}
        </Stack>
    );
}
