import React from "react";
import { ListItem, ListItemText, ListItemIcon, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from "../Icon";

interface MenuItemProps {
    item: {
        type?: string;
        to: string;
        disabled?: boolean;
        icon?: string;
        title: string;
        subCaption?: string;
        chip?: string;
        chipColor?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
        chipVariant?: "filled" | "outlined";
        chipIcon?: React.ReactNode;
    };
    level: number;
}

const SidebarItem: React.FC<MenuItemProps> = ({ item, level }) => {
    const isExternal = item.type === "external";

    return (
        <div className="mb-1">
            {isExternal ? (
                <ListItem
                    component="a"
                    href={item.to}
                    target="_blank"
                    className="bg-hover-primary"
                    sx={{ borderRadius: "8px", cursor: item.disabled ? "not-allowed" : "pointer" }}
                    aria-disabled={item.disabled}
                >
                    {/* Icon */}
                    {item.icon && (
                        <ListItemIcon className="navbox bg-hover-primary">
                            <span className="icon-box">
                                <Icon item={item.icon} level={level} className="position-relative z-index-2 texthover-primary" />
                            </span>
                        </ListItemIcon>
                    )}

                    {/* Title & SubCaption */}
                    <ListItemText
                        primary={item.title}
                        secondary={item.subCaption}
                        primaryTypographyProps={{ className: "text-subtitle-1 font-weight-medium", color: "primary" }}
                        secondaryTypographyProps={{ className: "text-caption mt-n1 hide-menu" }}
                    />
                </ListItem>
            ) : (
                <ListItem
                    component={Link}
                    to={item.to}
                    className="bg-hover-primary"
                    sx={{ borderRadius: "8px", cursor: item.disabled ? "not-allowed" : "pointer" }}
                    aria-disabled={item.disabled}
                >
                    {/* Icon */}
                    {item.icon && (
                        <ListItemIcon className="navbox bg-hover-primary">
                            <span className="icon-box">
                                <Icon item={item.icon} level={level} className="position-relative z-index-2 texthover-primary" />
                            </span>
                        </ListItemIcon>
                    )}

                    {/* Title & SubCaption */}
                    <ListItemText
                        primary={item.title}
                        secondary={item.subCaption}
                        primaryTypographyProps={{ className: "text-subtitle-1 font-weight-medium", color: "primary" }}
                        secondaryTypographyProps={{ className: "text-caption mt-n1 hide-menu" }}
                    />

                    {/* Chip Label */}
                    {item.chip && (
                        <Chip
                            label={item.chip}
                            color={item.chipColor || "default"}
                            variant={item.chipVariant || "filled"}
                            size="small"
                            icon={item.chipIcon}
                            className="sidebarchip hide-menu"
                        />
                    )}
                </ListItem>
            )}
        </div>
    );
};

export default SidebarItem;
