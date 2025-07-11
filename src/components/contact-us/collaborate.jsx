'use client'

import React, { useState } from "react";
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
    FormHelperText,
} from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Instagram, Twitter} from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {useRouter} from "next/navigation";

function Collaborate() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = "Phone Number must be 10 digits";
        }

        if (!formData.service.trim()) newErrors.service = "Please select a service";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
        setErrors({ ...errors, [field]: '' }); // Clear error on change
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Form submitted:", formData);
            // Submit logic here
        }
    };

    const Details = [
        {
            icon: <FmdGoodIcon/>,
            title: "Address Business",
            description: "City Center complex, 203, Savlia Circle, Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395006"
        },
        {
            icon: <SmsIcon/>,
            title: "Contact With Us",
            description: "Call Consulting: +91 79844 43901"
        },
        {
            icon: <DraftsIcon/>,
            title: "Email Address",
            description: " jbs.technology26@gmail.com"
        },
        {
            icon: <AccessAlarmIcon/>,
            title: "Working Time",
            description: "Mon - Sat: 8:00am - 7:00pm\n" +
                "Holiday : Closed"
        }
    ]

    const socialLinks = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/company/jbs-technique/posts/?feedView=all",
        },
        {
            name: "Twitter",
            link: "https://x.com/JBSTechnology26",
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/jbs_technology/?hl=en",
        },
        {
            name: "WhatsApp",
            link: "https://wa.me/917984443901?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services.",
        },
    ];

    const serviceOptions = [
        { value: "Express Delivery", label: "Express Delivery" },
        { value: "Insurance", label: "Insurance" },
        { value: "Packaging", label: "Packaging" },
        { value: "Web Development", label: "Web Development" },
        { value: "Mobile Development", label: "Mobile Development" },
        { value: "Digital Marketing", label: "Digital Marketing" },
    ];

    return (
        <Box sx={{padding: "40px 15px"}}>
            <Container maxWidth={"xxl"}>
                <Grid container>
                    <Grid item xs={12}>
                        <Box sx={{
                            background: "#E7E7E7"
                        }}>
                            <Grid container>
                                <Grid item lg={6} xs={12}>
                                    <Box sx={{padding: {lg: "100px 15px 100px 25px", xs: "70px 15px 30px 15px"}}}>
                                        <Box sx={{
                                            fontSize: {md: "40px", xs: "30px"},
                                            fontWeight: "500",
                                            lineHeight: "55px",
                                            paddingBottom: "20px"
                                        }}>
                                            Let's Collaborate with Us!
                                        </Box>
                                        <Box sx={{
                                            color: "#4B535D",
                                            fontSize: "17px",
                                            lineHeight: "26px",
                                            paddingBottom: "70px"
                                        }}>
                                            We are always ready to help you at any time, let's talk together.
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
                                                                p: 1,
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
                                                                    textWrap: "wrap",
                                                                    fontWeight: "400"
                                                                }}
                                                            >
                                                                {item.description}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                paddingTop: "32px",
                                                fontSize: "14px",
                                                justifyContent: { xs: "center", lg: "flex-start" },
                                                gap: "16px",
                                            }}
                                        >
                                            {socialLinks.map((social, index) => {
                                                const Icon = {
                                                    LinkedIn: LinkedInIcon,
                                                    Twitter: Twitter,
                                                    Instagram: Instagram,
                                                    WhatsApp: WhatsAppIcon,
                                                }[social.name];

                                                return Icon ? (
                                                    <Icon
                                                        key={index}
                                                        sx={{
                                                            fontSize: 25,
                                                            cursor: "pointer",
                                                            transition: "color 0.3s",
                                                            "&:hover": { color: "#0072b1" },
                                                        }}
                                                        onClick={() => window.open(social.link, "_blank")}
                                                    />
                                                ) : null;
                                            })}
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Box>
                                        <Box sx={{padding: {lg: "100px 30px 100px 15px", xs: "30px 15px"}}}>
                                            <Grid container spacing={2}>
                                                {/* Full Name Input */}
                                                <Grid item xs={12} sm={6}>
                                                    {/*<Box sx={{minHeight: "90px"}}>*/}
                                                        <TextField
                                                            fullWidth
                                                            placeholder="Full Name*"
                                                            variant="outlined"
                                                            value={formData.fullName}
                                                            onChange={handleChange("fullName")}
                                                            error={Boolean(errors.fullName)}
                                                            helperText={errors.fullName || " "}
                                                            FormHelperTextProps={{
                                                                sx: {
                                                                    marginLeft: 0,
                                                                    marginTop: "4px",
                                                                    minHeight: "20px",
                                                                }
                                                            }}
                                                            InputProps={{
                                                                sx: {
                                                                    color: "black",
                                                                    borderRadius: 2,
                                                                    background: "#f2f2f2",
                                                                    height: "50px",
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
                                                    {/*</Box>*/}
                                                </Grid>

                                                {/* Email Address Input */}
                                                <Grid item xs={12} sm={6}>
                                                    {/*<Box sx={{minHeight: "90px"}}>*/}
                                                        <TextField
                                                            fullWidth
                                                            placeholder="Email Address*"
                                                            variant="outlined"
                                                            value={formData.email}
                                                            onChange={handleChange("email")}
                                                            error={Boolean(errors.email)}
                                                            helperText={errors.email || " "}
                                                            FormHelperTextProps={{
                                                                sx: {
                                                                    marginLeft: 0,
                                                                    marginTop: "4px",
                                                                    minHeight: "20px",
                                                                }
                                                            }}
                                                            InputProps={{
                                                                sx: {
                                                                    color: "black",
                                                                    borderRadius: 2,
                                                                    background: "#f2f2f2",
                                                                    height: "50px",
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
                                                    {/*</Box>*/}
                                                </Grid>

                                                {/* Phone Number Input */}
                                                <Grid item xs={12} sm={6}>
                                                    {/*<Box sx={{minHeight: "90px"}}>*/}
                                                    <TextField
                                                        fullWidth
                                                        placeholder="Phone Number*"
                                                        variant="outlined"
                                                        value={formData.phone}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 10) {
                                                                setFormData({ ...formData, phone: value });
                                                                setErrors({ ...errors, phone: "" });
                                                            }
                                                        }}
                                                        error={Boolean(errors.phone)}
                                                        helperText={errors.phone || " "}
                                                        FormHelperTextProps={{
                                                            sx: {
                                                                marginLeft: 0,
                                                                marginTop: "4px",
                                                                minHeight: "20px",
                                                            },
                                                        }}
                                                        InputProps={{
                                                            sx: {
                                                                color: "black",
                                                                borderRadius: 2,
                                                                background: "#f2f2f2",
                                                                height: "50px",
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

                                                    {/*</Box>*/}
                                                </Grid>

                                                {/* Select Dropdown */}
                                                <Grid item xs={12} sm={6}>
                                                    {/*<Box sx={{minHeight: "90px"}}>*/}
                                                        <FormControl fullWidth error={Boolean(errors.service)}>
                                                            <Select
                                                                value={formData.service}
                                                                onChange={handleChange("service")}
                                                                displayEmpty
                                                                variant="outlined"
                                                                sx={{
                                                                    borderRadius: 2,
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
                                                                        color: formData.service ? "black" : "#8a8a8a",
                                                                        fontSize: "15px",
                                                                    },
                                                                }}
                                                                renderValue={(selected) => {
                                                                    if (!selected) {
                                                                        return <span style={{ color: "#8a8a8a" }}>What are your needs?</span>;
                                                                    }
                                                                    return selected;
                                                                }}
                                                            >
                                                                {serviceOptions.map((option) => (
                                                                    <MenuItem key={option.value} value={option.value}>
                                                                        {option.label}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                            <FormHelperText sx={{
                                                                marginLeft: 0,
                                                                marginTop: "4px",
                                                                minHeight: "20px",
                                                            }}>
                                                                {errors.service || " "}
                                                            </FormHelperText>
                                                        </FormControl>
                                                    {/*</Box>*/}
                                                </Grid>
                                            </Grid>

                                            {/* Message Field */}
                                            <Box sx={{minHeight: "200px", marginTop: "10px"}}>
                                                <TextField
                                                    fullWidth
                                                    multiline
                                                    rows={6}
                                                    placeholder="Write Message..."
                                                    variant="outlined"
                                                    value={formData.message}
                                                    onChange={handleChange("message")}
                                                    error={Boolean(errors.message)}
                                                    helperText={errors.message || " "}
                                                    FormHelperTextProps={{
                                                        sx: {
                                                            marginLeft: 0,
                                                            marginTop: "4px",
                                                            minHeight: "20px",
                                                        }
                                                    }}
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

                                            {/* Submit Button */}
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={handleSubmit}
                                                sx={{
                                                    backgroundColor: "#000",
                                                    color: "#fff",
                                                    textTransform: "none",
                                                    fontSize: "15px",
                                                    fontWeight: "400",
                                                    marginTop: "10px",
                                                    padding: "0px 55px 0px 25px",
                                                    position: "relative",
                                                    lineHeight: "50px",
                                                    borderRadius: "12px",
                                                    "&:hover": {
                                                        backgroundColor: "#333",
                                                    },
                                                    "&:hover .icon": {
                                                        left: "75%",
                                                    },
                                                }}
                                            >
                                                Submit
                                                <SendIcon
                                                    className="icon"
                                                    sx={{
                                                        fontSize: "15px",
                                                        transition: "0.3s",
                                                        position: "absolute",
                                                        left: "70%"
                                                    }}
                                                />
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Collaborate;