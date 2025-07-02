'use client';
import {
    Avatar,
    Box,
    Container,
    Grid,
    IconButton,
    Rating,
    Stack,
    Typography,
    styled,
} from "@mui/material";
import React from "react";
import LinearProgress, {
    linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Navigation } from "swiper/modules";
import ab4 from "../../assets/images/about/customers/ab4.webp";
import aw9 from "../../assets/images/about/customers/aw9.webp";
import aw10 from "../../assets/images/about/customers/aw10.webp";
import aw11 from "../../assets/images/about/customers/aw11.webp";
import aw12 from "../../assets/images/about/customers/aw12.webp";

const review = [
    {
        logo: aw9,
    },
    {
        logo: aw10,
    },
    {
        logo: aw11,
    },
    {
        logo: aw12,
    },
];
const Customers = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 3,
        borderRadius: 0,
        width: "50%",
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles("dark", {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 0,
            backgroundColor: "#0A1119",
            ...theme.applyStyles("dark", {
                backgroundColor: "#0A1119",
            }),
        },
    }));
    return (
        <Box sx={{ pt: 5, padding:"120px 0" }}>
            <Container maxWidth="xl">
                <Box sx={{ px: { xs: 2, sm: 5, md: 8 } }}>
                    <Grid
                        container
                        spacing={5}
                        sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Grid item xs={12} sm={12} md={6} lg={5}>
                            <Box>
                                <img
                                    src={ab4.src}
                                    alt="Testimonial"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={7}>
                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: "12px",
                                        pb: 2,
                                        color: "#121C27",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    T E S T I M O N I A L S
                                </Typography>
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontSize: {
                                            xs: "28px",
                                            sm: "32px",
                                            md: "34px",
                                            lg: "45px",
                                        },
                                        pb: 2,
                                        fontWeight: "500",
                                        color: "#0A1119",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    What Our Customers Say?
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { xs: "14px", sm: "16px", md: "16 px" },
                                        pb: 2,
                                        color: "#0A1119",
                                        fontWeight: "500",
                                        textAlign: { xs: "center", md: "left" },
                                    }}
                                >
                                    More than 99% customer satisfaction is our success.
                                </Typography>
                                <BorderLinearProgress
                                    variant="determinate"
                                    value={30}
                                    sx={{ mx: { xs: "auto", md: 0 } }}
                                />
                                <Box paddingTop={5}>
                                    <Swiper
                                        navigation={{
                                            nextEl: ".custom-next",
                                            prevEl: ".custom-prev",
                                        }}
                                        modules={[Navigation]}
                                        className="mySwiper"
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        breakpoints={{
                                            640: { slidesPerView: 1, spaceBetween: 20 },
                                            768: { slidesPerView: 1, spaceBetween: 30 },
                                            1024: { slidesPerView: 1, spaceBetween: 40 },
                                        }}
                                    >
                                        {review.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "20px",
                                                            color: "#4B535D",
                                                            pb: "29px",
                                                            lineHeight: "35px",
                                                            textAlign: { xs: "start", md: "left" },
                                                        }}
                                                    >
                                                        Giles and his team at Beyond tech solution Business Consulting
                                                        have been absolutely great to work with and they
                                                        definitely have gone above and beyond tech solution for us by
                                                        streamlining all of our accounts so that we can
                                                        focus.
                                                    </Typography>
                                                </Box>
                                                <Box
                                                    sx={{
                                                        padding: "30px",
                                                        borderTop: "1px solid #D3D5D6",
                                                        display: "flex",
                                                        justifyContent: "start",
                                                    }}
                                                >
                                                    <Stack alignItems="center" spacing={2}>
                                                        <Box
                                                            sx={{
                                                                display: "flex",
                                                                gap: 2,
                                                                alignItems: "center",
                                                                flexDirection: { xs: "column", sm: "row" },
                                                            }}
                                                        >
                                                            <Avatar
                                                                src={item.logo}
                                                                alt=""
                                                                sx={{
                                                                    width: 76,
                                                                    height: 76,
                                                                }}
                                                            />
                                                            <Box>
                                                                <Box
                                                                    sx={{
                                                                        display: {
                                                                            xs: "block",
                                                                            sm: "flex",
                                                                            md: "block",
                                                                            lg: "flex",
                                                                        },
                                                                        gap: 2,
                                                                        justifyContent: {
                                                                            xs: "center",
                                                                            md: "start",
                                                                        },
                                                                        textAlign: { xs: "center", sm: "start" },
                                                                    }}
                                                                >
                                                                    <Typography
                                                                        component="legend"
                                                                        sx={{
                                                                            color: "#0A1119",
                                                                            fontSize: {
                                                                                lg: "18px",
                                                                                md: "18px",
                                                                                sm: "16px",
                                                                                xs: "14px",
                                                                            },
                                                                            fontFamily: "'Raleway', sans-serif",
                                                                            textAlign: {
                                                                                xs: "center",
                                                                                sm: "start",
                                                                                md: "left",
                                                                            },
                                                                        }}
                                                                    >
                                                                        Heather Smith - Talk
                                                                    </Typography>
                                                                    <Rating
                                                                        name="read-only"
                                                                        value={5}
                                                                        readOnly
                                                                        sx={{
                                                                            color: "#0A1119",
                                                                            textAlign: "center",
                                                                        }}
                                                                    />
                                                                </Box>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: {
                                                                            lg: "16px",
                                                                            md: "16px",
                                                                            sm: "14px",
                                                                            xs: "12px",
                                                                        },
                                                                        fontFamily: "'Raleway', sans-serif",
                                                                        color: "#BFBFBF",
                                                                        textAlign: { xs: "center", md: "left" },
                                                                    }}
                                                                >
                                                                    Director, Radical Orange Pty Ltd.
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </SwiperSlide>
                                        ))}
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: { xs: "center", md: "end" },
                                                gap: 2,
                                            }}
                                        >
                                            <IconButton className="custom-prev">
                                                <ArrowBack />
                                            </IconButton>
                                            <IconButton className="custom-next">
                                                <ArrowForward />
                                            </IconButton>
                                        </Box>
                                    </Swiper>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};
export default Customers;