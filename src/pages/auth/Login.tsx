"use client";

import { Box, Button, Card, CardContent, Typography, Container, Grid } from "@mui/material";
import Link from "next/link";
import AuthLoginForm from "@/components/AuthLoginForm";
import LayoutFullLogoDark from "@/components/LayoutFullLogoDark";
declare module '@/components/AuthLoginForm';

export default function LoginPage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f4f6f8",
            }}
        >
            <Container maxWidth="sm">
                <Grid container justifyContent="center">
                    <Grid item xs={12}>
                        <Card elevation={10} sx={{ borderRadius: 3, p: 3 }}>
                            <CardContent>
                                <Box display="flex" justifyContent="center" mb={3}>
                                    <LayoutFullLogoDark />
                                </Box>

                                {/* Form đăng nhập */}
                                <AuthLoginForm />

                                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                    New to Spike?{" "}
                                    <Link href="/auth/register" passHref>
                                        <Button color="primary" variant="text" sx={{ textTransform: "none" }}>
                                            Create an account
                                        </Button>
                                    </Link>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
