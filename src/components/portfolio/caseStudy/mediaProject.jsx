import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Img1 from '../../../assets/images/portfolio/mediaProject/simple.png';
import phoneimg1 from '../../../assets/images/portfolio/mediaProject/phone.png';
import phoneimg2 from '../../../assets/images/portfolio/mediaProject/phone-02.png';
import phoneimg3 from '../../../assets/images/portfolio/mediaProject/phone-03.png';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';
import  img2 from '../../../assets/images/portfolio/mediaProject/women.jpeg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const slides = [
    {
        name: 'The Challenges',
        number: '01',
        title1: 'Fans creating artist-related content',
        title2: 'Creators want to monetize their intellectual property',
        title3: 'Native vs. hybrid',
        description1:
            'From an architectural perspective, the solution had a challenge from the beginning, which was the realtime ingestion of data from hundreds of different sources, to keep server stability.',
        description2:
            'Fave allows creators to monetize their IP through their fans’ content and gives access to in-depth data. This uses the latent potential of a digital footprint from fans.',
        description3:
            'We decided on NativeScript for an MVP launch and planned to replace it with a fully native app for scalability.',
        icon: <ArrowCircleRightIcon fontSize={'large'} />,
        image: phoneimg1,
    },
    {
        name: 'The Process',
        number: '02',
        title1: 'Product Scope',
        title2: 'Product Rationale and Tech Scope',
        title3: 'Clickable Prototype',
        title4: 'Final UX/UI Development',
        description1:
            'We created a comprehensive brief by gathering market research, competitor benchmarks, and necessary data.',
        description2:
            'Our experts in Product, UX/UI, and Tech Architecture focused on answering key questions during scope preparation.',
        description3:
            'We developed a non-functional prototype to simulate user interaction and test information architecture.',
        description4:
            'Final product development proceeded through agile cycles with continuous stakeholder feedback.',
        icon: <LightbulbCircleIcon fontSize={'large'} />,
        image: phoneimg2,
    },
    {
        name: 'Key Features',
        number: '03',
        title1: 'Fandom',
        title2: 'Coin System',
        title3: 'Leaderboard',
        description1:
            'A digital space where fans upload content and interact, creating a centralized area for engagement.',
        description2:
            'Users earn coins for content contributions, redeemable for merchandise from their favorite creators.',
        description3:
            'Fans compete on leaderboards to win prizes based on their activity and scoring.',
        icon: <ArrowCircleRightIcon fontSize={'large'} />,
        image: phoneimg3,
    },
];

function MediaProject() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ padding: { xs: '16px', sm: '32px' } }}>
                {/* Client Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ padding: { xs: '8px 0', md: '10px 0' } }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#4A4A68',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    marginBottom: '15px',
                                }}
                            >
                                About the Client
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '24px',
                                    color: '#0F172A',
                                    fontWeight: 700,
                                    marginBottom: '15px',
                                }}
                            >
                                For over a decade, Jacquelle Amankonah Horton has been dedicated
                                to innovating within the music industry, launching award-winning apps.
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    marginBottom: '15px',
                                    color: '#1F1C31',
                                }}
                            >
                                She worked at Google for 7 years, driving product development for YouTube creators and artists.
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    marginBottom: '15px',
                                    color: '#1F1C31',
                                }}
                            >
                                Jacquelle was named one of the “Top 100 Young Entrepreneurs in the World,” and made the “Forbes 30 Under 30” list in 2020.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ margin: { xs: '0', md: '0 0 0 40px' , display:"flex" , justifyContent:"center" } }}>
                            <Image src={Img1} alt="About the Client" style={{ Width: '100%', height: 'auto'}} />
                        </Box>
                    </Grid>
                </Grid>

                {slides.map((item, index) => (
                    <Box key={index + 1} sx={{ padding: '64px 0px' }}>
                        <Grid
                            container
                            spacing={4}
                            alignItems="center"
                            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                        >
                            <Grid item xs={12} md={6}>
                                <Box sx={{display:"flex" , justifyContent:"center"}}>
                                    <Image src={item.image} alt={`Slide ${item.number}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#0FA4E4',
                                            fontSize: '36px',
                                            fontWeight: '700',
                                            marginRight: '20px',
                                        }}
                                    >
                                        {item.number}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#0F172A',
                                            fontSize: '36px',
                                            fontWeight: '700',
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                </Box>
                                {[item.title1, item.title2, item.title3, item.title4].map(
                                    (title, i) =>
                                        title && (
                                            <Box key={i} sx={{ display: 'flex', marginBottom: '20px' }}>
                                                <Box sx={{ color: '#0FA4E4', marginRight: '10px' }}>
                                                    {item.icon}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{ fontWeight: 600, marginBottom: '10px' }}
                                                    >
                                                        {title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{ color: '#4A4A68' }}
                                                    >
                                                        {item[`description${i + 1}`]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        )
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                ))}

                <Box sx={{ padding: "96px 0" }}>
                        <Box
                            sx={{
                                background: "#F4FAFE",
                                borderRadius: "15px",
                                position:"relative",
                                padding: "32px",
                                width: "100%",
                            }}
                        >
                            <Grid container alignItems="center">
                                <Grid item xs={12} md={3}  display="flex" justifyContent="center">
                                    <Box>
                                        <Image
                                            src={img2}
                                            alt="Jacquelle Amankonah Horton"
                                            style={{
                                                borderRadius: "10px",
                                                height:"280px",
                                                width:"280px"
                                            }}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={12} md={9}>
                                    <Box
                                        sx={{
                                            margin: { md: "30px 80px", xs: "30px 10px" },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: "#0F172A",
                                                paddingBottom: "10px",
                                            }}
                                        >
                                            Jacquelle Amankonah Horton
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 500,
                                                color: "#4A4A68",
                                                paddingBottom: "20px",
                                            }}
                                        >
                                            Founder & CEO
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 500,
                                                color: "#4A4A68",
                                                lineHeight: "25px",
                                            }}
                                        >
                                            Altar.io added value to the project far beyond the intended scope of work. Their advice
                                            and guidance about running a new business have been invaluable. The team is clearly
                                            passionate about the work and shares innovative ideas and solutions to drive the project
                                            forward.
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top:"0",
                                            right:"0"
                                        }}
                                    >
                                        <FormatQuoteIcon
                                            sx={{
                                                fontSize: {sm:"150px" , xs:"100px"},
                                                color:"#16A5E3"
                                            }}
                                        />
                                    </Box>

                                </Grid>
                            </Grid>
                        </Box>
                </Box>

            </Container>

            <Box>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background:"#F4FAFE",
                            padding: {md:"100px" , xs:"40px 16px"},
                            display:"flex",
                            justifyContent:{md:"end" , xs:"start"}
                        }}>
                            <Box>
                                <Box sx={{fontSize:"18px" , fontWeight:"500",color:"#0FA4EA"}}>Privious Project</Box>
                                <Box sx={{fontSize:"24px",fontWeight:"700",color:"#0F172A"}}>Apiax</Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background:"#E8F4FD",
                            padding: {md:"100px" , xs:"40px 16px"},
                        }}>
                                <Box sx={{fontSize:"18px" ,fontWeight:"500", color:"#0FA4EA"}}>Next Project</Box>
                                <Box sx={{fontSize:"24px",fontWeight:"700",color:"#0F172A"}}>Movie Me!</Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default MediaProject;
