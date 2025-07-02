'use client';
import {Box, Container, Divider, Grid, Typography} from '@mui/material';
import React from 'react';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import CountUp from 'react-countup';
import idd4 from '../../../assets/images/home/manufacturing/idd4.webp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MessageIcon from '@mui/icons-material/Message';

const data = [
  {
    backgroundColor: "#D3D5D6",
    iconColor: "#121C27",
    text: "We conduct in-depth assessments to understand the specific challenges faced by healthcare distributors and their acute and ASC customers. This includes analyzing their existing.",
  },
  {
    backgroundColor: "transparent",
    iconColor: "#121C27",
    text: "Adjacency growth strategy for a leading healthcare supply chain technology and services company, yielding a clear and prioritized roadmap for both organic and inorganic opportunities.",
  },
  {
    backgroundColor: "#D3D5D6",
    iconColor: "#121C27",
    text: "We conduct a thorough analysis of the market landscape, identifying trends, regulatory requirements, and customer needs in the 503B outsourcing space. This analysis provides a foundation.",
  },
  {
    backgroundColor: "transparent",
    iconColor: "#121C27",
    text: "Growth strategy roadmap for a group purchasing organization (GPO) seeking to evolve its competitive position and bolster its value proposition to provider members.",
  },
];


const CostomerField = () => {
  return (
    <Box sx={{padding:"0 20px"}}>
      <Container maxWidth="xxl">
        <Box>
          <Grid container xs={12} item>

            <Grid
              item
              xs={12}
              lg={6}
              sx={{
                backgroundColor: "#121C27",
                display: "flex",
                alignItems: "center",
                  padding:"15px 100px 15px 96px"
              }}
            >

              <Box>
                  <Grid container spacing={4} alignItems="center">
                      <Grid item xs={12} sm={3} md={2} lg={3}  xl={2}>
                          <Box
                              sx={{
                                  color: "#fff",
                                  height: "65px",
                                  width: "65px",
                                  background: "#353E47",
                                  display: "flex",
                                  justifyContent: "center",
                                  borderRadius: "50%",
                                  alignItems: "center",
                              }}
                          >
                              <MessageIcon />
                          </Box>
                      </Grid>
                      <Grid item xs={12} sm={6} md={5} lg={6} xl={5}>
                          <Typography
                              sx={{
                                  fontWeight: "500",
                                  fontSize: { xs: "40px", md: "55px" },
                                  color: "white",
                              }}
                          >
                              <CountUp end={23860} duration={5} />
                          </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={5} lg={12} xl={5}>
                          <Typography
                              variant="h6"
                              sx={{
                                  color: "#C4C4C4",
                                  fontSize: "13px",
                                  letterSpacing: "3.2px",
                                  lineHeight: "25px",
                              }}
                          >
                              TRUSTED CUSTOMERS
                          </Typography>
                          <Typography
                              variant="h6"
                              sx={{
                                  color: "#C4C4C4",
                                  fontSize: "13px",
                                  letterSpacing: "3.2px",
                                  lineHeight: "25px",
                              }}
                          >
                              AROUND THE WORLD
                          </Typography>
                      </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "#353E47" , width:"100%" , marginTop:"30px"}} />
                <Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "25px", md: "45px" },
                      fontWeight: "500",
                      color: "#ffffff",
                        lineHeight:"55px",
                      padding:"80px 0 50px 0 "
                    }}
                  >
                    We are Always Confident the Best in our Field and
                    Specialize.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", md: "15px" },
                      color: "#C4C4C4",
                      pb:2
                    }}
                  >
                    Our mission is to cultivate financial excellence in every
                    aspect of our clients’ lives. We are committed to providing
                    personalized, holistic financial solutions that align with
                    our clients’ unique aspirations and circumstances.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {/* Right Section */}
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  backgroundImage: `url(${idd4.src})`,
                  width: "100%",
                  height: { xs: "300px", md: "650px" },
                  backgroundPosition: "50%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
          </Grid>
            <Box>
                <Grid container item xs={12} sx={{ textAlign: "center" }}>
                  {data.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={3}
                      sx={{ backgroundColor: item.backgroundColor }}
                    >
                      <Box sx={{ padding: "71px 10px 69px 10px" }}>
                        <CheckCircleIcon
                          sx={{
                            fontSize: "50px",
                            alignItems: "self-start",
                            mb: "20px",
                            color: item.iconColor,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: "17px",
                            color: "#0A1119",
                            lineHeight: "30px",
                            fontFamily: "Poppins, serif",
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CostomerField;
