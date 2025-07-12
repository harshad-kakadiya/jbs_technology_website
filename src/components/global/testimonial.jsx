'use client';

import {Box, Container, Grid, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import background1 from "../../assets/images/about/testimonial/img-1.png";
import background2 from "../../assets/images/about/testimonial/img-2.png";
import img1 from "../../assets/images/about/testimonial/testimonial-1.jpg";
import img2 from "../../assets/images/about/testimonial/testimonial-2.jpg";
import img3 from "../../assets/images/about/testimonial/testimonial-3.jpg";
import img4 from "../../assets/images/about/testimonial/testimonial-4.jpg";
import img5 from "../../assets/images/about/testimonial/testimonial-5.jpg";
import img6 from "../../assets/images/about/testimonial/testimonial-6.jpg";
import img7 from "../../assets/images/about/testimonial/testimonial-7.jpg";
import Image from "next/image";

const users = [
    {
        id: 1,
        name: "AKLIMA",
        imageSrc: img1.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "JBS Technology delivered exactly what we needed Aklima was impressed by their quick response time and excellent development quality",
    },
    {
        id: 2,
        name: "FATIMA ASRAFY",
        imageSrc: img2.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "We worked with JBS Technology for a custom solution Fatima appreciated their strong technical skills and professional communication",
    },
    {
        id: 3,
        name: "JANNAT TUMPA",
        imageSrc: img3.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "JBS Technology handled our web development project efficiently Jannat praised their timely delivery and attention to detail",
    },
    {
        id: 4,
        name: "JOHNS DUE",
        imageSrc: img4.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Johns Due found JBS Technology to be reliable and easy to work with Their team delivered a solid product within the expected time frame",
    },
    {
        id: 5,
        name: "JOHN DOE",
        imageSrc: img5.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "John appreciated the transparency and quality JBS Technology brought to the project The experience was smooth from start to finish",
    },
    {
        id: 6,
        name: "AMAR ORTHI",
        imageSrc: img6.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Amar mentioned how the JBS Technology team was responsive and helpful Their ability to customize features was especially valuable",
    },
    {
        id: 7,
        name: "FATIMA MA",
        imageSrc: img7.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Fatima shared a great experience with JBS Technology The final result exceeded her expectations, and support was excellent",
    },
];

function Testimonial() {
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        setSelectedPerson(users[0]);

        const intervalId = setInterval(() => {
            setSelectedImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % users.length;
                setSelectedPerson(users[nextIndex]);
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Box sx={{my:{xs:5,lg:7}}}>
            <Box
                variant="h2"
                component="h2"
                sx={{
                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
                    fontWeight: 600,
                    textAlign: "center",
                }}
            >
                Clients we are proud of
            </Box>
            <Box sx={{padding: "30px 0px"}}>
                <Container maxWidth="xl">
                    <Grid container justifyContent={"center"} sx={{position: "relative"}}>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: {md: "-10%", sm: "-10%", xs: "-1%"},
                                    left: {md: "20%", sm: "20%", xs: "-10%"},
                                    height: {md: "17 4px", sm: "100px", xs: "80px"},
                                    width: {md: "197px", sm: "100px", xs: "0px"},
                                    opacity: "1",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: {md: "cover", sm: "cover", xs: "contain"},
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${background1})`,
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: {md: "55%", sm: "-10%", xs: "58%"},
                                    right: {md: "20%", sm: "20%", xs: "-10%"},
                                    height: {md: "174px", sm: "100px", xs: "80px"},
                                    width: {md: "197px", sm: "100px", xs: "0px"},
                                    opacity: "1",
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: {md: "cover", sm: "cover", xs: "contain"},
                                    backgroundPosition: "center",
                                    backgroundImage: `url(${background2})`,
                                }}
                            />
                            <Box textAlign={"center"} sx={{padding: {md: "0px 40px", sm: "0px 30px", xs: "0px 0px"}}}>
                                <Box sx={{height: '122px', overflow: 'hidden'}}>
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontSize: {md: "25px", xs: "20px"},
                                            fontWeight: "400",
                                            position: "relative",
                                            zIndex: "11",
                                        }}
                                    >
                                        {selectedPerson && `${selectedPerson.contain}`}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{ fontSize: "18px", color: "#8c8c8c", fontWeight: "300"}}>
                                    <Typography
                                        variant="span"
                                        sx={{fontSize: "18px", color: "#181818", fontWeight: "300"}}
                                    >
                                        {selectedPerson && `${selectedPerson.name}`}
                                    </Typography>
                                    - COO, AMERIMAR ENTERPRISES, INC.
                                </Typography>
                            </Box>
                            <Box sx={{paddingTop: "20px"}}>
                                <Typography
                                    variant="ul"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                        maxWidth: "510px",
                                        margin: "0 auto -30px",
                                    }}
                                >
                                    {users.map((value, ind) => (
                                        <Typography
                                            key={ind}
                                            variant="li"
                                            sx={{
                                                m: 1,
                                                outline: "none",
                                                cursor: "pointer",
                                                position: "relative",
                                            }}
                                        >
                                            <img
                                                src={value.imageSrc}
                                                alt={value.imageSrc}
                                                style={{borderRadius: "5px", height: '100%', width: '100%'}}
                                            />
                                            {selectedImageIndex === ind && (
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        top: -5,
                                                        right: -5,
                                                        borderRadius: "100px",
                                                        width: "15px",
                                                        height: "15px",
                                                        backgroundColor: 'crimson',
                                                    }}
                                                />
                                            )}
                                        </Typography>
                                    ))}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Testimonial;
