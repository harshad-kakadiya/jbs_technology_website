import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img1 from "../../assets/images/home/Capabilities/Img1.jpg";
import Img2 from "../../assets/images/home/Capabilities/web-dev.5f67e27742ec775b6919.png";
import Img3 from "../../assets/images/home/Capabilities/Img3.jpg";
import Img4 from "../../assets/images/home/Capabilities/game.0190d5398dee0a494033.png";
import Img5 from "../../assets/images/home/Capabilities/mobileAppDevelopment.png";
import Img6 from "../../assets/images/home/Capabilities/UI-UX.08fda19222eb922b6da9.png";
import Img7 from "../../assets/images/home/Capabilities/digital.4e1932029eb8550230bf.png";
import Img8 from "../../assets/images/home/Capabilities/adndroid.bfba33262b094f29bff8.jpg";

function Capabilities() {
    const capability = [
        {
            title: "Artificial Intelligence",
            describtion: "Amplify your business with TechM by infusing AI in every aspect of your business, democratizing AI responsibly",
            img: Img1,
        },
        {
            title: "Web Development",
            describtion: "From sleek brochure sites to robust web applications, we craft digital experiences that captivate, convert, and elevate your business.",
            img: Img2,
        },
        {
            title: "Cloud and Infrastructure Services",
            describtion: "Empower your organization with a powerfully designed infrastructure stack and support technologies",
            img: Img3,
        },
        {
            title: "Game Development",
            describtion: "At JBS Technology, we create captivating, high-quality games with a collaborative team of skilled developers, designers, and artists.",
            img: Img4,
        },
        {
            title: "Mobile App Development",
            describtion: "Turn your app idea into reality with our expertise. From concept to launch, we develop bespoke applications that deliver measurable outcomes.",
            img: Img5,
        },
        {
            title: "UI/UX Designing",
            describtion: "UI (User Interface) and UX (User Experience) design are fundamental components critical to the success of any digital product.",
            img: Img6,
        },
        {
            title: "Digital Marketing",
            describtion: "At JBS Technology, we boost your online presence with tailored digital marketing strategies for optimal engagement and conversions.",
            img: Img7,
        },
        {
            title: "Android Development",
            describtion: "JBS Technology's Android Development course offers hands-on training to build dynamic mobile apps, guided by expert trainers in a practical setting.",
            img: Img8,
        }
    ];

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{marginTop: "120px"}}>
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
                                width: {lg:"80%" , md:"100%"},
                                marginLeft: {lg: 15, xs: "0"}
                            }}
                        >
                            We offer a wide range of digital solutions and best-in-class platforms to deliver meaningful
                            outcomes, enhance customer experiences, and transform industries at scale and with
                            unparalleled speed.
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
