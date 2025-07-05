import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Avatar,
    Container,
    Divider
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import SavingsIcon from '@mui/icons-material/Savings';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

const features = [
    {
        icon: <BookmarkIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Experience and Expertise',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    },
    {
        icon: <BarChartIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Strategic Marketing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    },
    {
        icon: <PersonIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Customer Focused',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    },
    {
        icon: <VerifiedIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Industry Certified',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    },
    {
        icon: <SavingsIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Saving Costs',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    },
    {
        icon: <UmbrellaIcon sx={{ fontSize: { xs: 28, sm: 30, md: 33 } }} />,
        title: 'Honesty and Integrity',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra tortor eget lacus ullamcorper.'
    }
];

const SomeofthePerks = () => {
    return (
        <Box
            sx={{
                my: '22px',
                py: { xs: '40px', sm: '50px', md: '60px' },
                px: { xs: '10px', sm: '15px', md: '0' },
                backgroundColor: '#121C27',
                mx: '15px'
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ px: { md: 7, sm: 4, xs: 1 } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: { xs: '25px', sm: '30px', md: '35px' },
                            gap: '20px'
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: { xs: '22px', sm: '30px', md: '45px' },
                                color: '#FFF',
                                lineHeight: { xs: '32px', sm: '42px', md: '55px' },
                                width: { xs: '100%', md: '40%' }
                            }}
                        >
                            Some of the Perks you’ll get as a Member
                        </Box>
                        <Box
                            sx={{
                                color: '#C4C4C4',
                                fontSize: { xs: '13px', sm: '15px', md: '18px' },
                                width: { xs: '100%', md: '50%' }
                            }}
                        >
                            Our benefit philosophy is built on giving people everything they
                            need to succeed and providing value in meaningful ways.
                        </Box>
                    </Box>

                    <Divider
                        sx={{
                            backgroundColor: '#545A5E',
                            height: '0.5px',
                            width: '100%',
                            mb: { xs: '40px', sm: '60px', md: '75px' }
                        }}
                    />

                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index} sx={{ mb: 3 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'start',
                                        gap: { xs: '16px', sm: '24px', md: '30px' }
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            backgroundColor: '#3E4853',
                                            color: '#DCDAD7',
                                            width: { xs: '60px', sm: '68px', md: '74px' },
                                            height: { xs: '60px', sm: '68px', md: '74px' },
                                            transition: 'background-color 0.3s ease, color 0.3s ease'
                                        }}
                                    >
                                        {feature.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '18px', sm: '20px', md: '23px' },
                                                fontWeight: 500,
                                                lineHeight: { xs: '28px', sm: '32px', md: '35px' },
                                                mb: { xs: '12px', md: '18px' },
                                                color: '#fff'
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                                                lineHeight: { xs: '22px', sm: '24px', md: '25px' },
                                                color: '#C4C4C4',
                                                mt: '4px',
                                                width: '96%'
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default SomeofthePerks;
