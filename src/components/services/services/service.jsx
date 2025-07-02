'use client';
import React, {useRef} from 'react';
import {Button} from '@mui/material';
import {Box, Container, Grid} from "@mui/material";
import {Typography, List, ListItem, ListItemText} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Img1 from '../../../assets/images/services/1services/Img1.svg';
import Img2 from "../../../assets/images/services/1services/Img2.png";
import Img22 from "../../../assets/images/services/1services/Img2-1.svg";
import Img3 from "../../../assets/images/services/1services/Img3.svg";
import Img4 from "../../../assets/images/services/1services/Img4.svg";
import Img5 from "../../../assets/images/services/1services/Img5.svg";
import Img6 from "../../../assets/images/services/1services/Img6.svg";
import Img7 from "../../../assets/images/services/1services/Img7.svg";
import Imgslider1 from "../../../assets/images/services/1services/Imgslider.png";
import Imgslider2 from "../../../assets/images/services/1services/Imgslider2.png";
import Imgslider3 from "../../../assets/images/services/1services/Imgslider3.png";
import Imgslider4 from "../../../assets/images/services/1services/Imgslider4.png";
import Imgslider5 from "../../../assets/images/services/1services/Imgslider5.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


function Service(props) {
    const swiperRef = useRef(null);
    const Data = [
        {
            icon: Img22,
            title: "Full Ownership",
            description: "You will own 100% of the software we build with you, and you’ll never pay a subscription or royalty fees."
        },
        {
            icon: Img3,
            title: "Flexibility",
            description: "Custom software development allows for more flexibility as you can stay agile and responsive to your users’ needs and business landscape."
        },
        {
            icon: Img4,
            title: "Competitive Advantage",
            description: "Unlike off-the-shelf solutions, custom software development allows you to build unique capabilities that differentiate you from your competitors."
        },
        {
            icon: Img5,
            title: "Scalability",
            description: "As your business grows, you can revise and add features as you please, allowing your product to scale with ease."
        },
        {
            icon: Img6,
            title: "Reduce Long-Term Costs",
            description: "While custom software development can sometimes require a higher initial investment, it is more cost-effective in the long run as you’re not paying subscriptions or royalty fees."
        },
        {
            icon: Img7,
            title: "User Experience",
            description: "When you build a product using custom software development it is built with your specific user in mind throughout the entire process."
        },
    ];

    const slider = [
        {
            title: "Krepling",
            img: Imgslider1,
            work: "E-Commerce  -  USA",
            description: "Krepling is an AI-powered, no-code e-commerce platform tailored for managers who want to streamline operations and bypass complex technical setups. Integrating seamlessly across front, mid, and back-office tools, it empowers users to focus on scaling their business rather than managing intricate IT challenges.",
            btn: "See Case Study"
        },
        {
            title: "Datahouse",
            img: Imgslider2,
            work: "Data Analytics  -  USA",
            description: "Datahouse is a Data Science company based in Switzerland. Founded in 2005, the team combines data expertise with competence in building innovative web applications. Due to the very varied set of clients and challenges, it works with a broad set of technologies and its team delivers complex projects in the intersection of Data, Application Development and User Experience.",
            btn: "See Case Study"
        },
        {
            title: "Synapse",
            img: Imgslider3,
            work: "FINTECH  -  MILAN,ITALY",
            description: "Synapse Credit is a fintech tool developed in partnership with AlixPartners that allows financial institutions to assess the credit scoring of offline retailers.",
            btn: "See Case Study"
        },
        {
            title: "Audio Test Kitchen",
            img: Imgslider4,
            work: "MUSICTECH  -  USA",
            description: "Audio Test Kitchen is the world’s first platform to compare professional audio gear in a fully immersive, interactive and unbiased way. With Audio Test Kitchen, audio engineers and record producers can skip the hype and directly compare the sound of different audio gear.",
            btn: "See Case Study"
        },
        {
            title: "Enterprise Bot",
            img: Imgslider5,
            work: "FINTECH,AI  -  USA",
            description: "EnterpriseBot makes conversational AI applicable to global enterprises: it provides a new digital interaction tool for customers to get instant answers on the channel they choose instead of staying on call for minutes and pressing IVR numbers.",
            btn: "See Case Study"
        },
    ];

    const sections = [
        {
            title: "Product Scope",
            description:
                "The Product Scope is an intensive 15-day structured process. It starts with an immersive focus session where you'll sit down with product experts and early-stage founders to dive into the product vision from a business standpoint.",
            items: ["User Stories", "Sitemap", "UX Personas", "Key BPMN", "Tech Spike", "Stakeholder Analysis"],
        },
        {
            title: "Key Screens",
            description:
                "We start by creating the most important screens for your product. This allows you to see exactly how your product will look and then approve the design.",
            items: ["UI Concept", "Design System"],
        },
        {
            title: "All Screens",
            description:
                "Once you are happy and approve the Key Screens, we extend the design to the remaining screens necessary for the MVP.",
            items: ["Full Product UX/UI"],
        },
        {
            title: "Development",
            description:
                "After your product is fully designed and approved, we start the implementation phase. During this phase, we progressively deliver the modules of the app, so you can test them during the process.",
            items: [
                "Progressive Module Delivery",
                "Ongoing Testing and Feedback",
                "Codebase Documentation",
                "Regular Progress Updates",
            ],
        },
        {
            title: "Test and Launch",
            description:
                "Once your product is fully developed, we enter a testing phase during which we’re in constant contact to fix major bugs and make sure your product is ready to go to market.",
            items: [
                "Bug Reports & Fixes",
                "User Acceptance Testing (UAT)",
                "Final Quality Assurance (QA)",
                "Launch Readiness Sign-Off",
            ],
        },
        {
            title: "Iterations and Improvements",
            description:
                "When your product is in the world and has started gaining traction, we work with you to digest user feedback and iterate your product, improving it for your customers.",
            items: [
                "User Feedback Reports",
                "Bug Fixes & Technical Improvements",
                "Updated Product Features",
                "Performance Optimization Reports",
            ],
        },
    ];

    // const handleNext = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // };
    //
    // const handlePrev = () => {
    //     if (swiperRef.current && swiperRef.current.swiper) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // };
    return (
        <Box className={"services"}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',paddingTop:"30px"}}>
                <Container maxWidth={"xl"}>

                    <Box sx={{ width: '80%', mx: {xs:'auto',md:"0"} }}>
                        <Box
                            sx={{
                                fontSize: { lg: "50px", sm: "45px" },
                                fontWeight: "700",
                                lineHeight: "75px",
                                display: "flex",
                                justifyContent: { xs: "center", lg: "flex-start" },
                                alignItems: "center",
                                textAlign: { xs: "center", lg: "left" },
                            }}
                        >
                            Custom Software Development
                        </Box>
                        <Box
                            sx={{
                                fontSize: "20px",
                                paddingTop: "10px",
                                color:"#4B535D"

                            }}
                        >
                            Whatever problem you’re solving, choose the right tech and build the right User Experience
                            for your users
                        </Box>
                    </Box>

                </Container>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "end",
                        height: {md: "480px"},
                        width: {md: "260px"},
                        backgroundImage: {
                            xs: 'none',
                            lg: `url(${Img1.src})`,
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                />
            </Box>
            <Container maxWidth={"xl"}>


            <Grid container>
                <Grid
                    item
                    lg={5}
                    xs={12}
                    sx={{

                        position: "relative",
                        width:"100%"
                    }}
                >
                    <Box sx={{}}>
                        <Typography component="img" src={Img2.src} alt="description"
                                    sx={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        position:{xs:'unset',lg:'absolute'},
                                        bottom:{xs:'unset',lg:'-64px'},
                                        display:"flex",
                                        justifyContent:"center",
                                        textAlign:"center"
                                    }}
                        />
                    </Box>
                </Grid>

                <Grid
                    item
                    md={7}
                    xs={12}
                    sx={{
                        padding: {xs: "20px 15px", sm: "30px 20px", lg: "250px 20px 50px 50px"},
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                fontSize: {xs: "24px", sm: "28px", lg: "36px"},
                                fontWeight: "700",
                                display: "flex",
                                justifyContent: {xs: "center", lg: "flex-start"},
                                alignItems: "center",
                                lineHeight: {xs: "30px", sm: "38px", lg: "45px"},
                                textAlign: {xs: "center", lg: "left"},
                            }}
                        >
                            What is custom software development?
                        </Box>

                        <Box
                            sx={{
                                fontSize: {xs: "14px", sm: "16px"},
                                padding: {xs: "10px 0", lg: "15px 0"},
                                textAlign: {xs: "center", lg: "left"},
                            }}
                        >
                            Custom software development allows you to design, build, and launch a solution tailored
                            specifically to your users’ needs.
                        </Box>
                        <Box
                            sx={{
                                fontSize: {xs: "14px", sm: "16px"},
                                textAlign: {xs: "center", lg: "left"},
                            }}
                        >
                            Our process begins with a series of deep-dive product sessions to align your vision with
                            business objectives, creating the blueprint for a successful product.
                        </Box>
                        <Box
                            sx={{
                                fontSize: {xs: "14px", sm: "16px"},
                                padding: {xs: "10px 0", lg: "15px 0"},
                                textAlign: {xs: "center", lg: "left"},
                            }}
                        >
                            Our expert UX/UI and development teams then build your product from the ground up to meet
                            your users’ needs and propel your business.
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            </Container>

            <Box sx={{background: "#141C25", width: "100%"}}>
                <Container maxWidth={"xl"}>
                    <Box
                        sx={{
                            fontSize: "46px",
                            fontWeight: "700",
                            color: "#fff",
                            padding: "100px 0 30px 0",
                        }}
                    >
                        Key Benefits
                    </Box>
                    <Grid container>
                        {Data.map((item, index) => (
                            <Grid item lg={4} xs={12} md={6} key={index}>
                                <Box sx={{padding: {md:"10px 17px 10px 0",xs:"10px 0px 10px 0"}}}>
                                    <Box
                                        sx={{
                                            background: "#FFFFFF",
                                            borderRadius: "10px",
                                            height: {md: "345px"},
                                            width: "100%",
                                            padding: {lg: "40px", sm: "30px", xs: "20px"},

                                        }}
                                    >
                                        <Image src={item.icon} alt={item.title}/>
                                        <Box
                                            sx={{
                                                margin: "25px 0 16px 0",
                                                fontWeight: "700",
                                                fontSize: "24px"
                                            }}
                                        >
                                            {item.title}
                                        </Box>
                                        <Box sx={{color: "#4A4A68"}}>
                                            {item.description}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                    <Box sx={{backgroundColor: "#141C25", padding: "140px 0 140px 0"}}>

                        <Grid container>
                            <Grid item lg={9}>
                                <Box sx={{color: "#fff", marginBottom: "40px"}}>
                                    <Box sx={{
                                        fontSize: {md: "45px", xs: "34px"},
                                        fontWeight: "700",
                                        marginBottom: "10px"
                                    }}>
                                        The projects we've brought to life
                                    </Box>
                                </Box>

                            </Grid>
                            <Grid item lg={3}>
                                <Box sx={{position: 'relative'}}>
                                    <Button
                                        className={"swiper-button-prev"}
                                        sx={{
                                            color: '#fff',
                                            position: 'absolute',
                                            top: { lg: 15, md: 15 },
                                            left: { lg: 145, md: 20 },
                                            borderRadius: '50%', // Ensures the button is round
                                            height: '40px', // Equal height
                                            width: '40px', // Equal width
                                            minWidth: '40px', // Prevents Material-UI default styling

                                            background: "#e7107e", // Button color
                                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: '0.5s',

                                        }}
                                        // onClick={handlePrev}
                                    >
                                        <KeyboardArrowLeftIcon fontSize="small" />
                                    </Button>

                                    <Button
                                        className={"swiper-button-next"}
                                        sx={{
                                            color: '#fff',
                                            position: 'absolute',
                                            top: { lg: 15, md: 15 },
                                            right: { lg: 55, md: -160 },
                                            borderRadius: '50%', // Ensures the button is round
                                            height: '40px', // Equal height
                                            width: '40px', // Equal width
                                            minWidth: '40px', // Prevents Material-UI default styling
                                            background: "#e7107e", // Button color
                                            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: '0.5s',

                                        }}
                                        // onClick={handleNext}
                                    >
                                        <KeyboardArrowRightIcon fontSize="small" />
                                    </Button>

                                </Box>

                            </Grid>
                        </Grid>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev'
                            }}
                            spaceBetween={20}
                            slidesPerView={2}
                            breakpoints={{
                                200: {slidesPerView: 1},
                                900: {slidesPerView: 2},
                                1024: {slidesPerView: 2},
                            }}
                        >
                            {slider.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            background: "#fff",
                                            borderRadius: "10px",
                                            padding: "32px",
                                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                                            height: "770px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box sx={{
                                            fontSize: "36px",
                                            fontWeight: "700",
                                            color: "#000",
                                            paddingBottom: "15px"
                                        }}>
                                            {project.title}
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "320px",
                                                backgroundImage: `url(${project.img.src})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: "10px",
                                            }}
                                        />
                                        <Box sx={{padding: "20px 0"}}>
                                            <Box sx={{
                                                fontSize: "12px",
                                                color: "#4A4A68",
                                                margin: "10px 0",
                                                fontWeight: "500"
                                            }}>
                                                {project.work}
                                            </Box>
                                            <Box sx={{fontSize: "16px", color: "#4A4A68", padding: "20px 0 20px 0"}}>
                                                {project.description}
                                            </Box>
                                        </Box>
                                        <Box sx={{paddingBottom: "10px", marginTop: "auto"}}>
                                            <Button
                                                sx={{
                                                    background: "#fff",
                                                    color: "#e7107e",
                                                    border: "2px solid #e7107e",
                                                    padding: "10px 50px",
                                                    borderRadius: "25px",
                                                    fontSize: "15px",
                                                    fontWeight: "600",
                                                    '&:hover': {
                                                        backgroundColor: "#e7107e",
                                                        color: "#fff",
                                                    },
                                                    transition: "background-color 0.3s, color 0.3s",
                                                }}
                                            >
                                                {project.btn}
                                            </Button>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lg" sx={{py: 6}}>
                <Grid container spacing={4} sx={{padding: "50px 0 68px"}}>
                    <Box
                        sx={{
                            fontSize: "45px",
                            fontWeight: "700",
                            paddingBottom: "30px",
                            textAlign: "center",
                            paddingLeft:"20px"
                        }}
                    >
                        How it works
                    </Box>
                    {sections.map((section, index) => (
                        <Grid item xs={12} key={index}>
                            <Box sx={{display: 'inline-block'}}><ArrowForwardIcon sx={{
                                bgcolor: '#E6107E',
                                color: '#FFF',
                                borderRadius: '50%',
                                fontSize: '28px',
                                ml: -1.6
                            }}/></Box>
                            <Box sx={{borderLeft: '1px solid #000', pl: 4}}>
                                <Box
                                    sx={{
                                        p: 4,
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 2,
                                            color: "#000",
                                            fontSize: "30px",
                                        }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: "#000",
                                            fontSize: "16px",
                                            lineHeight: "1.5",
                                        }}
                                    >
                                        {section.description}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "bold",
                                            paddingTop: "20px",
                                            color: "#000",
                                            fontSize: "18px",
                                        }}
                                    >
                                        Phase deliverables:
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <List>
                                                {section.items.slice(0, Math.ceil(section.items.length / 2)).map((item, index) => (
                                                    <ListItem key={index} sx={{pl: 0}}>
                                                        <ListItemText
                                                            primary={`• ${item}`}
                                                            primaryTypographyProps={{
                                                                variant: "body2",
                                                                sx: {fontSize: "16px", color: "#000"},
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <List>
                                                {section.items.slice(Math.ceil(section.items.length / 2)).map((item, index) => (
                                                    <ListItem key={index} sx={{pl: 0}}>
                                                        <ListItemText
                                                            primary={`• ${item}`}
                                                            primaryTypographyProps={{
                                                                variant: "body2",
                                                                sx: {fontSize: "16px", color: "#000"},
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Service;