import React from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import img1 from '../../../assets/images/portfolio/techuse/tech-figma.svg';
import img2 from '../../../assets/images/portfolio/techuse/tech-nativescript.svg';
import img3 from '../../../assets/images/portfolio/techuse/tech-node-js.svg';
import img4 from '../../../assets/images/portfolio/techuse/tech.mongodb.svg';
import img5 from '../../../assets/images/portfolio/techuse/tech-express-js.svg';
import Image from "next/image";

const app = [
    {
        name: "Figma",
        image: img1,
    },
    {
        name: "NativeScript",
        image: img2,
    },
    {
        name: "Node.js",
        image: img3,
    },
    {
        name: "MongoDB",
        image: img4,
    },
    {
        name: "Express.js",
        image: img5,
    },
];

function TechUse() {
    return (
        <Box sx={{ padding: "96px 0" }}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: "#0F172A",
                        fontSize: { xs: "28px", md: "36px" },
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: "32px",
                    }}
                >
                    Tech Use
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {app.map((item, index) => (
                        <Grid item xs={6} sm={3} md={2}  key={index + 1}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "20px 10px",
                                    background: "#F5F7F9",
                                    borderRadius: "10px",
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    style={{ marginRight: "10px" }}
                                />
                                <Typography
                                    sx={{
                                        color: "#0F72A",
                                        fontSize: { xs: "14px", md: "16px" },
                                        fontWeight: 500,
                                        textWrap:"nowrap"
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default TechUse;
