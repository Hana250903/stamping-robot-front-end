"use client";

import { Button, Stack } from "@mui/material";

export default function Buttons() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ height: "100%", flexWrap: "wrap", justifyContent: "space-between" }}
    >
      <Button variant="contained">Elevates (default)</Button>
      <Button variant="contained" color="primary">
        Flat
      </Button>
      <Button variant="contained" color="primary" sx={{ backgroundColor: "rgba(25, 118, 210, 0.2)" }}>
        Tonal
      </Button>
      <Button variant="outlined" color="primary">
        Outlined
      </Button>
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="text" color="primary" sx={{ backgroundColor: "transparent" }}>
        Plain
      </Button>
    </Stack>
  );
}
