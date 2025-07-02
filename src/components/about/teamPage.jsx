import React from 'react';
import { Box, Button, Typography, Grid, List, ListItem, ListItemText, Container } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import CheckIcon from '@mui/icons-material/Check';
import BG from '../../assets/images/about/teamPage/ab3.webp';
import Team from '../../assets/images/about/teamPage/team2.webp'
const TeamPage = () => {
    return (
        <Box sx={{ px: 1.6 }}>
            <Box
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    padding: '4rem 2rem 2rem',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#000',
                        zIndex: -1,
                    },
                }}
            >
                <Container maxWidth={'xl'}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={7} >
                        <Typography
                            sx={{
                                mb: '18px',
                                fontSize: '13px',
                                fontWeight: '400',
                                letterSpacing: '4.8px',
                            }}
                        >
                            THE TEAMS MEMBER
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '40px',
                                lineHeight: '55px',
                                fontWeight: '500',
                                width: '90%'
                            }}
                        >
                            Get to Know the Incredible Individuals Behind our Company.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={5} >
                        <Box
                            sx={{
                                display: { xs: 'block', lg: 'flex' },
                                justifyContent: { xs: 'flex-start', lg: 'flex-end' },
                                alignItems: 'flex-end',
                                height: '100%',
                                gap: '1rem',
                                mt: { xs: '18px', lg: '0px' }
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#fff',
                                    color: '#121212',
                                    fontSize: '15px',
                                    fontWeight: '400',
                                    lineHeight: '50px',
                                    borderRadius: '50px',
                                    padding: '0px 35px',
                                    textTransform: 'capitalize',
                                }}
                            >
                                More The Teams
                            </Button>
                            <Button
                                variant="text"
                                sx={{
                                    color: '#fff',
                                    textTransform: 'capitalize',
                                    fontSize: { xs: '15px', sm: '16px' },
                                    fontWeight: '400',
                                    letterSpacing: '0.16px',
                                    ml: { xs: '0px', sm: '18px' },
                                    mt: { xs: '16px', sm: '0px' },
                                    position: 'relative',
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: '-4px',
                                        left: '0',
                                        width: '0%',
                                        height: '2px',
                                        backgroundColor: '#fff',
                                        transition: 'width 0.4s ease',
                                    },
                                    '&:hover:after': {
                                        width: '100%',
                                        right: '0',
                                    },
                                }}
                            >
                                Become Part Of Our Team
                                <TrendingFlatIcon sx={{ ml: '14px', fontSize: '33px' }} />
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ border: '0.1px solid #4b535d ', my: 7 }}/>
                </Container>
                <Container maxWidth={'xl'}>
                    <Grid container spacing={4} sx={{ marginTop: '3rem' }}>
                        {[
                            'We are Always Dedicated to our Work',
                            'Are Leading Consultants that you can Trust',
                            'Say No to Laziness',
                            'We are One Big Family',
                        ].map((text, index) => (
                            <List key={index}>
                                <ListItem>
                                    <CheckIcon sx={{ color: '#00E676', mr: '16px' }} />
                                    <ListItemText primary={text} sx={{ color: '#FFF', fontSize: '17px', fontWeight: '400' }} />
                                </ListItem>
                            </List>
                        ))}
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography
                    component={'img'}
                    src={Team.src}
                    sx={{ width: '100%', height: '550px',objectFit:"cover" }}
                />
                <Typography
                    sx={{
                        position: 'absolute',
                        bottom: 32,
                        right: 42,
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}
                >
                    The Family Beyond tech solution
                </Typography>
            </Box>
        </Box>
    );
};
export default TeamPage;