import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import Img2 from "@/assets/images/services/1services/Img2.png";
import Image from "next/image";
import Img22 from "@/assets/images/services/1services/Img2-1.svg";
import Img3 from "@/assets/images/services/1services/Img3.svg";
import Img4 from "@/assets/images/services/1services/Img4.svg";
import Img5 from "@/assets/images/services/1services/Img5.svg";
import Img6 from "@/assets/images/services/1services/Img6.svg";
import Img7 from "@/assets/images/services/1services/Img7.svg";

function KeyBenefits() {

    const Data = [
        {
            icon: Img22,
            title: "Full Ownership",
            description: "You will own 100% of the software we build with you, and you'll never pay a subscription or royalty fees"
        },
        {
            icon: Img3,
            title: "Flexibility",
            description: "Custom software development allows for more flexibility as you can stay agile and responsive to your users' needs and business landscape"
        },
        {
            icon: Img4,
            title: "Competitive Advantage",
            description: "Unlike off-the-shelf solutions, custom software development allows you to build unique capabilities that differentiate you from your competitors"
        },
        {
            icon: Img5,
            title: "Scalability",
            description: "As your business grows, you can revise and add features as you please, allowing your product to scale with ease"
        },
        {
            icon: Img6,
            title: "Reduce Long-Term Costs",
            description: "While custom software development can sometimes require a higher initial investment, it is more cost-effective in the long run as you're not paying subscriptions or royalty fees"
        },
        {
            icon: Img7,
            title: "User Experience",
            description: "When you build a product using custom software development it is built with your specific user in mind throughout the entire process"
        },
    ];

    return (
        <Box sx={{pb: '120px'}}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={4}>
                    <Grid item xs={12} lg={3}>
                        <Box
                            sx={{
                                position: "sticky",
                                top: '40%',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box>
                                <Box
                                    component="img"
                                    src={Img2.src}
                                    alt="description"
                                    sx={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={9}>
                        <Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                        fontWeight: "700",
                                        display: "flex",
                                        justifyContent: {xs: "center", lg: "flex-start"},
                                        alignItems: "center",
                                        lineHeight: {xs: "30px", sm: "38px", lg: "45px"},
                                        textAlign: {xs: "center", lg: "left"},
                                    }}
                                >
                                    What is custom software development?
                                </Typography>

                                <Typography
                                    sx={{
                                        fontSize: {xs: "14px", sm: "16px"},
                                        padding: {xs: "10px 0", lg: "15px 0"},
                                        textAlign: {xs: "center", lg: "left"},
                                    }}
                                >
                                    Custom software development allows you to design, build, and launch a solution
                                    tailored specifically to your users' needs
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {xs: "14px", sm: "16px"},
                                        textAlign: {xs: "center", lg: "left"},
                                    }}
                                >
                                    Our process begins with a series of deep-dive product sessions to align your vision
                                    with business objectives, creating the blueprint for a successful product
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: {xs: "14px", sm: "16px"},
                                        padding: {xs: "10px 0", lg: "15px 0"},
                                        textAlign: {xs: "center", lg: "left"},
                                    }}
                                >
                                    Our expert UX/UI and development teams then build your product from the ground up to
                                    meet your users' needs and propel your business
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                        fontWeight: "700",
                                        color: "#0E314C",
                                        padding: "10px 0 30px 0",
                                    }}
                                >
                                    Key Benefits
                                </Typography>
                                <Grid container>
                                    {Data.map((item, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Box sx={{
                                                padding: {md: "10px 17px 10px 0", xs: "10px 0px 10px 0"},
                                                height: "100%"
                                            }}>
                                                <Box
                                                    sx={{
                                                        background: "#FFF",
                                                        borderRadius: "10px",
                                                        height: '100%',
                                                        width: "100%",
                                                        padding: {lg: "40px", sm: "30px", xs: "20px"},
                                                        boxShadow: '0 0 10px rgba(72, 69, 224, .1)'
                                                    }}
                                                >
                                                    <Image src={item.icon} alt={item.title}/>
                                                    <Typography
                                                        sx={{
                                                            margin: "25px 0 16px 0",
                                                            fontWeight: "700",
                                                            fontSize: "24px",
                                                            color: "#0E314C",
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography sx={{color: "#6084A4"}}>
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default KeyBenefits;