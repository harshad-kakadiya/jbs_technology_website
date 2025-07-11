'use client';

import {Box, Button, Container, Grid, Typography} from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import {Swiper, SwiperSlide} from "swiper/react";

import log1 from "../../assets/images/about/clients/brand-11.png";
import log2 from "../../assets/images/about/clients/brand-22.png";
import log3 from "../../assets/images/about/clients/brand-33.png";
import log4 from "../../assets/images/about/clients/brand-44.png";
import log5 from "../../assets/images/about/clients/brand-55.png";
import log6 from "../../assets/images/about/clients/brand-66.png";
import log7 from "../../assets/images/about/clients/brand-77.png";
import log8 from "../../assets/images/about/clients/brand-88.png";
import log11 from "../../assets/images/about/clients/brand-1.png";
import log22 from "../../assets/images/about/clients/brand-2.png";
import log33 from "../../assets/images/about/clients/brand-3.png";
import log44 from "../../assets/images/about/clients/brand-4.png";
import log55 from "../../assets/images/about/clients/brand-5.png";
import log66 from "../../assets/images/about/clients/brand-6.png";
import log77 from "../../assets/images/about/clients/brand-7.png";
import log88 from "../../assets/images/about/clients/brand-8.png";
import {Autoplay, EffectFade} from "swiper/modules";

const logoData = [
    {id: 1, logo1: log1, logo11: log11},
    {id: 2, logo1: log2, logo11: log22},
    {id: 3, logo1: log3, logo11: log33},
    {id: 4, logo1: log4, logo11: log44},
    {id: 5, logo1: log5, logo11: log55},
    {id: 6, logo1: log6, logo11: log66},
    {id: 7, logo1: log7, logo11: log77},
    {id: 8, logo1: log8, logo11: log88},
];

const Clients = () => {
    const swiperRef = React.useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{mt: 7}}>
                    <Grid container spacing={2} sx={{mt: 8}}>
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="span"
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "2.5px",
                                }}
                            >
                                Recognized by the best
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: {xs: "30px", md: "35px", lg: "45px"},
                                    fontWeight: "600",
                                    lineHeight: {xs: "30px", sm: "30px"},
                                    mt: 2,
                                }}
                            >
                                Clients Trust JBS Technology
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Box
                                sx={{
                                    textAlign: "start",
                                    display: "flex",
                                    justifyContent: {xs: "start", sm: "center"},
                                }}
                            >
                                <Typography
                                    sx={{
                                        width: {xs: "100%", md: "80%"},
                                        color: "#4B535D",
                                        fontSize: "16px",
                                        lineHeight: "26px",
                                    }}
                                >
                                    From an early-stage startup’s growth strategies to helping existing businesses —
                                    we’ve done it all! The results speak for themselves. Our services work
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* Slider Section */}
                    <Box
                        sx={{
                            my: 9,
                            position: "relative",
                            px: {xs: 2, sm: 4},
                        }}
                    >
                        <Swiper
                            modules={[Autoplay]}
                            ref={swiperRef}
                            spaceBetween={0}
                            slidesPerView={6}
                            loop={true}
                            autoplay={{
                                delay: 3000, // 2 seconds between slides
                                disableOnInteraction: false,
                            }}
                            speed={500} // smooth transition
                            breakpoints={{
                                1200: {slidesPerView: 5},
                                992: {slidesPerView: 4},
                                768: {slidesPerView: 3},
                                425: {slidesPerView: 2},
                                320: {slidesPerView: 1},
                            }}
                        >

                            {logoData.map((logo) => (
                                <SwiperSlide key={logo.id}>
                                    <Box
                                        sx={{
                                            border: "1px solid #D2D4D5",
                                            py: 3,
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
                                                height: "170px",
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
                                                    top: logo.id === 4 ? 0 : logo.id === 8 ? 13 : 50,
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
                                                    top:
                                                        logo.id === 4
                                                            ? 0
                                                            : logo.id === 8
                                                                ? 12
                                                                : logo.id === 7
                                                                    ? 68
                                                                    : 50,
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

                        {/* Navigation Buttons (Only on lg and up) */}
                        <Button
                            onClick={handlePrev}
                            sx={{
                                display: {xs: "none", lg: "flex"},
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                borderRadius: '50%',
                                height: '60px',
                                width: '60px',
                                minWidth: "unset",
                                padding: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                color: "cardTextGrey",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                transition: "0.3s",
                                opacity: 0.8,
                                "&:hover": {
                                    transform: "scale(0.9) translateY(-50%)",
                                    opacity: 0.6,
                                },
                            }}
                        >
                            <WestIcon/>
                        </Button>

                        <Button
                            onClick={handleNext}
                            sx={{
                                display: {xs: "none", lg: "flex"},
                                position: "absolute",
                                top: "50%",
                                right: 0,
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                borderRadius: '50%',
                                height: '60px',
                                width: '60px',
                                minWidth: "unset",
                                padding: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                color: "cardTextGrey",
                                backgroundColor: "#fff",
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",

                                transition: "0.3s",
                                opacity: 0.8,
                                "&:hover": {
                                    transform: "scale(0.9) translateY(-50%)",
                                    opacity: 0.6,
                                },
                            }}
                        >
                            <EastIcon fontSize="small"/>
                        </Button>


                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Clients;
