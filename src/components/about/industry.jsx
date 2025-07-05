import React from 'react';
import {Box, Grid, Typography, Avatar, Container} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import SavingsIcon from '@mui/icons-material/Savings';
import UmbrellaIcon from '@mui/icons-material/Umbrella';

const features = [
    {
        icon: <BookmarkIcon/>,
        title: 'Experience and Expertise',
        description:
            'With years of proven success across industries, JBS Technology brings deep expertise and practical experience to every project—delivering reliable, scalable, and future-ready solutions.',
        background: '#121212',
        color: 'white',
    },
    {
        icon: <BarChartIcon/>,
        title: 'Strategic Marketing',
        description:
            'We craft data-driven marketing strategies that align with your business goals—boosting visibility, engagement, and long-term growth through targeted, impactful campaigns.',
    },
    {
        icon: <PersonIcon/>,
        title: 'Customer Focused',
        description:
            'We put customers at the center of every decision—listening closely, tailoring solutions to real needs, and delivering experiences that build lasting trust and success.',
    },
    {
        icon: <VerifiedIcon/>,
        title: 'Industry Certified',
        description:
            'We meet the highest industry standards with recognized certifications—ensuring quality, security, and compliance in every solution we deliver.',
    },
    {
        icon: <SavingsIcon/>,
        title: 'Saving Costs',
        description:
            'We reduce operational spend through automation, streamlined workflows, and scalable tech—delivering measurable cost savings without sacrificing quality or growth.',
    },
    {
        icon: <UmbrellaIcon/>,
        title: 'Honesty and Integrity',
        description:
            'We operate with transparency, honesty, and integrity—building strong, trust-based relationships and delivering on our promises every step of the way.',
    },
];
const Industry = () => {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{my: '22px', padding: "60px 0"}}>
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} lg={4} key={index} sx={{mb: 3}}>
                            <Box sx={{
                                display: 'flex', alignItems: 'start', gap: '1rem', '&:hover .icon': {
                                    backgroundColor: '#121212',
                                    color: '#FFF',
                                },
                            }}>
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
                                        sx={{fontSize: '22px', fontWeight: '500', lineHeight: '35px', mb: '18px'}}
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