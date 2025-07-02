'use client';
import React from "react";
import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import circleimg from "../../assets/images/about/modification/Ellipse-797.png"
import Image from "next/image";
import {Span} from "next/dist/server/lib/trace/tracer";
const Modification = () => {
    return (
        <Box>
            <Grid container item xs={12} spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{backgroundColor: "#F4F4F4",}}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "80px 20px",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                position: "relative",
                                mb: { xs: 4, lg: 0 },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.10em",
                                    fontSize: "12px",
                                    color: "#888",
                                    textAlign: "start",
                                    position: "absolute",
                                    top: "0px",
                                    left: "0",
                                    display: "flex",
                                    gap: 1,
                                    pt: 2,
                                }}
                            >
                                W E L C O M E <span>T O</span> B E Y O N D <span>T E C H</span> S O L U T I O N
                            </Typography>
                            <Image
                                src={circleimg}
                                alt=""
                                style={{
                                    width: "400px",
                                    height: "400px",
                                    position: "absolute",
                                    top: "-250px",
                                    left: "60%",
                                }}
                            />
                            <Image
                                src={circleimg}
                                alt=""
                                style={{
                                    width: "400px",
                                    height: "400px",
                                    position: "absolute",
                                    top: "-180px",
                                    left: "70%",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: { xs: "center", lg: "end" },
                                justifyContent: { xs: "center", lg: "end" },
                                height: { xs: "auto", lg: "80%" },
                                textAlign: { xs: "start", lg: "left" },
                                mt: 20,
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 500,
                                        color: "#000",
                                        mb: 4,
                                        fontSize: { xs: "24px", md: "36px", lg: "45px" },
                                    }}
                                >
                                    Our Focus is on Delivering Superior Value to our Clients for
                                    Company Modification.
                                </Typography>
                                <Box
                                    sx={{
                                        display: { xs: "block", sm: "flex", md: "flex" },
                                        gap: 2,
                                        justifyContent: { xs: "center", lg: "start" },
                                        pt: 2,
                                        pb: 10,
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#000",
                                            color: "#fff",
                                            borderRadius: "50px",
                                            textTransform: "none",
                                            px: 4,
                                            py: 1.5,
                                            m: { xs: "5px", md: "0px" },
                                        }}
                                    >
                                        Let’s Develop Together
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderColor: "#000",
                                            color: "#000",
                                            borderRadius: "50px",
                                            textTransform: "none",
                                            px: 4,
                                            py: 1.5,
                                            m: { xs: "5px", md: "0px" },
                                            ":hover":{backgroundColor:"#000",color:"#fff"}
                                        }}
                                    >
                                        View All Services
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Box>
                        <Box sx={{ padding: "80px 20px" }}>
                            <Box sx={{ borderBottom: "1px solid #D3D5D6" }}>
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        lineHeight: "25px",
                                        py: 2,
                                        width:"90%"
                                    }}
                                >
                                    At Beyond tech solution, we are a renowned global consulting firm
                                    committed to collaborating with business and societal leaders
                                    in overcoming their most critical challenges and seizing their
                                    greatest opportunities. Our achievements are rooted in
                                    fostering deep collaboration and cultivating a global
                                    community of diverse individuals who are dedicated.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        lineHeight: "25px",
                                        py: 2,
                                        width:"90%"
                                    }}
                                >
                                    We have highly skilled engineers with excellent technical
                                    knowledge and experience in using the latest software
                                    standards. We have built a large pool of knowledge that we
                                    apply to deliver solutions that meet client’s needs,
                                    expectations and budget.
                                </Typography>
                            </Box>
                            <Box mt={5}>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    className="mySwiper"
                                    navigation={{
                                        prevEl: ".custom-prev",
                                        nextEl: ".custom-next",
                                    }}
                                    modules={[Navigation]}
                                    loop={true}
                                >
                                    <SwiperSlide>
                                        <Typography
                                            variant="h2"
                                            sx={{ fontSize: "25px", fontWeight: "500", mb: "22px" }}
                                        >
                                            Our Mission
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontSize: "17px",
                                                lineHeight: "28px",
                                                color: "#0A1119",
                                                width: "90%",
                                            }}
                                        >
                                            We embarked on our journey with a distinct approach.
                                            Instead of adhering to a demanding, all-or-nothing career
                                            path, we prioritized balance and well-being. Integer
                                            dapibus eros massa, ut accumsan lacus vulputate nec. In ac
                                            imperdiet metus.
                                        </Typography>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Typography
                                            variant="h2"
                                            sx={{ fontSize: "25px", fontWeight: "500", mb: "22px" }}
                                        >
                                            Our Vision
                                        </Typography>
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontSize: "17px",
                                                lineHeight: "28px",
                                                color: "#0A1119",
                                                width: "90%",
                                            }}
                                        >
                                            We embarked on our journey with a distinct approach.
                                            Instead of adhering to a demanding, all-or-nothing career
                                            path, we prioritized balance and well-being. Integer
                                            dapibus eros massa, ut accumsan lacus vulputate nec. In ac
                                            imperdiet metus.
                                        </Typography>
                                    </SwiperSlide>
                                </Swiper>
                                <Box sx={{ display: "flex", justifyContent: "start", mt: 4 }}>
                                    <IconButton className="custom-prev" sx={{ mx: 2 }}>
                                        <ArrowBack />
                                    </IconButton>
                                    <IconButton className="custom-next" sx={{ mx: 2 }}>
                                        <ArrowForward />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Modification;