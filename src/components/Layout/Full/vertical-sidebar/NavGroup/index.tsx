import React from "react";
import { ListSubheader } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface Props {
    item: {
        header: string;
    };
}

const ListHeader: React.FC<Props> = ({ item }) => {
    return (
        <ListSubheader
            className="smallCap text-capitalize text-subtitle-1 mt-5 d-flex align-items-center"
        >
            <span className="mini-icon">
                <MoreHorizIcon fontSize="small" className="iconClass" />
            </span>
            <span className="mini-text font-weight-semibold pl-2 text-medium-emphasis text-uppercase">
                {item.header}
            </span>
        </ListSubheader>
    );
};

export default ListHeader;
