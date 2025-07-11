'use client';
import React from 'react';
import {Box, Container, Grid, Typography, LinearProgress, Divider} from '@mui/material';

const Business = () => {
    const [progress1, setProgress1] = React.useState(0);
    const [progress2, setProgress2] = React.useState(0);
    const [progress3, setProgress3] = React.useState(0);
    React.useEffect(() => {
        const increment = 1;
        const timer1 = setInterval(() => {
            setProgress1((prevProgress) => {
                if (prevProgress >= 80) {
                    clearInterval(timer1);
                    return 80;
                }
                return prevProgress + increment;
            });
        }, 25);
        const timer2 = setInterval(() => {
            setProgress2((prevProgress) => {
                if (prevProgress >= 90) {
                    clearInterval(timer2);
                    return 90;
                }
                return prevProgress + increment;
            });
        }, 25);
        const timer3 = setInterval(() => {
            setProgress3((prevProgress) => {
                if (prevProgress >= 95) {
                    clearInterval(timer3);
                    return 95;
                }
                return prevProgress + increment;
            });
        }, 25);
        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
        };
    }, []);
    return (
        <div>
            <Container maxWidth="xl">
                <Box sx={{
                    padding:"90px 0"
                }}>
                    <Grid container spacing={10} sx={{
                        display:"flex",
                        justifyContent:{xs:"start",md:"center",sm:"center",lg:"center"}
                    }}>
                        <Grid item xs={12}  md={6} lg={6} >
                            <Box display="flex" justifyContent="center" sx={{height: {md:'650px' , xs:'100%'}}}>
                                <img
                                    src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/05/ab5.webp"
                                    alt="Business Growth"
                                    style={{ width: '100%', height: '100%',objectFit: {md:'cover' , xs:'contain'} }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Box display="flex">
                                <Typography variant="h4" component="div"
                                      sx={{ fontWeight: 'bold',
                                          fontSize: '12px',
                                          color: '#505558',
                                          pt:{lg:"40px",sm:"10px",md:"30px",xs:"0px"},
                                          letterSpacing: '2.5px'
                                }}>
                                    WHY CHOOSE JBS TECHNOLOGY
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                    color: '#000000',
                                    fontWeight: '500',
                                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                    lineHeight: '50px',
                                    mt: '20px'
                                }}>
                                    We See Solutions Growing for your Business
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{
                                    fontSize: '13px',
                                    mt: '25px',
                                    lineHeight: '26px',
                                    color: '#4B535D',
                                    width:'90%'
                                }}>
                                    Our Consultants provide the highest quality advice and technical support and will
                                    assist your organization by thoroughly assessing your IT infrastructure and recommending
                                    the best long-term approach given your unique resource requirements
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: '20px'
                            }}>
                                <Typography sx={{ fontSize: '14px' }}>Strategic Analysis</Typography>
                                <Typography sx={{ fontSize: '14px' }}>{progress1}%</Typography>
                            </Box>
                            <Box sx={{ mt:'10px'}}>
                                <LinearProgress variant="determinate" value={progress1}
                                    sx={{
                                        height: '3px',
                                        backgroundColor: 'rgba(10, 19, 32, 8%)',
                                        '& .MuiLinearProgress-bar': { backgroundColor: 'black' }
                                }} />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent:'space-between',
                                mt: '20px',
                                pt:"10px"
                            }}>
                                <Typography sx={{ fontSize: '14px' }}>Development Experience</Typography>
                                <Typography sx={{ fontSize: '14px' }}>{progress2}%</Typography>
                            </Box>
                            <Box sx={{ mt: '10px' }}>
                                <LinearProgress variant="determinate" value={progress2}
                                   sx={{
                                       height: '3px',
                                       backgroundColor: 'rgba(10, 19, 32, 8%)',
                                       '& .MuiLinearProgress-bar': { backgroundColor: 'black' }
                                }} />
                            </Box>
                            <Box sx={{ display: 'flex',justifyContent: 'space-between', mt: '25px',pt:"10px"  }}>
                                <Typography sx={{ fontSize: '14px' }}>Enterprise Solutions</Typography>
                                <Typography sx={{ fontSize: '14px' }}>{progress3}%</Typography>
                            </Box>
                            <Box sx={{ mt: '10px' }}>
                                <LinearProgress variant="determinate" value={progress3}
                                   sx={{
                                       height: '3px',
                                       backgroundColor: 'rgba(10, 19, 32, 8%)',
                                       '& .MuiLinearProgress-bar': { backgroundColor: 'black'}
                                }} />
                            </Box>
                            {/*<button style={{*/}
                            {/*    color:"white",*/}
                            {/*    backgroundColor:"black",*/}
                            {/*    height:"50px",width:"160px",*/}
                            {/*    marginTop:"40px",*/}
                            {/*    borderRadius:"30px",*/}
                            {/*    cursor:"pointer"*/}
                            {/*}}>*/}
                            {/*    Discovery More*/}
                            {/*</button>*/}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Divider sx={{ backgroundColor: "#d3d5d6" , width:"100%"}} />
        </div>

    );
};

export default Business;