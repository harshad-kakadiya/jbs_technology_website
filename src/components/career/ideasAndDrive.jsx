'use client';
import React from 'react';
import {Box, Container, Typography,} from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import img from '@/assets/images/career/team.png'


function IdeasAndDrive() {


    return (
        <>
            <Box sx={{backgroundColor: '#E7E7E7', mx: { md: "30px", lg:"40px"},mt:8}}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {xs: "center", md: 'space-between'},
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            pb: 6,
                            pt: {xs: 5, sm: 7, md: 0},
                            gap: 6,
                        }}
                    >
                        {/* Text Section */}
                        <Box sx={{maxWidth: 700, my: {xs: 0, md: 5},}}>
                            <Typography
                                variant="h4"

                                sx={{
                                    fontWeight: 500,
                                    mb: 2,
                                    color: '#0A1119',
                                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                    textAlign: {xs: 'center', md: 'left'},
                                }}
                            >
                                A Career where your <br/> Potential, Ideas and Drive Matter
                            </Typography>

                            <Typography
                                variant="body1"

                                sx={{
                                    color: '#4B535D',
                                    fontSize: 18,
                                    lineHeight: '33px',
                                    textAlign: {xs: 'center', md: 'left'},
                                }}
                            >
                                JBS is seeking problem solvers, creative thinkers, engineers, and business
                                builders
                                like you. Embrace a world of limitless opportunities where your talents can shine, and
                                each
                                day brings a meaningful impact. Whether you’re an experienced professional or a recent
                                graduate, joining Herrington can offer you a challenging and rewarding next step in your
                                career.
                            </Typography>
                        </Box>

                        {/* Circle Button Section */}
                        <Box
                            sx={{
                                width: 216,
                                height: 216,
                                backgroundColor: '#121C27',
                                borderRadius: '50%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white',
                                textAlign: 'center',
                                cursor: 'pointer',

                            }}
                        >
                            <WorkOutlineIcon sx={{fontSize: 40, mb: 1}}/>
                            <Typography variant="body1" sx={{fontWeight: 500}}>
                                View Open Positions
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>


            {/*<Box*/}
            {/*    sx={{*/}

            {/*        mx: { md: "30px", lg:"40px"}*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Typography*/}
            {/*        component={'img'}*/}
            {/*        src={img.src}*/}
            {/*        sx={{width: '100%', height: {md:'600px',sm:"full",xs:"full"}, objectFit: {lg:"cover",xs:"contain"}, objectPosition: "top"}}*/}
            {/*    />*/}

            {/*</Box>*/}
        </>
    );
}

export default IdeasAndDrive;
