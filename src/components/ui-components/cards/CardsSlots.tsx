"use client";

import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export default function InfoCard() {
  return (
    <Card elevation={0}>
      <CardHeader
        title={<Typography variant="h6">This is a title</Typography>}
        subheader={<Typography variant="subtitle2">This is a subtitle</Typography>}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          This is content
        </Typography>
      </CardContent>
    </Card>
  );
}
