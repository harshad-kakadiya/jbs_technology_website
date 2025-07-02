'use client';
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import log1 from "../../assets/images/about/clients/ab9-2.webp";
import log11 from "../../assets/images/about/clients/ab9.webp";
import log2 from "../../assets/images/about/clients/ab10-2.webp";
import log22 from "../../assets/images/about/clients/ab10.webp";
import log3 from "../../assets/images/about/clients/ab11-2.webp";
import log33 from "../../assets/images/about/clients/ab11.webp";
import log4 from "../../assets/images/about/clients/ab6-2.webp";
import log44 from "../../assets/images/about/clients/ab6.webp";
import log5 from "../../assets/images/about/clients/ab7-2.webp";
import log55 from "../../assets/images/about/clients/ab7.webp";
import log6 from "../../assets/images/about/clients/ab8-2.webp";
import log66 from "../../assets/images/about/clients/ab8.webp";
import { Swiper, SwiperSlide } from "swiper/react";

const logoData = [
    { id: 1, logo1: log1, logo11: log11 },
    { id: 2, logo1: log2, logo11: log22 },
    { id: 3, logo1: log3, logo11: log33 },
    { id: 4, logo1: log4, logo11: log44 },
    { id: 5, logo1: log5, logo11: log55 },
    { id: 6, logo1: log6, logo11: log66 },
    { id: 1, logo1: log1, logo11: log11 },
    { id: 2, logo1: log2, logo11: log22 },
    { id: 3, logo1: log3, logo11: log33 },
    { id: 4, logo1: log4, logo11: log44 },
    { id: 5, logo1: log5, logo11: log55 },
    { id: 6, logo1: log6, logo11: log66 },
];
const Clients = () => {
    return (
        <>
            <Box>
                <Container maxWidth={"xl"}>
                    <Box sx={{ borderTop: "1px solid #4B535D", mt: 8 }}>
                        <Grid container spacing={2} sx={{ mt: 8 }}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", mb: { xs: "12px", sm: "0px" } }}>
                                    <Typography
                                        variant="span"
                                        sx={{ fontSize: { xs: "15px", md: "18px" } }}
                                    >
                                        R E C O G N I Z E D
                                    </Typography>
                                    <Typography
                                        variant="span"
                                        sx={{ mx: 2, fontSize: { xs: "15px", md: "18px" } }}
                                    >
                                        B Y
                                    </Typography>
                                    <Typography
                                        variant="span"
                                        sx={{ mr: 2, fontSize: { xs: "15px", md: "18px" } }}
                                    >
                                        T H E
                                    </Typography>
                                    <Typography
                                        variant="span"
                                        sx={{ fontSize: { xs: "15px", md: "18px" } }}
                                    >
                                        B E S T
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                            fontWeight: "500",
                                            lineHeight: { xs: "40px", sm: "55px" },
                                            mb: "0px",
                                        }}
                                    >
                                        Clients Trust Beyond Tech Solution.
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        textAlign: "start",
                                        display: "flex",
                                        justifyContent: { xs: "start", sm: "center" },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            width: { xs: "100%", md: "80%" },
                                            color: "#4B535D",
                                            fontSize: "15px",
                                            lineHeight: "26px",
                                        }}
                                    >
                                        From an early stage start-up’s growth strategies to helping
                                        existing businesses, we have done it all! The results speak
                                        for themselves. Our services work.
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box sx={{ my: 12 }}>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={6}
                                loop={true}
                                autoplay={false}
                                speed={0}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 6,
                                    },
                                    992: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    425: {
                                        slidesPerView: 2,
                                    },
                                    320: {
                                        slidesPerView: 1,
                                    },
                                }}
                            >
                                {logoData.map((logo) => (
                                    <SwiperSlide key={logo}>
                                        <Box
                                            sx={{
                                                border: "1px solid #D2D4D5",
                                                py: 3,
                                                width: "100%",
                                                px: 4,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: "relative",
                                                    width: "150px",
                                                    height: "50px",
                                                    overflow: "hidden",
                                                    "&:hover .logo1": {
                                                        transform: "translateY(50%)",
                                                        opacity: 0,
                                                    },
                                                    "&:hover .logo11": {
                                                        transform: "translateY(0)",
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    component="img"
                                                    src={logo.logo11.src}
                                                    className="logo11"
                                                    sx={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        opacity: 0,
                                                        transform: "translateY(-50%)",
                                                        transition: "transform 0.3s ease, opacity 0.3s ease",
                                                    }}
                                                />
                                                <Typography
                                                    component="img"
                                                    src={logo.logo1.src}
                                                    className="logo1"
                                                    sx={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        opacity: 1,
                                                        transform: "translateY(0)",
                                                        transition: "transform 0.3s ease, opacity 0.3s ease",
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};
export default Clients;