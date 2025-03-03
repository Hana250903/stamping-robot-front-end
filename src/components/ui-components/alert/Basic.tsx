import { Alert, Stack } from "@mui/material";

export default function Alerts() {
  return (
    <Stack spacing={2}>
      <Alert severity="error" variant="outlined">
        This is an error alert — check it out!
      </Alert>
      <Alert severity="warning" variant="outlined">
        This is a warning alert — check it out!
      </Alert>
      <Alert severity="info" variant="outlined">
        This is an info alert — check it out!
      </Alert>
      <Alert severity="success" variant="outlined">
        This is a success alert — check it out!
      </Alert>
    </Stack>
  );
}
