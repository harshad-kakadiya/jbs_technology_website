'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Container, Divider, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import bg1 from "../../assets/images/blog/blogslider/bs-2.webp";
import bg2 from "../../assets/images/blog/blogslider/bs-3.webp";
import bg3 from "../../assets/images/blog/blogslider/bs-4.webp";
import DateRangeIcon from '@mui/icons-material/DateRange';
import SellIcon from '@mui/icons-material/Sell';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import img from '../../assets/images/blog/blogslider/bs-5.jpg';
import Image from "next/image";
import {useRouter} from "next/navigation";
import img2 from "../../assets/images/blog/posts/Img2.jpg";
import img3 from "../../assets/images/blog/posts/img3.jpg";
import EastIcon from "@mui/icons-material/East";
const slides = [
    {
        navigate:"/blog/ai-innovation-india",
        image: bg1,
        date: "12 July 2024",
        smallimg: img,
        admin: "By admin",
        marketing: "AI & Innovation",
        comments: "Comments",
        title: "How AI Is Powering the Next Wave of IT Solutions",
        description:
            "Discover how artificial intelligence is transforming IT infrastructure, automation, and user experiences.\n" +
            "Leverage AI to streamline operations, enhance decision-making, and unlock new levels of innovation.",
    },
    {
        navigate:"/blog/agentic-ai-india",
        image: bg2,
        date: "10 July 2024",
        smallimg: img2,
        admin: "By admin",
        marketing: "Cloud Computing",
        comments: "Comments",
        title: "The Rise of Agentic AI in Intelligent Automation",
        description:
            "Explore how autonomous AI agents are driving adaptive decision-making and continuous learning. Empower businesses with scalable, self-directed systems for smarter operations.\n" +
            "Redefine enterprise efficiency with agentic AI that learns, evolves, and makes decisions autonomously.",
    },
    {
        navigate:"/blog/cybersecurity-trends-india",
        image: bg3,
        date: "08 July 2024",
        smallimg: img3,
        admin: "By admin",
        marketing: "Cybersecurity",
        comments: "Comments",
        title: "Modern Web Development Trends for Scalable Solutions",
        description:
            "Discover the latest frameworks, best practices, and performance strategies shaping today’s web applications. Build responsive, secure, and future-proof websites.\n" +
            "Stay ahead in the digital race with scalable architectures and cutting-edge development tools.",
    },
];
function    Blogslider() {
    const router = useRouter();
    return (
        <Box sx={{ width: "100%", height: "100%", position: "relative", padding: "90px 0 90px 0" }}>
            <Container maxWidth={'xl'}>
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop
                    effect="fade"
                    className="mySwiper"
                    style={{ width: "100%", height: "100%" }}
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                onClick={() => router.push(item.navigate)}
                                sx={{
                                    width: "100%",
                                    height: "556px",
                                    cursor: "pointer",
                                    position: "relative",
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 1), transparent), 
                                    url(${item.image.src}) no-repeat center`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    '&:hover .icon': {
                                        marginLeft: "20px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        color: "white",
                                        padding: "0 15px 37px",
                                        margin: { lg: "0 95px", xs: "0 2px" },
                                    }}
                                >
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ pb: "10px" }}>
                                        <Grid container alignItems={'center'}>
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <DateRangeIcon sx={{ mr: 1 }} />
                                                    <Typography variant="body2">{item.date}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={2}>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Image
                                                        src={item.smallimg}
                                                        alt="Admin"
                                                        width={40}
                                                        height={40}
                                                        style={{
                                                            borderRadius: "50%",
                                                            marginRight: "10px",
                                                            objectFit:"cover"
                                                        }}
                                                    />
                                                    <Typography variant="body2">{item.admin}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} sm={6}>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "50%",
                                                            padding: "4px",
                                                            marginRight: "8px",
                                                        }}
                                                    >
                                                        <SellIcon sx={{ fontSize: "16px" }} />
                                                    </Box>
                                                    <Typography variant="body2">{item.marketing}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} md={2} sm={6}>
                                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "50%",
                                                            padding: "4px",
                                                            marginRight: "8px",
                                                        }}
                                                    >
                                                        <ChatBubbleIcon sx={{ fontSize: "16px" }} />
                                                    </Box>
                                                    <Typography variant="body2">{item.comments}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{ backgroundColor: "gray" , width:"100%"}} />
                                    <Typography variant="h5" sx={{
                                        p: "25px 0 15px",
                                        fontWeight: "500",
                                        fontSize: { sm: "26px", xs: "23px" }
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        mt: 1,
                                        textWrap: "wrap",
                                        fontSize: { sm: "15px", xs: "13px" },
                                        color:"#c4c4c4"
                                    }}>
                                        {item.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            marginTop: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            fontWeight: 500,
                                            cursor: "pointer",

                                        }}
                                    >
                                        Continue Reading <EastIcon className={'icon'}
                                                                   sx={{transition: ".3s", marginLeft: "10px"}}/>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
}
export default Blogslider;