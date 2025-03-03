import { productsCard } from '../../data/dashboard/dashboardData';
import React from "react";
import { Box, Card, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";
import Rating from '@mui/material/Rating';

function ProductsGrid() {
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {productsCard.map((card) => (
        <Card key={card.title} elevation={10} className="withbg" sx={{ width: "25%" }}>
          <Link to={card.link}>
            <CardMedia component="img" src={card.photo} height="100%" className="rounded-t-md" />
          </Link>
          <Box display="flex" justifyContent="flex-end" mr={2} mt={-2}>
            <Tooltip title="Add To Cart">
              <IconButton color="primary">
                <ShoppingBasket fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box p={2}>
            <Typography variant="h6">{card.title}</Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
              <Box>
                <Typography variant="h6">${card.price}</Typography>
                <Typography variant="body2" className="text-medium-emphasis text-decoration-line-through" ml={1}>
                  ${card.salesPrice}
                </Typography>
              </Box>
              <Rating value={card.rating} size="small" readOnly />
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default ProductsGrid;
