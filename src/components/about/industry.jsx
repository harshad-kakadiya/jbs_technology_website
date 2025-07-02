import React from 'react';
import { Box, Grid, Typography, Avatar, Container } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import SavingsIcon from '@mui/icons-material/Savings';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
const features = [
    {
        icon: <BookmarkIcon />,
        title: 'Experience and Expertise',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
        background: '#121212',
        color: 'white',
    },
    {
        icon: <BarChartIcon />,
        title: 'Strategic Marketing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
    },
    {
        icon: <PersonIcon />,
        title: 'Customer Focused',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
    },
    {
        icon: <VerifiedIcon />,
        title: 'Industry Certified',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
    },
    {
        icon: <SavingsIcon />,
        title: 'Saving Costs',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
    },
    {
        icon: <UmbrellaIcon />,
        title: 'Honesty and Integrity',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.',
    },
];
const Industry = () => {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{my:'22px',padding:"60px 0"}}>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index} sx={{mb:3}}>
                            <Box sx={{ display: 'flex', alignItems: 'start', gap: '1rem','&:hover .icon': {
                                    backgroundColor: '#121212',
                                    color: '#FFF',
                                }, }}>
                                <Avatar className={'icon'}
                                    sx={{
                                        backgroundColor: '#FFF',
                                        color: '#121212',
                                        border: '0.5px solid #000',
                                        width: '64px',
                                        height: '62px',
                                        transition: 'background-color 0.3s ease, color 0.3s ease',

                                    }}
                                >
                                    {feature.icon}
                                </Avatar>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontSize: '22px', fontWeight: '500', lineHeight: '35px', mb: '18px' }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        fontSize: '15px',
                                        lineHeight: '25px',
                                        color: '#4B535D',
                                        width: '96%',
                                    }}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};
export default Industry;