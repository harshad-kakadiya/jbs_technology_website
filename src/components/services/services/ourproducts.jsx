import React from 'react';
import {Box, Button, Container} from "@mui/material";
import { Grid, Typography, Card, CardContent } from '@mui/material';
import Img1 from "../../../assets/images/services/ourproducts/tech-figma.svg"
import Img2 from "../../../assets/images/services/ourproducts/tech-nativescript.svg"
import Img3 from "../../../assets/images/services/ourproducts/tech-node-js.svg"
import Img4 from "../../../assets/images/services/ourproducts/tech-express-js.svg"
import Img5 from "../../../assets/images/services/ourproducts/js.webp"
import Img6 from "../../../assets/images/services/ourproducts/sql.jpg"
import Img7 from "../../../assets/images/services/ourproducts/html.png"
import Img8 from "../../../assets/images/services/ourproducts/php.png"
import Img9 from "../../../assets/images/services/ourproducts/gpt.png"
import Img10 from "../../../assets/images/services/ourproducts/cloud.png"
import Img11 from "../../../assets/images/services/ourproducts/ocean.jpeg"
import Img12 from "../../../assets/images/services/ourproducts/mongodb.png"
import Img13 from "../../../assets/images/services/ourproducts/next.png"
import Img14 from "../../../assets/images/services/ourproducts/microsoft.jpeg"
import Image from "next/image";

function Ourproducts() {


        const data = {
            "FRONT-END": [
                { name: "Figma", image: Img1 },
                { name: "NativeScript", image: Img2 },
                    { name:"JavaScript", image: Img5 },
                    { name:"HTML 5", image: Img7 },
                    { name:"Next.js", image: Img13 },

            ],
            "BACK-END & DATABASES": [
                { name: "Node.js", image: Img3 },
                { name: "SQL" , image: Img6},
                { name: "PHP" , image: Img8},
                { name: "Express.js", image: Img4 },
                { name: "MongoDB", image: Img12 },

            ],
            "INFRASTRUCTURE": [
                { name: "PrivateGPT", image: Img9 },
                { name: "Google Cloud", image: Img10 },
                { name: "Digital Ocean", image: Img11 },
                { name: "Microsoft Azure", image: Img14 },

            ]

        };

    return (
        <Box sx={{padding:"0 0 160px"}}>
           <Container maxWidth={"xl"}>
               <Box sx={{
                   fontSize: {md:"55px",sm:"44px"},
                   fontWeight:"bold",

               }}>
                   The tech behind our products
               </Box>
               <Box sx={{
                   fontSize:"18px",
                   paddingTop:"30px",
                   color:"#4B535D"
               }}>
                   Our team of developers has a range of experience in cutting-edge <br/> technologies. This allows us to create a tailor-made tech stack that will <br/> best support your project’s needs.
               </Box>
               <Box sx={{ padding: 4 }}>
                   {Object.keys(data).map((category,index) => (
                       <Box key={index} sx={{ marginBottom: 3 }}>
                           <Typography variant="h5" sx={{
                               color:"#4A4A68",
                               fontSize:"16px",
                               fontWeight:"500",
                               padding:"20px 50px 20px 0",
                               display:"inline-block"
                           }}>
                               {category}
                           </Typography>

                           <Box
                               sx={{
                                   display: 'flex',
                                   flexWrap: 'wrap',
                                   gap: 2,
                               }}
                           >
                               {data[category].map((tech) => (
                                  <Box key={tech + 1} sx={{display:"flex",padding: '10px 24px',
                                      borderRadius: 2,
                                      backgroundColor: '#f5f5f5',}}>
                                      <Image src={tech.image} alt={"#"} style={{
                                          height:"22px",
                                          width:"22px",
                                      }}/>
                                          <Box
                                              key={tech.name + 1}
                                              sx={{
                                                  marginLeft:"15px",
                                                  fontSize: '14px',
                                                  fontWeight: 400,
                                                  whiteSpace: 'nowrap',
                                              }}
                                          >
                                              {tech.name}
                                          </Box>
                                  </Box>
                               ))}
                           </Box>
                       </Box>
                   ))}
                   <Box sx={{paddingTop:"25px"}}>
                       <Button
                           sx={{
                               background: "#fff",
                               color: "#e7107e",
                               border: "2px solid #e7107e",
                               padding: "10px 50px",
                               borderRadius: "25px",
                               fontSize: "15px",
                               fontWeight: "600",
                               '&:hover': {
                                   backgroundColor: "#e7107e",
                                   color: "#fff",
                               },
                               transition: "background-color 0.3s, color 0.3s",
                           }}
                       >
                           MORE ABOUT OUR TECH STACK
                       </Button>
                   </Box>
               </Box>
           </Container>
        </Box>
    );
}

export default Ourproducts;