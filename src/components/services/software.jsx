import React from 'react';
import {Box, Container} from "@mui/material";
import Img1 from '../../assets/images/services/1services/Img1.svg';


function Software() {
    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center',py: {md:"90px" ,xs:'40px' , sm:'50px'}}}>
            <Container maxWidth={"xl"}>

                <Box sx={{ width: '100%', px: {xs:'20px',md:"50px" , lg:'unset'} }}>
                    <Box
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                            fontWeight: "500",
                            lineHeight: {md:"75px" , sm:'55px' },
                            display: "flex",
                            justifyContent: { xs: "center", lg: "flex-start" },
                            alignItems: "center",
                            textAlign: { xs: "center", lg: "left" },
                        }}
                    >
                        Custom Software Development
                    </Box>
                    <Box
                        sx={{
                            fontSize: "20px",
                            paddingTop: "10px",
                            color:"#4B535D",
                            textAlign:{ xs: "center", lg: "left" }
                        }}
                    >
                        Whatever problem you’re solving, choose the right tech and build the right User Experience
                        for your users
                    </Box>
                </Box>

            </Container>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    height: {md: "300px"},
                    width: {md: "260px"},
                    backgroundImage: {
                        xs: 'none',
                        lg: `url(${Img1.src})`,
                    },
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    right: "0",
                    bottom: "5%",
                }}
            />
        </Box>
    );
}

export default Software;