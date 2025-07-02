import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SmsIcon from '@mui/icons-material/Sms';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import Img1 from "../../assets/images/contact/Img1.webp"
import {
    TextField,
    MenuItem,
    Select,
    Button,
    InputLabel,
    FormControl,
    TextareaAutosize,
} from "@mui/material";
import Image from "next/image";

function Collaborate(props) {
    const Details=[
        {
            icon:<FmdGoodIcon/>,
            title:"Address Business",
            description:"2220 Plymouth Rd #302\n" +
                "Hopkins, Minnesota(MN), 55305"
        },
        {
            icon:<SmsIcon/>,
            title:"Contact With Us",
            description:"Call Consulting: (234) 109-6666\n" +
                "Call Cooperate: 234) 244-8888"
        },
        {
            icon:<DraftsIcon/>,
            title:"Email Address",
            description:"Herringtonconsulting@gmail.com\n" +
                "Herringtoncareers@gmail.com\n"
        },
        {
            icon:<AccessAlarmIcon/>,
            title:"Working Time",
            description:"Mon - Sat: 8.00am - 18.00pm\n" +
                "Holiday : Closed"
        }
    ]
    return (
        <Box sx={{padding:"85px 15px"}}>
            <Container maxWidth={"xxl"}>
                <Grid container>
                    <Grid item={12}>


                <Box sx={{
                    background:"#E7E7E7"
                }}>
                    <Grid container>
                        <Grid item lg={6} xs={12}>
                            <Box sx={{ padding: {lg:"100px 15px 100px 25px" , xs:"70px 15px 30px 15px"} }}>
                                <Box sx={{
                                    fontSize:{md:"40px" , xs:"30px"},
                                    fontWeight:"500",
                                    lineHeight:"55px",
                                    paddingBottom:"20px"

                                }}>
                                    Let’s Collaborate with Us!
                                </Box>
                                <Box sx={{
                                    color:"#4B535D",
                                    fontSize:"17px",
                                    lineHeight:"26px",
                                    paddingBottom:"70px"
                                }}>
                                    We are always ready to help you at any time, let’s talk together.
                                </Box>
                                    <Grid container spacing={4}>
                                        {Details.map((item, index) => (
                                            <Grid item lg={6} md={6} xs={12} key={index}>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "15px",
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            color: "#fff",
                                                            p:1,
                                                            borderRadius: "50%",
                                                            background: "#000",
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                        }}
                                                    >
                                                        {item.icon}
                                                    </Box>
                                                    <Box>
                                                        <Box
                                                            sx={{
                                                                fontWeight: "500",
                                                                fontSize: "20px",
                                                                lineHeight: "25px",
                                                                marginBottom: "8px",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                color: "#4B535D",
                                                                fontSize: "15px",
                                                                lineHeight: "25px",
                                                                whiteSpace: "pre-line",
                                                                textWrap:"wrap",
                                                                fontWeight:"400"
                                                            }}
                                                        >
                                                            {item.description}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                <Box sx={{
                                    display:"flex",
                                    paddingTop:"80px",
                                    fontSize:"14px",
                                    justifyContent:{xs:"center" , lg:"start"}
                                }}>
                                    <Box sx={{paddingRight:"35px",transition:".2s"}}>
                                        <FacebookIcon sx={{"&:hover":{
                                            color:"blue"
                                            }}}/>
                                    </Box>
                                    <Box  sx={{paddingRight:"35px",transition:".2s"}}>
                                        <TwitterIcon sx={{
                                            "&:hover":{
                                                color:"skyblue"
                                            }
                                        }}/>
                                    </Box>
                                    <Box  sx={{paddingRight:"35px",transition:".2s"}}>
                                        <InstagramIcon sx={{
                                            "&:hover":{
                                                color:"#F501CF"
                                            }
                                        }}/>
                                    </Box>
                                    <Box  sx={{paddingRight:"35px",transition:".2s"}}>
                                        <TelegramIcon sx={{
                                            "&:hover":{
                                                color:"#28A5E5"
                                            }
                                        }}/>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                            <Grid item lg={6} xs={12}>
                                <Box>
                                    <Box sx={{ padding: { lg: "100px 30px 100px 15px" } }}>
                                        <Grid container>
                                            {/* Full Name Input */}
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ padding: "10px" }}>
                                                    <TextField
                                                        fullWidth
                                                        placeholder="*Full Name"
                                                        variant="outlined"
                                                        InputProps={{
                                                            sx: {
                                                                color: "black", // Set font color to black
                                                                borderRadius: "50px",
                                                                background: "#f2f2f2",
                                                                height: "50px",
                                                                fontSize: "15px",
                                                                padding: "6px 15px",
                                                                "& .MuiOutlinedInput-notchedOutline": {
                                                                    border: "none", // Remove border
                                                                },
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #000", // Add border on hover
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "2px solid #000", // Add border on focus
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>

                                            {/* Email Address Input */}
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ padding: "10px" }}>
                                                    <TextField
                                                        fullWidth
                                                        placeholder="*Email Address"
                                                        variant="outlined"
                                                        InputProps={{
                                                            sx: {
                                                                color: "black", // Set font color to black
                                                                borderRadius: "50px",
                                                                background: "#f2f2f2",
                                                                height: "50px",
                                                                fontSize: "15px",
                                                                padding: "6px 15px",
                                                                "& .MuiOutlinedInput-notchedOutline": {
                                                                    border: "none",
                                                                },
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #000",
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "2px solid #000",
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>

                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ padding: "10px" }}>
                                                    <TextField
                                                        fullWidth
                                                        placeholder="*Phone Number"
                                                        variant="outlined"
                                                        InputProps={{
                                                            sx: {
                                                                color: "black",
                                                                borderRadius: "50px",
                                                                background: "#f2f2f2",
                                                                height: "50px",
                                                                fontSize: "15px",
                                                                padding: "6px 15px",
                                                                "& .MuiOutlinedInput-notchedOutline": {
                                                                    border: "none",
                                                                },
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #000",
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "2px solid #000",
                                                                },
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            </Grid>

                                            {/* Select Dropdown */}
                                            <Grid item xs={12} sm={6}>
                                                <Box sx={{ padding: "10px" }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel
                                                            shrink={false}
                                                            sx={{
                                                                color: "#8a8a8a",
                                                                pl: 2,
                                                                background: "#f2f2f2",
                                                                borderRadius: "50px",
                                                            }}
                                                        >
                                                            What are your needs?
                                                        </InputLabel>
                                                        <Select
                                                            defaultValue=""
                                                            variant="outlined"
                                                            sx={{
                                                                borderRadius: "50px",
                                                                background: "#f2f2f2",
                                                                height: "50px",
                                                                "& .MuiOutlinedInput-notchedOutline": {
                                                                    border: "none",
                                                                },
                                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                                    border: "1px solid #000",
                                                                },
                                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                                    border: "2px solid #000",
                                                                },
                                                                "& .MuiSelect-select": {
                                                                    padding: "10px 20px",
                                                                    color: "black",
                                                                },
                                                                "&.Mui-focused .MuiSelect-select": {
                                                                    color: "black",
                                                                },
                                                                "&.Mui-selected .MuiSelect-select": {
                                                                    color: "black",
                                                                },
                                                                "& .MuiMenuItem-root": {
                                                                    color: "black",
                                                                },
                                                            }}
                                                        >
                                                            <MenuItem value="Express Delivery">Express Delivery</MenuItem>
                                                            <MenuItem value="Insurance">Insurance</MenuItem>
                                                            <MenuItem value="Packaging">Packaging</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>

                                        </Grid>
                                        <Box sx={{ padding: "10px" }}>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={9}
                                                placeholder="Write Message..."
                                                variant="outlined"
                                                InputProps={{
                                                    sx: {
                                                        color: "black",
                                                        borderRadius: "20px",
                                                        background: "#f2f2f2",
                                                        padding: "20px 25px",
                                                        fontSize: "15px",
                                                        "& .MuiOutlinedInput-notchedOutline": {
                                                            border: "none",
                                                        },
                                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                                            border: "1px solid #000",
                                                        },
                                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                            border: "2px solid #000",
                                                        },
                                                    },
                                                }}
                                            />
                                        </Box>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                backgroundColor: "#000",
                                                color: "#fff",
                                                textTransform: "none",
                                                fontSize: "15px",
                                                fontWeight: "400",
                                                marginTop: "26px",
                                                padding: "0px 55px 0px 25px",
                                                position: "relative",
                                                lineHeight: "50px",
                                                borderRadius: "11110px 11110px 11110px 11110px",
                                                "&:hover  .icon": {
                                                    position: "absolute",
                                                    left: "82%",
                                                },
                                            }}
                                        >
                                            Submit Require <SendIcon className={"icon"} sx={{ fontSize: "15px", transition: "0.3s", position: "absolute", left: "80%" }} />
                                        </Button>
                                    </Box>
                                </Box>


                            </Grid>
                    </Grid>
                    </Box>
                    </Grid>

                    <Grid item={12}>
                        <Box>
                        <Image
                            src={Img1}
                            alt={Img1}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: { xs: "contain", sm: "cover" }
                            }}

                        />

                        </Box>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}

export default Collaborate;