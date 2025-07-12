'use client';
import {Box, Grid, Typography, Container, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from "swiper/modules";


const valuePropositions = [
    {
        title: "Cost Effectiveness",
        description: "Cut costs. Boost profits. With our custom software solutions and tech-driven business consulting",
        icon: <AccountBalanceWalletIcon fontSize="large" />,
    },
    {
        title: "Innovative Technology",
        description: "Build future-ready digital products. With expert software engineers and modern web applications",
        icon: <CloudOutlinedIcon fontSize="large" />,
    },
    {
        title: "Industry Expertise",
        description: "Get trusted software solutions. Tailored by expert engineers with deep industry knowledge",
        icon: <FolderOutlinedIcon fontSize="large" />,
    },
    {
        title: "Scale Expansion",
        description: "Grow faster. With scalable digital experiences from a top software development company",
        icon: <OpenInFullOutlinedIcon fontSize="large" />,
    }
];

// ✅ Correct for JavaScript/JSX
const ValueCard = ({ item }) => (

    <Box
        sx={{
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
            height: {xs: '190px', md: '210px'},
            borderRadius: "8px",
            transition: "transform 0.5s ease",
            "&:hover .contain": {
                transform: "translateY(-60px)",
            },
            "&:hover .icon": {
                transform: "scale(0)",
            },
        }}
    >
        <Box className={'contain'} sx={{transform: "translateY(40px)", transition: "transform 0.5s ease"}}>
            <Box
                className="icon"
                sx={{
                    marginBottom: 2,
                    color: "darkGray",
                    ' svg': {fontSize: {xs: 65, lg: 75}},
                    transition: "transform 0.4s ease",
                }}
            >
                {item.icon}
            </Box>
            <Typography
                className="title"
                fontWeight="bold"
                sx={{
                    marginBottom: 1,
                    mt: 2,
                    fontSize: {xs: 18, sm: 23},
                    fontWeight: 500,
                    transition: "transform 0.4s ease",
                }}
            >
                {item.title}
            </Typography>
            <Box
                className="line"
                sx={{
                    width: "65px",
                    height: "1px",
                    backgroundColor: "#000",
                    margin: "0 auto 6px",
                    my: 2,
                    transition: "transform 0.4s ease",
                }}
            />
            <Typography
                className="description"
                variant="body2"
                sx={{
                    color: "text.secondary",
                    lineHeight: 1.5,
                    opacity: 1,
                    padding: '0px 10px',
                    transition: "all 0.4s ease",
                }}
            >
                {item.description}
            </Typography>
        </Box>
    </Box>
);

const ValuePropositions = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container maxWidth="xl" sx={{paddingY: 3}}>
            {isSmallScreen ? (
                <Swiper modules={[Autoplay]} spaceBetween={10} loop={true} autoplay={true} autoplay={{
                    delay: 3000, // 2 seconds between slides
                    disableOnInteraction: false,
                }} breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    }
                }}>
                    {valuePropositions.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{px: 1}}>
                                <ValueCard item={item}/>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <Grid container spacing={0} justifyContent="center">
                    {valuePropositions.map((item, index) => (
                        <Grid
                            item
                            xs={6}
                            md={3}
                            key={index}
                            sx={{
                                position: "relative",
                                px: {xs: 2, sm: 4},
                                "&:not(:last-child)::after": {
                                    content: '""',
                                    position: "absolute",
                                    top: "25%",
                                    bottom: "25%",
                                    right: "-1px",
                                    width: "1px",
                                    backgroundColor: "#d3d3d3",
                                },
                            }}
                        >
                            <ValueCard item={item}/>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default ValuePropositions;
