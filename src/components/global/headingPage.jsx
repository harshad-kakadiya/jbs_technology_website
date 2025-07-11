'use client'

import React from 'react';
import {Box, Container, Divider} from "@mui/material";
import bg1 from '../../assets/images/blog/b-1.webp';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import {useRouter} from "next/navigation";

function HeadingPage({bgImg, heading, breadcrumbs = []}) {
    const router = useRouter();

    return (
        <Box sx={{position: 'relative'}}>
            <Box sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}/>
            <Box sx={{
                background: `url(${bgImg}) no-repeat center center`,
                backgroundSize: 'cover',
                height: {xs: '388px', sm: "407px", lg: "550px"},
                width: "100%",
                pt: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Container maxWidth={'xl'}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: (breadcrumbs.length > 0 && breadcrumbs) ? "unset" : ' center',
                        alignItems: "center",
                    }}>
                        <Box
                            variant="h1"
                            component="h1"
                            sx={{
                            fontWeight: "400",
                            fontSize: {lg:"60px",md: "50px", xs: "30px" , sm:'40px'},
                            color: "white",
                            padding: "15px",
                            display: "inline-block",
                            zIndex: 50
                        }}>
                            {heading}
                            <Divider sx={{backgroundColor: "#FFF" , width: "50px", height: '2px', marginTop: "10px"}}/>
                            <Divider sx={{backgroundColor: "#5A6168" , width: "100%", height: '0.5px'}}/>

                            <Box sx={{
                                fontWeight: "500",
                                fontSize: {xs: "15px"},
                                color: "white",
                                display: "flex",
                                mt: {md: "45px",xs:"20px"},
                            }}>
                                {(breadcrumbs.length > 0 && breadcrumbs) && breadcrumbs.map((crumb, index) => (
                                    <React.Fragment key={index}>
                                        <Box
                                            component="a"
                                            onClick={() => router.push(crumb.route)}
                                            sx={{
                                                textDecoration: "none",
                                                color: "white",
                                                "&:hover": {
                                                    textDecoration: "underline",
                                                    cursor: "pointer",
                                                },
                                            }}
                                        >
                                            {crumb.label}
                                        </Box>
                                        {index < breadcrumbs.length - 1 && (
                                            <Box sx={{
                                                padding: "0 15px",
                                                display: "flex",
                                                alignItems: "center",
                                            }}>
                                                <TrendingFlatIcon/>
                                            </Box>
                                        )}
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default HeadingPage;
