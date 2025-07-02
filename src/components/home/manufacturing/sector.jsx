'use client';
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Sector = ({description , image}) => {
  return (
    <Box sx={{padding:"100px 20px"}}>
        <Container maxWidth={'xxl'}>
       <Box>
            <Box sx={{display:"flex",justifyContent:"center",py:5}}>
               <Typography sx={{textAlign:"center",fontSize:"20px",lineHeight:"33px",color:"#4B535D",width:"80%",}}>
                   {description}
               </Typography>
            </Box>
            <Box>
                <img src={image.src} alt="image" width={"100%"} height={"550"} style={{objectFit:"cover"}}/>
            </Box>
       </Box>
        </Container>
    </Box>
  )
}

export default Sector
