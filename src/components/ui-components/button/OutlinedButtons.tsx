"use client";

import { Button, Stack } from "@mui/material";

export default function Buttons() {
    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
        >
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="outlined" color="info">
                Link
            </Button>
        </Stack>
    );
}
