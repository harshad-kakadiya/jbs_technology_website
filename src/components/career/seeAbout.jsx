'use client';
import React from 'react';
import {Box, Container, Grid, Typography, LinearProgress, Divider} from '@mui/material';

const Business = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{
                    padding:"120px 0"
                }}>
                    <Grid container spacing={10} sx={{
                        display:"flex",
                        justifyContent:{xs:"start",md:"center",sm:"center",lg:"center"},
                        alignItems:"center"
                    }}>
                        <Grid item xs={12}  md={6} lg={6} >
                            <Box display="flex" justifyContent="center">
                                <img
                                    src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/06/cr2.webp"
                                    alt="Business Growth"
                                    style={{ width: '100%', height: '650px',objectFit: 'cover' }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box display="flex">
                                <Typography variant="h4" component="div"
                                            sx={{ fontWeight: '500',
                                                fontSize: '13px',
                                                textTransform:"uppercase",
                                                color: '#121C27',
                                                pt:{lg:"40px",sm:"10px",md:"30px",xs:"0px"},
                                                letterSpacing: '5px'
                                            }}>
                                    see about us
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    color: '#OA1119',
                                    fontWeight: '600',
                                    fontSize:{xs:"29px", md:"35px",sm:"32px",lg:"45px"},
                                    lineHeight: '50px',
                                    mt: '20px'
                                }}>
                                    Explore Life at Herrington
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: '15px',
                                    mt: '25px',
                                    lineHeight: '26px',
                                    color: '#4B535D',
                                    width:'90%'
                                }}>

                                    see about us
                                    Explore Life at Herrington
                                    Aenean vel tempus mauris. Vestibulum vel vehicula purus, a lacinia nisi. Suspendisse eget ultrices erat. Praesent mauris mi, interdum ut lacus in, tincidunt facilisis tellus. Etiam porttitor commodo finibus. Curabitur sollicitudin nibh eget nunc porttitor. Maecenas aliquet, felis non vulputate accumsan, ipsum erat convallis sem
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Divider sx={{ backgroundColor: "#d3d5d6" , width:"100%"}} />
        </div>

    );
};

export default Business;