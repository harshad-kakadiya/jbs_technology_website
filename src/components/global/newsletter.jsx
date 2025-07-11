import React from 'react';
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import bgimg from '../../assets/images/blog/newsletter/newsletter.webp';
import DraftsIcon from '@mui/icons-material/Drafts';

function Newsletter() {
    return (
        <Box sx={{ py: { xs: "40px", sm: "60px", md: "80px" } }}>
            <Box sx={{ width: "100%" }}>
                <Box
                    sx={{
                        background: `url(${bgimg.src}) no-repeat`,
                        height: "100%",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        px: { xs: 2, sm: 4, md: 8, lg: 12 },
                        py: { xs: 4, sm: 6 },
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: { xs: 'center', sm: 'left' },
                                    p: { xs: 1, sm: 2 },
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "#fff",
                                        p: 2.2,
                                        background: "#454D56",
                                        borderRadius: "50%",
                                        mr: { xs: 0, sm: 2.5 },
                                        mb: { xs: 2, sm: 0 },
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <DraftsIcon sx={{ fontSize: { xs: '2.5rem', md: '3rem', lg: '3.5rem' } }} />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        component="h5"
                                        sx={{
                                            color: "#fff",
                                            fontWeight: 500,
                                            fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "45px" },
                                            mb: "12px",
                                        }}
                                    >
                                        Subscribe to Newsletter
                                    </Typography>
                                    <Box sx={{ color: "#C4C4C4", fontSize: { xs: "14px", sm: "16px" } }}>
                                        Please sign up to follow the latest news and events from us, we promise not to spam your inbox
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: { md: "flex-end", xs: "center" },
                                    alignItems: "center",
                                    height: "100%",
                                    mt: { xs: 3, md: 0 },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        backgroundColor: "#353E47",
                                        borderRadius: "40px",
                                        p: "10px",
                                        width: "100%",
                                        maxWidth: "450px",
                                    }}
                                >
                                    <TextField
                                        placeholder={"Don't miss the latest news from us..."}
                                        variant="standard"
                                        fullWidth
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                color: "#fff",
                                                fontSize: "14px",
                                                backgroundColor: "transparent",
                                                padding: "10px",
                                            },
                                        }}
                                        sx={{ flex: 1 }}
                                    />
                                    <Box
                                        sx={{
                                            width: "32px",
                                            height: "32px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            ml: "8px",
                                            color: "white",
                                            fontSize: "18px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ➔
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default Newsletter;
