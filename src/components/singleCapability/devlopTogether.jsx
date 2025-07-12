'use client';
import React from 'react';
import {
    Box, Typography, Button, Grid, Container, IconButton
} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Image from 'next/image';

const DevlopTogetherPage = ({ heading, description, features, imageSrc, buttonText, contactNumber }) => {
    return (
        <Box sx={{ backgroundColor: '#f8f9fa', py: { xs: 4, md: 5 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={0} alignItems="center">
                    {/* Image Section */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            position: 'relative',
                            height: { xs: '300px', sm: '400px', md: '500px', lg: '500px' },
                            overflow: 'hidden',
                            borderRadius: { xs: 2, md: 0 }
                        }}>
                            <Image
                                src={imageSrc}
                                alt="Business consultation meeting"
                                fill
                                style={{ objectFit: 'contain', objectPosition: 'center' }}
                                priority
                            />
                        </Box>
                    </Grid>

                    {/* Content Section */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            pl: { xs: 0, md: 6, lg: 8 },
                            pr: { xs: 0, md: 4 },
                            pt: { xs: 4, md: 0 }
                        }}>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                    fontWeight: 500,
                                    paddingBottom: { md: "0px", lg: "30px" }
                                }}
                            >
                                {heading}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: '15px',
                                    color: '#4B535D',
                                    lineHeight: '26px',
                                }}
                            >
                                {description}
                            </Typography>

                            <Box sx={{ p: "29px 0 49px" }}>
                                <Grid container spacing={2}>
                                    {features.map((feature, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                                <Box
                                                    sx={{
                                                        borderRadius: "50%",
                                                        backgroundColor: "#DEDFE0",
                                                        height: "30px",
                                                        width: "30px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <CheckIcon sx={{ color: "black", fontSize: "18px" }} />
                                                </Box>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: "17px",
                                                        color: "#0A1119",
                                                        lineHeight: 1.5,
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: { xs: 'stretch', sm: 'center' },
                                gap: 2
                            }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        backgroundColor: '#0A1119',
                                        color: 'white',
                                        px: { xs: 4, sm: 6 },
                                        py: { xs: 1.5, sm: 1.8 },
                                        fontSize: { xs: '14px', sm: '15px' },
                                        fontWeight: 400,
                                        borderRadius: '999px',
                                        textTransform: 'none',
                                        minHeight: { xs: '44px', sm: '50px' },
                                        '&:hover': {
                                            backgroundColor: '#34495e'
                                        }
                                    }}
                                >
                                    {buttonText}
                                </Button>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    justifyContent: { xs: 'center', sm: 'flex-start' }
                                }}>
                                    <IconButton
                                        sx={{
                                            backgroundColor: '#121C27',
                                            color: 'white',
                                            width: 53,
                                            height: 53,
                                            '&:hover': {
                                                backgroundColor: '#34495e'
                                            }
                                        }}
                                    >
                                        <AddIcCallIcon />
                                    </IconButton>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#0A1119',
                                                fontSize: "20px",
                                                fontWeight: 400,
                                                pl: 2
                                            }}
                                        >
                                            {`24/7 Support: ${contactNumber}`}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DevlopTogetherPage;
