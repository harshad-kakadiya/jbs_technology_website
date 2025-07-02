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
        <Box sx={{ my: 9 }}>
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
                                    fontSize: 45,
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
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        key={index}
                                        textAlign="center"
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontSize: { xs: 60, sm: 65, md: 72 },
                                                fontWeight: 600,
                                                color: color ? "white" : "red",
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
