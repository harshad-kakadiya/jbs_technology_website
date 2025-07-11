'use client';
import React, {useRef} from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import bgImg from '../../assets/images/home/ourmission/overvision.webp';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import img1 from '../../assets/images/home/ourmission/2188481-middle-removebg-preview.png'
import img2 from '../../assets/images/home/ourmission/istockphoto-1370679958-612x612-removebg-preview.png'
import Image from "next/image";
import {useRouter} from "next/navigation";

const slides = [
    {
        title: "Our Mission",
        description: "At JBS Technology in Surat, our mission is to deliver custom software, web applications, and future-ready products that help businesses grow through technology",
        img:img1
    },
    {
        title: "Our Vision",
        description: "Our vision is to be a trusted technology partner, offering scalable digital solutions that drive innovation and global business growth",
        img:img2
    }

];
const WestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <path fill="currentColor"
              d="M497.333 239.999H80.092l95.995-95.995l-22.627-22.627L18.837 256L153.46 390.623l22.627-22.627l-95.997-95.997h417.243z"/>
    </svg>
);
const EastIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <path fill="currentColor"
              d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z"/>
    </svg>
);


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
        <Box sx={{mt: 10, mb: 4, mx: {md: "45px", sm: "30px", xs: "0px"}}}>
            {/*<Container maxWidth="xl" >*/}
            <Grid container className={'ourMission'}>
                <Grid item xs={12} md={9}>
                    <Box
                        sx={{
                            height: "100%",
                            background: `url(${bgImg.src}) no-repeat`,
                            backgroundSize: "cover",
                            objectFit: "contain",
                        }}
                    >
                        <Box sx={{
                            padding: {xl: "120px 220px", lg: "70px 30px", xs: "70px 30px"}

                        }}>
                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    lineHeight: "30px",
                                    fontWeight: 400,
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    letterSpacing: "2.5px",
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
                                Smart Software Solutions
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#fff",
                                    fontWeight: 400,
                                    width: {lg: "90%", xs: "100%"}
                                }}
                            >
                                At JBS Technology in Surat, Gujarat, we offer custom software solutions, scalable
                                digital experiences, and web applications. As a trusted technology partner, our expert
                                software engineers help businesses grow through future-ready digital products tailored
                                to your needs

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
                                        padding: {xl: "50px", xs: "70px 30px 120px 30px"},
                                        backgroundColor: "darkBlue",
                                    }}
                                >
                                    <Box sx={{paddingBottom: "25px"}}>
                                        <Image src={item.img} alt={img1} style={{ width: "50px" , height:'50px' , objectFit: 'contain' }} />
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
                                top: {xs: '72%', lg: '78%'},
                                left: {xs: 12, lg: 30},
                                borderRadius: '50%',
                                height: '75px',
                                width: '75px',
                                p: 2.5,
                                display: "block",
                                transition: '0.5s',
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
                                top: {xs: '72%', lg: '78%'},
                                left: {xs: 75, lg: 110},
                                height: '75px',
                                width: '75px',
                                borderRadius: '50%',
                                p: 2.5,
                                display: "block",
                                transition: '0.5s',
                            }}
                            onClick={handleNext1}
                        >
                            <EastIcon/>
                        </Button>
                    </Swiper>
                </Grid>
            </Grid>
            {/*</Container>*/}
        </Box>
    );
}

export default Ourmission;