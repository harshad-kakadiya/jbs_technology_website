import React from 'react';
import {Box, Container, Typography, Grid} from "@mui/material";
import img1 from '../../../assets/images/portfolio/techuse/tech-figma.svg';
import img2 from '../../../assets/images/portfolio/techuse/tech-nativescript.svg';
import img3 from '../../../assets/images/portfolio/techuse/tech-node-js.svg';
import img4 from '../../../assets/images/portfolio/techuse/tech.mongodb.svg';
import img5 from '../../../assets/images/portfolio/techuse/tech-express-js.svg';
import Image from "next/image";

function TechUse({app}) {
    return (
        <Box sx={{padding: { xs: '20px 0 30px'}}}>
            <Container maxWidth="xl">
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: "#0F172A",
                        fontSize: {xs: "28px", md: "36px"},
                        fontWeight: 700,
                        textAlign: "center",
                        marginBottom: "32px",
                    }}
                >
                    Technology Stack
                </Typography>

                {/*<Box sx={{marginBottom: 3}}>*/}
                {/*    <Typography variant="h5" sx={{*/}
                {/*        color: "#4A4A68",*/}
                {/*        fontSize: "16px",*/}
                {/*        fontWeight: "500",*/}
                {/*        padding: "20px 50px 20px 0",*/}
                {/*        display: "inline-block",*/}
                {/*    }}>*/}
                {/*        FRONT-END*/}
                {/*    </Typography>*/}
                {/*    <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>*/}
                {/*        {app.map((item, index) => (*/}
                {/*            <Box key={index + 1}>*/}
                {/*                <Box*/}
                {/*                    sx={{*/}
                {/*                        display: "flex",*/}
                {/*                        alignItems: "center",*/}
                {/*                        padding: "10px 24px",*/}
                {/*                        background: "#F5F7F9",*/}
                {/*                        borderRadius: "10px",*/}
                {/*                        justifyContent: "center",*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    <Image*/}
                {/*                        src={item.image}*/}
                {/*                        alt={item.name}*/}
                {/*                        style={{marginRight: "10px", height: '22px', width: '22px'}}*/}
                {/*                    />*/}
                {/*                    <Typography*/}
                {/*                        sx={{*/}
                {/*                            color: "#0F72A",*/}
                {/*                            fontSize: {xs: "14px", md: "16px"},*/}
                {/*                            fontWeight: 500,*/}
                {/*                            textWrap: "nowrap"*/}
                {/*                        }}*/}
                {/*                    >*/}
                {/*                        {item.name}*/}
                {/*                    </Typography>*/}
                {/*                </Box>*/}
                {/*            </Box>*/}
                {/*        ))}*/}
                {/*    </Box>*/}
                {/*</Box>*/}

                <Box>
                    {Object.keys(app).map((category, index) => (
                        <Box key={index} sx={{marginBottom: 3}}>
                            <Typography variant="h5" sx={{
                                color: "#4A4A68",
                                fontSize: "16px",
                                fontWeight: "500",
                                padding: "20px 50px 20px 0",
                                display: "inline-block"
                            }}>
                                {category}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                }}
                            >
                                {app[category].map((tech) => (
                                    <Box key={tech + 1} sx={{
                                        display: "flex", padding: '10px 24px',
                                        borderRadius: 2,
                                        backgroundColor: '#f5f5f5',
                                    }}>
                                        <Image src={tech.image} alt={"#"} style={{
                                            height: "22px",
                                            width: "22px",
                                        }}/>
                                        <Box
                                            key={tech.name + 1}
                                            sx={{
                                                marginLeft: "15px",
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {tech.name}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    );
}

export default TechUse;
