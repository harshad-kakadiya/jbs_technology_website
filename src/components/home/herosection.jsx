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
        title: "Top-Rated Software Development Company",
        description:
            "Unlock scalable growth with a trusted software engineering partner We deliver cutting edge custom software solutions, web applications, and digital experiences designed to accelerate your business success",
        button: "Book Your Free Consultation",
        image: img1,
    },
    {
        title: "Custom Software Solutions You Can Trust",
        description:
            "Partner with a reliable technology company to build future ready digital products Our expert developers craft secure, scalable, and innovative solutions tailored to your business goals",
        button: "Book Your Free Consultation",
        image: img2,
    }
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
                                            fontSize: { xl: "52px", md: '45px', sm: "35px", xs: "28px" },
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
