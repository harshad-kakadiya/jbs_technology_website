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
            describtion: "Amplify your business with JBS Technology, Surat's trusted technology partner, by integrating AI-powered custom software solutions and future-ready digital products to drive business growth through technology.",
            img: Img1,
        },
        {
            title: "Web Development",
            describtion: "JBS Technology, a leading software development company in Surat, Gujarat, builds high-performance web applications and scalable digital experiences to help businesses grow through technology.",
            img: Img2,
        },
        {
            title: "Cloud and Infrastructure Services",
            describtion: "Empower your enterprise with robust cloud infrastructure and scalable digital solutions from JBS Technology — your trusted technology partner offering expert software engineers in Surat, Gujarat.",
            img: Img3,
        },
        {
            title: "Game Development",
            describtion: "JBS Technology specializes in creating high-quality, future-ready digital products and immersive games with expert software engineers, serving clients from Surat, Gujarat and beyond.",
            img: Img4,
        },
        {
            title: "Mobile App Development",
            describtion: "Turn your vision into a future-ready mobile app with JBS Technology, Surat's custom software solutions leader. Our expert software engineers build scalable digital experiences that deliver results.",
            img: Img5,
        },
        {
            title: "UI/UX Designing",
            describtion: "At JBS Technology, we craft intuitive UI/UX designs that elevate your digital products. As a Surat-based software development company, we ensure scalable digital experiences and better user engagement.",
            img: Img6,
        },
        {
            title: "Digital Marketing",
            describtion: "JBS Technology, based in Surat, Gujarat, boosts your brand's online presence using strategic digital marketing and technology-driven solutions tailored for scalable growth and measurable ROI.",
            img: Img7,
        },
        {
            title: "Android Development",
            describtion: "Learn Android development at JBS Technology in Surat with expert software engineers guiding you through practical training to build custom software solutions and web applications.",
            img: Img8,
        }
    ];

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: {xs: "25px", lg: "70px"}}}>
                <Grid container spacing={4}>
                    <Grid item lg={6}>
                        <Box
                            sx={{
                                fontSize: {xs: "24px", sm: "45px"},
                                lineHeight: "55px",
                                fontWeight: "600",
                                paddingBottom: {md: "0px", lg: "80px"}
                            }}
                        >
                            Capabilities
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
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
                            At JBS Technology, a leading software development company in Surat, Gujarat, we offer a wide
                            range of custom software solutions, web applications, and scalable digital experiences. As a
                            trusted technology partner, we help businesses achieve meaningful outcomes, enhance customer
                            engagement, and drive business growth through future-ready digital products—delivered with
                            speed and precision.
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
