"use client";

import { Box, Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import LogoDark from "@/components/Layout/Full/logo/LogoDark";

export default function RegisterPage() {
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
                                    <LogoDark />
                                </Box>

                                {/* Tiêu đề */}
                                <Box display="flex" justifyContent="center" textAlign="center" mb={3}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            width: "100%",
                                            position: "relative",
                                            fontWeight: "400",
                                            px: 5,
                                            py: 1,
                                            backgroundColor: "background.paper",
                                            borderRadius: 1,
                                        }}
                                    >
                                        Your Social Campaigns
                                    </Typography>
                                </Box>

                                {/* Form đăng ký */}
                                <RegisterForm />

                                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                    Already have an account?{" "}
                                    <Link href="/auth/login" passHref>
                                        <Button color="primary" variant="text" sx={{ textTransform: "none" }}>
                                            Sign In
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
