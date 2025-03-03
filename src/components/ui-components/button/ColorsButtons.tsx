"use client";

import { Button, Stack } from "@mui/material";

const btnsColor = ["primary", "secondary", "error", "warning", "success"] as const;

export default function Buttons() {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
        >
            {btnsColor.map((color) => (
                <Button key={color} variant="contained" color={color}>
                    {color}
                </Button>
            ))}
        </Stack>
    );
}
