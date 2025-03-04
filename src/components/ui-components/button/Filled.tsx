"use client";

import { Alert, Stack } from "@mui/material";

export default function Alerts() {
    return (
        <Stack spacing={2}>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>
        </Stack>
    );
}
