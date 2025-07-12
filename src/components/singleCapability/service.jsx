'use client'
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Container,
    useTheme,
    useMediaQuery,
    Card,
    CardContent
} from "@mui/material";
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Servicess({services}) {

    return (
        <Box sx={{
            backgroundColor: '#f8f9fa',
            py: { xs: 4, sm: 6, md: 0 }
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={{ xs: 3, md: 3 }}>
                    {services.map((service) => (
                        <Grid item xs={12} md={4} key={service.id}>
                            <Card
                                sx={{
                                    backgroundColor: '#e8e9ea',
                                    boxShadow: 'none',
                                    borderRadius: 0,
                                    position: 'relative',
                                    overflow: 'visible',
                                    height: '100%',
                                    width:"100%",
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '3px',
                                        backgroundColor: '#121C27',
                                        zIndex: 1
                                    }
                                }}
                            >
                                <CardContent sx={{
                                    p: { xs: 3, sm: "45px 30px 43px" },
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minHeight: '280px'
                                }}>
                                    {/* Icon */}
                                    <Box sx={{
                                        mb: 3,
                                        mt: 2
                                    }}>
                                        <Box sx={{
                                            width: 60,
                                            height: 70,
                                            // backgroundColor: '#2c3e50',
                                            // borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#000',
                                            fontSize: '90px'
                                        }}>
                                            {service.icon}
                                        </Box>
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontSize: { xs: '18px', sm: '23px' },
                                            // fontWeight: 600,
                                            color: '#0A1119',
                                            lineHeight: 1.3,
                                          margin:"15px 0px 15px",
                                            textAlign: 'center'
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: { xs: '14px', sm: '15px' },
                                            color: '#4b535d',
                                            lineHeight: '25px',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Servicess;