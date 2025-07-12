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
import {useParams} from "next/navigation";
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
        buttonText: "Let's Build Your Website",
        contactNumber: "(234) 109-6666",
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
            img:Img3,
            title: "Your Partner in Web Development",
            description: "We support your digital journey from idea to launch and beyond",
            services: [
                { id: 1, title: "Strategy & Planning", description: "Define user goals, features, and tech stack" },
                { id: 2, title: "UI/UX Design", description: "Modern and intuitive designs for all devices" },
                { id: 3, title: "Maintenance & Support", description: "Ongoing support to keep things running smoothly" }
            ]
        },
        faq: [
            { id: "panel1", question: "What types of websites do you build?", answer: "We build everything from landing pages to complex web apps" },
            { id: "panel2", question: "Is SEO included?", answer: "Yes, we follow on-page SEO best practices" },
            { id: "panel3", question: "Do you offer post-launch support?", answer: "Absolutely. We provide ongoing support and maintenance" },
            { id: "panel4", question: "How do you ensure performance?", answer: "Through optimized code, CDN integration, and performance audits" },
            { id: "panel5", question: "Will my website be mobile-friendly?", answer: "Yes, all our websites are fully responsive" },
            { id: "panel6", question: "Can you redesign an existing site?", answer: "Yes, we specialize in revamping outdated websites" }
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
        buttonText: "Design with Us",
        contactNumber: "(234) 109-1234",
        services: [
            { id: 1, icon: <PhoneIphoneIcon sx={{ fontSize: 70 }} />, title: "Custom App Development", description: "Tailored solutions for iOS, Android & cross-platform" },
            { id: 2, icon: <DesignServicesIcon sx={{ fontSize: 70 }} />, title: "UI/UX Design", description: "User-friendly interfaces designed for engagement" },
            { id: 3, icon: <StorageIcon sx={{ fontSize: 70 }} />, title: "Backend Integration", description: "Secure, scalable, and robust APIs" }
        ],
        support: {
            img:Img5,
            title: "Support from Concept to Creation",
            description: "Our team partners with you from brainstorm to launch",
            services: [
                { id: 1, title: "Discovery", description: "We learn your story and values" },
                { id: 2, title: "Concepts", description: "You choose from our creative directions" },
                { id: 3, title: "Delivery", description: "Final formats in every needed size" }
            ]
        },
        faq: [
            { id: "panel1", question: "What tools do you use?", answer: "Figma, Adobe Suite, Canva Pro" },
            { id: "panel2", question: "Do I own the files?", answer: "Yes, all final files are yours" },
            { id: "panel3", question: "Can I request revisions?", answer: "Up to 3 included, more with add-ons" },
            { id: "panel4", question: "Can you follow brand guides?", answer: "Absolutely. We love consistency" },
            { id: "panel5", question: "Do you do animations?", answer: "Basic motion graphics are available" },
            { id: "panel6", question: "Is this remote work?", answer: "Yes, all collaboration is online" }
        ]
    },
    {
        slug: 'hire-ui-uxdevloper-india',
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
        buttonText: "Design with Us",
        contactNumber: "(234) 567-8901",
        services: [
            { id: 1, icon: <DrawIcon sx={{ fontSize: 70 }} />, title: "UI Design", description: "Pixel-perfect interfaces aligned with your brand" },
            { id: 2, icon: <TouchAppIcon sx={{ fontSize: 70 }} />, title: "UX Research", description: "Understand user needs through research and testing" },
            { id: 3, icon: <VisibilityIcon sx={{ fontSize: 70 }} />, title: "Prototyping", description: "Interactive mockups for real-time feedback" }
        ],
        support: {
            img:Img7,
            title: "Design Thinking at Every Step",
            description: "We help you create delightful user experiences from wireframe to walkthrough",
            services: [
                { id: 1, title: "Audit", description: "Evaluate your existing UI/UX" },
                { id: 2, title: "Execution", description: "Design based on strategy and empathy" },
                { id: 3, title: "Optimize", description: "Refine with user feedback and testing" }
            ]
        },
        faq: [
            { id: "panel1", question: "What tools do you use?", answer: "Figma, Adobe XD, Sketch, InVision" },
            { id: "panel2", question: "Do you deliver prototypes?", answer: "Yes, interactive prototypes are included" },
            { id: "panel3", question: "Can you follow existing brand guides?", answer: "Absolutely. We design with your identity in mind" },
            { id: "panel4", question: "How involved can I be?", answer: "We encourage collaboration throughout the process" },
            { id: "panel5", question: "Do you offer UX testing?", answer: "Yes, with real users and usability feedback." },
            { id: "panel6", question: "Mobile and desktop design?", answer: "Yes, all screens are optimized across devices" }
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
        buttonText: "Boost Your Reach",
        contactNumber: "(234) 555-7890",
        services: [
            { id: 1, icon: <CampaignIcon sx={{ fontSize: 70 }} />, title: "Ad Campaigns", description: "Google Ads, Meta Ads, and more" },
            { id: 2, icon: <QueryStatsIcon sx={{ fontSize: 70 }} />, title: "SEO & Analytics", description: "Improve search ranking and measure KPIs" },
            { id: 3, icon: <EmailIcon sx={{ fontSize: 70 }} />, title: "Email Marketing", description: "Engaging campaigns and automation" }
        ],
        support: {
            img:Img9,
            title: "Marketing That Scales with You",
            description: "We guide your brand with expert strategies, execution, and optimization",
            services: [
                { id: 1, title: "Strategy", description: "Understand your audience and market fit" },
                { id: 2, title: "Execution", description: "Campaigns that speak and convert" },
                { id: 3, title: "Optimization", description: "Weekly reporting, A/B testing, and scaling" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which platforms do you market on?", answer: "Google, Facebook, Instagram, LinkedIn, and more" },
            { id: "panel2", question: "Do you provide content too?", answer: "Yes, we handle creatives, copy, and visuals" },
            { id: "panel3", question: "How do you track ROI?", answer: "We track conversions, CTRs, and engagement through analytics tools" },
            { id: "panel4", question: "Can we start small?", answer: "Yes, we offer scalable solutions for all budgets" },
            { id: "panel5", question: "Is retargeting included?", answer: "Absolutely, we implement pixels and dynamic ads" },
            { id: "panel6", question: "Do I get reports?", answer: "Yes, we send monthly performance reports and dashboards" }
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
        buttonText: "Explore AI Solutions",
        contactNumber: "(234) 555-7890",
        services: [
            { id: 1, icon: <SmartToyIcon sx={{ fontSize: 70 }} />, title: "AI Model Development", description: "Train and deploy models tailored to your needs" },
            { id: 2, icon: <PsychologyIcon sx={{ fontSize: 70 }} />, title: "Natural Language Processing", description: "Chatbots, sentiment analysis, and text AI" },
            { id: 3, icon: <HubIcon sx={{ fontSize: 70 }} />, title: "AI Automation", description: "Streamline operations with smart systems" }
        ],
        support: {
            img:Img11,
            title: "From AI Vision to Value",
            description: "We help you identify, build, and scale intelligent solutions that make impact",
            services: [
                { id: 1, title: "AI Consultation", description: "Discover where AI fits into your workflow" },
                { id: 2, title: "Model Training", description: "We build and refine with your data" },
                { id: 3, title: "Deployment", description: "Integrate AI seamlessly into your systems" }
            ]
        },
        faq: [
            { id: "panel1", question: "What AI technologies do you use?", answer: "We work with TensorFlow, PyTorch, OpenAI, Hugging Face, and more" },
            { id: "panel2", question: "Do I need lots of data?", answer: "We help you start small and scale as needed" },
            { id: "panel3", question: "Is it secure?", answer: "Yes, we implement strict data privacy and compliance practices" },
            { id: "panel4", question: "Can AI be integrated into my existing app?", answer: "Absolutely AI modules are designed to be modular" },
            { id: "panel5", question: "Do you offer AI consulting?", answer: "Yes, from strategy to implementation" },
            { id: "panel6", question: "How long does it take to deploy?", answer: "Depends on complexity POCs can be ready in 2–4 weeks" }
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
        buttonText: "Build with Agents",
        contactNumber: "(234) 555-7890",
        services: [
            { id: 1, icon: <AutoAwesomeIcon sx={{ fontSize: 70 }} />, title: "Autonomous Agents", description: "Deploy AI agents that act on behalf of your users or systems" },
            { id: 2, icon: <RouteIcon sx={{ fontSize: 70 }} />, title: "Multi-Step Reasoning", description: "Enable complex decision flows and self-optimizing processes" },
            { id: 3, icon: <PrecisionManufacturingIcon sx={{ fontSize: 70 }} />, title: "System Integration", description: "Connect agents to your existing stack via robust APIs" }
        ],
        support: {
            img:Img13,
            title: "Infrastructure for Autonomy",
            description: "From design to deployment, we support the full lifecycle of intelligent agents",
            services: [
                { id: 1, title: "System Design", description: "Define agent roles, scopes, and environments" },
                { id: 2, title: "Agent Development", description: "Build and train agents for adaptive tasks" },
                { id: 3, title: "Orchestration", description: "Deploy multi-agent systems across environments" }
            ]
        },
        faq: [
            { id: "panel1", question: "What is an agent in AI?", answer: "Agents are autonomous programs that make decisions and take actions to meet goals" },
            { id: "panel2", question: "Do you support LangChain/AutoGPT?", answer: "Yes, we support modern frameworks including LangChain, AutoGPT, and OpenAgents" },
            { id: "panel3", question: "Can agents connect to my tools?", answer: "Yes, agents can integrate with CRMs, APIs, and databases" },
            { id: "panel4", question: "Is security a concern?", answer: "We apply strict sandboxing, monitoring, and permission management" },
            { id: "panel5", question: "How is this different from AI chatbots?", answer: "Agents take actions autonomously, not just answer queries" },
            { id: "panel6", question: "Do you offer custom stacks?", answer: "Yes, we build custom environments to match your architecture" }
        ]
    },
    {
        slug: 'hire-frontend-india',
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
        buttonText: "Craft Your UI",
        contactNumber: "(234) 555-7890",
        services: [
            { id: 1, icon: <CodeIcon sx={{ fontSize: 70 }} />, title: "Component Architecture", description: "Reusable, scalable React components" },
            { id: 2, icon: <WebAssetIcon sx={{ fontSize: 70 }} />, title: "UI Engineering", description: "Clean HTML/CSS with Tailwind or styled components" },
            { id: 3, icon: <DevicesIcon sx={{ fontSize: 70 }} />, title: "Responsive Design", description: "Optimized for all screen sizes and devices" }
        ],
        support: {
            img:Img15,
            title: "Frontend from Sketch to Screen",
            description: "We turn your UI vision into interactive web interfaces that delight users",
            services: [
                { id: 1, title: "Prototyping", description: "Wireframes and mockups in Figma or Adobe XD" },
                { id: 2, title: "Implementation", description: "Pixel-perfect conversion using React & Tailwind" },
                { id: 3, title: "Handoff & QA", description: "Code delivered with documentation and testing" }
            ]
        },
        faq: [
            { id: "panel1", question: "Which frameworks do you use?", answer: "React, Next.js, Tailwind CSS, Material UI" },
            { id: "panel2", question: "Is the design responsive?", answer: "Yes, mobile-first and cross-browser compatible" },
            { id: "panel3", question: "Can you convert Figma to React?", answer: "Absolutely. We specialize in Figma-to-code workflows" },
            { id: "panel4", question: "Will I get clean code?", answer: "Yes, fully documented, modular, and maintainable" },
            { id: "panel5", question: "Do you use animation libraries?", answer: "Yes, including Framer Motion and GSAP" },
            { id: "panel6", question: "Do you work with design systems?", answer: "Yes, we can build or follow existing systems" }
        ]
    },
    {
        slug: 'hire-backend-india',
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
        buttonText: "Build with Backend",
        contactNumber: "(234) 555-7890",
        services: [
            { id: 1, icon: <StorageIcon sx={{ fontSize: 70 }} />, title: "Database Design", description: "Efficient schemas with MongoDB, PostgreSQL, Redis." },
            { id: 2, icon: <CloudQueueIcon sx={{ fontSize: 70 }} />, title: "API Development", description: "RESTful & GraphQL services using Node.js." },
            { id: 3, icon: <SecurityIcon sx={{ fontSize: 70 }} />, title: "Security & Auth", description: "JWT, OAuth, role-based access control." }
        ],
        support: {
            img:Img17,
            title: "End-to-End Backend Development",
            description: "From architecture to deployment, we craft solid backend foundations.",
            services: [
                { id: 1, title: "Architecture Planning", description: "Define scalable backend infrastructure." },
                { id: 2, title: "Development", description: "Write clean, modular server-side code." },
                { id: 3, title: "DevOps & Deployment", description: "CI/CD, Docker, and cloud hosting." }
            ]
        },
        faq: [
            { id: "panel1", question: "Which languages are used?", answer: "Primarily Node.js with Express, but we support others like Python and Go." },
            { id: "panel2", question: "Do you support cloud deployment?", answer: "Yes, on AWS, GCP, and Azure with CI/CD." },
            { id: "panel3", question: "Can you scale apps?", answer: "Absolutely. We build modular, distributed systems." },
            { id: "panel4", question: "Do you build custom APIs?", answer: "Yes, both REST and GraphQL APIs tailored to your needs." },
            { id: "panel5", question: "Is the code secure?", answer: "Yes, with input validation, encryption, and secure auth mechanisms." },
            { id: "panel6", question: "Can I get analytics or logs?", answer: "Yes, we set up logging and monitoring tools." }
        ]
    }
];
const heroSection = [
    { slug: 'hire-webdeveloper-india', title:"Web Development" },
    { slug: 'hire-mobileappdeveloper-india', title:"Mobile App Development" },
    { slug: 'hire-ui-uxdevloper-india', title:"UI/UX Designing" },
    { slug: 'hire-digitalmarketing-india', title:"Digital Marketing" },
    { slug: 'hire-artificial-india', title:"Artificial Intelligence" },
    { slug: 'hire-agenticai-india', title:"Agentic AI" },
    { slug: 'hire-frontend-india', title:"Frontend" },
    { slug: 'hire-backend-india', title:"Backend" },

];



function Page({params}) {

    const breadCrumbs = [
        {label: "Home", route: '/'},
        {label: 'Capabilities'},
    ];

    const {id} = useParams();
    const projects = mainDataArray.find((i) => i.slug === id)

    const post = heroSection.find((p) => p.slug === params.id);

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