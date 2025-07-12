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

const Faqs = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqData = [
        {
            id: "panel1",
            question: "Who are your typical clients?",
            answer:
                "We work with a variety of clients. We work with the heads of municipalities' transportation planning, traffic engineering or economic development departments, and with mayors’ offices.",
        },
        {
            id: "panel2",
            question: "What is the process for beginning a project?",
            answer:
                "Our project initiation process begins with a comprehensive consultation to understand your specific needs and objectives. We then develop a customized proposal outlining the scope, timeline, and deliverables for your project.",
        },
        {
            id: "panel3",
            question: "Can you help a client get funding?",
            answer:
                "Yes, we can assist clients in identifying potential funding sources and help prepare grant applications. Our team has experience with various federal, state, and local funding programs relevant to transportation and infrastructure projects.",
        },
        {
            id: "panel4",
            question: "What if my project lies outside your team’s skillset?",
            answer:
                "If your project requires expertise outside our core competencies, we have a network of trusted partners and consultants we can bring in to ensure your project receives the specialized attention it needs.",
        },
        {
            id: "panel5",
            question: "Will you tell me how to run my business?",
            answer:
                "We focus on providing strategic guidance and recommendations based on our expertise, but we respect that you know your business best. Our role is to support your decision-making with data-driven insights and industry best practices.",
        },
        {
            id: "panel6",
            question: "Are you a data controller or processor?",
            answer:
                "Our role as a data controller or processor depends on the specific nature of our engagement with you. We can discuss the details of data handling and our respective responsibilities during our initial consultation.",
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f8f9fa" }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: "center", mb: 5 }}>
                    <Typography
                        variant="h2"
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
