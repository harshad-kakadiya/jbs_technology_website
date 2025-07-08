'use client';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules"; // Include Autoplay module
import "swiper/css";
import img1 from '../../assets/images/home/herosection2/her-2.webp';
import img2 from '../../assets/images/home/herosection2/hero-1.webp';
import Image from "next/image";
import { Box, Grid, Typography, Button } from "@mui/material";
import {useRouter} from "next/navigation";

const slides = [
    {
        title: "Excellence in Software Engineering.",
        description:
            "Empower your business with elite software solutions tailored to your vision. Our expert team combines cutting-edge technologies and industry best practices to craft scalable, secure, and high-performing digital products.",
        button: "Schedule A Free Consultation",
        image: img1,
    },
    {
        title: "Technology Made With Trust.",
        description:
            "Build lasting digital solutions with a partner you can rely on. We bring transparency, technical excellence, and a commitment to your success ensuring technology that’s not only advanced, but trustworthy.",
        button: "Schedule A Free Consultation",
        image: img2,
    },
];

function Herosection() {
    const router = useRouter();


    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            loop={true}
            effect="fade"
            className="mySwiper"
            style={{ width: "100%", height: "100%" }}
        >
            {slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <Box sx={{ height: { xs: "auto", md: "615px" } }}>
                        <Grid
                            container
                            sx={{
                                height: "100%",
                                flexDirection: { xs: "column", md: "row" },
                            }}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundColor: "darkBlue",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%",
                                    p: { xs: '70px 15px', md: '0px 35px'},
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "white",
                                        maxWidth: "630px",
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        component="h2"
                                        sx={{
                                            fontSize: { xl: "55px", md: '45px', sm: "35px", xs: "28px" },
                                            fontWeight: 500,
                                            margin: "0 0 30px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: "17px",
                                            color: 'textGray',
                                            margin: { sm: "0 0 15px" },
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            padding: "15px 35px",
                                            fontSize: "15px",
                                            margin: "27px 0 0",
                                            background: "white",
                                            color: "#000",
                                            display: "inline-block",
                                            borderRadius: "1e3px",
                                            cursor:"pointer",
                                        }}
                                        onClick={() => router.push('/contact')}
                                    >
                                        {item.button}
                                    </Box>

                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12} >
                                <Box
                                    sx={{
                                        height: { xs: "440px", sm: "auto" },
                                        ' img': { objectFit: 'cover' },
                                    }}
                                >
                                    <Image
                                        alt={`Hero section image ${index + 1}`}
                                        src={item.image}
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Herosection;
