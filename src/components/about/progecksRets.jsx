'use client';
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InventoryIcon from "@mui/icons-material/Inventory";
import FolderIcon from "@mui/icons-material/Folder";
import StarIcon from "@mui/icons-material/Star";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const stats = [
    {
        icon: (
            <FavoriteIcon sx={{ fontSize: { xs: "20px", sm: "22px", md: "25px" } }} />
        ),
        value: 4152,
        label: "Customer Satisfaction",
    },
    {
        icon: (
            <InventoryIcon
                sx={{ fontSize: { xs: "20px", sm: "22px", md: "25px" } }}
            />
        ),
        value: 26,
        label: "Years Proven Track Record",
    },
    {
        icon: (
            <FolderIcon sx={{ fontSize: { xs: "20px", sm: "22px", md: "25px" } }} />
        ),
        value: 983,
        label: "Projects We Have Completed",
    },
    {
        icon: (
            <StarIcon sx={{ fontSize: { xs: "20px", sm: "22px", md: "25px" } }} />
        ),
        value: 18,
        label: "Honorary Consulting Award",
    },
];
const ProgecksRets = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <Box
            ref={ref}
            sx={{
                backgroundColor: "#F5F5F5",
                py: { xs: 4, sm: 6 },
                px: { xs: 2, sm: 4 },
            }}
        >
            <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: { xs: "15px", md: "25px" },
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: "40px", sm: "50px", md: "60px" },
                                    height: { xs: "40px", sm: "50px", md: "60px" },
                                    borderRadius: "50%",
                                    backgroundColor: "#D1D2D3",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {stat.icon}
                            </Box>
                            <Box>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#333",
                                        fontSize: { xs: "28px", sm: "36px", md: "55px" },
                                    }}
                                >
                                    {inView ? (
                                        <CountUp end={stat.value} duration={2} separator="." />
                                    ) : (
                                        "0"
                                    )}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#666",
                                        textTransform: "uppercase",
                                        maxWidth: "200px",
                                        lineHeight: "1.5",
                                        fontSize: { xs: "12px", sm: "14px" },
                                    }}
                                >
                                    {stat.label}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
export default ProgecksRets;