"use client";

import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function InfoCard() {
  return (
    <Card elevation={0}>
      <CardHeader title="This is a title" subheader="This is a subtitle" />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          This is content
        </Typography>
      </CardContent>
    </Card>
  );
}
