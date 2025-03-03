"use client";

import { useState } from "react";
import { Alert, Button, Collapse } from "@mui/material";

export default function ClosableAlert() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Collapse in={open}>
        <Alert
          severity="info"
          variant="outlined"
          onClose={() => setOpen(false)}
        >
          Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.
          Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non.
        </Alert>
      </Collapse>

      {!open && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(true)}
          sx={{ mt: 2 }}
        >
          Reset
        </Button>
      )}
    </div>
  );
}
