"use client";
import React from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {useRouter} from "next/navigation";

import react from "../../assets/images/career/react-logo.webp"
import flutter from "../../assets/images/career/flutter-logo.svg"
import human from "../../assets/images/career/human-resources.webp"
import node from "../../assets/images/career/node-logo.webp"
import fullstack from "../../assets/images/career/full-stack-logo.webp"
import uiux from "../../assets/images/career/uiux.webp"


function Openings() {
    const router = useRouter();
    const jobData = [
        {
            title: "React.js Developer",
            experience: 2,
            openings: 1,
            location: "Surat, Gujarat.",
            logo: react,
            navigate:"careers/react-developer"
        },
        {
            title: "flutter Developer",
            experience: 2,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: flutter,
            navigate:"careers/flutter-developer"
        },
        {
            title: " Human Resources Executive",
            experience: 2,
            openings: 1,
            location: "Surat, Gujarat.",
            logo: human,
            navigate: "careers/human-resources-executive",
        },
        {
            title: "Node.js Developer",
            experience: 1,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: node,
            navigate:"careers/nodejs-developer "
        },
        {
            title: "Full Stack Developer",
            experience: 2,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: fullstack,
            navigate:"careers/full-stack-developer"
        },
        {
            title: "UI/UX Designer",
            experience: 1,
            openings: 1,
            location: "Surat, Gujarat.",
            logo: uiux,
            navigate: "careers/ui-ux-designer"
        }
    ];

    return (
        <Box id="scrolling" sx={{ display: 'flex', justifyContent: 'center', py:8,px:2 }}>
            <Box sx={{ width: '100%', maxWidth: 1200 }}>
                <Box>
                    <Typography component={'h1'} sx={{textAlign:'center' ,fontSize: { xs: "30px", md: "35px", lg: "45px" },pb:8 , fontWeight:500}}>Openings</Typography>
                </Box>
                <Grid container spacing={3}>
                    {jobData.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    boxShadow: "0 0 10px rgba(72, 69, 224, .1)",
                                    borderRadius: 0,
                                    p:"10px",
                                    bgcolor: "white",
                                    color: "#1A1F26",
                                    cursor: "pointer",
                                    position: "relative",
                                    "&:hover::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: 0,
                                        height: 0,
                                        borderLeft: "20px solid #1A1F26",
                                        borderTop: "20px solid transparent",

                                    }
                                }}
                                onClick={() => router.push(job.navigate)}
                            >
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "left",
                                            alignItems: "center",
                                            mb: 2,
                                            height: 60,
                                        }}
                                    >
                                        <Image
                                            src={job.logo}
                                            alt={job.title}
                                            width={80}
                                            height={80}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "19px",
                                            mb:"12px",
                                            "&:hover":{
                                            }
                                        }}
                                    >
                                        {job.title}
                                    </Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8, color:"#6084a4"}}>Experience: {job.experience}</Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8, color:"#6084a4"}}>No of Openings: {job.openings}</Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8, color:"#6084a4"}}>Location: {job.location}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}

export default Openings;
