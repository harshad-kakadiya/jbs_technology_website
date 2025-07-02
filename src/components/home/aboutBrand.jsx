import React from "react";
import img1 from "../../assets/images/brand/brand-01.png";
import img2 from "../../assets/images/brand/brand-02.png";
import img3 from "../../assets/images/brand/brand-03.png";
import img4 from "../../assets/images/brand/brand-04.png";
import img5 from "../../assets/images/brand/brand-05.png";
import img6 from "../../assets/images/brand/brand-06.png";
import {Box, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";

function AboutBrand() {
    const people = [
        {
            imageSrc: img1,
        },
        {
            imageSrc: img2,
        },
        {
            imageSrc: img3,
        },
        {
            imageSrc: img4,
        },
        {
            imageSrc: img5,
        },
        {
            imageSrc: img6,
        },
        {
            imageSrc: img5,
        },
        {
            imageSrc: img6,
        },
    ];
    return (
        <>
            <Box
                sx={{ padding: { lg: "60px 0px 120px 0px", xs: "40px 0px 40px 0px" } }}
            >
                <Box>
                    <Container maxWidth="xl">
                        <Box>
                            <Grid
                                container
                                spacing={{lg:2}}
                            >
                                {people.map((value, ind) => (
                                    <Grid item key={ind} md={3} sm={4} xs={6}>
                                        <Box sx={{height: '140px',px:5,width: '100%',transition: '1s',':hover img':{opacity: '1 !important',transform: 'scale(1.1)'}}}>
                                            <Image
                                                src={value.imageSrc}
                                                alt={value.name}
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    opacity: "0.5",
                                                    objectFit: 'contain',
                                                    borderRadius: "5px",
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default AboutBrand;
