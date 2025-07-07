'use client';
import React, {useRef} from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import bgImg from '../../assets/images/home/ourmission/overvision.webp';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import img1 from '../../assets/images/home/ourmission/overmission.png'
import Image from "next/image";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import {useRouter} from "next/navigation";

const slides = [
    {
        title: "Our Mission",
        description: "At JBS Technology, our mission is to deliver innovative digital solutions and education services that empower businesses to grow, adapt, and succeed in a fast-changing world."
    },
    {
        title: "Our Vision",
        description: "To be a trusted global leader in technology and education solutions, driving innovation and shaping a smarter, more connected future for businesses and communities."
    }
];

function Ourmission() {
    const swiperRef = useRef(null);
    const router = useRouter();

    const handleNext1 = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev1 = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <Box sx={{mt: 10, mb: 4}}>
            <Container maxWidth="xl" className={'ourMission'}>
                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Box
                            sx={{
                                height: "100%",
                                background: `url(${bgImg.src}) no-repeat`,
                                backgroundSize: "cover",
                                objectFit: "contain",
                                padding: {xl: "120px 60px", lg: "70px 30px", xs: "70px 30px"}
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    lineHeight: "30px",
                                    fontWeight: 400,
                                    color: "#fff",
                                    textTransform:"uppercase",
                                    letterSpacing: "3.2px",
                                }}
                            >
                                Jbs Technology since 2021
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: {md: "35px", xs: "26px", lg: "45px"},
                                    color: "#fff",
                                    marginBottom: "10px",
                                }}
                            >
                                Tech Solutions That Soar
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: {md: "35px", xs: "26px", lg: "45px"},
                                    color: "#fff",
                                    paddingBottom: "25px",
                                    textWrap: "warp"
                                }}
                            >
                                The Technology works for Tomorrow.
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#fff",
                                    fontWeight: 400,
                                    width: {lg: "90%", xs: "100%"}
                                }}
                            >
                                At JBS Technology, we believe in building more than just software—we build the future.
                                Our tech-driven solutions are designed to scale, adapt, and elevate businesses in an
                                ever-evolving digital world. Whether it's automation, data intelligence, or digital
                                transformation, we ensure our innovations are not just relevant for today—but ready for
                                tomorrow. With a focus on performance, security, and user-centric design, we deliver
                                technology that helps your vision take flight.
                            </Typography>
                            <Box sx={{
                                paddingTop: "50px",
                                display: {sm: "flex", xs: "inline-block"}
                            }}>
                                <Box
                                    sx={{
                                        padding: "3px 20px",
                                        background: "#5F6D72",
                                        color: "#fff",
                                        display: {xs: "inline-block", sm: "unset"},
                                        borderRadius: "50px",
                                        lineHeight: "50px",
                                        fontWeight: 400,
                                        fontSize: {xs: "14px", md: "15px"},
                                        cursor: "pointer",
                                    }}
                                    onClick={() => router.push('/about')}
                                >
                                    More About Us
                                </Box>
                                <Box
                                    sx={{
                                        padding: "3px 20px",
                                        background: "#5F6D72",
                                        color: "#fff",
                                        borderRadius: "50px",
                                        lineHeight: "50px",
                                        fontWeight: 400,
                                        fontSize: {xs: "14px", md: "15px"},
                                        margin: {sm: "0 0 0 15px", xs: "10px 0 0 0"},
                                        cursor: "pointer",
                                    }}
                                    onClick={() => router.push('/contact')}
                                >
                                    Get your FREE IT consultation today
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={3}>

                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay, Navigation]}
                            // navigation={{
                            // nextEl: ".swiper-button-next"
                            // prevEl: ".swiper-button-prev",
                            // }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            style={{width: "100%", height: "100%", position: 'relative'}}
                        >
                            {slides.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "start",
                                            flexDirection: "column",
                                            textAlign: "center",
                                            padding: {xl: "50px", xs: "70px 15px"},
                                            backgroundColor: "darkBlue",
                                        }}
                                    >
                                        <Box sx={{paddingBottom: "25px"}}>
                                            <Image src={img1} alt={img1}/>
                                        </Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#fff",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "#fff",
                                                fontSize: "14px",
                                                display: "flex",
                                                textAlign: "left",
                                                paddingTop: "25px",
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            ))}
                            <Button
                                className="swiper-button-prev"
                                sx={{
                                    color: '#fff',
                                    position: 'absolute',
                                    top: {xs: '80%', lg: '78%'},
                                    left: {xs: 0, lg: 30},
                                    borderRadius: '50%',
                                    height: '75px',
                                    width: '75px',
                                    p: 2.5,
                                    display: "block",
                                    transition: '0.5s',
                                    "&:hover": {
                                        transform: 'scale(0.8)',
                                    },
                                }}
                                onClick={handlePrev1}
                            >
                                <WestIcon/>
                            </Button>
                            <Button
                                className="swiper-button-next"
                                sx={{
                                    color: '#fff',
                                    position: 'absolute',
                                    top: {xs: '80%', lg: '78%'},
                                    left: {xs: 50, lg: 90},
                                    height: '75px',
                                    width: '75px',
                                    borderRadius: '50%',
                                    p: 2.5,
                                    display: "block",
                                    transition: '0.5s',
                                    "&:hover": {
                                        transform: 'scale(0.8)',
                                    },
                                }}
                                onClick={handleNext1}
                            >
                                <EastIcon/>
                            </Button>
                        </Swiper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Ourmission;