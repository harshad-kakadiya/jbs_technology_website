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
            "Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 2,
        name: "FATIMA ASRAFY",
        imageSrc: img2.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Fatima Asrafy standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 3,
        name: "JANNAT TUMPA",
        imageSrc: img3.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 4,
        name: "JOHNS DUE ",
        imageSrc: img4.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 5,
        name: "JOHN DOE",
        imageSrc: img5.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "John Doe The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 6,
        name: "AMAR ORTHI",
        imageSrc: img6.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "Chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
    },
    {
        id: 7,
        name: "FATIMA MA ",
        imageSrc: img7.src,
        details: "COO, AMERIMAR ENTERPRISES, INC.",
        contain:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.",
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
        <Box>
            <Box sx={{padding: "120px 0px"}}>
                <Container maxWidth="xl">
                    <Grid container justifyContent={"center"} sx={{position: "relative"}}>
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: {md: "-10%", sm: "-10%", xs: "-1%"},
                                    left: {md: "20%", sm: "20%", xs: "-10%"},
                                    height: {md: "174px", sm: "100px", xs: "80px"},
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
                                <Box sx={{height: '162px', overflow: 'hidden'}}>
                                    <Typography
                                        variant="p"
                                        sx={{
                                            fontSize: {md: "32px", sm: "28px", xs: "20px"},
                                            fontWeight: "500",
                                            position: "relative",
                                            zIndex: "11",
                                        }}
                                    >
                                        {selectedPerson && `${selectedPerson.contain}`}
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{paddingTop: "62px", fontSize: "18px", color: "#8c8c8c", fontWeight: "300"}}>
                                    <Typography
                                        variant="span"
                                        sx={{fontSize: "18px", color: "#181818", fontWeight: "300"}}
                                    >
                                        {selectedPerson && `${selectedPerson.name}`}
                                    </Typography>
                                    - COO, AMERIMAR ENTERPRISES, INC.
                                </Typography>
                            </Box>
                            <Box sx={{paddingTop: "60px"}}>
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
