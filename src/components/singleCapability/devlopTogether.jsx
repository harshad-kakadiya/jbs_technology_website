'use client'
import React from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Container,
    useTheme,
    useMediaQuery,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Image from 'next/image';
import img1 from "../../assets/images/singleCapability/img1.jpg";

function DevlopTogether() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const features = [
        "Lay the foundations for successful innovation",
        "Create an innovative business culture",
        "Business Structure Development",
        "Find the right innovation projects for your business"
    ];

    return (
        <Box sx={{
            backgroundColor: '#f8f9fa',
            minHeight: '100vh',
            py: { xs: 4, md: 8 }
        }}>
            <Container maxWidth="xl">
                <Grid container spacing={0} alignItems="center" sx={{ minHeight: '70vh' }}>
                    {/* Left Image Section */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            position: 'relative',
                            height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
                            overflow: 'hidden',
                            borderRadius: { xs: 2, md: 0 }
                        }}>
                            <Image
                                src={img1}
                                alt="Business consultation meeting"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                                priority
                            />
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            pl: { xs: 0, md: 6, lg: 8 },
                            pr: { xs: 0, md: 4 },
                            pt: { xs: 4, md: 0 }
                        }}>
                            {/* Main Heading */}
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem', lg: '3rem' },
                                    fontWeight: 600,
                                    color: '#2c3e50',
                                    lineHeight: 1.2,
                                    mb: 3
                                }}
                            >
                                If you want to Start a Business from Scratch, Focus on the Difference.
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                                    color: '#6c757d',
                                    lineHeight: 1.6,
                                    mb: 4,
                                    maxWidth: '500px'
                                }}
                            >
                                Starting a new business comes with a vast amount of steps. These are steps, which have to be not just taken but also known about in advance. As an investor and entrepreneur, many of these can be paralyzing, cause inertia, and not allow for forward movement.
                            </Typography>

                            {/* Features List */}
                            <Box sx={{ mb: 4 }}>
                                <Grid container spacing={2}>
                                    {features.map((feature, index) => (
                                        <Grid item xs={12} sm={6} key={index}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                                                <CheckCircleIcon
                                                    sx={{
                                                        color: '#28a745',
                                                        fontSize: '1.2rem',
                                                        mt: 0.2,
                                                        flexShrink: 0
                                                    }}
                                                />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: { xs: '0.875rem', sm: '0.95rem' },
                                                        color: '#495057',
                                                        lineHeight: 1.5
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>

                            {/* Action Buttons */}
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
                                        backgroundColor: '#2c3e50',
                                        color: 'white',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: { xs: '0.95rem', sm: '1rem' },
                                        fontWeight: 500,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#34495e'
                                        }
                                    }}
                                >
                                    Let's Develop Together
                                </Button>

                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    justifyContent: { xs: 'center', sm: 'flex-start' }
                                }}>
                                    <IconButton
                                        sx={{
                                            backgroundColor: '#2c3e50',
                                            color: 'white',
                                            width: 48,
                                            height: 48,
                                            '&:hover': {
                                                backgroundColor: '#34495e'
                                            }
                                        }}
                                    >
                                        <SupportAgentIcon />
                                    </IconButton>

                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: '#6c757d',
                                                fontSize: '0.875rem',
                                                fontWeight: 500
                                            }}
                                        >
                                            24/7 Support: (234) 109-6666
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
}

export default DevlopTogether;