import React from "react";
import { Menu, MenuItem, Avatar, IconButton, Paper, List, ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import { Person, Mail, ListAlt } from "@mui/icons-material";

const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar src="/images/profile/user-1.jpg" sx={{ width: 35, height: 35 }} />
            </IconButton>

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} PaperProps={{ sx: { width: 200, borderRadius: 3, mt: 1 } }}>
                <Paper elevation={10}>
                    <List dense>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Person fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="My Profile" />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Mail fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="My Account" />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <ListAlt fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="My Task" />
                        </MenuItem>
                    </List>
                    <div style={{ padding: "16px", textAlign: "center" }}>
                        <Button variant="outlined" color="primary" fullWidth>
                            Logout
                        </Button>
                    </div>
                </Paper>
            </Menu>
        </>
    );
};

export default UserMenu;
