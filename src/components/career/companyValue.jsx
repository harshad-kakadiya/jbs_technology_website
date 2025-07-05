'use client';
import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"; // Add Swiper core styles
import CheckIcon from '@mui/icons-material/Check';


// Sample logoData if not already defined/imported
// Replace this with your actual logoData import
const data = [

    {
        check: <CheckIcon/>,
        title: "Celebrate Creativity",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Honest & Integrity",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Social Responsibility",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Teamwork & Collaboration",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Celebrate Creativity",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Honest & Integrity",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Social Responsibility",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
    {
        check: <CheckIcon/>,
        title: "Teamwork & Collaboration",
        description: "Vestibulum laoreet lorem sed est tempus sollicitudin. Proin porttitor mattis diam sit amet imperdiet.",
    },
];


function CompanyValue() {
    return (
        <Box sx={{mt: {xs: "16px", md: "16px", lg: "50px"}}}>
            <Container maxWidth="lg">
                <Typography sx={{
                    fontWeight: 400,
                    mb: 2,
                    color: '#0A1119',
                    fontSize: "13px",
                    textAlign: "center",
                    letterSpacing: "4.8px",
                    textTransform: "uppercase",
                }}>
                    COMPANY VALUES
                </Typography>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Typography maxWidth={900} sx={{
                        fontWeight: 600,
                        mb: {xs: 2, md: 3},
                        color: '#0A1119',
                        fontSize: {xs: 30, sm: 45},
                        textAlign: "center",
                        lineHeight: 1.4,
                    }}>
                        We Firmly Believe in the Power of Collaboration to Achieve Greatness
                    </Typography>
                </Box>

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Typography maxWidth={1000} sx={{
                        mb: 2,
                        color: '#4B535D',
                        fontSize: 15,
                        textAlign: "center"
                    }}>
                        At Herrinton, continuous improvement is ingrained in our DNA. Each day, we dedicate
                        ourselves to honing our skills and excelling in every aspect of our work.
                    </Typography>
                </Box>

                <Box sx={{
                    width: {xs: "70%", sm: "35%", md: '30%'},
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    my: 3,
                }}>
                    <Box sx={{flex: 1, height: '2px', backgroundColor: '#E0E0E0'}}/>
                    <Box sx={{
                        width: '100px',
                        height: '4px',
                        backgroundColor: '#000000',
                        borderRadius: '2px',
                    }}/>
                    <Box sx={{flex: 1, height: '2px', backgroundColor: '#E0E0E0'}}/>
                </Box>

                <Box sx={{my: 3}}>
                    <Swiper

                        spaceBetween={0}
                        slidesPerView={4}
                        loop={true}
                        speed={300}
                        simulateTouch={true}
                        grabCursor={true}
                        allowTouchMove={true}
                        breakpoints={{
                            992: {slidesPerView: 4},
                            768: {slidesPerView: 2},
                            425: {slidesPerView: 2},
                            320: {slidesPerView: 1},
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        py: 2,
                                        width: "100%",
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",


                                    }}
                                >
                                    <Box sx={{
                                        color: '#1EDE8F',
                                    }}>
                                        {item.check}
                                    </Box>
                                    <Box component="h3" sx={{fontSize: "1.2rem", fontWeight: 600, mb: 3}}>
                                        {item.title}
                                    </Box>


                                    <Box sx={{
                                        display: 'flex',
                                        position: 'relative',
                                        alignItems: 'center',
                                        width: '100%'
                                    }}>
                                        <Box sx={{flex: 1, height: '2px', backgroundColor: '#E0E0E0'}}/>

                                        <Box
                                            sx={{
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                border: '2px solid #000000',
                                                backgroundColor: '#000000',
                                                position: 'absolute',
                                                top: 0,
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                transition: '0.3s',


                                            }}
                                        />

                                        <Box sx={{flex: 1, height: '2px', backgroundColor: '#E0E0E0'}}/>
                                    </Box>


                                    <Box component="p" sx={{fontSize: "0.9rem", color: "#666", mt: 3}}>
                                        {item.description}
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                </Box>
            </Container>
        </Box>
    );
}

export default CompanyValue;
