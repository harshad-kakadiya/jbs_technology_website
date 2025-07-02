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

const slides = [
    {
        image: bg1,
        date: "16 Apr 24",
        smallimg: img,
        admin: "By admin",
        marketing: "Marketing",
        comments: "Comments",
        title: "5 Impactful Elements That Promote IT and Business",
        description:
            "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo eros," +
            " sollicitudin vel lacinia non,…",
        button: "Continue Reading",
    },
    {
        image: bg2,
        date: "16 Apr 24",
        smallimg: img,
        admin: "By admin",
        marketing: "Marketing",
        comments: "Comments",
        title: "Revolutionizing the Future of Financial Services",
        description:
            "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo eros," +
            " sollicitudin vel lacinia non,…",
        button: "Continue Reading",
    },
    {
        image: bg3,
        date: "16 Apr 24",
        smallimg: img,
        admin: "By admin",
        marketing: "Marketing",
        comments: "Comments",
        title: "A Guide to Embracing Meaningful Change in Banking",
        description:
            "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula. Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo eros," +
            " sollicitudin vel lacinia non,…",
        button: "Continue Reading",
    },
];

function Blogslider() {
    return (
        <Box sx={{ width: "100%", height: "100%", position: "relative", padding: "0 0 110px 0" }}>
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
                                sx={{
                                    width: "100%",
                                    height: "556px",
                                    position: "relative",
                                    background: `linear-gradient(0deg, rgba(0, 0, 0, 1), transparent), 
                                    url(${item.image.src}) no-repeat center`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
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
                                        <Grid container >

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
                                                        width={30}
                                                        height={30}
                                                        style={{
                                                            borderRadius: "50%",
                                                            marginRight: "10px",
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
                                    <Button
                                        endIcon={<TrendingFlatIcon />}
                                        sx={{
                                            mt: 2,
                                            color: "#fff",
                                            fontSize: "15px",
                                            paddingLeft: 0,
                                            fontWeight: "500"
                                        }}
                                    >
                                        {item.button}
                                    </Button>
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