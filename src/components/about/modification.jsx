'use client';
import React from "react";
import {Box, Typography, Button, Grid, IconButton, Container} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper/modules";
import circleimg from "../../assets/images/about/modification/Ellipse-797.png"
import Image from "next/image";
import {Span} from "next/dist/server/lib/trace/tracer";
import {useRouter} from "next/navigation";

const Modification = () => {
    const router = useRouter();

    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Grid container item xs={12} spacing={2} alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{backgroundColor: "#F4F4F4",}}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                padding: "50px 20px",
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    mb: {xs: 4, lg: 0},
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 400,
                                        textTransform: "uppercase",
                                        letterSpacing: "2.5px",
                                        fontSize: "12px",
                                        color: "#888",
                                        textAlign: "start",
                                        position: "absolute",
                                        top: "0px",
                                        left: "0",
                                        display: "flex",
                                        gap: 1,
                                        // pt: 2,
                                    }}
                                >
                                    WELCOME TO JBS TECHNOLOGY
                                </Typography>
                                {/*<Image*/}
                                {/*    src={circleimg}*/}
                                {/*    alt=""*/}
                                {/*    style={{*/}
                                {/*        width: "400px",*/}
                                {/*        height: "400px",*/}
                                {/*        position: "absolute",*/}
                                {/*        top: "-250px",*/}
                                {/*        left: "60%",*/}
                                {/*    }}*/}
                                {/*/>*/}
                                {/*<Image*/}
                                {/*    src={circleimg}*/}
                                {/*    alt=""*/}
                                {/*    style={{*/}
                                {/*        width: "400px",*/}
                                {/*        height: "400px",*/}
                                {/*        position: "absolute",*/}
                                {/*        top: "-180px",*/}
                                {/*        left: "70%",*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: {xs: "center", lg: "end"},
                                    justifyContent: {xs: "center", lg: "end"},
                                    height: {xs: "auto", lg: "80%"},
                                    textAlign: {xs: "start", lg: "left"},
                                    mt: 5,
                                }}
                            >
                                <Box>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontWeight: 500,
                                            color: "#000",
                                            mb: 4,
                                            fontSize: { xs: "30px", md: "35px", lg: "45px" },                                    }}
                                    >
                                        Our Focus is on Delivering Superior Value to our Clients for
                                        Company Modification
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: {xs: "block", sm: "flex", md: "flex"},
                                            gap: 2,
                                            justifyContent: {xs: "center", lg: "start"},
                                            pt: 2,
                                            // pb: 4,
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{
                                                backgroundColor: "#1A1F26",
                                                color: "#fff",
                                                borderRadius: "50px",
                                                textTransform: "none",
                                                px: 4,
                                                py: 1.5,
                                                m: {xs: "5px", md: "0px"},
                                            }}
                                            onClick={() => router.push("/contact")}
                                        >
                                            Let’s Develop Together
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: "#1A1F26",
                                                color: "#000",
                                                borderRadius: "50px",
                                                textTransform: "none",
                                                px: 4,
                                                py: 1.5,
                                                m: {xs: "5px", md: "0px"},
                                                ":hover": {backgroundColor: "#1A1F26", color: "#fff"}
                                            }}
                                            onClick={() => router.push("/services")}
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
                            <Box sx={{padding: { xs:"20px 20px",lg:"65px 20px"}}}>
                                <Box >
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            color: "#4B535D",
                                            lineHeight: "25px",
                                            py: 2,
                                            width: "90%"
                                        }}
                                    >
                                        At Jbs Technology, we are a renowned global consulting firm
                                        committed to collaborating with business and societal leaders
                                        in overcoming their most critical challenges and seizing their
                                        greatest opportunities. Our achievements are rooted in
                                        fostering deep collaboration and cultivating a global
                                        community of diverse individuals who are dedicated
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            color: "#4B535D",
                                            lineHeight: "25px",
                                            py: 2,
                                            pb:{xs:3,lg:0},
                                            width: "90%"
                                        }}
                                    >
                                        We have highly skilled engineers with excellent technical
                                        knowledge and experience in using the latest software
                                        standards. We have built a large pool of knowledge that we
                                        apply to deliver solutions that meet client’s needs,
                                        expectations and budget
                                    </Typography>
                                </Box>
                                {/*<Box mt={5}>*/}
                                {/*    <Swiper*/}
                                {/*        slidesPerView={1}*/}
                                {/*        spaceBetween={30}*/}
                                {/*        className="mySwiper"*/}
                                {/*        navigation={{*/}
                                {/*            prevEl: ".custom-prev",*/}
                                {/*            nextEl: ".custom-next",*/}
                                {/*        }}*/}
                                {/*        modules={[Navigation]}*/}
                                {/*        loop={true}*/}
                                {/*    >*/}
                                {/*        <SwiperSlide>*/}
                                {/*            <Typography*/}
                                {/*                variant="h2"*/}
                                {/*                sx={{fontSize: "25px", fontWeight: "500", mb: "22px"}}*/}
                                {/*            >*/}
                                {/*                Our Mission*/}
                                {/*            </Typography>*/}
                                {/*            <Typography*/}
                                {/*                variant="h2"*/}
                                {/*                sx={{*/}
                                {/*                    fontSize: "17px",*/}
                                {/*                    lineHeight: "28px",*/}
                                {/*                    color: "#0A1119",*/}
                                {/*                    width: "90%",*/}
                                {/*                }}*/}
                                {/*            >*/}
                                {/*                At JBS Technology, our mission is to deliver innovative digital solutions*/}
                                {/*                and education services that empower businesses to grow, adapt, and succeed*/}
                                {/*                in a fast-changing world.*/}
                                {/*            </Typography>*/}
                                {/*        </SwiperSlide>*/}
                                {/*        <SwiperSlide>*/}
                                {/*            <Typography*/}
                                {/*                variant="h2"*/}
                                {/*                sx={{fontSize: "25px", fontWeight: "500", mb: "22px"}}*/}
                                {/*            >*/}
                                {/*                Our Vision*/}
                                {/*            </Typography>*/}
                                {/*            <Typography*/}
                                {/*                variant="h2"*/}
                                {/*                sx={{*/}
                                {/*                    fontSize: "17px",*/}
                                {/*                    lineHeight: "28px",*/}
                                {/*                    color: "#0A1119",*/}
                                {/*                    width: "90%",*/}
                                {/*                }}*/}
                                {/*            >*/}
                                {/*                To be a trusted global leader in technology and education solutions, driving*/}
                                {/*                innovation and shaping a smarter, more connected future for businesses and*/}
                                {/*                communities.*/}
                                {/*            </Typography>*/}
                                {/*        </SwiperSlide>*/}
                                {/*    </Swiper>*/}
                                {/*    <Box sx={{display: "flex", justifyContent: "start", mt: 4}}>*/}
                                {/*        <IconButton className="custom-prev" sx={{mx: 2}}>*/}
                                {/*            <ArrowBack/>*/}
                                {/*        </IconButton>*/}
                                {/*        <IconButton className="custom-next" sx={{mx: 2}}>*/}
                                {/*            <ArrowForward/>*/}
                                {/*        </IconButton>*/}
                                {/*    </Box>*/}
                                {/*</Box>*/}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default Modification;