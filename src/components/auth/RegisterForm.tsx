import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box>
        <Typography className="font-weight-medium mb-1">Name</Typography>
        <TextField variant="outlined" fullWidth color="primary" />
      </Box>
      <Box>
        <Typography className="font-weight-medium mb-1">Email Address</Typography>
        <TextField variant="outlined" fullWidth type="email" color="primary" />
      </Box>
      <Box>
        <Typography className="font-weight-medium mb-1">Password</Typography>
        <TextField variant="outlined" fullWidth type="password" color="primary" />
      </Box>
      <Box>
        <Button component={Link} to="/" variant="contained" color="primary" fullWidth size="large">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpForm;
