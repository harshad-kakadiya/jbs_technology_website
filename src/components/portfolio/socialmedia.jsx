'use client';
import React from 'react';
import bg1 from '../../assets/images/portfolio/img1.png';
import bg2 from '../../assets/images/portfolio/img2.png';
import bg3 from '../../assets/images/portfolio/img3.png';
import { Box, Grid } from '@mui/material';
import { useRouter } from "next/navigation";

const slides = [
    {
        name: 'SOCIAL MEDIA',
        title: 'Fave',
        description:
            'Fave is a fandom-centric community with highly engaging content where fans can create ' +
            'deeper and lasting connections. The vision to nurture and grow the community is centered ' +
            'on rewarding positive and meaningful engagement with points that can be redeemed for discounts' +
            ' and exclusive experiences.',
        button: 'See Case Study',
        image: bg1,
    },
    {
        name: 'FINTECH',
        title: 'Apiax',
        description:
            'Apiax is a Swiss Company that operates in the Regulation Technology market and serves major ' +
            'Banks an API to seamlessly adapt to the always changing financial regulations.',
        button: 'See Case Study',
        image: bg2,
    },
    {
        name: 'FINTECH',
        title: 'Synch',
        description:
            'Synch is a single, curated ecosystem for bond professionals to source and analyse bonds with relevant,' +
            ' reliable and up-to-date data.',
        button: 'See Case Study',
        image: bg3,
    },
];

function Socialmedia() {
    const router = useRouter();

    return (
        <Box
            sx={{
                overflow: 'hidden',
            }}
        >
            {slides.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        padding: { md: '0 32px', sm: '0' },
                        backgroundColor: index % 2 === 0 ? '#fff' : '#000',
                        color: index % 2 === 0 ? '#000' : '#fff',
                        height:{md:"600px"},
                        display:"flex",
                        alignItems:"center"
                    }}
                >
                    <Box
                        sx={{
                            margin: { md: '0 116px', xs: '0' },
                            padding: '40px 0',
                        }}
                    >
                        <Grid container spacing={4} alignItems="center">
                            {index % 2 === 0 ? (
                                <>
                                    <Grid item md={6} sm={12}>
                                        <Box>
                                            <Box
                                                sx={{
                                                    color: '#0fa4ea',
                                                    fontSize: '18px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: { sm: '48px', xs: '36px' },
                                                    fontWeight: '500',
                                                    paddingLeft: '0',
                                                    marginTop: '16px',
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '16px',
                                                    fontWeight: '400',
                                                    marginTop: '16px',
                                                }}
                                            >
                                                {item.description}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '14px',
                                                    textDecoration: 'none',
                                                    padding: '15px 30px',
                                                    border: '2px solid #c36',
                                                    display: 'inline-block',
                                                    fontWeight: '700',
                                                    cursor: 'pointer',
                                                    lineHeight: '1',
                                                    borderRadius: '500px 500px',
                                                    mt: '23px',
                                                    ':hover': {
                                                       background: '#c36',
                                                        color: '#fff',
                                                    },
                                                }}
                                                onClick={() => router.push('/portfolio/1')}
                                            >
                                                {item.button}
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Box
                                            component="img"
                                            src={item.image.src}
                                            alt={`${item.title} - ${item.name}`}
                                            sx={{
                                                display: 'flex',
                                                margin: '0 auto',
                                                width: { lg: '880px', md: '711px', sm: '656px', xs: '410px' },
                                                height: { lg: '450px', md: '400px', sm: '350px', xs: '311px' },
                                            }}
                                        />
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item md={6} sm={12}>
                                        <Box
                                            component="img"
                                            src={item.image.src}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Box sx={{padding:"0 20px" }}>
                                            <Box
                                                sx={{
                                                    color: '#0fa4ea',
                                                    fontSize: '18px',
                                                    fontWeight: '400',
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: { sm: '48px', xs: '36px' },
                                                    fontWeight: '500',
                                                    paddingLeft: '0',
                                                    marginTop: '16px',
                                                }}
                                            >
                                                {item.title}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '16px',
                                                    fontWeight: '400',
                                                    marginTop: '16px',
                                                }}
                                            >
                                                {item.description}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: '14px',
                                                    textDecoration: 'none',
                                                    padding: '15px 30px',
                                                    border: '2px solid #c36',
                                                    display: 'inline-block',
                                                    fontWeight: '700',
                                                    lineHeight: '1',
                                                    cursor: 'pointer',
                                                    borderRadius: '500px 500px',
                                                    mt: '23px',
                                                    ':hover': {
                                                        background: '#c36',
                                                    },
                                                }}
                                                onClick={() => router.push('/portfolio/1')}
                                            >
                                                {item.button}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default Socialmedia;
