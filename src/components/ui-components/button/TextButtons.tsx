"use client";

import { Button, Stack } from "@mui/material";

const btnsColor = ["primary", "secondary", "success", "error", "warning"] as const;

export default function TextButtons() {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ flexWrap: "wrap", alignItems: "center", justifyContent: "center", my: 2 }}
        >
            {btnsColor.map((color) => (
                <Button key={color} color={color} variant="text">
                    {color}
                </Button>
            ))}
        </Stack>
    );
}
