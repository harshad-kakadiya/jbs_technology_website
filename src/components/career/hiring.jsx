'use client'
import React, { useState } from 'react';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Hiring() {
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const jobData = [
        {
            id: 'panel1',
            title: 'Project Manager Consulting',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis dolor. Aliquam massa...',
            request: 'nimble, withstand high frequency of operation, fun, sociable',
            salary: '$300/month, salary increase according to ability or salary increase every 6 months'
        },
        {
            id: 'panel2',
            title: 'HR Automation & System Transformation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis dolor. Aliquam massa...',
            request: 'nimble, motivated high frequency of operation, fun, sociable',
            salary: 'benchmark $-50k/month, yearly increase according to ability or salary increases every 6 months'
        },
        {
            id: 'panel3',
            title: 'Business Analyst – Assistant Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis dolor. Aliquam massa...',
            request: 'nimble, motivated high frequency of operation, fun, sociable',
            salary: 'benchmark $-50k/month, yearly increase according to ability or salary increases every 6 months'
        },
        {
            id: 'panel4',
            title: 'Growth Management – General Manager',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis dolor. Aliquam massa...',
            request: 'nimble, motivated high frequency of operation, fun, sociable',
            salary: 'benchmark $-50k/month, yearly increase according to ability or salary increases every 6 months'
        }
    ];


    return (
        <Box
            sx={{
                backgroundImage: 'linear-gradient(#EDE7E2 0%, #F5F5F5 100%)',
                py: '100px'
            }}
        >
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: '500',
                            color: '#000',
                            mb: 2,
                            fontSize: { xs: '32',sm:"38px", md: '45px' }
                        }}
                    >
                        Our Hiring Procedure
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#545A5E',
                            fontSize: '20px',
                            // maxWidth: '600px',
                            mx: 'auto'
                        }}
                    >
                        Here are the 3 steps of the selection process for hiring employees. Tell us about your skills and aspirations.
                    </Typography>
                </Box>

                {/* Steps Section */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 3,
                    mb: 6,
                    justifyContent: 'center'
                }}>
                    {/* Step 1 */}
                    <Box sx={{
                        backgroundColor: 'transparent',
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        maxWidth: { xs: '100%', md: '330px' }
                    }}>
                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: '#2C3032',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}
                        >
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: '500', lineHeight: 1 }}>
                                1
                            </Typography>
                        </Box>

                        <Typography sx={{ fontWeight: '500', mb: 2 , color: '#242729',fontSize: '20px',lineHeight: '30px' }}>
                            Select the Position you want to Apply
                        </Typography>
                        <Typography sx={{ color: '#545A5E', fontSize: '15px', lineHeight: '25px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra.
                        </Typography>
                    </Box>

                    {/* Step 2 */}
                    <Box sx={{
                        backgroundColor: 'transparent',
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        maxWidth: { xs: '100%', md: '330px' }
                    }}>
                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: '#2C3032',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}
                        >
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: '500', lineHeight: 1 }}>
                                2
                            </Typography>
                        </Box>

                        <Typography sx={{ fontWeight: '500', mb: 2 , color: '#242729',fontSize: '20px',lineHeight: '30px' }}>
                            Panel Interview by Senior Members
                        </Typography>
                        <Typography sx={{ color: '#545A5E', fontSize: '15px', lineHeight: '25px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra.
                        </Typography>
                    </Box>

                    {/* Step 3 */}
                    <Box sx={{
                        backgroundColor: 'transparent',
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                        maxWidth: { xs: '100%', md: '330px' }
                    }}>
                        <Box
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: '#2C3032',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 3
                            }}
                        >
                            <Typography variant="h6" sx={{ color: '#fff', fontWeight: '500', lineHeight: 1 }}>
                                3
                            </Typography>
                        </Box>

                        <Typography sx={{ fontWeight: '500', mb: 2 , color: '#242729',fontSize: '20px',lineHeight: '30px' }}>
                            Review & Finalization of Hired Candidates
                        </Typography>
                        <Typography sx={{ color: '#545A5E', fontSize: '15px', lineHeight: '25px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra.
                        </Typography>
                    </Box>
                </Box>

                {/* Job Positions Section */}
                <Box sx={{ mb: 2 }}>
                    {jobData.map((job, index) => (
                        <Accordion
                            key={job.id}
                            expanded={expanded === job.id}
                            onChange={handleChange(job.id)}
                            sx={{
                                backgroundColor: '#2C3032',
                                color: 'white',
                                '&:before': { display: 'none' },
                                borderRadius: '4px !important',
                                mb: 1.5
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                sx={{
                                    backgroundColor: '#2C3032',
                                    '&:hover': { backgroundColor: '#2C3032' },
                                    borderRadius: '4px',
                                    py: "7px"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '17px',
                                        color: '#DCDAD7 !important',
                                        margin: "0px 30px"
                                    }}
                                >
                                    {job.title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails sx={{ backgroundColor: '#CDCAC6', p: "45px 40px 50px" }}>
                                <Typography sx={{ mb: '17px', color: '#000', fontWeight: 600 }}>
                                    Job description
                                </Typography>

                                <Typography sx={{ mb: '30px', color: '#545A5E', lineHeight: 1.6 }}>
                                    {job.description}
                                </Typography>

                                <Typography sx={{ mb: '30px' }}>
                                    <span style={{ fontWeight: 600, color: '#000' }}>Request:</span>
                                    <span style={{ color: '#545A5E' }}> {job.request}</span>
                                </Typography>

                                <Typography sx={{ mb: '30px' }}>
                                    <span style={{ fontWeight: 600, color: '#000' }}>Salary received:</span>
                                    <span style={{ color: '#545A5E' }}> {job.salary}</span>
                                </Typography>

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        textTransform: 'none',
                                        borderRadius: '999px',
                                        px: 4,
                                        py: 1.5
                                    }}
                                >
                                    Apply Job Now
                                </Button>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>


                {/* Footer */}
                <Box sx={{ textAlign: 'center', mt: 4, color: '#545A5E' }}>
                    <Typography variant="body2" sx={{ fontSize: '17px' }}>
                        We are always on the lookout for talented folk to join our team. Follow us on LinkedIn!
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Hiring;