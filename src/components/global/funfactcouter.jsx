'use client';
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function FunFactCounter({ gap, color, heading, counters, counterDetails }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Box sx={{ my: 7 }}>
            <Container maxWidth="xl">
                <Box
                    ref={ref}
                    sx={{
                        padding: gap
                            ? "0"
                            : { lg: "0px 0px 120px 0px", xs: "0px 0px 60px 0px" },
                    }}
                >
                    {inView && (
                        <>
                            <Box
                                component={"h2"}
                                sx={{
                                    fontSize: { xs: "30px", md: "35px", lg: "45px" },
                                    fontWeight: 600,
                                    textAlign: "center",
                                    my: 4,
                                }}
                            >
                                {heading}
                            </Box>
                            <Grid container justifyContent="center" spacing={4}>
                                {counters.map((counter, index) => (
                                    <Grid
                                        item
                                        xs={6}
                                        md={3}
                                        key={index}
                                        textAlign="center"
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontSize: { xs: 40, sm: 55, md: 60 },
                                                fontWeight: 600,
                                                color: color ? "white" : "#1A1F26",
                                            }}
                                        >
                                            <CountUp start={0} end={counter.value} duration={1} />+
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "lightBlack",
                                                fontSize: "18px",
                                                padding: "0px 20px",
                                            }}
                                        >
                                            {counterDetails[index]}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default FunFactCounter;
