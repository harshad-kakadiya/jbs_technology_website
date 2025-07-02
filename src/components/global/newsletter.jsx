import React from 'react';
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import bgimg from '../../assets/images/blog/newsletter/newsletter.webp';
import DraftsIcon from '@mui/icons-material/Drafts';

function Newsletter() {


    return (
        <Box sx={{ padding: "110px 0px" }}>
            <Container maxWidth={'xl'}>
                <Box sx={{ width: "100%" }}>
                    <Box
                        sx={{
                            background: `url(${bgimg.src}) no-repeat`,
                            height: "100%",
                            width: "100%",
                            backgroundSize: "cover",
                            padding: "44px 65px"
                        }}
                    >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "15px"
                                }}>
                                    <Box sx={{
                                        color: "#fff",
                                        p: 2.2,
                                        background: "#454D56",
                                        borderRadius: "50%",
                                        marginRight: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <DraftsIcon sx={{ fontSize: 'xxx-large' }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h5" component="h5" sx={{ color: "#fff", fontWeight: 500, fontSize: "30px", marginBottom: "15px" }}>
                                            Subscribe to Newsletter
                                        </Typography>
                                        <Box sx={{ color: "#C4C4C4" }}>
                                            Please sign up to follow the latest news and events from us, we promise not to spam your inbox.
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: {md:"end" , xs:"center"},
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            backgroundColor: "#353E47",
                                            borderRadius: "40px",
                                            padding: "10px",
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
                                                marginLeft: "8px",
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
            </Container>
        </Box>
    );
}

export default Newsletter;
