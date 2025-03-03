import React from "react";
import { IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationButton: React.FC = () => {
    return (
        <IconButton
            className="custom-hover-primary text-muted"
            sx={{ ml: { xs: 0, md: 5 } }}
        >
            <Badge variant="dot" color="primary" overlap="circular">
                <NotificationsIcon sx={{ fontSize: 22, strokeWidth: 1.5 }} />
            </Badge>
        </IconButton>
    );
};

export default NotificationButton;
