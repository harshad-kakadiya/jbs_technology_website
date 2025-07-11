'use client';
import React from 'react';
import {
    Box, Button, Container, FormControl, Grid, InputLabel, List, ListItem, ListItemText,
    MenuItem, Select, Stack, TextField, Typography, FormHelperText
} from '@mui/material';
import {useParams} from 'next/navigation';
import Image from 'next/image';
import {useForm, Controller} from 'react-hook-form';


import react from '@/assets/images/career/react-logo.webp';
import flutter from '@/assets/images/career/flutter-logo.svg';
import human from '@/assets/images/career/human-resources.webp';
import node from '@/assets/images/career/node-logo.webp';
import fullstack from '@/assets/images/career/full-stack-logo.webp';
import form from '@/assets/images/career/formlogo.png';
import uiux from '@/assets/images/career/uiux.webp';
import HeadingPage from "@/components/global/headingPage";
import bg1 from "@/assets/images/career/cr1.webp";


const jobListings = [
    {
        slug: "react-developer",
        id: 1,
        logo: react,
        title: "React.js Developer",
        category: "Careers",
        description: [
            "We are looking for a skilled React.js developer to join our front-end development team. In this role, you will develop and implement user interface components using React.js, Redux, and related tools. You'll collaborate with designers and backend developers to build dynamic web applications."
        ],
        experience: "1 year",
        openings: 0,
        location: "Surat, Gujarat.",
        responsibilities: [
            "Developing new user-facing features using React.js.",
            "Building reusable components and front-end libraries.",
            "Translating designs and wireframes into high-quality code.",
            "Optimizing components for performance across devices.",
            "Collaborating with backend developers and designers."
        ],
        qualifications: [
            "Bachelor’s degree in Computer Science or a related field.",
            "Strong proficiency in JavaScript, including DOM manipulation.",
            "Thorough understanding of React.js and its core principles.",
            "Experience with Redux, Webpack, Babel, etc.",
            "Familiarity with RESTful APIs and modern front-end build pipelines."
        ]
    },
    {
        slug: "flutter-developer",
        id: 2,
        logo: flutter,
        title: "Flutter Developer",
        "category": "Careers",
        "description": [
            "We are seeking a skilled Flutter developer to build cross-platform mobile applications. You will collaborate with cross-functional teams to design, develop, and maintain mobile apps for Android and iOS using the Flutter framework."
        ],
        "experience": "1 year",
        "openings": 0,
        "location": "Surat, Gujarat.",
        "responsibilities": [
            "Designing and building mobile applications with Flutter.",
            "Writing clean and maintainable Dart code.",
            "Integrating APIs and third-party libraries.",
            "Fixing bugs and improving application performance.",
            "Participating in UI/UX discussions and improvements."
        ],
        "qualifications": [
            "Bachelor’s degree in Computer Science or related field.",
            "Experience in mobile app development using Flutter and Dart.",
            "Knowledge of platform-specific code (Swift, Kotlin) is a plus.",
            "Understanding of RESTful APIs and mobile architecture.",
            "Experience with version control tools like Git."
        ]
    }, {
        slug: "human-resources-executive",
        "id": 3,
        logo: human,
        title: "HR",
        "category": "Careers",
        "description": [
            "We are looking for an experienced and dynamic HR professional to manage our human resources operations, including recruitment, onboarding, employee engagement, and compliance. The ideal candidate should be passionate about people and processes."
        ],
        "experience": "1 year",
        "openings": 0,
        "location": "Surat, Gujarat.",
        "responsibilities": [
            "Managing end-to-end recruitment and onboarding.",
            "Maintaining employee records and handling HR documentation.",
            "Developing HR policies and procedures.",
            "Organizing training and development programs.",
            "Handling employee grievances and fostering a positive work environment."
        ],
        "qualifications": [
            "Bachelor’s degree in Human Resources, Business Administration, or a related field.",
            "Proven experience in HR roles.",
            "Good knowledge of labor laws and HR best practices.",
            "Excellent communication and interpersonal skills.",
            "Proficiency in HR software and MS Office."
        ]
    }, {
        slug: "nodejs-developer",
        "id": 4,
        logo: node,
        title: "Node.js Developer",
        "category": "Careers",
        "description": [
            "We are looking for a skilled Node.js developer to develop backend services and RESTful APIs. You'll be responsible for managing server-side logic, database integration, and optimizing performance for scalable applications."
        ],
        "experience": "1 year",
        "openings": 0,
        "location": "Surat, Gujarat.",
        "responsibilities": [
            "Developing backend components using Node.js and Express.",
            "Writing reusable, testable, and efficient code.",
            "Integrating APIs and third-party services.",
            "Ensuring data protection and security best practices.",
            "Collaborating with front-end developers and designers."
        ],
        "qualifications": [
            "Bachelor’s degree in Computer Science or a related field.",
            "Proficiency in JavaScript and Node.js.",
            "Experience with Express.js, MongoDB, and RESTful APIs.",
            "Familiarity with version control tools like Git.",
            "Understanding of asynchronous programming and event-driven architecture."
        ]
    }, {
        slug: "full-stack-developer",
        "id": 5,
        logo: fullstack,
        title: "Full Stack Developer",
        "category": "Careers",
        "description": [
            "We are hiring a Full Stack Developer who is proficient in both front-end and back-end technologies. You will be responsible for designing, developing, and maintaining full-fledged web applications that run on both client and server sides."
        ],
        "experience": "1 year",
        "openings": 0,
        "location": "Surat, Gujarat.",
        "responsibilities": [
            "Developing front-end website architecture using React.js or similar frameworks.",
            "Building back-end applications using Node.js, Express, or similar technologies.",
            "Integrating databases such as MongoDB or MySQL.",
            "Ensuring cross-platform optimization and responsiveness.",
            "Collaborating with designers and other developers."
        ],
        "qualifications": [
            "Bachelor’s degree in Computer Science or related field.",
            "Experience in front-end (React.js, HTML, CSS, JS) and back-end (Node.js, Express).",
            "Knowledge of database systems and API integration.",
            "Ability to work in a team and independently.",
            "Good understanding of DevOps tools and version control systems."
        ]
    },
    {
        slug: "ui-ux-designer",
        id: 6,
        logo: uiux, // Replace with actual logo variable or path
        title: "UI/UX Designer",
        category: "Careers",
        description: [
            "We are hiring a UI/UX Designer who has a strong understanding of user-centered design principles. You will be responsible for creating engaging, user-friendly interfaces and experiences across web and mobile platforms."
        ],
        experience: "1 year",
        openings: 0,
        location: "Surat, Gujarat.",
        responsibilities: [
            "Designing user interface elements like menus, tabs, and widgets for web and mobile applications.",
            "Conducting user research and evaluating user feedback to improve usability.",
            "Creating wireframes, prototypes, and mockups using tools like Figma, Adobe XD, or Sketch.",
            "Collaborating with developers and stakeholders to implement user-centric designs.",
            "Ensuring consistent branding and design standards across all platforms."
        ],
        qualifications: [
            "Bachelor’s degree in Design, Human-Computer Interaction, or a related field.",
            "Proficiency in design tools such as Figma, Adobe XD, Illustrator, and Photoshop.",
            "Strong understanding of UX principles and best practices.",
            "Experience in creating responsive and adaptive designs.",
            "Excellent communication and collaboration skills."
        ]
    }

];

const posts = [
    { slug: 'react-developer', title: 'React.js Developer' },
    { slug: 'flutter-developer',  title: 'Flutter Developer' },
    { slug: 'human-resources-executive',  title: 'HR' },
    { slug: 'nodejs-developer',  title: 'Node.js Developer' },
    { slug: 'full-stack-developer',  title: 'Full Stack Developer' },
    { slug: 'ui-ux-designer',  title: 'UI/UX Designer' },
];

function Page() {
    const {id} = useParams();
    const job = jobListings.find((p) => p.slug === id);
    const project = posts.find((i) => i.slug === id);

    const {
        handleSubmit,
        control,
        register,
        formState: {errors}
    } = useForm();

    const onSubmit = (data = any) => {
        console.log('Form Submitted:', data);
    };

    const breadCrumbs = [
        { label: "Home" , route: '/' },
        { label: 'Careers', route: '/careers' },
    ];

    if (!job) {
        return (
            <Box textAlign="center" py={20}>
                <Typography variant="h5" color="text.secondary">
                    Job not found.
                </Typography>
            </Box>
        );
    }

    return (

        <Box>
            <HeadingPage bgImg={bg1.src} heading={project.title} breadcrumbs={breadCrumbs}/>
            <Container maxWidth="lg" sx={{py: 12}}>
                <Box textAlign="center">
                    <Typography gutterBottom sx={{
                        fontSize: {xs: "33px", lg: "40px"},
                        fontWeight: 600,
                        color: "#1A1F26"
                    }}>
                        {job.title}
                    </Typography>
                </Box>
                {/*<Box>*/}
                {/*    <Typography gutterBottom sx={{*/}
                {/*        my: 3,*/}
                {/*        fontSize: "16px"*/}
                {/*    }}>*/}
                {/*        {job.category} / <b style={{color: "green"}}>{job.title}</b>*/}
                {/*    </Typography>*/}
                {/*</Box>*/}
                <Stack direction={{xs: 'column', md: 'row'}} spacing={4} mb={3}>

                    <Box
                        sx={{
                            display: {xs: "block", sm: "flex"},
                            justifyContent: "space-between",
                            gap: 4,
                        }}
                    >
                        {/* Image Section - 40% on sm+ */}
                        <Box
                            sx={{
                                width: {xs: "100%", sm: "40%"},
                                textAlign: {xs: "center", sm: "left"},
                            }}
                        >
                            <Image src={job.logo} alt={job.title} width={250} height={250}/>
                        </Box>

                        {/* Content Section - 60% on sm+ */}
                        <Box sx={{width: {xs: "100%", sm: "60%"}}}>
                            {job.description.map((desc, i) => (
                                <Typography key={i} variant="body1" color="#1A1F26" gutterBottom>
                                    {desc}
                                </Typography>
                            ))}

                            <Box mt={2}>
                                <ul style={{paddingLeft: "1.2em", margin: 0}}>
                                    <li style={{marginBottom: "8px"}}>
                                        <Typography component="span">
                                            <strong>Experience:</strong> {job.experience}
                                        </Typography>
                                    </li>
                                    <li style={{marginBottom: "8px"}}>
                                        <Typography component="span">
                                            <strong>Openings:</strong> {job.openings}
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography component="span">
                                            <strong>Location:</strong> {job.location}
                                        </Typography>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                </Stack>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: 4, // adds space between the boxes on wrap
                    }}
                >
                    <Box sx={{flex: 1, minWidth: 300}}>
                        <Typography variant="h6" gutterBottom
                                    sx={{fontSize: {xs: "24px", md: "28px"}, fontWeight: 600}}>
                            Responsibilities
                        </Typography>
                        <List dense>
                            {job.responsibilities.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemText
                                        primary={`• ${item}`}
                                        primaryTypographyProps={{
                                            sx: {
                                                fontSize: {xs: '14px', sm: '15px', md: '16px'}, // adjust as needed
                                                color: '#1A1F26'
                                            }
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                    </Box>

                    <Box sx={{flex: 1, minWidth: 300}}>
                        <Typography variant="h6" gutterBottom
                                    sx={{fontSize: {xs: "24px", md: "28px"}, fontWeight: 600}}>
                            Qualifications
                        </Typography>
                        <List dense>
                            {job.qualifications.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemText primary={`• ${item}`}
                                                  primaryTypographyProps={{
                                                      sx: {
                                                          fontSize: {xs: '14px', sm: '15px', md: '16px'}, // adjust as needed
                                                          color: '#1A1F26'
                                                      }
                                                  }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>


                <Grid container spacing={2} mt={1}>
                    <Grid item xs={12} md={6} display="flex" justifyContent="center">
                        <Box
                            sx={{
                                height: {
                                    xs: 280,
                                    sm: 380,
                                    md: 480,
                                    lg: 550,
                                },
                                width: '100%',
                                maxWidth: 507,
                                position: 'relative',
                            }}
                        >
                            <Image
                                src={form}
                                alt="Form"
                                layout="fill"
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            sx={{ p: 3, bgcolor: '#f5f5f5', borderRadius: 4 }}
                        >
                            <Typography
                                variant="h5"
                                color="#1A1F26"
                                gutterBottom
                                sx={{ fontSize: { xs: '24px', md: '28px' }, fontWeight: 600, mb: 3 }}
                            >
                                Job Application Form
                            </Typography>

                            <Grid container spacing={2}>
                                {/* First and Last Name */}
                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            label="First Name*"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{
                                                sx: {
                                                    borderRadius: 2,
                                                },
                                            }}
                                            {...register('firstName', { required: 'First name is required' })}
                                            error={!!errors.firstName}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.firstName && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.firstName.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            label="Last Name*"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('lastName', { required: 'Last name is required' })}
                                            error={!!errors.lastName}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.lastName && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.lastName.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Email & Phone */}
                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            type="email"
                                            label="Email*"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Enter a valid email address',
                                                },
                                            })}
                                            error={!!errors.email}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.email && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.email.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            label="Phone Number*"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: 'Enter a valid 10-digit phone number',
                                                },
                                            })}
                                            error={!!errors.phone}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.phone && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.phone.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* CV Upload */}
                                <Grid item xs={12}>
                                    <Box >
                                        <InputLabel sx={{ mb: 1 }}>Upload your latest CV*</InputLabel>
                                        <Box sx={{ bgcolor: '#fff', p: 1.5, borderRadius: 2 }}>
                                            <input type="file" {...register('cv', { required: 'CV is required' })} />
                                        </Box>
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.cv && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.cv.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Experience */}
                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Total experience in Years*"
                                            placeholder="e.g. 4.5"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('experience', { required: 'Experience is required' })}
                                            error={!!errors.experience}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.experience && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.experience.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Description */}
                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Description"
                                            multiline
                                            rows={3}
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('description')}
                                        />
                                        {/* Fixed height container for error messages - no error for description */}
                                        <Box sx={{ height: '15px', mt: '2px' }}></Box>
                                    </Box>
                                </Grid>

                                {/* Location */}
                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Where are you currently located?*"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('location', { required: 'Location is required' })}
                                            error={!!errors.location}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.location && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.location.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Relocation */}
                                <Grid item xs={12}>
                                    <Box >
                                        <FormControl
                                            fullWidth
                                            size="small"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            error={!!errors.relocate}
                                        >
                                            <InputLabel id="relocate-label">
                                                Are you willing to relocate to Surat, Gujarat?*
                                            </InputLabel>
                                            <Controller
                                                name="relocate"
                                                control={control}
                                                rules={{ required: 'Relocation preference is required' }}
                                                render={({ field }) => (
                                                    <Select
                                                        {...field}
                                                        labelId="relocate-label"
                                                        label="Are you willing to relocate to Surat, Gujarat?*"
                                                        sx={{ borderRadius: 2 }}
                                                    >
                                                        <MenuItem value="Yes">Yes</MenuItem>
                                                        <MenuItem value="No">No</MenuItem>
                                                    </Select>
                                                )}
                                            />
                                        </FormControl>
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.relocate && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.relocate.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* CTC Fields */}
                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            label="Current CTC (LPA)*"
                                            placeholder="e.g. 4 LPA"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('currentCTC', { required: 'Current CTC is required' })}
                                            error={!!errors.currentCTC}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.currentCTC && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.currentCTC.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Box >
                                        <TextField
                                            label="Expected CTC (LPA)*"
                                            placeholder="e.g. 6 LPA"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('expectedCTC', { required: 'Expected CTC is required' })}
                                            error={!!errors.expectedCTC}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.expectedCTC && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.expectedCTC.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Interview Details */}
                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Interview Availability*"
                                            placeholder="e.g. I can be available on Saturday 10AM to 2PM"
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('interviewAvailability', {
                                                required: 'Interview availability is required',
                                            })}
                                            error={!!errors.interviewAvailability}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.interviewAvailability && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.interviewAvailability.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Office or Online Interview Preference*"
                                            placeholder="e.g. I can come to office."
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('interviewType', {
                                                required: 'Interview preference is required',
                                            })}
                                            error={!!errors.interviewType}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.interviewType && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.interviewType.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                <Grid item xs={12}>
                                    <Box >
                                        <TextField
                                            label="Notice Period / Immediate Joiner?*"
                                            placeholder="e.g. Yes I can join immediately."
                                            fullWidth
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: '#fff',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2,
                                                    '& fieldset': {
                                                        border: 'none',
                                                    },
                                                    '&:hover fieldset': {
                                                        border: '2px solid gray',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        border: '2px solid black',
                                                    },
                                                },
                                                '& label.Mui-focused': {
                                                    color: 'black',
                                                },
                                            }}
                                            InputProps={{ sx: { borderRadius: 2 } }}
                                            {...register('noticePeriod', {
                                                required: 'Notice period info is required',
                                            })}
                                            error={!!errors.noticePeriod}
                                        />
                                        {/* Fixed height container for error messages */}
                                        <Box sx={{ height: '15px', mt: '2px' }}>
                                            {errors.noticePeriod && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#f5f5f5',
                                                        color: '#d32f2f',
                                                        fontSize: '0.75rem',
                                                        padding: '4px 8px',
                                                        borderBottomLeftRadius: 8,
                                                        borderBottomRightRadius: 8,
                                                    }}
                                                >
                                                    {errors.noticePeriod.message}
                                                </Box>
                                            )}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Submit Button */}
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            backgroundColor: '#1A1F26',
                                            color: '#fff',
                                            borderRadius: '500px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            py: 1.5,
                                            fontSize: '16px',
                                            '&:hover': {
                                                backgroundColor: '#1A1F26',
                                            },
                                        }}
                                    >
                                        Submit Application
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Page;
