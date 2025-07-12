'use client';
import React from 'react';
import img1 from '../../assets/images/portfolio/1.png';
import img2 from '../../assets/images/portfolio/2.png';
import img3 from '../../assets/images/portfolio/3.png';
import img4 from '../../assets/images/portfolio/4.png';
import img5 from '../../assets/images/portfolio/5.jpg';
import img6 from '../../assets/images/portfolio/6.jpg';
import img7 from '../../assets/images/portfolio/7 (1).png';

import log11 from "../../assets/images/portfolio/brand-1.png";
import log33 from "../../assets/images/portfolio/brand-3.png";
import log44 from "../../assets/images/portfolio/brand-4.png";
import log66 from "../../assets/images/portfolio/brand-6.png";
import log77 from "../../assets/images/portfolio/brand-7.png";
import log88 from "../../assets/images/portfolio/brand-8-removebg-preview.png";
import img99 from "../../assets/images/portfolio/jbs-xigw9mwa_720.png";

import { Box, Grid } from '@mui/material';
import { useRouter } from "next/navigation";
import Image from "next/image";
const slides = [
    {
        name: 'Social Impact Finance',
        title: 'Girls First Finance',
        description:
            'At Girls First Finance, our mission is to eradicate the sexual exploitation of girls and young women by sugar daddies, teachers, and employers in exchange for tuition fees, passing courses, and jobs. We believe no girl or young woman should be subjected to such exploitation for education, training, jobs, or work experience. We innovate solutions to ensure that all girls and young women can access safe, affordable funding for their tuition, living expenses, or enterprise ideas. Our goal is to make the practice of sugar daddies, sponsors, and sex-for-grades socially unacceptable.',
        button: 'See Case Study',
        image: img2,
        route:'/portfolio/social-impact-finance',
        bgcolor: '#FFF',
        color: '#1A1F26',
        logo:log11
    },
    {
        name: 'Education CRM',
        title: 'Eduaura',
        description:
            'The Institute Management System (IMS) developed by JBS Technology is a comprehensive CRM solution tailored for educational institutions. This robust platform streamlines administrative tasks, enhances communication, and improves overall efficiency, allowing institutes to focus on delivering quality education.',
        button: 'See Case Study',
        image: img1,
        route:'/portfolio/education-crm',
        bgcolor: '#BFAFED',
        color: '#1A1F26',
        logo:img99,
    },
    {
        name: 'Gold Loan Services',
        title: 'EGF',
        description:
            'At Easy Gold Fincorp, we are dedicated to providing innovative financial solutions tailored to meet your needs. With a commitment to excellence and customer satisfaction, we deliver reliable services that empower individuals and businesses alike. Our experienced team is here to assist you every step of the way, ensuring transparency, security, and efficiency in all our endeavors. Trust Easy Gold Fincorp for your financial needs and embark on a journey towards prosperity today.',
        button: 'See Case Study',
        image: img4,
        route:'/portfolio/gold-loan-services',
        bgcolor: '#FFF',
        color: '#1A1F26',
        logo:log33
    },
    {
        name: 'Programmatic Advertising',
        title: 'War Room',
        description:
            "At War Room, we excel in one area: programmatic ads. Our highly specialized ad ops team delivers exceptional ad campaigns that go beyond the capabilities of traditional agencies. Our deep expertise allows us to exceed conversion goals consistently, and we're confident we can achieve the same success for you.",
        button: 'See Case Study',
        image: img3,
        route:'/portfolio/programmatic-advertising',
        bgcolor: '#F4CBD4',
        color: '#1A1F26',
        logo: log88
    },
    {
        name: 'Consumer Co-operative',
        title: "NCCF",
        description:
            'NCCF promotes the consumer cooperative movement by facilitating the formation and democratic functioning of cooperatives, emphasizing self-reliance and mutual aid. We aim to meet consumer needs satisfactorily while maintaining transparency and a focus on consumer satisfaction. Our mission includes striving for higher performance standards, fostering growth among member cooperatives through best practices and technology, achieving better market penetration, and undertaking essential civil and infrastructure works as outlined by government guidelines.',
        button: 'See Case Study',
        image: img6,
        route: '/portfolio/consumer-co-operative',
        bgcolor: '#FFF',
        color: '#1A1F26',
        logo:log44
    },
    {
        name: 'Stock Market Community',
        title: 'Hedger Community',
        description:
            "Hedger Community is your go-to platform for all things related to the stock market. Whether you're a seasoned investor or a beginner, our website provides the resources, tools, and community support you need to navigate the stock market with confidence. At Hedger Community, we aim to empower our users with comprehensive information, real-time updates, and expert insights to help you make informed investment decisions.",
        button: 'See Case Study',
        image: img5,
        route:'/portfolio/stock-market-community',
        bgcolor: '#758694',
        color: '#1A1F26',
        logo:log66
    },
    {
        name: 'Jewelry ERP',
        title: 'Loyal String',
        description:
            'Diamond Software approached us to develop a comprehensive software solution tailored to their advanced EAS and RFID systems. The project involved creating a user-friendly platform that integrates seamlessly with their existing hardware, offering real-time monitoring, instant notifications, and robust data analytics.Diamond Software approached us to develop a comprehensive software solution tailored to their advanced EAS and RFID systems. The project involved creating a user-friendly platform that integrates seamlessly with their existing hardware, offering real-time monitoring, instant notifications, and robust data analytics.',
        button: 'See Case Study',
        image: img7,
        route: '/portfolio/jewelry-erp',
        bgcolor: '#F2EFEB',
        color: '#1A1F26',
        logo:log77
    }
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
                        padding: '0 32px',
                        backgroundColor: item.bgcolor,
                        color: item.color,
                        // height:{md:"600px"},
                        display:"flex",
                        alignItems:"center"
                    }}
                >
                    <Box
                        sx={{
                            margin: { md: '0 116px', xs: '0' },
                            padding: '80px 0',
                        }}
                    >
                        <Grid container spacing={4} alignItems="center">
                            {index % 2 === 0 ? (
                                <>
                                    <Grid item md={6} sm={12}>
                                        <Box>
                                            <Box sx={{height:'100%' , width: '120px'}}>
                                                <img src={item.logo.src} alt={item.name} style={{objectFit: 'contain' , height: '100%' , width:'100%'}} />
                                            </Box>
                                            <Box
                                                variant="h2"
                                                component="h2"
                                                sx={{
                                                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
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
                                                    border: '2px solid #1A1F26',
                                                    display: 'inline-block',
                                                    fontWeight: '700',
                                                    cursor: 'pointer',
                                                    lineHeight: '1',
                                                    borderRadius: '500px 500px',
                                                    mt: '23px',
                                                    transition:'.3s',
                                                    ':hover': {
                                                        background: '#1A1F26',
                                                        color: '#fff',
                                                    },
                                                }}
                                                onClick={() => router.push(item.route)}
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
                                                width: '100%',
                                                height: '100%',
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
                                        <Box>
                                            <Box sx={{height:'100%' , width: '120px'}}>
                                                <img src={item.logo.src} alt={item.name} style={{objectFit: 'contain' , height: '100%' , width:'100%'}} />
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
                                                    border: '2px solid #1A1F26',
                                                    display: 'inline-block',
                                                    fontWeight: '700',
                                                    cursor: 'pointer',
                                                    lineHeight: '1',
                                                    borderRadius: '500px 500px',
                                                    mt: '23px',
                                                    transition:'.3s',
                                                    ':hover': {
                                                        background: '#1A1F26',
                                                        color: '#fff',
                                                    },
                                                }}
                                                onClick={() => router.push(item.route)}
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