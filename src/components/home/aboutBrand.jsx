import React from "react";
import img1 from "../../assets/images/brand/brand-1.png";
import img2 from "../../assets/images/brand/brand-2.png";
import img3 from "../../assets/images/brand/brand-3.png";
import img4 from "../../assets/images/brand/brand-4.png";
import img5 from "../../assets/images/brand/brand-5.png";
import img6 from "../../assets/images/brand/brand-6.png";
import img7 from "../../assets/images/brand/brand-7.png";
import img8 from "../../assets/images/brand/brand-8.png";

import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

function AboutBrand() {
    const people = [
        { imageSrc: img1 },
        { imageSrc: img2 },
        { imageSrc: img3 },
        { imageSrc: img4 },
        { imageSrc: img5 },
        { imageSrc: img6 },
        { imageSrc: img7 },
        { imageSrc: img8 },
    ];

    return (
        <Box sx={{ py: { xs: 5, lg: 10 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ lg: 2, xs: 3 }}>
                    {people.map((value, ind) => (
                        <Grid item key={ind} md={3} sm={4} xs={6}>
                            <Box
                                sx={{
                                    height: 140,
                                    px: 5,
                                    width: "100%",
                                    overflow: "hidden",
                                    transition: "0.5s",
                                    "& img": {
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "contain",
                                        borderRadius: "5px",
                                        transition: "0.5s",
                                        filter: "grayscale(100%)",
                                    },
                                    "&:hover img": {
                                        filter: "grayscale(0%)",
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Image
                                    src={value.imageSrc}
                                    alt={`brand-${ind + 1}`}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutBrand;
