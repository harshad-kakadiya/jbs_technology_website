import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Img1 from "../../assets/images/services/businessventure/image__19_-removebg-preview_480.png";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Image from "next/image";

function Businessventure() {
    const Data = [
        {
            icon: <WorkspacePremiumIcon />,
            title: "Your extended team of co-founders",
            des: "At our core, we design and build high-quality user-centric software products for entrepreneurs and business leaders Our approach is deeply rooted in the science of successful product development This expertise coupled with our rich entrepreneurial experience enables us to add extra layers of value",
        },
        {
            icon: <EmojiEventsIcon />,
            title: "Tangible results",
            des: "We have an enviable track record of helping two-thirds of our clients achieve VC funding in an ecosystem where only ~0.05% of startups ever see that landmark",
        }
    ];

    return (
        <Box sx={{  padding: {sm:"90px 32px 0" , xs:'40px 32px 0'} ,backgroundColor: '#141C25'}}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={3}>
                    <Grid item lg={5}>
                        <Box
                            variant="h2"
                            component="h2"
                            sx={{
                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                            fontWeight: "700",
                            lineHeight: {xl:"55px",lg:"50px",md:"45px",sm:"40px"},color: '#fff'
                        }}>
                            Why choose JBS Technology for your next business venture?
                        </Box>
                        <Box sx={{
                            fontSize: "16px",
                            padding: "20px 0 25px 0",
                            color:"#fff"
                        }}>
                            Our company was formed by ex-startup founders that learned how to bring new innovative products to market by doing it.
                        </Box>
                        {Data.map((item, index) => (
                            <Box  sx={{
                                background: "#FFFFFF",
                                borderRadius: "10px",
                                padding: "32px",
                                margin: "20px 0",
                                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
                            }} key={index}>
                                <Box sx={{ display: "flex", textAlign: "center", alignItems: "center", paddingBottom: "20px" }}>
                                    <Box sx={{
                                        bgcolor: "#F2EEF8",
                                        height: "32px",
                                        width: "32px",
                                        borderRadius: "5px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#B6A4D6"
                                    }}>
                                        {item.icon}
                                    </Box>
                                    <Box sx={{
                                        color: "#000",
                                        fontSize: "21px",
                                        fontWeight: "bold",
                                        paddingLeft: "15px"
                                    }}>
                                        {item.title}
                                    </Box>
                                </Box>
                                <Box sx={{
                                    color: "#555571",
                                    lineHeight: "25px"
                                }}>
                                    {item.des}
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item lg={7}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end',paddingLeft:"30px" }}>
                            <Image
                                src={Img1}
                                alt="#"
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "10px",
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Businessventure;
