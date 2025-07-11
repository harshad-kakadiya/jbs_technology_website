'use client'

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
import {useRouter} from "next/navigation";

function Capabilities() {
    const router = useRouter();


    const capability = [
        {
            navigation : "/hire-webdeveloper-india",
            title: "Web Development",
            describtion: "From sleek brochure sites to robust web applications, we craft digital experiences that captivate, convert, and elevate your business",
            img: Img2,
        },
        {
            navigation : "/hire-mobileappdeveloper-india",
            title: "Mobile App Development",
            describtion: "Turn your app idea into reality with our expertise. From concept to launch, we develop bespoke applications that deliver measurable outcomes",
            img: Img5,
        },
        {
            navigation : "/hire-ui-uxdesigner-india",
            title: "UI/UX Designing",
            describtion: "UI (User Interface) and UX (User Experience) design are fundamental components critical to the success of any digital product",
            img: Img6,
        },
        {
            navigation : "/hire-digitalmarketing-india",
            title: "Digital Marketing",
            describtion: "At JBS Technology, we boost your online presence with tailored digital marketing strategies for optimal engagement and conversions",
            img: Img7,
        },
        {
            navigation : "/hire-artificial-india",
            title: "Artificial Intelligence",
            describtion: "Amplify your business with JBS Technology by integrating AI into every layer of your operations for smarter, faster, and scalable growth., democratizing AI responsibly",
            img: Img1,
        },
        {
            navigation : "/hire-agenticai-india",
            title: "Agentic AI",
            describtion: "Empower your organization with a powerfully designed infrastructure stack and support technologies",
            img: Img3,
        },
        {
            navigation : "/hire-frontend-developer-india",
            title: "Frontend",
            describtion: "At JBS Technology, we create Pixel-perfect, responsive, and high-performance UI built with modern tech like React and Tailwind CSS",
            img: Img4,
        },
        {
            navigation : "/hire-backend-developer-india",
            title: "Backend",
            describtion: "Secure, scalable, and high-performance server-side solutions using Node.js, Express, and modern databases",
            img: Img8,
        }
    ];

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: {xs: "20px", lg: "50px"}}}>
                <Grid container>
                    <Grid item lg={3}>
                        <Box
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: {xs: "30px", md: "35px", lg: "45px"},
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
                            solutions, scalable web applications, and future-ready digital products. As your trusted
                            technology partner, we help drive business growth through innovation and speed
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {capability.map((item, index) => (
                        <Grid item key={index} xs={12} md={4} lg={3}>
                            <Box
                                onClick={() => router.push(item.navigation)}
                                sx={{
                                    height: {md: "400px", xs: "362px"},
                                    width: "100%",
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer",
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
