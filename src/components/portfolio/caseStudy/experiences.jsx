import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';


const Detaile = [
    {
        title: "Industry",
        description:"Entertainment",
    },
    {
        title: "Project Duration",
        description:"4 months",
    },
    {
        title: "Location",
        description:"USA & Switzerland",
    },
    {
        title: "Funding Raised",
        description:"$2.3M",
    },
    {
        title: "Clutch Review",
        description:"5.0",
        icon:<StarIcon fontSize={"small"}/>,
    },
    {
        title: "Awards",
        description:"The 10 Most Innovative Social Media Companies 2022, by Fast Company",
    }

];

const Data = [
    {
        name:"Problem",
        title: "Fan engagement isn’t rewarded.",
        description:"Fans want to keep up with their idols and it is exhausting to follow them across several social networks. They want to be recognized and rewarded for their engagement but with current solutions, their engagement is like a droplet in a sea, most of the time has zero expression giving a sense of unfairness and meaningless investment while making it very hard to find like-minded fans." ,

         seconddes:"Creators aren’t generating meaningful digital revenue streams for their fans. On current platforms, fan satisfaction is too concentrated on the artists’ effort to generate content. In addition to that, creators don’t have a lot of intelligence about their fans.",
    },
    {
        name:"Solution",
        title: "A rewarding fan community.",
        description:"A social network where fans can produce content about their idols and engage in a community with like-minded fans. Artists can be closer to their fans and monetize content produced with their intellectual property, while it is easier for fans to keep up with all the new information.",
    },
    {
        name:"Results",
        title: "An award-winning startup product backed by some of the biggest names in music.",
        description:"Since working with us, Fave has gone on to win awards like “The 10 Most Innovative Social Media Companies 2022” by Fast Company. Moreover, Fave is now backed by some of the biggest names in music, like Sony Music & Warner Music Group.",
    },

];

function Experiences() {
    return (
        <Box sx={{padding:"80px 0 0 0"}}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={6}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{ display:"flex" , justifyContent:"center"}}>
                            <Box sx={{background:"#F8F9FC" , height:"100%" , width:{xs:"300px" , md:"100%"} , padding:"36px 24px"}}>
                                {Detaile.map((item , index) => (
                                    <Box key={index+1} sx={{padding:"20px"}}>
                                        <Typography variant="h6" component="h6" sx={{color:"#4A4A68" , fontSize:"16px" , fontWeight:"500"}}>
                                            {item.title}
                                        </Typography>
                                        <Box sx={{ fontSize: "16px", color: "#1F1C31" , display:"flex" , alignItems:"center"}}>
                                            {item.description} {item.icon} {item.icon} {item.icon} {item.icon} {item.icon}
                                    </Box>
                                </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        {Data.map((item , index) => (
                            <Box  key={index+1}  padding={"0 0 50px"}>
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