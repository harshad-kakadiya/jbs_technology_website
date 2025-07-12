'use client';

import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Img1 from "../../assets/images/blog/posts/Img1.jpg";
import Img2 from "../../assets/images/blog/posts/Img2.webp";
import Img3 from "../../assets/images/blog/posts/Img3.webp";
import Img4 from "../../assets/images/blog/posts/Img4.webp";
import Img5 from "../../assets/images/blog/posts/Img5.webp";
import Img6 from "../../assets/images/blog/posts/Img6.webp";
import Img7 from "../../assets/images/blog/posts/Img7.webp";
import img2 from "../../assets/images/blog/posts/Img2.jpg";
import img3 from "../../assets/images/blog/posts/img3.jpg";
import img4 from "../../assets/images/blog/posts/img4.jpg";
import img5 from "../../assets/images/blog/posts/img6.jpeg";
import img6 from "../../assets/images/blog/posts/img7.jpg";
import img7 from "../../assets/images/blog/posts/csdcfad.jpg";
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';
import {useRouter} from "next/navigation";

function Posts() {
    const router = useRouter();
    const Data = [
        {
            navigate: "/blog/ai-innovation-india",
            date: "12 July 2024",
            img: Img2,
            smallImg: Img1,
            btn: "Artificial Intelligence",
            title: "How AI Is Powering the Next Wave of IT Solutions",
            describtion: "Discover how artificial intelligence is transforming IT infrastructure, automation, and user experiences. Leverage AI to streamline operations, enhance decision-making, and unlock new levels of innovation.",
        },
        {
            navigate: "/blog/agentic-ai-india",
            date: "11 July 2024",
            img: Img3,
            smallImg: img2,
            btn: "Agentic AI",
            title: "The Rise of Agentic AI in Intelligent Automation",
            describtion: "Explore how autonomous AI agents are driving adaptive decision-making and continuous learning. Empower businesses with scalable, self-directed systems for smarter operations.",
        },
        {
            navigate: "/blog/web-development-india",
            date: "10 July 2024",
            img: Img4,
            smallImg: img3,
            btn: "Web Development",
            title: "Modern Web Development Trends for Scalable Solutions",
            describtion: "Discover the latest frameworks, best practices, and performance strategies shaping today’s web applications. Build responsive, secure, and future-proof websites.",
        },
        {
            navigate: "/blog/mobile-app-development-india",
            date: "09 July 2024",
            img: Img5,
            smallImg: img4,
            btn: "Mobile App Development",
            title: "Creating Impactful Mobile Apps for a Digital-First World",
            describtion: "Learn how businesses are building seamless mobile experiences using cross-platform and native development tools. Boost engagement with fast, intuitive apps.",
        },
        {
            navigate: "/blog/ui-ux-design-india",
            date: "08 July 2024",
            img: Img6,
            smallImg: img5,
            btn: "UI/UX Designing",
            title: "Crafting Exceptional Digital Experiences Through UI/UX",
            describtion: "Understand how design thinking, usability, and user research fuel successful digital interfaces. Design products that delight and convert.",
        },
        {
            navigate: "/blog/digital-marketing-india",
            date: "07 July 2024",
            img: Img7,
            smallImg: img6,
            btn: "Digital Marketing",
            title: "Digital Marketing Strategies for the Modern Tech Brand",
            describtion: "Explore performance marketing, SEO, content strategies, and analytics-driven campaigns that elevate your brand’s digital footprint.",
        }
    ];

    return (
        <Box>
            <Container maxWidth={"xl"}>
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        fontWeight: 500,
                        marginBottom: "70px",
                        paddingLeft: "15px",
                        fontSize: {xs: "30px", md: "35px", lg: "45px"},
                    }}>
                    Recent Posts
                </Typography>
                <Grid container spacing={3}>
                    {Data.map((item, index) => (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <Box
                                onClick={() => router.push(item.navigate)}
                                sx={{
                                    margin: "0 0 67px",
                                    padding: "0 15px",
                                    overflow: "hidden",
                                    position: "relative",
                                    transition: "transform 0.3s ease-in-out",
                                    cursor: "pointer",
                                    '&:hover .image': {
                                        transform: "scale(1.1)",
                                    },
                                    '&:hover .icon': {
                                        marginLeft: "20px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <Image
                                        src={item.smallImg}
                                        alt="Admin"
                                        width={50}
                                        height={50}
                                        style={{
                                            borderRadius: "50%",
                                            marginRight: "10px",
                                            objectFit: "cover"
                                        }}
                                    />
                                    <Typography variant="body2" sx={{color: "mediumGray"}}>
                                        By Admin &nbsp;
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Image className={'image'}
                                           src={item.img}
                                           alt={item.title}
                                           style={{
                                               width: "100%",
                                               height: "auto",
                                               display: "block",
                                               transition: "transform 0.3s ease-in-out",
                                           }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "20px",
                                            right: "20px",
                                            background: "rgba(255, 255, 255, 0.25)",
                                            backdropFilter: "blur(6px)",
                                            WebkitBackdropFilter: "blur(6px)",
                                            borderRadius: "10px",
                                            color: "#fff",
                                            textAlign: "center",
                                            padding: "20px 25px",
                                            fontSize: "35px",
                                            fontWeight: 600,
                                            lineHeight: "1.2",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{fontSize: "35px", lineHeight: "1.2"}}
                                        >
                                            {item.date.split(" ")[0]}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            component="div"
                                            sx={{fontSize: "15px", lineHeight: "1.2"}}
                                        >
                                            {item.date.split(" ")[1]}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: "20px",
                                            left: "20px",
                                            backgroundColor: "#fff",
                                            color: "#000",
                                            textTransform: "uppercase",
                                            borderRadius: "20px",
                                            padding: "10px 15px",
                                            fontSize: "12px",
                                            fontWeight: 400,
                                            lineHeight: "1",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s ease",
                                            '&:hover': {
                                                backgroundColor: "#000",
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        {item.btn}
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: "23px",
                                        lineHeight: "33px",
                                        fontWeight: 500,
                                        marginBottom: "14px",
                                        marginTop: "22px",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {item.title}
                                </Box>
                                <Box
                                    sx={{
                                        color: "mediumGray",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {item.describtion}
                                </Box>

                                <Box
                                    sx={{
                                        marginTop: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        fontWeight: 500,
                                        cursor: "pointer",

                                    }}
                                >
                                    Continue Reading <EastIcon className={'icon'}
                                                               sx={{transition: ".3s", marginLeft: "10px"}}/>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Posts;