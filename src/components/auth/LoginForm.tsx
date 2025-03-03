import { useState } from "react";
import { TextField, Checkbox, Button, FormControlLabel, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SocialCampaigns = () => {
    const [checkbox, setCheckbox] = useState(false);

    return (
        <Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={6}>
                <Typography variant="h6" className="w-100 px-5 font-weight-regular auth-divider position-relative">
                    <span className="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100">
                        Your Social Campaigns
                    </span>
                </Typography>
            </Box>
            <Box>
                <Box mb={3}>
                    <Typography className="font-weight-medium mb-1">Username</Typography>
                    <TextField variant="outlined" fullWidth className="pwdInput" color="primary" />
                </Box>
                <Box mb={3}>
                    <Typography className="font-weight-medium mb-1">Password</Typography>
                    <TextField variant="outlined" fullWidth type="password" className="border-borderColor" color="primary" />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <FormControlLabel
                        control={<Checkbox color="primary" checked={checkbox} onChange={(e) => setCheckbox(e.target.checked)} />}
                        label="Remember this Device"
                    />
                    <Link to="" className="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">
                        Forgot Password ?
                    </Link>
                </Box>
                <Box mt={2}>
                    <Button size="large" variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SocialCampaigns;
