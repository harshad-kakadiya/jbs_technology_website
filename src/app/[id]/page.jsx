'use client'
import React from 'react';
import DevlopTogether from "@/components/singleCapability/devlopTogether";
import Servicess from "@/components/singleCapability/service";
import OurApproach from "@/components/singleCapability/ourApproach";
import Collaborate from "@/components/singleCapability/collaborate";
import Faqs from "@/components/singleCapability/faqs";
import PieChartIcon from '@mui/icons-material/PieChart';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CodeIcon from '@mui/icons-material/Code';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import DrawIcon from '@mui/icons-material/Draw';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CampaignIcon from '@mui/icons-material/Campaign';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EmailIcon from '@mui/icons-material/Email';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RouteIcon from '@mui/icons-material/Route';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import WebAssetIcon from '@mui/icons-material/WebAsset';
import DevicesIcon from '@mui/icons-material/Devices';

import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import {notFound, useParams} from "next/navigation";
import Img2 from "../../assets/images/singleCapability/Web Devlopment/img1.avif";
import Img3 from "../../assets/images/singleCapability/Web Devlopment/imfg2.avif";
import Img4 from "../../assets/images/singleCapability/app Devlopment/img1.avif";
import Img5 from "../../assets/images/singleCapability/app Devlopment/img2.avif";
import Img6 from "../../assets/images/singleCapability/Ui-Ux/img1.avif";
import Img7 from "../../assets/images/singleCapability/Ui-Ux/img2.avif";
import Img8 from "../../assets/images/singleCapability/digital marketing/img1.avif";
import Img9 from "../../assets/images/singleCapability/digital marketing/img2.avif";
import Img10 from "../../assets/images/singleCapability/Ai/img1.avif";
import Img11 from "../../assets/images/singleCapability/Ai/img2.avif";
import Img12 from "../../assets/images/singleCapability/Ai 2/img1.avif";
import Img13 from "../../assets/images/singleCapability/Ai 2/img2.avif";
import Img14 from "../../assets/images/singleCapability/Forntend/img1.avif";
import Img15 from "../../assets/images/singleCapability/Forntend/img2.avif";
import Img16 from "../../assets/images/singleCapability/Backend/img1.avif";
import Img17 from "../../assets/images/singleCapability/Backend/img2.avif";
import HeadingPage from "@/components/global/headingPage";
import bg1 from "../../assets/images/blog/b-1.webp";

const mainDataArray = [
    {
        slug: 'hire-webdeveloper-india',
        category: "webDevelopment",
        heading: "Captivating Digital Experiences That Elevate Your Brand",
        description: "From brochure websites to full-fledged web applications, we deliver high-performance digital products tailored to your goals",
        features: [
            "Custom web development solutions",
            "Responsive and user-focused design",
            "End-to-end application development",
            "Performance, security, and scalability"
        ],
        imageSrc: Img2,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            {
                id: 1,
                icon: <CodeIcon sx={{ fontSize: 70 }} />,
                title: "Custom Web Solutions",
                description: "Tailored design & development for your brand."
            },
            {
                id: 2,
                icon: <SyncAltIcon sx={{ fontSize: 70 }} />,
                title: "Agile Workflow",
                description: "Iterative and collaborative approach."
            },
            {
                id: 3,
                icon: <SpeedIcon sx={{ fontSize: 70 }} />,
                title: "Optimized for Growth",
                description: "Secure, fast, and scalable applications."
            }
        ],
        support: {
            img: Img3,
            title: "Your Partner in Web Development",
            description: "We support your digital journey from idea to launch and beyond. Whether you're starting from scratch or scaling an existing platform, our team ensures every step from planning and design to development and post-launch support is handled with precision, strategy, and care to help your business thrive in a competitive digital landscape",
            services: [
                { id: 1, title: "Strategy & Planning", description: "DEFINE CLEAR GOALS, BUILD USER-CENTRIC FEATURES, AND SELECT THE RIGHT TECHNOLOGY STACK TO SET YOUR PROJECT UP FOR SUCCESS" },
                { id: 2, title: "UI/UX Design", description: "CRAFT MODERN, RESPONSIVE, AND INTUITIVE DESIGNS THAT DELIVER SEAMLESS EXPERIENCES ACROSS ALL DEVICES" },
                { id: 3, title: "Maintenance & Support", description: "ENSURE YOUR PLATFORM REMAINS FAST, SECURE, AND UPDATED THROUGH ONGOING TECHNICAL SUPPORT AND MONITORING" }
            ]
        },
        faq: [
            { id: "panel1", question: "What kinds of websites and web apps do you specialize in creating", answer: "We build everything from high-performing landing pages and dynamic corporate sites to complex dashboards and full-stack web applications using modern frameworks" },
            { id: "panel2", question: "Is on-page SEO optimization part of your web development services", answer: "Yes, we include on-page SEO best practices such as semantic HTML, fast load times, mobile responsiveness, and structured metadata to improve your visibility" },
            { id: "panel3", question: "Do you offer technical support after the website goes live", answer: "Absolutely, we provide ongoing maintenance, performance monitoring, bug fixes, and feature updates so your site stays secure and relevant" },
            { id: "panel4", question: "How do you ensure fast and optimized performance for every website", answer: "We use efficient code structures, server-side rendering, caching strategies, CDNs, and performance audits to make sure your site loads quickly" },
            { id: "panel5", question: "Will my website work seamlessly across all mobile and desktop devices", answer: "Yes, we follow responsive design principles so your website looks great and functions perfectly on smartphones, tablets, and desktops" },
            { id: "panel6", question: "Can you help with redesigning and modernizing my outdated website", answer: "Yes, we specialize in redesign projects where we retain your brand’s essence while updating design, performance, and features to current standards" }
        ]
    },
    {
        slug: 'hire-mobileappdeveloper-india',
        category: "graphicDesign",
        heading: "Make Your Brand Visually Stunning",
        description: "Great design is the first impression your brand makes",
        features: [
            "Logo and brand identity",
            "Print & digital design",
            "User-centric visuals",
            "Consistent branding guidelines"
        ],
        imageSrc: Img4,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <PhoneIphoneIcon sx={{ fontSize: 70 }} />, title: "Custom App Development", description: "Tailored solutions for iOS, Android & cross-platform" },
            { id: 2, icon: <DesignServicesIcon sx={{ fontSize: 70 }} />, title: "UI/UX Design", description: "User-friendly interfaces designed for engagement" },
            { id: 3, icon: <StorageIcon sx={{ fontSize: 70 }} />, title: "Backend Integration", description: "Secure, scalable, and robust APIs" }
        ],
        support: {
            img: Img5,
            title: "Support from Concept to Creation",
            description: "Our team partners with you from brainstorm to launch, guiding your ideas with clarity, creativity, and technical precision. We work closely to ensure every decision aligns with your brand, purpose, and long-term goals",
            services: [
                { id: 1, title: "Discovery", description: "WE DIVE DEEP INTO YOUR STORY, VALUES, AND OBJECTIVES TO LAY A STRONG FOUNDATION FOR CREATIVE EXPLORATION" },
                { id: 2, title: "Concepts", description: "YOU RECEIVE DISTINCT VISUAL DIRECTIONS ROOTED IN STRATEGY, ALLOWING YOU TO SELECT A CREATIVE PATH WITH CONFIDENCE" },
                { id: 3, title: "Delivery", description: "WE PACKAGE FINAL DESIGNS IN ALL REQUIRED FORMATS, OPTIMIZED FOR WEB, PRINT, AND MULTIPLE PLATFORMS" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which creative tools do you commonly use for visual design", answer: "We use Figma for UI/UX, Adobe Creative Suite for branding and graphics, and Canva Pro for rapid content and layout drafts" },
            { id: "panel2", question: "Do I get full ownership of all final design files once completed", answer: "Yes, you receive all final files including source files in industry-standard formats, and they are 100% yours to use or modify" },
            { id: "panel3", question: "Can I request multiple revisions if needed during the design process", answer: "We include up to 3 revisions by default and offer additional rounds through our flexible add-on packages for further refinement" },
            { id: "panel4", question: "Can you design assets that strictly follow my brand guidelines", answer: "Absolutely, we can align with your existing typography, colors, iconography, and tone of voice to maintain visual consistency" },
            { id: "panel5", question: "Do you offer animated graphics and motion design elements", answer: "Yes, we provide basic motion graphics, micro-interactions, and animations to enhance engagement and visual appeal" },
            { id: "panel6", question: "Is the design collaboration fully remote and streamlined", answer: "Yes, our entire workflow is built for remote collaboration with live previews, comments, and file sharing via cloud tools" }
        ]

    },
    {
        slug: 'hire-ui-uxdesigner-india',
        category: "uiuxDesign",
        heading: "Design Interfaces Users Love",
        description: "UI (User Interface) and UX (User Experience) design are fundamental components critical to the success of any digital product",
        features: [
            "User journey mapping",
            "Wireframing & prototyping",
            "High-fidelity UI design",
            "Usability testing & feedback"
        ],
        imageSrc: Img6,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <DrawIcon sx={{ fontSize: 70 }} />, title: "UI Design", description: "Pixel-perfect interfaces aligned with your brand" },
            { id: 2, icon: <TouchAppIcon sx={{ fontSize: 70 }} />, title: "UX Research", description: "Understand user needs through research and testing" },
            { id: 3, icon: <VisibilityIcon sx={{ fontSize: 70 }} />, title: "Prototyping", description: "Interactive mockups for real-time feedback" }
        ],
        support: {
            img: Img7,
            title: "Design Thinking at Every Step",
            description: "We help you create delightful user experiences from wireframe to walkthrough, balancing aesthetics, functionality, and feedback-driven iteration",
            services: [
                { id: 1, title: "Audit", description: "EVALUATE YOUR EXISTING INTERFACES TO IDENTIFY STRENGTHS, GAPS, AND OPPORTUNITIES FOR IMPROVEMENT IN USER EXPERIENCE" },
                { id: 2, title: "Execution", description: "DESIGN SOLUTIONS DRIVEN BY RESEARCH, STRATEGY, AND A DEEP UNDERSTANDING OF USER NEEDS AND BEHAVIORS" },
                { id: 3, title: "Optimize", description: "REFINE YOUR INTERFACE CONTINUOUSLY THROUGH FEEDBACK LOOPS, A/B TESTING, AND USER-CENTERED ENHANCEMENTS" }
            ]
        },
        faq: [
            { id: "panel1", question: "What are your main tools for designing UI and prototyping UX", answer: "We use Figma, Adobe XD, Sketch, and InVision to create interactive designs, clickable prototypes, and collaborative feedback loops" },
            { id: "panel2", question: "Do you provide working prototypes that show how the product will behave", answer: "Yes, we create interactive high-fidelity prototypes that simulate real user flows and interface behavior for stakeholder testing" },
            { id: "panel3", question: "Can you work with my existing brand guidelines during design", answer: "Yes, we always design with your brand's identity in mind, ensuring consistency in visuals, messaging, and interaction design" },
            { id: "panel4", question: "Can I be involved closely in the design and feedback process", answer: "We encourage regular collaboration and reviews so your insights are incorporated at each stage from concept to delivery" },
            { id: "panel5", question: "Do you conduct any user research or usability testing", answer: "Yes, we offer user testing sessions, usability feedback analysis, and data-driven improvements based on user behavior" },
            { id: "panel6", question: "Will you deliver mobile and desktop versions of the designs", answer: "Yes, we design all screens to be responsive across devices including mobile phones, tablets, and desktops" }
        ]

    },
    {
        slug: 'hire-digitalmarketing-india',
        category: "digitalMarketing",
        heading: "Amplify Your Online Presence",
        description: "At JBS Technology, we boost your online presence with tailored digital marketing strategies for optimal engagement and conversions",
        features: [
            "SEO & content strategy",
            "Social media management",
            "Targeted ad campaigns",
            "Email & automation workflows"
        ],
        imageSrc: Img8,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <CampaignIcon sx={{ fontSize: 70 }} />, title: "Ad Campaigns", description: "Google Ads, Meta Ads, and more" },
            { id: 2, icon: <QueryStatsIcon sx={{ fontSize: 70 }} />, title: "SEO & Analytics", description: "Improve search ranking and measure KPIs" },
            { id: 3, icon: <EmailIcon sx={{ fontSize: 70 }} />, title: "Email Marketing", description: "Engaging campaigns and automation" }
        ],

        support: {
            img: Img9,
            title: "Marketing That Scales with You",
            description: "We guide your brand with expert strategies, targeted execution, and data-driven optimization to maximize your impact across digital channels",
            services: [
                { id: 1, title: "Strategy", description: "DEEP-DIVE INTO MARKET RESEARCH, AUDIENCE SEGMENTATION, AND POSITIONING TO CRAFT A ROBUST MARKETING PLAN" },
                { id: 2, title: "Execution", description: "LAUNCH CONVERSION-FOCUSED CAMPAIGNS ACROSS SOCIAL, SEARCH, AND EMAIL WITH COMPELLING COPY AND CREATIVE" },
                { id: 3, title: "Optimization", description: "IMPROVE PERFORMANCE CONTINUOUSLY WITH WEEKLY REPORTS, SPLIT TESTING, AND AGILE CAMPAIGN ITERATIONS" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which online platforms and ad networks do you support for marketing", answer: "We run campaigns on Google Ads, Facebook, Instagram, LinkedIn, YouTube, and emerging channels based on your audience" },
            { id: "panel2", question: "Do you also create the content and visuals needed for campaigns", answer: "Yes, we handle end-to-end creative services including ad copywriting, visual design, video, and branded assets" },
            { id: "panel3", question: "How do you measure marketing effectiveness and ROI", answer: "We use tools like Google Analytics, Meta Pixel, and conversion tracking to monitor clicks, leads, sales, and engagement" },
            { id: "panel4", question: "Can we launch a small campaign first and scale later", answer: "Yes, we offer phased and budget-friendly plans that allow you to test performance and scale based on data" },
            { id: "panel5", question: "Is audience retargeting part of your marketing service", answer: "Absolutely, we implement tracking pixels and serve dynamic ads to re-engage users who previously interacted with your brand" },
            { id: "panel6", question: "Do I receive detailed reports and performance dashboards", answer: "Yes, we provide monthly reports with campaign metrics, insights, and optimization recommendations" }
        ]

    },
    {
        slug: 'hire-artificial-india',
        category: "artificialIntelligence",
        heading: "Integrate AI into Your Business DNA",
        description: "Amplify your business with JBS Technology by integrating AI into every layer of your operations for smarter, faster, and scalable growth, democratizing AI responsibly",
        features: [
            "Custom AI model development",
            "Machine learning integration",
            "Data-driven decision systems",
            "AI-powered automation"
        ],
        imageSrc: Img10,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <SmartToyIcon sx={{ fontSize: 70 }} />, title: "AI Model Development", description: "Train and deploy models tailored to your needs" },
            { id: 2, icon: <PsychologyIcon sx={{ fontSize: 70 }} />, title: "Natural Language Processing", description: "Chatbots, sentiment analysis, and text AI" },
            { id: 3, icon: <HubIcon sx={{ fontSize: 70 }} />, title: "AI Automation", description: "Streamline operations with smart systems" }
        ],
        support: {
            img: Img11,
            title: "From AI Vision to Value",
            description: "We help you identify, build, and scale intelligent solutions that create measurable business value while fitting seamlessly into your operations",
            services: [
                { id: 1, title: "AI Consultation", description: "EXPLORE THE BEST AI OPPORTUNITIES IN YOUR WORKFLOWS AND DEFINE VIABLE USE CASES FOR AUTOMATION AND INSIGHT" },
                { id: 2, title: "Model Training", description: "DEVELOP CUSTOM MACHINE LEARNING MODELS USING YOUR UNIQUE DATA TO DELIVER ACCURATE AND SCALABLE RESULTS" },
                { id: 3, title: "Deployment", description: "INTEGRATE AI INTO YOUR SYSTEMS SECURELY AND EFFICIENTLY WITH MINIMAL DISRUPTION TO EXISTING INFRASTRUCTURE" }
            ]
        },
        faq: [
            { id: "panel1", question: "What types of AI frameworks and tools do you work with", answer: "We use TensorFlow, PyTorch, OpenAI APIs, Hugging Face, and other ML libraries based on project goals" },
            { id: "panel2", question: "Do I need large datasets to start building an AI solution", answer: "Not necessarily, we can start with small datasets and use techniques like transfer learning or synthetic generation to scale" },
            { id: "panel3", question: "Is the AI solution built with data privacy and security in mind", answer: "Yes, we apply strong security protocols, encryption, anonymization, and adhere to data compliance regulations" },
            { id: "panel4", question: "Can AI features be added to my current app or software", answer: "Yes, we design modular AI components that integrate seamlessly with your existing infrastructure via APIs or SDKs" },
            { id: "panel5", question: "Do you help with AI planning and strategy before development", answer: "Yes, we offer AI consulting services including opportunity assessment, feasibility, and roadmap creation" },
            { id: "panel6", question: "How fast can an AI model or solution be built and deployed", answer: "Depending on scope, we can build proof-of-concept models in 2–4 weeks and scale them based on results" }
        ]

    },
    {
        slug: 'hire-agenticai-india',
        category: "agenticAI",
        heading: "Empower Autonomy with Agentic AI Systems",
        description: "Empower your organization with a powerfully designed infrastructure stack and support technologies",
        features: [
            "Autonomous agent orchestration",
            "Goal-based task delegation",
            "Real-time feedback loops",
            "API-driven infrastructure"
        ],
        imageSrc: Img12,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <AutoAwesomeIcon sx={{ fontSize: 70 }} />, title: "Autonomous Agents", description: "Deploy AI agents that act on behalf of your users or systems" },
            { id: 2, icon: <RouteIcon sx={{ fontSize: 70 }} />, title: "Multi-Step Reasoning", description: "Enable complex decision flows and self-optimizing processes" },
            { id: 3, icon: <PrecisionManufacturingIcon sx={{ fontSize: 70 }} />, title: "System Integration", description: "Connect agents to your existing stack via robust APIs" }
        ],
        support: {
            img: Img13,
            title: "Infrastructure for Autonomy",
            description: "From design to deployment, we support the full lifecycle of intelligent agents, empowering your systems with autonomous decision-making and action",
            services: [
                { id: 1, title: "System Design", description: "DEFINE THE ARCHITECTURE, SCENARIOS, AND INTERACTION MODELS REQUIRED FOR AUTONOMOUS AGENTS TO OPERATE EFFECTIVELY" },
                { id: 2, title: "Agent Development", description: "BUILD INTELLIGENT AGENTS THAT ADAPT, LEARN, AND INTERACT WITH COMPLEX SYSTEMS AND DYNAMIC ENVIRONMENTS" },
                { id: 3, title: "Orchestration", description: "COORDINATE MULTIPLE AGENTS TO WORK COLLABORATIVELY, SHARE DATA, AND EXECUTE MULTI-STEP WORKFLOWS" }
            ]
        },
        faq: [
            { id: "panel1", question: "What exactly is an autonomous agent in artificial intelligence", answer: "An AI agent is a self-operating system that takes actions based on goals, environment, and learned behavior without constant human input" },
            { id: "panel2", question: "Do you build using LangChain, AutoGPT, or similar frameworks", answer: "Yes, we work with cutting-edge frameworks like LangChain, AutoGPT, OpenAgents, and ReAct for agent-based architectures" },
            { id: "panel3", question: "Can your agents integrate with my business systems and tools", answer: "Yes, we build agents that connect with APIs, databases, CRMs, ERPs, and other tools to automate workflows" },
            { id: "panel4", question: "How do you ensure that agents operate safely and securely", answer: "We enforce strict sandboxing, role-based permissions, audit logs, and real-time monitoring to manage agent behavior" },
            { id: "panel5", question: "How are AI agents different from traditional chatbots", answer: "Unlike chatbots that just respond to queries, agents actively take steps, learn from outcomes, and complete tasks on your behalf" },
            { id: "panel6", question: "Do you provide a custom tech stack for each agent system", answer: "Yes, we architect agent systems tailored to your existing stack, whether cloud-native, hybrid, or on-premise" }
        ]

    },
    {
        slug: 'hire-frontend-developer-india',
        category: "frontendDevelopment",
        heading: "Build Pixel-Perfect Frontends",
        description: "At JBS Technology, we create pixel-perfect, responsive, and high-performance UI built with modern tech like React and Tailwind CSS",
        features: [
            "React, Next.js, and Tailwind CSS",
            "Mobile-responsive design",
            "Cross-browser compatibility",
            "Lightning-fast performance"
        ],
        imageSrc: Img14,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <CodeIcon sx={{ fontSize: 70 }} />, title: "Component Architecture", description: "Reusable, scalable React components" },
            { id: 2, icon: <WebAssetIcon sx={{ fontSize: 70 }} />, title: "UI Engineering", description: "Clean HTML/CSS with Tailwind or styled components" },
            { id: 3, icon: <DevicesIcon sx={{ fontSize: 70 }} />, title: "Responsive Design", description: "Optimized for all screen sizes and devices" }
        ],
        support: {
            img: Img15,
            title: "Frontend from Sketch to Screen",
            description: "We turn your UI vision into interactive web interfaces that delight users through smooth, responsive, and accessible experiences",
            services: [
                { id: 1, title: "Prototyping", description: "CREATE DETAILED WIREFRAMES AND HIGH-FIDELITY MOCKUPS USING TOOLS LIKE FIGMA OR ADOBE XD FOR DESIGN CLARITY" },
                { id: 2, title: "Implementation", description: "TRANSLATE DESIGNS INTO LIVE, PIXEL-PERFECT PAGES USING MODERN FRAMEWORKS LIKE REACT AND TAILWIND CSS" },
                { id: 3, title: "Handoff & QA", description: "DELIVER CLEAN CODE WITH DOCUMENTATION, AND PERFORM EXTENSIVE QA TO ENSURE FLAWLESS FRONTEND PERFORMANCE" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which frontend technologies and frameworks do you use most", answer: "We work with React, Next.js, Tailwind CSS, and Material UI to create performant and maintainable user interfaces" },
            { id: "panel2", question: "Will the final frontend design work smoothly on all devices", answer: "Yes, we ensure full responsiveness and browser compatibility with a mobile-first approach and adaptive layouts" },
            { id: "panel3", question: "Can you convert my Figma or design files directly into code", answer: "Absolutely, we specialize in translating Figma or XD designs into clean, production-grade frontend code" },
            { id: "panel4", question: "Do you write scalable and well-organized frontend code", answer: "Yes, our code is modular, well-documented, and follows best practices to support long-term maintainability" },
            { id: "panel5", question: "Do you use libraries for animations and visual effects", answer: "Yes, we use animation libraries like Framer Motion and GSAP to add interactivity and enhance user experience" },
            { id: "panel6", question: "Can you implement or follow an existing design system", answer: "Yes, we can build new design systems from scratch or align with your current system to ensure consistency" }
        ]

    },
    {
        slug: 'hire-backend-developer-india',
        category: "backendDevelopment",
        heading: "Build Scalable Backend Systems",
        description: "Secure, scalable, and high-performance server-side solutions using Node.js, Express, and modern databases.",
        features: [
            "REST & GraphQL APIs",
            "Node.js with Express",
            "MongoDB, PostgreSQL, Redis",
            "Authentication & Authorization"
        ],
        imageSrc: Img16,
        buttonText: "Let's Develop Together",
        contactNumber: " +91 79844 43901",
        services: [
            { id: 1, icon: <StorageIcon sx={{ fontSize: 70 }} />, title: "Database Design", description: "Efficient schemas with MongoDB, PostgreSQL, Redis." },
            { id: 2, icon: <CloudQueueIcon sx={{ fontSize: 70 }} />, title: "API Development", description: "RESTful & GraphQL services using Node.js." },
            { id: 3, icon: <SecurityIcon sx={{ fontSize: 70 }} />, title: "Security & Auth", description: "JWT, OAuth, role-based access control." }
        ],
        support: {
            img: Img17,
            title: "End-to-End Backend Development",
            description: "From architecture to deployment, we craft scalable, secure, and efficient backend systems that power your digital products",
            services: [
                { id: 1, title: "Architecture Planning", description: "DEFINE A BACKEND STRATEGY THAT BALANCES PERFORMANCE, SECURITY, AND SCALABILITY FROM THE GROUND UP" },
                { id: 2, title: "Development", description: "WRITE ROBUST, CLEAN, AND MAINTAINABLE SERVER-SIDE CODE USING BEST PRACTICES AND MODERN FRAMEWORKS" },
                { id: 3, title: "DevOps & Deployment", description: "AUTOMATE YOUR PIPELINES, CONFIGURE CLOUD SERVICES, AND DEPLOY WITH CONFIDENCE USING TOOLS LIKE DOCKER AND CI/CD" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which backend languages and frameworks do you primarily use", answer: "We specialize in Node.js with Express but also support Python (FastAPI, Django) and Go for specific use cases" },
            { id: "panel2", question: "Can you deploy backend systems to the cloud reliably", answer: "Yes, we deploy on AWS, GCP, Azure using CI/CD pipelines, containerization (Docker), and infrastructure-as-code" },
            { id: "panel3", question: "Will the backend you build scale as traffic or usage grows", answer: "Yes, we use modular architecture, caching, message queues, and horizontal scaling to handle high load" },
            { id: "panel4", question: "Can you create and document custom APIs for my app", answer: "Yes, we build RESTful and GraphQL APIs tailored to your data model with full documentation using tools like Swagger" },
            { id: "panel5", question: "How do you ensure the backend code and systems are secure", answer: "We apply input validation, authentication protocols, encryption, and regular security audits" },
            { id: "panel6", question: "Do you set up logging and performance monitoring for backend", answer: "Yes, we integrate tools like LogRocket, Sentry, and Prometheus for logging, error tracking, and performance metrics" }
        ]

    }
];
const heroSection = [
    { slug: 'hire-webdeveloper-india', title:"Web Development" },
    { slug: 'hire-mobileappdeveloper-india', title:"Mobile App Development" },
    { slug: 'hire-ui-uxdesigner-india', title:"UI/UX Designing" },
    { slug: 'hire-digitalmarketing-india', title:"Digital Marketing" },
    { slug: 'hire-artificial-india', title:"Artificial Intelligence" },
    { slug: 'hire-agenticai-india', title:"Agentic AI" },
    { slug: 'hire-frontend-developer-india', title:"Frontend" },
    { slug: 'hire-backend-developer-india', title:"Backend" },

];



function Page({params}) {

    const breadCrumbs = [
        {label: "Home", route: '/'},
        {label: 'Capabilities'},
    ];


    const {id} = useParams();
    const projects = mainDataArray.find((i) => i.slug === id)

    const post = heroSection.find((p) => p.slug === params.id);

    if (!projects) {
        notFound(); // Show 404 page
    }
    return (

        <>
            <HeadingPage bgImg={bg1.src} heading={post.title} breadcrumbs={breadCrumbs} />
         <DevlopTogether heading={projects.heading} description={projects.description} imageSrc={projects.imageSrc} features={projects.features} buttonText={projects.buttonText} contactNumber={projects.contactNumber} />
            <Servicess services={projects.services} />
            <OurApproach dynamicContent={projects.support} />
             <Collaborate/>
             <Faqs faqData={projects.faq}/>
        </>
    );
}

export default Page;