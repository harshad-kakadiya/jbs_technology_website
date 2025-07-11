"use client";
import React from 'react';
import {Box, Container, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HowItWorks() {
    const sections = [
        {
            title: "Product Scope",
            description:
                "The Product Scope is an intensive 15-day structured process. It starts with an immersive focus session where you'll sit down with product experts and early-stage founders to dive into the product vision from a business standpoint",
            items: ["User Stories", "Sitemap", "UX Personas", "Key BPMN", "Tech Spike", "Stakeholder Analysis"],
        },
        {
            title: "Key Screens",
            description:
                "We start by creating the most important screens for your product This allows you to see exactly how your product will look and then approve the design",
            items: ["UI Concept", "Design System"],
        },
        {
            title: "All Screens",
            description:
                "Once you are happy and approve the Key Screens, we extend the design to the remaining screens necessary for the MVP",
            items: ["Full Product UX/UI"],
        },
        {
            title: "Development",
            description:
                "After your product is fully designed and approved, we start the implementation phase During this phase, we progressively deliver the modules of the app, so you can test them during the process",
            items: [
                "Progressive Module Delivery",
                "Ongoing Testing and Feedback",
                "Codebase Documentation",
                "Regular Progress Updates",
            ],
        },
        {
            title: "Test and Launch",
            description:
                "Once your product is fully developed, we enter a testing phase during which we're in constant contact to fix major bugs and make sure your product is ready to go to market",
            items: [
                "Bug Reports & Fixes",
                "User Acceptance Testing (UAT)",
                "Final Quality Assurance (QA)",
                "Launch Readiness Sign-Off",
            ],
        },
        {
            title: "Iterations and Improvements",
            description:
                "When your product is in the world and has started gaining traction, we work with you to digest user feedback and iterate your product, improving it for your customers",
            items: [
                "User Feedback Reports",
                "Bug Fixes & Technical Improvements",
                "Updated Product Features",
                "Performance Optimization Reports",
            ],
        },
    ];

    return (
        <Box>
            <Container maxWidth="lg" sx={{py: 6}}>
                <Box sx={{ position: 'relative',}}>
                    <Box
                        sx={{
                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                            fontWeight: "500",
                            paddingBottom: "30px",
                            textAlign: "center",
                            paddingLeft: "20px",
                            position: 'relative',
                            zIndex: 41,
                            background: '#fff',
                        }}
                    >
                        How it works
                    </Box>
                    {sections.map((section, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'sticky',
                                top: '20%',
                                height: '400px',
                                display: 'flex',
                                alignItems: 'center',
                                zIndex: index + 1,
                                background: '#fff',
                                // py:6
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    width: '100%',
                                }}
                            >
                                {/* Arrow and line */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    minWidth: '40px',
                                    mr: 2,
                                }}>
                                    <ArrowForwardIcon sx={{
                                        bgcolor: '#E6107E',
                                        color: '#FFF',
                                        borderRadius: '50%',
                                        fontSize: '28px',
                                        mb: 0.5,
                                    }}/>
                                    {/* Vertical line, only show if not last section */}
                                    {index < sections.length - 1 && (
                                        <Box sx={{
                                            width: '3px',
                                            height: 'calc(100% - 28px)',
                                            background: '#000',
                                            margin: '0 auto',
                                            flexGrow: 1,
                                        }}/>
                                    )}
                                </Box>
                                {/* Main content box */}
                                <Box
                                    sx={{
                                        borderLeft: '1px solid #000',
                                        pl: 4,
                                        width: '100%',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            p: 4,
                                            borderRadius: "8px",
                                            boxShadow:' 0 0 10px rgba(72, 69, 224, .1)',
                                            // backgroundColor: "#fff",
                                            // border:'1px solid #000',
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: "bold",
                                                mb: 2,
                                                color: "#000",
                                                fontSize: "30px",
                                            }}
                                        >
                                            {section.title}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                mb: 3,
                                                color: "#000",
                                                fontSize: "16px",
                                                lineHeight: "1.5",
                                            }}
                                        >
                                            {section.description}
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                paddingTop: "20px",
                                                color: "#000",
                                                fontSize: "18px",
                                            }}
                                        >
                                            Phase deliverables:
                                        </Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <List>
                                                    {section.items.slice(0, Math.ceil(section.items.length / 2)).map((item, idx) => (
                                                        <ListItem key={idx} sx={{pl: 0}}>
                                                            <ListItemText
                                                                primary={`• ${item}`}
                                                                primaryTypographyProps={{
                                                                    variant: "body2",
                                                                    sx: {fontSize: "16px", color: "#000"},
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <List>
                                                    {section.items.slice(Math.ceil(section.items.length / 2)).map((item, idx) => (
                                                        <ListItem key={idx} sx={{pl: 0}}>
                                                            <ListItemText
                                                                primary={`• ${item}`}
                                                                primaryTypographyProps={{
                                                                    variant: "body2",
                                                                    sx: {fontSize: "16px", color: "#000"},
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default HowItWorks;