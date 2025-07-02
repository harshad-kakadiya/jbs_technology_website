import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img1 from "../../assets/images/home/Capabilities/Img1.jpg";
import Img2 from "../../assets/images/home/Capabilities/Img2.jpg";
import Img3 from "../../assets/images/home/Capabilities/Img3.jpg";
import Img4 from "../../assets/images/home/Capabilities/Img4.jpg";
import Img5 from "../../assets/images/home/Capabilities/Img5.jpg";
import Img6 from "../../assets/images/home/Capabilities/Img6.png";
import Img7 from "../../assets/images/home/Capabilities/Img7.jpg";
import Img8 from "../../assets/images/home/Capabilities/Img8.jpg";

function Capabilities() {
    const capability = [
        {
            title: "Artificial Intelligence",
            describtion: "Amplify your business with TechM by infusing AI in every aspect of your business, democratizing AI responsibly",
            img: Img1,
        },
        {
            title: "Business Process Services",
            describtion: "Unveil new ways to disrupt your industry",
            img: Img2,
        },
        {
            title: "Cloud and Infrastructure Services",
            describtion: "Empower your organization with a powerfully designed infrastructure stack and support technologies",
            img: Img3,
        },
        {
            title: "Digital Enterprise Applications",
            describtion: "Experience unparalleled innovation, efficiency, and adaptability",
            img: Img4,
        },
        {
            title: "Engineering Services",
            describtion: "Enable seamless cyber-physical integration for enhanced visibility and predictability",
            img: Img5,
        },
        {
            title: "Experience Services",
            describtion: "Practice the art of giving your customers truly memorable experiences",
            img: Img6,
        },
        {
            title: "Network Services",
            describtion: "Leverage new opportunities to enhance network operations",
            img: Img7,
        },
        {
            title: "Testing Services",
            describtion: "Accelerate the development of end-to-end automated operations for your business",
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
