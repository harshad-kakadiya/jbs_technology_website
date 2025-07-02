import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img2 from "../../assets/images/contact/Img2.webp"
import Img3 from "../../assets/images/contact/Img3.webp"
import Img4 from "../../assets/images/contact/Img4.webp"
import Image from "next/image";

function Offices(props) {

    const Data = [
        {
            img: Img2,
            title: 'Washington, D.C.',
            place: "headquarters",
            address: "Old Westbury 256, New York, USA",
            call: "+ 123 4567 89 000",
            email: "Herringtonconsulting@example.com",
            time: "Working Hours: 07am to 5pm",
        },
        {
            img: Img3,
            title: 'Los Angeles City',
            place: "branch office",
            address: "Old Westbury 256, New York, USA",
            call: "+ 123 4567 89 000",
            email: "Herringtonconsulting@example.com",
            time: "Working Hours: 07am to 5pm",
        },
        {
            img: Img4,
            title: 'New York City',
            place: "branch office",
            address: "Old Westbury 256, New York, USA",
            call: "+ 123 4567 89 000",
            email: "Herringtonconsulting@example.com",
            time: "Working Hours: 07am to 5pm",
        }

    ]
    return (
        <Box sx={{padding: "100px 0"}}>
            <Container maxWidth={"lg"}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: {md: "45px", sm: "40px", xs: "30"},
                    fontWeight: "500",
                    paddingBottom: "15px"
                }}>
                    Our World Offices
                </Box>
                <Box sx={{
                    color: "#4B535D",
                    fontSize: {md: "17px", xs: "15px"},
                    lineHeight: "27px",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",

                }}>
                    Sed at nulla vel elit molestie rutrum non nec orci. Mauris varius, odio rutrum iaculis sagittis
                </Box>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "65px"
                    }}
                >
                    <Box
                        style={{
                            width: "100%",
                            maxWidth: "400px",
                            position: "relative",
                        }}
                    >
                        <Box
                            style={{
                                display: "flex",
                                alignItems: "center",
                                position: "relative",
                                width: "100%",
                                height: "1px",
                                backgroundColor: "lightgray",
                            }}
                        >
                            <Box
                                style={{
                                    content: "''",
                                    position: "absolute",
                                    width: "100px",
                                    height: "3px",
                                    backgroundColor: "black",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                }}>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{paddingTop: "90px"}}>
                    <Grid container spacing={4} justifyContent="center">
                        {Data.map((item, index) => (
                            <Grid
                                item
                                lg={4}
                                sm={6}
                                xs={12}
                                key={index}
                                sx={{
                                    padding: "15px",
                                }}
                            >
                                <Box sx={{display: "flex", justifyContent: "center"}}>
                                    <Image
                                        src={item.img}
                                        alt={"#"}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100%",
                                            maxWidth: "300px",
                                            height: "auto",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "26px",
                                        fontWeight: "500",
                                        paddingTop: "25px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.title}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "13px",
                                        fontWeight: "500",
                                        textTransform: "uppercase",
                                        letterSpacing: "4.8px",
                                        paddingTop: "10px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.place}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: "27px 0",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "1.5px",
                                            width: "105px",
                                            background: "#000",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        lineHeight: "25px",
                                        margin: "0 0 35px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.address}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        margin: "0 0 35px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.call}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        margin: "0 0 40px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.email}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        fontSize: "15px",
                                        color: "#4B535D",
                                        margin: "0 0 35px",
                                        textAlign: "center",
                                    }}
                                >
                                    {item.time}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </Box>
    );
}

export default Offices;