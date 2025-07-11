'use client';

import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import imgBlack from '../../assets/images/logo/logo-white.png';
import imgWhite from '../../assets/images/logo/logo-white.png';
import EastIcon from '@mui/icons-material/East';
import {usePathname, useRouter} from 'next/navigation';
import {List, ListItem, ListItemText, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname();
    const router = useRouter();

    const navItems = [
        {name: 'About', route: '/about'},
        {name: 'Services', route: '/services'},
        {name: 'Portfolio', route: '/portfolio'},
        {name: 'Blog', route: '/blog'},
        {name: 'Careers', route: '/careers'},
        {name: 'Contact', route: '/contact'},
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <AppBar
                position={(!scrolled && path === '/') ? 'static' : 'fixed'}
                sx={{
                    backgroundColor: (scrolled || path === '/') ? 'white' : 'rgba(128, 128, 128, 0.2)',
                    color: (scrolled || path === '/') ? '#000' : '#fff',
                    padding: '10px 0',
                    boxShadow: (scrolled || path === '/') ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(12px)',
                    zIndex: 999,
                }}
            >
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box sx={{height: '100%', display: 'flex', alignItems: 'center'}}>
                        <Box sx={{filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.2))'}}>
                            <Link href="/" passHref>
                                <img
                                    src={(scrolled || path === '/') ? imgBlack.src : imgWhite.src}
                                    alt="Logo"
                                    style={{width: '100%', height: '80px', objectFit: 'cover'}}
                                />
                            </Link>
                        </Box>
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{display: 'flex', alignItems: 'center' }}>
                        <Box sx={{display: {xs: 'none', lg: 'flex'}, alignItems: 'center'}}>
                            <Box sx={{display: 'flex', gap: '15px', marginLeft: '20px'}}>
                                {navItems.map(({name, route}) => (
                                    <Link key={name} href={route} passHref>
                                        <Typography
                                            sx={{
                                                textTransform: 'capitalize',
                                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                                cursor: 'pointer',
                                                fontSize: 15,
                                                margin: '0 15px',
                                                position: 'relative',
                                                display: 'inline-block',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    left: 0,
                                                    bottom: -2,
                                                    height: '2px',
                                                    width: path === route ? '100%' : '0%',
                                                    backgroundColor: (scrolled || path === '/') ? '#000' : '#fff',
                                                    transition: 'width 0.4s ease-in-out',
                                                },
                                                '&:hover::after': {
                                                    width: '100%',
                                                },
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                    </Link>
                                ))}
                            </Box>
                        </Box>

                        {/* Desktop Button */}
                        <Box sx={{display: {lg: 'flex', xs: 'none'} , pl:5}}>
                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: 'capitalize',
                                    borderRadius: '30px',
                                    padding: '12px 30px',
                                    borderColor: (scrolled || path === '/') ? '#000' : '#fff',
                                    color: (scrolled || path === '/') ? '#000' : '#fff',
                                    ':hover': {backgroundColor: '#000', color: '#fff'},
                                }}
                                onClick={() => router.push('/contact')}
                            >
                                Plan With Us
                                <Box sx={{marginLeft: '10px', display: 'flex', alignItems: 'center'}}>
                                    <EastIcon/>
                                </Box>
                            </Button>
                        </Box>
                    </Box>

                    {/* Mobile Menu Icon */}
                    <Box sx={{display: {lg: 'none', xs: 'flex'}, alignItems: 'center', gap: '15px'}}>
                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                display: {lg: 'none', xs: 'flex'},
                                ':hover': {backgroundColor: '#000', color: '#fff'},
                            }}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <CloseIcon/> : <MenuIcon style={{fontSize: '26px'}}/>}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Dropdown Menu */}
            <Collapse
                in={menuOpen}
                timeout={400}
                unmountOnExit
                sx={{
                    display: {xs: 'block', lg: 'none'},
                    position: 'fixed',
                    top: '100px',
                    width: '100%',
                    zIndex: 998,
                    backgroundColor: '#fff',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                }}
            >
                <List sx={{padding: '8px 0'}}>
                    {navItems.map(({name, route}, index) => (
                        <Box key={index}>
                            <ListItem
                                button
                                onClick={() => {
                                    setMenuOpen(false);
                                    router.push(route);
                                }}
                                sx={{
                                    padding: '12px 20px',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    transition: 'background 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                    },
                                    borderBottom:
                                        index === navItems.length - 1
                                            ? 'none'
                                            : '1px solid rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <ListItemText
                                    primary={name}
                                    primaryTypographyProps={{
                                        fontSize: '16px',
                                        fontWeight: 500,
                                        letterSpacing: '0.5px',
                                        color: '#111',
                                    }}
                                />
                            </ListItem>
                        </Box>
                    ))}
                </List>
            </Collapse>

        </>
    );
}

export default Navigation;


// "use client";
//
// import React, { useEffect, useState } from "react";
// import {
//     Box,
//     Container,
//     Link as MuiLink,
//     List,
//     ListItem,
//     ListItemButton,
//     ListItemText,
//     IconButton,
//     Drawer,
//     useMediaQuery,
//     Button,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { usePathname, useRouter } from "next/navigation";
// import EastIcon from '@mui/icons-material/East';
// import NextLink from "next/link";
//
// gsap.registerPlugin(ScrollTrigger);
//
// const menuItems = [
//     { text: "Home", path: "/" },
//     { text: "About", path: "/about" },
//     { text: "Services", path: "/services" },
//     { text: "Portfolio", path: "/portfolio" },
//     { text: "Blog", path: "/blog" },
//     { text: "Contact Us", path: "/contact" },
// ];
//
// const Navigation = () => {
//     const isMobile = useMediaQuery("(max-width:1200px)");
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const router = useRouter();
//     const [a , setA] = useState(false);
//     const pathname = usePathname();
//
//     const toggleDrawer = (open) => () => setDrawerOpen(open);
//
//     useEffect(() => {
//         if (pathname === '/') {
//             setA(true)
//         }
//         else{setA(false)}
//     }, [pathname]);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };
//
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//
//     useEffect(() => {
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: "body",
//                 start: "top+=50 top",
//                 end: "top top",
//                 toggleActions: "play none none reverse",
//             },
//         });
//
//         tl.to(".nav", {
//             background: "rgba(26, 31, 38, 0.8)",
//             backdropFilter: "blur(5.5px)",
//             duration: 0.5,
//         }).to(
//             ".nav",
//             {
//                 width: isMobile ? "88%" : "60%",
//                 borderRadius: "20px",
//                 marginTop: "20px",
//                 padding: "0",
//             },
//             "nav"
//         );
//     }, [isMobile]);
//
//     return (
//         <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <Box
//                 className="nav"
//                 sx={{
//                     background: a ? '#FFF' : 'rgba(128, 128, 128, 0.2)',
//                     boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
//                     backdropFilter: "blur(5.5px)",
//                     padding: "10px 0",
//                     position: (!scrolled && a) ? "static" : "fixed",
//                     width: "100%",
//                     zIndex: 200,
//                 }}
//             >
//                 <Container maxWidth="xl">
//                     <Box
//                         sx={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             alignItems: "center",
//                             p: 0,
//                         }}
//                     >
//                         <Box
//                             className="navLogo"
//                             sx={{
//                                 height: "70px",
//                                 width: "70px",
//                                 cursor: "pointer",
//                                 filter: "drop-shadow(0px 4px 0px rgba(255, 255, 255, 1))",
//                             }}
//                             onClick={() => router.push("/")}
//                         >
//                             <Image
//                                 src={logo}
//                                 alt="Logo"
//                                 style={{
//                                     height: "100%",
//                                     width: "100%",
//                                     objectFit: "contain",
//                                     backgroundColor: "#fff",
//                                 }}
//                             />
//                         </Box>
//
//                         {isMobile ? (
//                             <>
//                                 <IconButton onClick={toggleDrawer(true)} sx={{color:'#FFF'}}>
//                                     <MenuIcon />
//                                 </IconButton>
//
//                                 {/* 🔽 Custom Drawer Implementation Starts Here */}
//                                 <Drawer
//                                     anchor="left"
//                                     open={drawerOpen}
//                                     onClose={toggleDrawer(false)}
//                                     sx={{
//                                         '& .MuiDrawer-paper': {
//                                             width: { xs: '100%', sm: 300 },
//                                             height: '100%',
//                                         },
//                                     }}
//                                 >
//                                     <Box
//                                         sx={{
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             padding: '40px 35px',
//                                             gap: '20px',
//                                             position: 'relative',
//                                         }}
//                                         role="presentation"
//                                     >
//                                         <IconButton
//                                             sx={{
//                                                 position: 'absolute',
//                                                 top: '10px',
//                                                 right: '10px',
//                                                 background: '#000',
//                                                 color: '#fff',
//                                                 ':hover': { backgroundColor: '#333' },
//                                             }}
//                                             onClick={toggleDrawer(false)}
//                                         >
//                                             <CloseIcon />
//                                         </IconButton>
//
//                                         <Box onClick={() => {
//                                             router.push('/');
//                                             setDrawerOpen(false);
//                                         }}
//                                             sx={{width:'70px' , height: '70px'}}
//                                         >
//                                             <Image
//                                                 src={logo}
//                                                 alt="Logo"
//                                                 style={{ width: '100%', height: '100px', objectFit: 'contain' }}
//                                             />
//                                         </Box>
//
//                                         <List>
//                                             {menuItems.map(({ text, path }) => (
//                                                 <ListItem key={text} disablePadding>
//                                                     <NextLink href={path} passHref>
//                                                         <ListItemButton
//                                                             component="a"
//                                                             onClick={toggleDrawer(false)}
//                                                             sx={{
//                                                                 padding: "10px 0",
//                                                                 textAlign: "start",
//                                                                 ':hover': { backgroundColor: 'transparent' },
//                                                             }}
//                                                         >
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         margin: 0,
//                                                                         fontSize: '16px',
//                                                                         color: '#000',
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItemButton>
//                                                     </NextLink>
//                                                 </ListItem>
//                                             ))}
//                                         </List>
//                                     </Box>
//                                 </Drawer>
//                                 {/* 🔼 Custom Drawer Ends Here */}
//
//                             </>
//                         ) : (
//                             <List
//                                 sx={{
//                                     display: "flex",
//                                     gap: { xs: 1, md: 1, lg: 2 },
//                                     margin: 0,
//                                     padding: 0,
//                                     "& li": { paddingRight: "0", paddingLeft: "10px" },
//                                 }}
//                             >
//                                 {menuItems.map((item, index) => (
//                                     <ListItem
//                                         key={index}
//                                         sx={{
//                                             width: "auto",
//                                             cursor: "pointer",
//                                             "& a": { color: "black !important", textDecoration: "none" },
//                                         }}
//                                     >
//                                         <NextLink href={item.path} passHref>
//                                             <MuiLink
//                                                 sx={{
//                                                     textDecoration: "none",
//                                                     fontWeight: 700,
//                                                 }}
//                                             >
//                                                 <ListItemText
//                                                     primary={item.text}
//                                                     sx={{
//                                                         color: a ? (scrolled ? '#FFF' : '#000') : "#FFF",
//                                                         fontWeight: 700
//                                                     }}
//                                                 />
//                                             </MuiLink>
//                                         </NextLink>
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         )}
//
//                         <Box sx={{ display: scrolled ? 'none' : { lg: 'flex', xs: 'none' } }}>
//                             <Button
//                                 variant="outlined"
//                                 sx={{
//                                     textTransform: 'capitalize',
//                                     borderRadius: '30px',
//                                     padding: '12px 30px',
//                                     borderColor: a ? (scrolled ? '#FFF' : '#000') : "#FFF",
//                                     color: a ? (scrolled ? '#FFF' : '#000') : "#FFF",
//                                     ':hover': { backgroundColor: '#000', color: '#fff' },
//                                 }}
//                                 onClick={() => router.push("/contact")}
//                             >
//                                 Plan With Us
//                                 <Box sx={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
//                                     <EastIcon />
//                                 </Box>
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Container>
//             </Box>
//         </Box>
//     );
// };
//
// export default Navigation;
