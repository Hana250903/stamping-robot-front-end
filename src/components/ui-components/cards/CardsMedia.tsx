"use client";

import Image from "next/image";
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from "@mui/material";

import proimg2 from "@/public/images/blog/blog-img4.jpg";

export default function MediaCard() {
  return (
    <Card elevation={0}>
      {/* Ảnh nền */}
      <CardMedia sx={{ height: 200, position: "relative" }}>
        <Image src={proimg2} alt="Beach" layout="fill" objectFit="cover" />
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            color: "white",
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0,0,0,0.7)",
          }}
        >
          Top 10 Australian beaches
        </Typography>
      </CardMedia>

      {/* Nội dung */}
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          Number 10
        </Typography>
        <Typography variant="body1">Whitehaven Beach</Typography>
        <Typography variant="body2" color="textSecondary">
          Whitsunday Island, Whitsunday Islands
        </Typography>
      </CardContent>

      {/* Nút hành động */}
      <CardActions>
        <Button color="warning">Share</Button>
        <Button color="warning">Explore</Button>
      </CardActions>
    </Card>
  );
}
