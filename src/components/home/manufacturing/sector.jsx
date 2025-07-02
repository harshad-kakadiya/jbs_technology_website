'use client';
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import idd2 from "../../../assets/images/home/manufacturing/idd2.webp"

const Sector = () => {
  return (
    <Box sx={{padding:"100px 20px"}}>
        <Container maxWidth={'xxl'}>
       <Box>
            <Box sx={{display:"flex",justifyContent:"center",py:5}}>
               <Typography sx={{textAlign:"center",fontSize:"20px",lineHeight:"33px",color:"#4B535D",width:"80%",}}>
                   Herrington Consulting advises banks and financial institutions through various stages of the business
                   cycle and the constantly changing operating, competitive and regulatory environment. FTI Consulting’s
                   experts work with clients to manage risk, enhance financial and operational performance, ensure
                   compliance, resolve regulatory inquiries, address enforcement actions and litigation threats, and
                   leverage assets to protect and enhance enterprise value.
               </Typography>
            </Box>
            <Box>
                <img src={idd2.src} alt="image" width={"100%"} height={"550"} style={{objectFit:"cover"}}/>
            </Box>
       </Box>
        </Container>
    </Box>
  )
}

export default Sector
