"use client";

import { Button, Stack } from "@mui/material";

export default function ButtonSizes() {
    return (
        <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ justifyContent: "space-around", alignItems: "center", height: "100%" }}
        >
            <Button size="small" variant="contained" color="primary">
                Extra small
            </Button>
            <Button size="medium" variant="contained" color="primary">
                Small
            </Button>
            <Button size="large" variant="contained" color="primary">
                Normal
            </Button>
            <Button sx={{ fontSize: "1.1rem", padding: "10px 20px" }} variant="contained" color="primary">
                Large
            </Button>
            <Button sx={{ fontSize: "1.25rem", padding: "12px 24px" }} variant="contained" color="primary">
                Extra large
            </Button>
        </Stack>
    );
}
