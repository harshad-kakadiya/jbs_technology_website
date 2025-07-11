import React from 'react';
import {Box, Button, Container} from "@mui/material";
import {Grid, Typography, Card, CardContent} from '@mui/material';
import Img1 from "../../assets/images/services/ourproducts/tech-figma.svg"
import Img2 from "../../assets/images/services/ourproducts/React.webp"
import Img3 from "../../assets/images/services/ourproducts/tech-node-js.svg"
import Img4 from "../../assets/images/services/ourproducts/tech-express-js.svg"
import Img5 from "../../assets/images/services/ourproducts/js.webp"
import Img6 from "../../assets/images/services/ourproducts/sql.jpg"
import Img7 from "../../assets/images/services/ourproducts/html.png"
import Img8 from "../../assets/images/services/ourproducts/php.png"
import Img9 from "../../assets/images/services/ourproducts/gpt.png"
import Img10 from "../../assets/images/services/ourproducts/cloud.png"
import Img11 from "../../assets/images/services/ourproducts/ocean.jpeg"
import Img12 from "../../assets/images/services/ourproducts/mongodb.png"
import Img13 from "../../assets/images/services/ourproducts/next.png"
import Img14 from "../../assets/images/services/ourproducts/microsoft.jpeg"
import Img15
    from "../../assets/images/services/ourproducts/png-transparent-postgresql-database-logo-database-symbol-blue-text-logo-thumbnail-removebg-preview.png"
import Img16 from "../../assets/images/services/ourproducts/orms-logo-400x400-removebg-preview.png"
import Img17 from "../../assets/images/services/ourproducts/channels4_profile-removebg-preview.png"
import Img18 from "../../assets/images/services/ourproducts/images-removebg-preview (1).png"
import Img19 from "../../assets/images/services/ourproducts/saas.png"
import Img20 from "../../assets/images/services/ourproducts/Amazon_Web_Services_Logo.svg.webp"
import Img21 from "../../assets/images/services/ourproducts/images.png"
import Img22 from "../../assets/images/services/ourproducts/download.png"
import Img23 from "../../assets/images/services/ourproducts/images2.png"
import Img24
    from "../../assets/images/services/ourproducts/capcut-logo-on-transparent-white-background-free-vector-removebg-preview.png"
import Img25
    from "../../assets/images/services/ourproducts/png-transparent-final-cut-pro-macos-bigsur-icon-thumbnail-removebg-preview.png"
import Img26 from "../../assets/images/services/ourproducts/davinci-resolve-logo-hero-removebg-preview.png"
import Img27 from "../../assets/images/services/ourproducts/Typescript_logo_2020.svg.png"
import Image from "next/image";

function Ourproducts() {


    const data = {
        "FRONT-END": [
            {name: "React", image: Img2},
            {name: "JavaScript", image: Img5},
            {name: "HTML 5", image: Img7},
            {name: "Next.js", image: Img13},
            {name: "Typescript", image: Img27},
        ],
        "BACK-END & DATABASES": [
            {name: "Node.js", image: Img3},
            {name: "mySQL", image: Img6},
            {name: "PostgreSQL", image: Img15},
            {name: "Express.js", image: Img4},
            {name: "MongoDB", image: Img12},
            {name: "ORMs", image: Img16},
            {name: "NestJS", image: Img18},
            {name: "Supabase", image: Img17},
            {name: "Saas Development", image: Img19},
        ],
        "INFRASTRUCTURE": [
            {name: "PrivateGPT", image: Img9},
            {name: "Google Cloud", image: Img10},
            {name: "AWS", image: Img20},
            {name: "Digital Ocean", image: Img11},
            {name: "Microsoft Azure", image: Img14},
        ],
        "DESIGN": [
            {name: "Figma", image: Img1},
            {name: "Adobe Photoshop", image: Img21},
            {name: "Adobe Illustrator", image: Img22},
        ],
        "EDITING": [
            {name: "Adobe Premiere Pro", image: Img23},
            {name: "CapCut", image: Img24},
            {name: "Final Cut Pro", image: Img25},
            {name: "DaVinci Resolve", image: Img26},
        ],
    };


    return (
        <Box sx={{padding: "0 0 0px"}}>
            <Container maxWidth={"xl"}>
                <Box  sx={{ padding: 4 }}>
                    <Box
                        variant="h2"
                        component="h2"
                        sx={{
                        fontSize: { xs: "30px", md: "35px", lg: "45px" },
                        fontWeight: "500",
                    }}>
                        The tech behind our products
                    </Box>
                    <Box sx={{
                        fontSize: "18px",
                        paddingTop: "20px",
                        color: "#4B535D"
                    }}>
                        Our team of developers has a range of experience in cutting-edge <br/> technologies. This allows
                        us to create a tailor-made tech stack that will <br/> best support your project’s needs
                    </Box>
                </Box>
                <Box sx={{px: 4}}>
                    {Object.keys(data).map((category, index) => (
                        <Box key={index} sx={{marginBottom: 3}}>
                            <Typography variant="h5" sx={{
                                color: "#4A4A68",
                                fontSize: "16px",
                                fontWeight: "500",
                                padding: "20px 50px 20px 0",
                                display: "inline-block"
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
                                    <Box key={tech + 1} sx={{
                                        display: "flex", padding: '10px 24px',
                                        borderRadius: 2,
                                        backgroundColor: '#f5f5f5',
                                    }}>
                                        <Image src={tech.image} alt={"#"} style={{
                                            height: "22px",
                                            width: "22px",
                                        }}/>
                                        <Box
                                            key={tech.name + 1}
                                            sx={{
                                                marginLeft: "15px",
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
                    {/*<Box sx={{paddingTop:"25px"}}>*/}
                    {/*    <Button*/}
                    {/*        sx={{*/}
                    {/*            background: "#fff",*/}
                    {/*            color: "#e7107e",*/}
                    {/*            border: "2px solid #e7107e",*/}
                    {/*            padding: "10px 50px",*/}
                    {/*            borderRadius: "25px",*/}
                    {/*            fontSize: "15px",*/}
                    {/*            fontWeight: "600",*/}
                    {/*            '&:hover': {*/}
                    {/*                backgroundColor: "#e7107e",*/}
                    {/*                color: "#fff",*/}
                    {/*            },*/}
                    {/*            transition: "background-color 0.3s, color 0.3s",*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        MORE ABOUT OUR TECH STACK*/}
                    {/*    </Button>*/}
                    {/*</Box>*/}
                </Box>
            </Container>
        </Box>
    );
}

export default Ourproducts;