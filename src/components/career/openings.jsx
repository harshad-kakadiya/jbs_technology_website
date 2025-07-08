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


function Openings() {
    const router = useRouter();
    const jobData = [
        {
            title: "React.js Developer",
            experience: 2,
            openings: 1,
            location: "Surat, Gujarat.",
            logo: react,
            navigate:"career/react-developer"
        },
        {
            title: "flutter Developer",
            experience: 2,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: flutter,
            navigate:"career/flutter-developer"
        },
        {
            title: " Human Resources Executive",
            experience: 2,
            openings: 1,
            location: "Surat, Gujarat.",
            logo: human,
            navigate: "career/human-resources-executive",
        },
        {
            title: "Node.js Developer",
            experience: 1,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: node,
            navigate:"career/nodejs-developer "
        },
        {
            title: "Full Stack Developer",
            experience: 2,
            openings: 0,
            location: "Surat, Gujarat.",
            logo: fullstack,
            navigate:"career/full-stack-developer"
        },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}>
            <Box sx={{ width: '100%', maxWidth: 1200 }}>
                <Grid container spacing={3}>
                    {jobData.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    border: 1,
                                    borderColor: "#1A1F26",
                                    boxShadow: 2,
                                    borderRadius: 0,
                                    p:"10px",
                                    bgcolor: "#1A1F26",
                                    color: "#fff",
                                    cursor: "pointer",

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
                                    <Typography  sx={{
                                        fontWeight: 500,
                                        fontSize: "19px",
                                        mb:"12px",
                                        "&:hover":{
                                            color: "#EF8920",
                                        }
                                    }}>
                                        {job.title}
                                    </Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8}}>Experience: {job.experience}</Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8}}>No of Openings: {job.openings}</Typography>
                                    <Typography sx={{fontSize:"14px", lineHeight: 1.8}}>Location: {job.location}</Typography>
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
