'use client';
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Container,
    useTheme,
    useMediaQuery,
    Stack
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Image from 'next/image';



function OurApproach({dynamicContent}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            backgroundColor: '#f8f9fa',
            py: { xs: 4, sm: 6, md: 8 }
        }}>
            <Container maxWidth="xl">
                <Typography
                    variant="overline"
                    component="p"
                    sx={{
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#0A1119',
                        letterSpacing: '4.8px',
                        textTransform: 'uppercase',
                        mb: 2
                    }}
                >
                    Our Approach
                </Typography>

                {/* Title & Description */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    gap: { xs: 3, md: 0 },
                    mb: 4
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                            fontWeight: 500,
                            color: '#0A1119',
                            lineHeight: 1.2,
                            mb: { xs: 1.5, md: 3 },
                            maxWidth: { xs: '100%', md: '700px' },
                            width: '100%',
                            wordBreak: 'break-word'
                        }}
                    >
                        {dynamicContent.title}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '17px',
                            color: '#4B535D',
                            lineHeight: '28px',
                            maxWidth: { xs: '100%', md: '750px' },
                            width: '100%',
                            wordBreak: 'break-word'
                        }}
                    >
                        {dynamicContent.description}
                    </Typography>
                </Box>

                <Grid container spacing={7} alignItems="center">
                    {/* Image */}
                    <Grid item xs={12} md={5}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: { xs: '300px', sm: '400px', md: '500px', lg: '400px' },
                                overflow: 'hidden',
                                borderRadius: { xs: 2, md: 0 }
                            }}
                        >
                            <Image
                                src={dynamicContent.img}
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

                    {/* Services List */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{
                            pl: { xs: 0, md: 6, lg: 8 },
                            pr: { xs: 0, md: 4 },
                            pt: { xs: 4, md: 0 }
                        }}>
                            <Stack spacing={4}>
                                {dynamicContent.services.map((service, index) => (
                                    <Box key={service.id}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            flexDirection: 'row',
                                            gap: 2,
                                            mb: 1.5
                                        }}>
                                            <Box >
                                                <Box
                                                    sx={{
                                                        borderRadius: "50%",
                                                        backgroundColor: "#121C27",
                                                        height: "47px",
                                                        width: "47px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        flexShrink: 0,
                                                    }}
                                                >
                                                    <CheckIcon sx={{ color: "#FFFFFF", fontSize: "25px" }} />
                                                </Box>
                                            </Box>

                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    component="h3"
                                                    sx={{
                                                        fontSize: '23px',
                                                        fontWeight: 500,
                                                        color: '#0A1119',
                                                        lineHeight: '26px',
                                                        mb: "10px",
                                                        wordBreak: 'break-word'
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontSize: '15px',
                                                        color: '#4B535D',
                                                        lineHeight: '25px',
                                                        fontWeight: "400",
                                                        maxWidth: '100%',
                                                        wordBreak: 'break-word'
                                                    }}
                                                >
                                                    {service.description}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        {/* Divider */}
                                        {index !== dynamicContent.services.length - 1 && (
                                            <Box sx={{ borderBottom: '1px solid #E0E0E0', mt: 3, mb: 2 }} />
                                        )}
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default OurApproach;
