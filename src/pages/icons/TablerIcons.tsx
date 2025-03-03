"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

export default function TablerIconsPage() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card elevation={10}>
                    <CardContent sx={{ padding: 4 }}>
                        <Box sx={{ padding: 5, paddingTop: 0 }}>
                            <iframe
                                src="https://tabler-icons.io/"
                                title="Tabler Icons"
                                frameBorder="0"
                                width="100%"
                                height="650"
                                style={{ borderRadius: "8px", overflow: "hidden" }}
                            ></iframe>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
