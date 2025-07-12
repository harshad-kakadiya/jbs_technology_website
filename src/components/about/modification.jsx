"use client";
import React from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const Modification = () => {
    const router = useRouter();

    return (
        // This full-width Box has light gray background
        <Box>
            {/* Content stays inside container */}
            {/*<Container maxWidth="xl">*/}
                {/* White box inside container */}
                <Box sx={{ backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden" }}>
                    <Grid container spacing={0} alignItems={"center"}>
                        {/* LEFT SIDE with gray background */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{ backgroundColor: "#F4F4F4", py: { xs: 7, xl: 10 } ,pl:{xs:3, xl: 26},px:{xs:1,sm:5,md:3}}}
                        >

                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 400,
                                    textTransform: "uppercase",
                                    letterSpacing: "2.5px",
                                    fontSize: "12px",
                                    color: "#888",
                                    mb: 2,
                                }}
                            >
                                WELCOME TO JBS TECHNOLOGY
                            </Typography>

                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontWeight: 500,
                                    color: "#000",
                                    mb: 4,
                                    fontSize: {
                                        xs: "30px",
                                        md: "35px",
                                        lg: "45px",
                                    },
                                }}
                            >
                                Our Focus is on Delivering Superior Value to our Clients for
                                Company Modification
                            </Typography>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column", sm: "row" },
                                    gap: 2,
                                    mt: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#1A1F26",
                                        color: "#fff",
                                        borderRadius: "50px",
                                        textTransform: "none",
                                        px: 4,
                                        py: 1.5,
                                        transition:'0.3s',
                                        ":hover": {
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                    onClick={() => router.push("/contact")}
                                >
                                    Let’s Develop Together
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: "#1A1F26",
                                        color: "#000",
                                        borderRadius: "50px",
                                        textTransform: "none",
                                        px: 4,
                                        py: 1.5,
                                        transition:'0.3s',
                                        ":hover": {
                                            backgroundColor: "#1A1F26",
                                            color: "#fff",
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                    onClick={() => router.push("/services")}
                                >
                                    View All Services
                                </Button>
                            </Box>
                        </Grid>

                        {/* RIGHT SIDE — pure white inside container only */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                backgroundColor: "#fff",
                                py: { xs: 7, xl: 10 }
                                ,pr:{xs:2, xl: 26},
                                pl: {md:5,xs:2,sm:5}
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#4B535D",
                                    lineHeight: "25px",
                                    mb: 2,
                                }}
                            >
                                At Jbs Technology, we are a renowned global consulting firm
                                committed to collaborating with business and societal leaders
                                in overcoming their most critical challenges and seizing their
                                greatest opportunities. Our achievements are rooted in fostering
                                deep collaboration and cultivating a global community of diverse
                                individuals who are dedicated
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "15px",
                                    color: "#4B535D",
                                    lineHeight: "25px",
                                }}
                            >
                                We have highly skilled engineers with excellent technical
                                knowledge and experience in using the latest software standards.
                                We have built a large pool of knowledge that we apply to deliver
                                solutions that meet client’s needs, expectations and budget.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            {/*</Container>*/}
        </Box>
    );
};

export default Modification;
