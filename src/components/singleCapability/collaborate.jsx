'use client'

import React, {useState} from 'react';
import {Box, Button, FormControl, FormHelperText, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import img1 from '../../assets/images/singleCapability/svd5.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MessageIcon from '@mui/icons-material/Message';

function Collaborate() {
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
        setFormData({...formData, [field]: e.target.value});
        setErrors({...errors, [field]: ''}); // Clear error on change
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Form submitted:", formData);
            // Submit logic here
        }
    };

    const serviceOptions = [
        {value: "Express Delivery", label: "Express Delivery"},
        {value: "Insurance", label: "Insurance"},
        {value: "Packaging", label: "Packaging"},
        {value: "Web Development", label: "Web Development"},
        {value: "Mobile Development", label: "Mobile Development"},
        {value: "Digital Marketing", label: "Digital Marketing"},
    ];
    return (
        <Box
            sx={{
                backgroundImage: `url(${img1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                width: "100%",
            }}
        >
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Box
                    sx={{
                        width: {md: '55%', xs: '100%'},
                        backgroundColor: '#FFFFFF7D',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(10px)',
                    }}
                >
                    <Box sx={{padding: {xl: "100px 90px 100px 90px", lg:'100px 50px 100px 50px',xs: "30px 15px"}}}>
                        <Box
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: {xs: "30px", md: "35px", lg: "45px"},
                                lineHeight: "55px",
                                fontWeight: "500",
                            }}
                        >
                            Let’s Collaborate with Us!
                        </Box>
                        <Box sx={{py: 5}}>
                            <Grid container>
                                <Grid item xs={12} lg={6} sm={6} md={12} >
                                    <Box sx={{display: 'flex' , pb: {lg:'unset' , md:5 , sm:'unset' , xs:5}}}>
                                        <Box>
                                            <Typography sx={{
                                                color: '#FFF',
                                                backgroundColor: '#121C27',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: '50%',
                                                p:1.5,
                                                mr:2
                                            }}>
                                                <LocationOnIcon/>
                                            </Typography>
                                        </Box>
                                        <Typography sx={{
                                            fontSize: {sm: '16px', xs: '14px'},
                                            color: '#4B535D',
                                            textWrap: 'wrap',
                                            maxWidth: '300px'
                                        }}>203,
                                            Second Floor, City Center complex, Yogi Chowk, Nana Varachha, Surat, Gujarat
                                            395010</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} lg={6} sm={6} md={12}>
                                    <Box sx={{display: 'flex'}}>
                                        <Box>
                                            <Typography sx={{
                                                color: '#FFF',
                                                backgroundColor: '#121C27',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderRadius: '50%',
                                                p:1.5,
                                                mr:2
                                            }}>
                                                <MessageIcon/>
                                            </Typography>
                                        </Box>
                                        <Typography sx={{
                                            fontSize: {sm: '16px', xs: '14px'},
                                            color: '#4B535D',
                                            textWrap: 'wrap',
                                            maxWidth: '300px'
                                        }}>Call Consulting: +91 79844 43901</Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
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
                                            setFormData({...formData, phone: value});
                                            setErrors({...errors, phone: ""});
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
                                                return <span style={{color: "#8a8a8a"}}>What are your needs?</span>;
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
            </Box>
        </Box>
    );
}

export default Collaborate;