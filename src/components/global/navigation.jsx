'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
import imgBlack from '../../assets/images/navigation/Png-04.png';
import imgWhite from '../../assets/images/navigation/Png-03.png';
import EastIcon from '@mui/icons-material/East';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { usePathname } from 'next/navigation';
import { Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Navigation() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const path = usePathname();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const navItems = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Portfolio', route: '/portfolio' },
        { name: 'Blog', route: '/blog' },
        { name: 'Contact', route: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <AppBar
                position={(!scrolled && path === '/') ? "static" : "fixed"}
                sx={{
                    backgroundColor: (scrolled || path === '/') ? 'white' : 'rgba(128, 128, 128, 0.5)',
                    color: (scrolled || path === '/') ? '#000' : '#fff',
                    borderBottom: '1px solid #ddd',
                    padding: '10px 0',
                    boxShadow: (scrolled || path === '/') ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >


            <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Box>
                            <Link href="/" passHref>
                                <Image
                                    src={(scrolled || path === '/') ? imgBlack : imgWhite}
                                    alt="Logo"
                                    style={{ width: '230px', height: '90px', objectFit: 'cover' }}
                                />
                            </Link>
                        </Box>
                    </Box>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '15px', marginLeft: '20px' }}>
                            {navItems.map(({ name, route }) => (
                                <Box key={name}>
                                    <Link href={route} passHref>
                                        <Typography
                                            sx={{
                                                textTransform: 'capitalize',
                                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                                cursor: 'pointer',
                                                transition: '0.5s',
                                                fontSize: 15,
                                                padding:"0 15px",
                                                ':hover': { textDecoration: 'none' },
                                            }}
                                        >
                                            {name}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ display: { lg: 'flex', xs: 'none' } }}>
                        <Button
                            variant="outlined"
                            sx={{
                                textTransform: 'capitalize',
                                borderRadius: '30px',
                                padding: '12px 30px',
                                borderColor: (scrolled || path === '/') ? '#000' : '#fff',
                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                        >
                            Plan With Us
                            <Box sx={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                                <EastIcon />
                            </Box>
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                display: { lg: 'flex', xs: 'none' },
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                        >
                            <SearchIcon style={{ fontSize: '26px' }} />
                        </IconButton>

                        <IconButton
                            sx={{
                                border: '1px solid #8E8E8EFF',
                                color: (scrolled || path === '/') ? '#000' : '#fff',
                                display: { lg: 'flex', xs: 'flex' },
                                ':hover': { backgroundColor: '#000', color: '#fff' },
                            }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon style={{ fontSize: '26px' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: { xs: '100%', sm: 300 },
                        height: '100%',
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '40px 35px',
                        gap: '20px',
                        position: 'relative',
                    }}
                    role="presentation"
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: '#000',
                            color: '#fff',
                            ':hover': { backgroundColor: '#333' },
                        }}
                        onClick={toggleDrawer(false)}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box>
                        <Link href="/" passHref>
                            <Image
                                src={(scrolled || path === '/') ? imgBlack : imgWhite}
                                alt="Logo"
                                style={{ width: '230px', height: '90px', objectFit: 'cover' }}
                            />
                        </Link>
                    </Box>

                    <List>
                        {navItems.map(({ name, route }) => (
                            <ListItem key={name} disablePadding>
                                <Link href={route} passHref>
                                    <ListItemButton
                                        component="a"
                                        sx={{
                                            padding: "10px 0",
                                            textAlign: "start",
                                            ':hover': { backgroundColor: 'transparent' },
                                        }}
                                    >
                                        <ListItemText
                                            primary={name}
                                            primaryTypographyProps={{
                                                sx: {
                                                    margin: 0,
                                                    fontSize: '16px',
                                                    color: '#000',
                                                },
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navigation;
