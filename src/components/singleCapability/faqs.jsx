"use client";
import React, { useState } from "react";
import {
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Button,
    Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Faqs = ({faqData}) => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f8f9fa" }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Typography
                        variant="h2"
                        component='h2'
                        sx={{
                            fontSize: { xs: "30px", md: "35px", lg: "45px" },
                            fontWeight: 500,
                            color: "#111",
                            mb: 1,
                        }}
                    >
                        Frequently Asked Questions
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            color: "#555",
                            maxWidth: 600,
                            mx: "auto",
                        }}
                    >
                        Some frequently asked questions about the service that you may have
                        questions about
                    </Typography>

                    <Box
                        sx={{
                            mt: 3,
                            mb: 1,
                            height: "2px",
                            width: "120px",
                            mx: "auto",
                            position: "relative",
                            bgcolor: "#e0e0e0",
                        }}
                    >
                        <Box
                            sx={{
                                width: "40px",
                                height: "2px",
                                bgcolor: "#000",
                                position: "absolute",
                                left: "50%",
                                top: 0,
                                transform: "translateX(-50%)",
                            }}
                        />
                    </Box>
                </Box>

                <Box>
                    {faqData.map((faq) => (
                        <Accordion
                            key={faq.id}
                            expanded={expanded === faq.id}
                            onChange={handleChange(faq.id)}
                            disableGutters
                            elevation={0}
                            square
                            sx={{
                                borderBottom: "1px solid #ddd",
                                bgcolor: "transparent",
                                "&::before": { display: "none" },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === faq.id ? (
                                        <RemoveIcon sx={{ fontSize: "1.5rem", color: "#111" }} />
                                    ) : (
                                        <AddIcon sx={{ fontSize: "1.5rem", color: "#111" }} />
                                    )
                                }
                                sx={{
                                    px: 0,
                                    py: 2,
                                    "& .MuiAccordionSummary-content": {
                                        margin: 0,
                                        fontWeight: 600,
                                        color: "#111",
                                        fontSize: "1.05rem",
                                    },
                                }}
                            >
                                {faq.question}
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    px: 0,
                                    pb: 2,
                                    pt: 0,
                                    color: "#444",
                                    fontSize: "0.95rem",
                                }}
                            >
                                {faq.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>


            </Container>
        </Box>
    );
};

export default Faqs;
