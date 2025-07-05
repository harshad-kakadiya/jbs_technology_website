'use client';
import {Box, Container, Typography, useTheme, useMediaQuery} from "@mui/material";
import React from "react";
import image from "../../assets/images/about/aboutSlider/ab2.webp";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AboutSlider = () => {
    const theme = useTheme();
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

    const timelineData = [
        {
            year: "2021 - 2022",
            title: "Foundation & Digital Shift",
            description:
                "JBS Technology began its journey by establishing a strong digital foundation, adopting cloud infrastructure and modern development practices to support long-term growth.",
        },
        {
            year: "2022 - 2023",
            title: "Innovation & Expansion",
            description:
                "Building on its foundation, JBS expanded its solutions across industries, investing in R&D and launching innovative platforms to serve a global clientele.",
        },
        {
            year: "2023 - 2024",
            title: "Sustainability & Leadership",
            description:
                "Focused on sustainable technologies and ethical innovation, JBS strengthened its leadership position by promoting diversity, green practices, and future-focused thinking.",
        },
        {
            year: "2024 - 2025",
            title: "AI Integration & Global Impact",
            description:
                "Integrated advanced AI and automation across solutions, enabling smarter services and real-time decision-making, while expanding impact across new global markets.",
        }

    ];

    return (
        <>
            <Box>
                <Box>
                    <Typography
                        component="img"
                        src={image.src}
                        alt={image.alt || "Image description"}
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: {xs: "300px", md: "500px"},
                            width: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
                <Box>
                    <Box
                        sx={{
                            backgroundColor: "#121C27",
                            color: "#fff",
                            padding: {xs: "20px 2px 120px", sm: "20px 2px", md: "40px 5px"},
                            position: "relative",
                        }}
                    >
                        <Container maxWidth={'xl'}>
                            {(isLgUp && timelineData.length === 4) ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: 2,
                                    }}
                                >
                                    {timelineData.map((item, index) => (
                                        <Box key={index} sx={{flex: "1 1 22%", minWidth: "200px"}}>
                                            <Box sx={{display: "flex", alignItems: "center"}}>
                                                <Typography
                                                    sx={{marginTop: "30px", fontSize: {xs: "13px", sm: "15px"}}}>
                                                    {item.year}
                                                </Typography>
                                            </Box>
                                            <Typography sx={{
                                                marginTop: "10px",
                                                fontWeight: "bold",
                                                fontSize: {xs: "18px", sm: "22px"}
                                            }}>
                                                {item.title}
                                            </Typography>
                                            <Box sx={{display: "flex", margin: "30px 0", alignItems: "center"}}>
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
                                                    }}/>
                                                </Box>
                                                <Typography
                                                    sx={{border: "1px #353E47 solid", width: "100%", height: ".01px"}}/>
                                            </Box>
                                            <Typography sx={{
                                                marginTop: "10px",
                                                fontSize: {xs: "13px", sm: "15px"},
                                                lineHeight: "1.5",
                                                color: "#D3D3D3"
                                            }}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            ) : (
                                // Swiper for other cases
                                <>
                                    <Swiper
                                        modules={[Navigation]}
                                        navigation={{
                                            nextEl: ".swiper-button-next",
                                            prevEl: ".swiper-button-prev",
                                        }}
                                        spaceBetween={1}
                                        slidesPerView={1}
                                        loop={true}
                                        autoplay={{delay: 3000, disableOnInteraction: false}}
                                        breakpoints={{
                                            768: {slidesPerView: 2},
                                            1024: {slidesPerView: 3},
                                            1400: {slidesPerView: 4},
                                        }}
                                    >
                                        {timelineData.map((item, index) => (
                                            <SwiperSlide key={index + 1}>
                                                <Box
                                                    sx={{
                                                        ":hover .dot": {
                                                            border: "1px solid #fff",
                                                            transition: "1s",
                                                        },
                                                    }}
                                                >
                                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                                        <Typography sx={{
                                                            marginTop: "30px",
                                                            fontSize: {xs: "13px", sm: "15px"}
                                                        }}>
                                                            {item.year}
                                                        </Typography>
                                                    </Box>
                                                    <Typography sx={{
                                                        marginTop: "10px",
                                                        fontWeight: "bold",
                                                        fontSize: {xs: "18px", sm: "22px"}
                                                    }}>
                                                        {item.title}
                                                    </Typography>
                                                    <Box sx={{display: "flex", margin: "30px 0", alignItems: "center"}}>
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
                                                            }}/>
                                                        </Box>
                                                        <Typography sx={{
                                                            border: "1px #353E47 solid",
                                                            width: "100%",
                                                            height: ".01px"
                                                        }}/>
                                                    </Box>
                                                    <Typography sx={{
                                                        marginTop: "10px",
                                                        fontSize: {xs: "13px", sm: "15px"},
                                                        lineHeight: "1.5",
                                                        color: "#D3D3D3"
                                                    }}>
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>

                                    <ArrowForwardIcon
                                        className="swiper-button-next"
                                        sx={{
                                            color: "#fff",
                                            fontSize: "20px",
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            backgroundColor: "#353E47",
                                            position: "absolute",
                                            top: {md: "53.5%", xs: "80%"},
                                            right: {md: "5%", xs: "32%"},
                                            padding: "13px",
                                            ":hover": {
                                                backgroundColor: "white",
                                                color: "black",
                                            },
                                        }}
                                    />
                                    <ArrowBackIcon
                                        className="swiper-button-prev"
                                        sx={{
                                            color: "#fff",
                                            fontSize: "20px",
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            backgroundColor: "#353E47",
                                            position: "absolute",
                                            top: {md: "53.5%", xs: "80%"},
                                            left: {md: "5%", xs: "32%"},
                                            padding: "13px",
                                            ":hover": {
                                                backgroundColor: "white",
                                                color: "black",
                                            },
                                        }}
                                    />
                                </>
                            )}
                        </Container>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default AboutSlider;
