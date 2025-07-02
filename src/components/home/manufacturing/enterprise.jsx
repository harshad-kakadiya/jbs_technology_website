'use client';
import React from "react";
import {Box, Container, Typography} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/images/home/manufacturing/id14-480x605.webp";
import img2 from "../../../assets/images/home/manufacturing/id2-480x605.webp";
import img3 from "../../../assets/images/home/manufacturing/id4-480x500.webp";
import img4 from "../../../assets/images/home/manufacturing/id5-480x605.webp";
import img5 from "../../../assets/images/home/manufacturing/id6-480x563.webp";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const data = [
  {
    img: img1,
    filde: "Business",
    category: "Automotive & Mobility",
  },
  {
    img: img2,
    filde: "Consulting",
    category: "Financial Services",
  },
  {
    img: img3,
    filde: "Business",
    category: "Healthcare & Life Sciences",
  },
  {
    img: img4,
    filde: "Consulting",
    category: "Energy & Natural Resources",
  },
  {
    img: img5,
    filde: "Business",
    category: "Agribusiness",
  },
];

const Enterprise = () => {
  return (
    <Box className={"enterPrise"} sx={{ padding: "120px 80px" }}>
      <Container maxWidth={'xl'}>
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          textAlign:"center",
          fontSize:'13px',
          paddingBottom:"15px",
          letterSpacing:"4.8px",
          color:"#0A1119",
          textTransform:"uppercase"
        }}>
          successful project
        </Box>
        <Box sx={{
          display:"flex",
          justifyContent:"center",
          textAlign:"center",
          fontSize: {md:"45px",sm:"40px",xs:"30"},
          fontWeight:"500",
          paddingBottom:"15px"
        }}>
          Our World Offices
        </Box>
        <Box sx={{
          color:"#4B535D",
          fontSize: {md:"17px",xs:"15px"},
          lineHeight:"27px",
          display:"flex",
          justifyContent:"center",
          textAlign:"center",

        }}>
          Sed at nulla vel elit molestie rutrum non nec orci. Mauris varius, odio rutrum iaculis sagittis
        </Box>
        <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding:"35px 0 80px 0"
            }}
        >
          <Box
              style={{
                width: "100%",
                maxWidth: "400px", // Adjust maximum width
                position: "relative",
              }}
          >
            <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  height: "1px", // Thickness of the line
                  backgroundColor: "lightgray",
                }}
            >
              <Box
                  style={{
                    content: "''",
                    position: "absolute",
                    width: "100px",
                    height: "3px",
                    backgroundColor: "black",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}>
              </Box>
            </Box>
          </Box>
        </Box>
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                  clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              breakpoints={{
                  640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                  },
                  768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                  },
                  1024: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                  },
              }}
              height={"600px"}
          >
              {data.map((item) => (
                  <SwiperSlide key={item + 1}>
                      <Box sx={{ height: "550px" }}>
                          <Box
                              className="card"
                              sx={{
                                  backgroundImage: `linear-gradient(10deg,rgba(0,0,0,.36),rgba(0,0,0,.36)),url(${item.img.src})`,
                                  position: " relative",
                                  width: "100%",
                                  height: "500px",
                                  display: " flex",
                                  justifyContent: " center",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                  backgroundRepeat: "no-repeat",
                                  alignItems: "center",
                                  transition: "all 0.6s ease",
                              }}
                          >
                              <Box class="content">
                                  <Typography
                                      class="title"
                                      sx={{ color: "white", fontWeight: "500"}}
                                  >
                                      {item.filde}
                                  </Typography>
                                  <Typography
                                      class="title1"
                                      sx={{
                                          fontSize: "23px",
                                          color: "white",
                                          fontWeight: "500",
                                      }}
                                  >
                                      {item.category}
                                  </Typography>
                                  <Typography
                                      class="text"
                                      sx={{
                                          textAlign: "center",
                                          color: "white",
                                          fontSize: "15px",
                                      }}
                                  >
                                      Curabitur et malesuada turpis. Vestibulum ante ipsum primis
                                      in faucibus orci luctus et ultrices posuere cubilia curae.
                                  </Typography>
                                  <Typography
                                      sx={{
                                          ":hover": {
                                              ".arrow1": { transform: "rotate(-40deg)" },
                                          },
                                          marginTop: "43px",
                                      }}
                                  >
                                      <Box
                                          sx={{
                                              height: "65px",
                                              width: "65px",
                                              display: "flex",
                                              justifyContent: "center",
                                              alignItems: "center",
                                              backgroundColor: "white",
                                              borderRadius: "50%",
                                              cursor: "pointer",
                                          }}
                                      >
                                          <ArrowForwardIcon
                                              className="arrow1"
                                              sx={{
                                                  transition: "transform .3s ease",
                                              }}
                                          />
                                      </Box>
                                  </Typography>

                              </Box>
                              <Box className="content2">
                                  <Typography
                                      className="title3"
                                      sx={{ color: "white", mb: 1 }}
                                      fontSize={"17px"}
                                  >
                                      {item.filde}
                                  </Typography>
                                  <Typography className="title2" sx={{ fontWeight: "500"}}>
                                      {item.category}
                                  </Typography>
                              </Box>
                          </Box>
                      </Box>
                  </SwiperSlide>
              ))}
          </Swiper>
      </Container>
    </Box>
  );
};

export default Enterprise;
