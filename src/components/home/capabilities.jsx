import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img1 from "../../assets/images/home/Capabilities/Img1.jpg";
import Img2 from "../../assets/images/home/Capabilities/b1c38c995a9bc2cef954124ac5e6c1df_720.jpg";
import Img3 from "../../assets/images/home/Capabilities/portrait-person-ai-robot.jpg";
import Img4 from "../../assets/images/home/Capabilities/image_360.png";
import Img5 from "../../assets/images/home/Capabilities/mobileAppDevelopment.png";
import Img6 from "../../assets/images/home/Capabilities/UI-UX.08fda19222eb922b6da9.png";
import Img7 from "../../assets/images/home/Capabilities/image_720.png";
import Img8
    from "../../assets/images/home/Capabilities/top-view-unrecognizable-hacker-performing-cyberattack-night_720.jpg";

function Capabilities() {
    const capability = [
        {
            title: "Artificial Intelligence",
            describtion: "JBS Technology integrates AI powered custom software solutions to drive business growth with future-ready digital products",
            img: Img1,
        },
        {
            title: "Web Development",
            describtion: "As a leading software company in Surat, we build web applications and scalable digital experiences for business success",
            img: Img2,
        },
        {
            title: "Cloud and Infrastructure Services",
            describtion: "We offer cloud solutions and infrastructure support by expert software engineers trusted across Surat and beyond",
            img: Img3,
        },
        {
            title: "Game Development",
            describtion: "JBS Technology delivers immersive, high quality games powered by future-ready tech and expert developers",
            img: Img4,
        },
        {
            title: "Mobile App Development",
            describtion: "We create scalable mobile apps tailored to your goals with custom software solutions built in Surat, Gujarat",
            img: Img5,
        },
        {
            title: "UI/UX Designing",
            describtion: "Our UI/UX design services enhance digital products with user focused, scalable experiences built by experts",
            img: Img6,
        },
        {
            title: "Digital Marketing",
            describtion: "Boost your brand with digital marketing strategies that drive ROI powered by technology and tailored solutions",
            img: Img7,
        },
        {
            title: "Android Development",
            describtion: "Build powerful Android apps with hands on guidance from expert software engineers at JBS Technology, Surat",
            img: Img8,
        }

    ];

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: {xs: "20px", lg: "50px"}}}>
                <Grid container >
                    <Grid item lg={3}>
                        <Box
                            sx={{
                                fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                lineHeight: "55px",
                                fontWeight: "600",
                                paddingBottom: {md: "0px", lg: "80px"}
                            }}
                        >
                            Capabilities
                        </Box>
                    </Grid>
                    <Grid item lg={9}>
                        <Box
                            component={'p'}
                            sx={{
                                color: 'cardTextGrey',
                                fontWeight: 500,
                                paddingBottom: {xs: "30px", lg: "80px"},
                                width: {lg: "80%", md: "100%"},
                                marginLeft: {lg: 15, xs: "0"}
                            }}
                        >
                            At JBS Technology, a top software development company in Surat, we deliver custom software
                            solutions, scalable web applications, and future ready digital products As your trusted
                            technology partner, we help drive business growth through innovation and speed
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {capability.map((item, index) => (
                        <Grid item key={index} xs={12} md={3}>
                            <Box
                                sx={{
                                    height: {md: "400px", xs: "362px"},
                                    width: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&:hover .bg-img": {
                                        filter: "grayscale(0.5) blur(2px)", // On hover: grayscale 0.5 and blur 2px
                                        transition: "filter 0.3s ease",
                                    },
                                    "&:hover > div > div": {
                                        opacity: '1 !important'
                                    },
                                }}
                            >
                                <Box
                                    className="bg-img"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundImage: `url(${item.img.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        filter: {md: "grayscale(1)", xs: '"grayscale(.5)"'}, // Default grayscale 1
                                        transition: "filter 0.3s ease", // Smooth transition for hover effect
                                        zIndex: 1,
                                    }}
                                />

                                <Box
                                    sx={{
                                        position: "relative",
                                        zIndex: 2,
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        p: 4,
                                        color: "#fff",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: "1.25rem",
                                            fontWeight: "600",
                                            lineHeight: "27px",
                                        }}
                                    >
                                        {item.title}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: "0.95rem",
                                            lineHeight: "22px",
                                            marginTop: "10px",
                                            opacity: {md: "0", xs: "1"},
                                        }}
                                    >
                                        {item.describtion}
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Capabilities;
