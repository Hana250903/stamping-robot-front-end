import { useEffect, useState } from "react";
import Head from "next/head";
import Main from "@/Layout/Main";
import { Container, Box } from "@mui/material";

export default function App({ Component, pageProps }: any) {
    const [title, setTitle] = useState("SpikeAdmin - Next.js + Material UI Free Dashboard");

    useEffect(() => {
        document.title = `${title} - Next.js Typescript based Free Admin Dashboard Template`;
    }, [title]);

    return (
        <>
            <Head>
                <meta name="description" content={title} />
            </Head>
            <Main>
                <Box component="main">
                    <Container
                        maxWidth="xl"
                        sx={{
                            backgroundColor: "background.default",
                            paddingX: { xs: 2, sm: 5 },
                            paddingTop: 12,
                            borderRadius: 2,
                        }}
                    >
                        <Component {...pageProps} />
                    </Container>
                </Box>
            </Main>
        </>
    );
}
