'use client';
import React from "react";
import {
    Box,
    Typography,
    TextField,
    Divider,
    Container,
    Grid,
} from "@mui/material";
import {Facebook, Twitter, Instagram, Telegram} from "@mui/icons-material";
import img1 from "../../assets/images/logo/logo-white.png";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from "next/image";
import EastIcon from '@mui/icons-material/East';
import {useRouter} from "next/navigation";

function Footer2() {
    const router = useRouter();
    const navItems = [
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Blog', route: '/blog' },
        { name: 'Careers', route: '/careers' },
        { name: 'Contact', route: '/contact' },
    ];
    const footerData = {
        logo: img1,
        socialLinks: [
            {name: "LinkedIn", link: "https://www.linkedin.com/company/jbs-technique/posts/?feedView=all"},
            {name: "Twitter", link: "https://x.com/JBSTechnology26"},
            {name: "Instagram", link: "https://www.instagram.com/jbs_technology/?hl=en"},
            {
                name: "WhatsApp",
                link: "https://wa.me/917984443901?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            },
        ],
        contact: {
            title: "Get in Touch!",
            details: [
                "City Center complex, 203, Savlia Circle, Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395006",
                "Call us: +91 79844 43901",
                "Email: jbs.technology26@gmail.com",
                "Mon–Sat: 8:00am–7:00pm / Holiday: Closed",
            ],
        },
        services: {
            title: "Company",
            links: [
                "About",
                "Services",
                "Portfolio",
                "Blog",
                "Careers",
                "Contact",
            ]
        },
        newsletter: {
            title: "Stay Updated!",
            placeholder: "Enter your email",
            description: "Sign up for updates and exclusive content.",
        },
        footerBottom: {
            left: "© 2025 JBS Technology. All rights reserved.",
            links: ["Privacy Policy"],
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: "#1A1F26",
                color: "white",
                padding: "20px 0 40px",
            }}
        >
            <Container maxWidth="xl">
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{display: "flex", justifyContent: {xs: "center", md: "left"} , height:'100px' }}
                            onClick={() => router.push('/')}
                        >
                            <img
                                src={footerData.logo.src}
                                alt="Logo"
                                style={{
                                    width: '100px',
                                    height: '100%',
                                    objectFit: 'contain',
                                    cursor:'pointer'
                                }}
                            />
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{display: "flex", justifyContent: {xs: "center", md: "flex-end"}}}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 3,
                            }}
                        >
                            {footerData.socialLinks.map((social, index) => {
                                const Icon = {
                                    LinkedIn: LinkedInIcon,
                                    Twitter: Twitter,
                                    Instagram: Instagram,
                                    WhatsApp: WhatsAppIcon,
                                }[social.name];
                                return Icon ? (
                                    <Icon
                                        key={index}
                                        sx={{fontSize: 25, cursor: "pointer"}}
                                        onClick={() => window.open(social.link, "_blank")}
                                    />
                                ) : null;
                            })}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{my: 2, backgroundColor: "gray"}}/>

                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{py: "20px", backgroundColor: "#1A1F26", borderRadius: "8px"}}>
                            <Typography variant="h6" sx={{fontWeight: 500, mb: 3, marginLeft:'23px'}}>
                                {footerData.services.title}
                            </Typography>
                            {footerData.services.links.map((service, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        display: "flex",
                                        alignItems: "center",
                                        transition: "color 0.5s, transform 0.5s",
                                        color: "#C4C4C4",
                                        cursor: "pointer",
                                        '&:hover': {
                                            color: "#fff",
                                            transform: "translateX(5px)",
                                        },
                                        '&:hover .icon': {
                                            opacity: 1,
                                            transform: "translateX(0px)",
                                        },
                                    }}
                                    onClick={() => {
                                        const navItem = navItems.find(item => item.name.toLowerCase() === service.toLowerCase());
                                        if (navItem) router.push(navItem.route);
                                    }}
                                >
                                    <Box
                                        className="icon"
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            marginRight: "10px",
                                            opacity: 0,
                                            transition: "opacity 0.5s, transform 0.5s",
                                        }}
                                    >
                                        <EastIcon fontSize="small"/>
                                    </Box>
                                    {service}
                                </Typography>
                            ))}

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{padding: "20px", backgroundColor: "#1A1F26", borderRadius: "8px"}}>
                            <Typography variant="h6" sx={{fontWeight: 500, mb: 3,}}>
                                {footerData.contact.title}
                            </Typography>
                            {footerData.contact.details.map((detail, index) => (
                                <Typography key={index} variant="body2" sx={{mb: 2, color: "#C4C4C4"}}>
                                    {detail}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={12} md={5}>
                        <Box sx={{padding: "20px", backgroundColor: "#1A1F26", borderRadius: "8px"}}>
                            <Typography variant="h6" sx={{fontWeight: 500, mb: 3,}}>
                                {footerData.newsletter.title}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    backgroundColor: "#353E47",
                                    borderRadius: "0px",
                                    padding: "10px",
                                    mb: 2,
                                }}
                            >
                                <TextField
                                    placeholder={footerData.newsletter.placeholder}
                                    variant="standard"
                                    fullWidth
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            color: "white",
                                            fontSize: "14px",
                                            backgroundColor: "transparent",
                                            paddingRight: "10px",
                                        },
                                    }}
                                    sx={{flex: 1}}
                                />
                                <Box
                                    sx={{
                                        width: "32px",
                                        height: "32px",
                                        display: "flex",
                                        alignItems: "center",
                                        color: "white",
                                        fontSize: "18px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <EastIcon/>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", alignItems: "center", mt: 2}}>
                                <Box

                                >
                                    <Box
                                        sx={{
                                            mr: 1,
                                            fontWeight: "900",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CircleNotificationsIcon sx={{fontSize: "30px"}}/>
                                    </Box>
                                </Box>
                                <Typography variant="body2" sx={{color: "#C4C4C4"}}>
                                    Please sign up to follow the latest news and events from us, we
                                    promise not to spam your inbox.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{my: 4, backgroundColor: "gray"}}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{textAlign: {xs: "center", md: "left"}}}>
                        <Typography variant="body2" sx={{fontSize: "12px", color: "#C4C4C4"}}>
                            {footerData.footerBottom.left}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{textAlign: {xs: "center", md: "right"}}}>
                        <Box
                            sx={{
                                display: "flex",
                                // gap: "20px",
                                flexWrap: "wrap",
                                justifyContent: "end",
                            }}
                        >
                            {footerData.footerBottom.links.map((link, index) => (
                                <Typography key={index} variant="body2" sx={{fontSize: "12px", color: "#C4C4C4"}}>
                                    {link}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer2;