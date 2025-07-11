'use client';
import {
    Box,
    Container,
    Typography,
    useTheme,
    useMediaQuery
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AboutSlider = () => {
    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
    const isAbove1392 = useMediaQuery('(min-width:1392px)');

    const timelineData = [
        {
            year: "2021 - 2022",
            title: "Foundation & Digital Shift",
            description:
                "JBS Technology began its journey by establishing a strong digital foundation, adopting cloud infrastructure and modern development practices to support long-term growth",
        },
        {
            year: "2022 - 2023",
            title: "Innovation & Expansion",
            description:
                "Building on its foundation, JBS expanded its solutions across industries, investing in R&D and launching innovative platforms to serve a global clientele",
        },
        {
            year: "2023 - 2024",
            title: "Sustainable Leadership",
            description:
                "Focused on sustainable technologies and ethical innovation, JBS strengthened its leadership position by promoting diversity, green practices, and future-focused thinking",
        },
        {
            year: "2024 - 2025",
            title: "AI & Global Impact",
            description:
                "Integrated advanced AI and automation across solutions, enabling smarter services and real-time decision-making, while expanding impact across new global markets",
        },

    ];

    const renderCard = (item, index) => (
        <Box key={index} sx={{ flex: "1 1 22%", minWidth: "200px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ marginTop: "30px", fontSize: { xs: "13px", sm: "15px" } }}>
                    {item.year}
                </Typography>
            </Box>
            <Typography sx={{
                marginTop: "10px",
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "22px" }
            }}>
                {item.title}
            </Typography>
            <Box sx={{ display: "flex", margin: "30px 0", alignItems: "center" }}>
                <Box className="dot" sx={{
                    border: "1px solid #121C27",
                    borderRadius: "50%",
                    padding: "6px"
                }}>
                    <Typography sx={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%"
                    }} />
                </Box>
                <Typography sx={{ border: "1px #353E47 solid", width: "100%", height: ".01px" }} />
            </Box>
            <Typography sx={{
                marginTop: "10px",
                fontSize: { xs: "13px", sm: "15px" },
                lineHeight: "1.5",
                color: "#D3D3D3"
            }}>
                {item.description}
            </Typography>
        </Box>
    );

    const desktopArrow = (side) => ({
        display: isAbove1392 ? "flex" : "none",
        color: "#fff",
        fontSize: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#353E47",
        padding: "13px",
        cursor: "pointer",
        position: "absolute",
        top: "55%",
        transform: "translateY(-50%)",
        [side]: {
            xs: "10px",
            sm: "10px",
            md: "15px",
            lg: "20px",
            xl: "-60px"
        },
        zIndex: 2,
        ":hover": {
            backgroundColor: "white",
            color: "black",
        }
    });

    const mobileArrow = {
        display: isAbove1392 ? "none" : "flex",
        position: "static",
        color: "#fff",
        fontSize: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#353E47",
        padding: "13px",
        cursor: "pointer",
        ":hover": {
            backgroundColor: "white",
            color: "black",
        }
    };

    const useSwiper = !isLgUp || timelineData.length > 4;

    return (
        <Box>
            <Box sx={{
                backgroundColor: "#121C27",
                color: "#fff",
                padding: { xs: "20px 2px 20px", sm: "20px 2px", md: "40px 5px" },
                position: "relative",
            }}>
                <Container maxWidth="xl">
                    {isLgUp && !useSwiper ? (
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 2,
                        }}>
                            {timelineData.map(renderCard)}
                        </Box>
                    ) : (
                        <Box sx={{ position: "relative", pb: { xs: 6, lg: 0 } }}>
                            <Swiper
                                modules={[Navigation]}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                spaceBetween={1}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                    1500: { slidesPerView: 4 },
                                }}
                            >
                                {timelineData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        {renderCard(item, index)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <ArrowForwardIcon className="swiper-button-next" sx={desktopArrow("right")} />
                            <ArrowBackIcon className="swiper-button-prev" sx={desktopArrow("left")} />

                            <Box sx={{
                                display: isAbove1392 ? "none" : "flex",
                                justifyContent: "center",
                                gap: 6,
                                mt: 5,
                            }}>
                                <ArrowBackIcon className="swiper-button-prev" sx={mobileArrow} />
                                <ArrowForwardIcon className="swiper-button-next" sx={mobileArrow} />
                            </Box>
                        </Box>
                    )}
                </Container>
            </Box>
        </Box>
    );
};

export default AboutSlider;
