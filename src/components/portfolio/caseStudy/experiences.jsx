import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';



function Experiences({Data ,Detaile }) {
    return (
        <Box sx={{padding:"80px 0 0 0"}}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={6}>
                    {/*<Grid item xs={12} md={3}>*/}
                    {/*    <Box sx={{ display:"flex" , justifyContent:"center"}}>*/}
                    {/*        <Box sx={{background:"#F8F9FC" , height:"100%" , width:{xs:"300px" , md:"100%"} , padding:"36px 24px"}}>*/}
                    {/*            {Detaile.map((item , index) => (*/}
                    {/*                <Box key={index+1} sx={{padding:"20px"}}>*/}
                    {/*                    <Typography variant="h6" component="h6" sx={{color:"#4A4A68" , fontSize:"16px" , fontWeight:"500"}}>*/}
                    {/*                        {item.title}*/}
                    {/*                    </Typography>*/}
                    {/*                    <Box sx={{ fontSize: "16px", color: "#1F1C31" , display:"flex" , alignItems:"center"}}>*/}
                    {/*                        {item.description} {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}*/}
                    {/*                </Box>*/}
                    {/*            </Box>*/}
                    {/*            ))}*/}
                    {/*        </Box>*/}
                    {/*    </Box>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} >
                        {Data.map((item , index) => (
                            <Box  key={index+1}  padding={"0 0 30px"}>
                                <Typography variant="h6" component="h6" sx={{color:"#4A4A68" , fontSize:"16px" , fontWeight:"500" , padding:"0 0 15px"}}>
                                    {item.name}
                                </Typography>
                                <Box sx={{fontSize: "16px", color: "#0F172A" , fontWeight:"700" ,padding:"0 0 15px" , textWrap:"wrap"}}>
                                    {item.title}
                                </Box>
                                <Box sx={{ fontSize: "16px", color: "#1F1C31" }}>
                                        {item.description}
                                </Box>
                                <Box sx={{pt:2}}>
                                        {item.seconddes}
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Experiences;