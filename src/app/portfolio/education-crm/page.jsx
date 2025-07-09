import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/tech-figma.svg";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/tech-node-js.svg";
import img4 from "@/assets/images/portfolio/techuse/tech.mongodb.svg";
import img5 from "@/assets/images/portfolio/techuse/tech-express-js.svg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 181915.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 181949.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182034.png";


function Page() {
    const breadCrumbs = [
        {label: 'Home', route: '/'},
        {label: 'Portfolio', route: '/portfolio'},
    ]

    const detaile = [
        {
            title: "Industry",
            description: "Education CRM",
        },
        {
            title: "Project Duration",
            description: "6 months",
        },
        {
            title: "Location",
            description: "India",
        },
        {
            title: "Review",
            description: "5.0",
            icon: <StarIcon fontSize={"small"}/>,
        },

    ];

    const data = [
        {
            name: "Problem",
            title: "Disorganized and Inefficient Institutional Management",
            description: "Educational institutions often struggle with managing large volumes of data, inefficient manual processes, poor communication between departments, and difficulty tracking student performance and administrative tasks. These inefficiencies lead to lost time, errors, and decreased productivity.",
        },
        {
            name: "Solution",
            title: "A Centralized, Smart CRM – IMS by JBS Technology",
            description: "JBS Technology developed the Institute Management System (IMS) a comprehensive CRM platform specifically designed for educational institutions. IMS automates administrative workflows, centralizes student and staff data, and streamlines communication through integrated tools for admissions, attendance, fee management, academics, and reporting.",
        },
        {
            name: "Results",
            title: "Streamlined Operations and Enhanced Educational Focus",
            description: "Institutes using IMS have significantly reduced administrative workload, improved accuracy and transparency in operations, and enhanced communication across departments. This has led to faster decision-making, better student engagement, and more time and resources to focus on delivering high-quality education.",
        },

    ];

    const app = [
        {
            name: "Figma",
            image: img1,
        },
        {
            name: "React",
            image: img2,
        },
        {
            name: "Node.js",
            image: img3,
        },
        {
            name: "MongoDB",
            image: img4,
        },
        {
            name: "Express.js",
            image: img5,
        },
    ];

    const slides = [
        {
            name: 'The Challenges',
            number: '01',
            title1: 'Fragmented Institutional Workflows',
            title2: 'Need for Real-Time Data and Insights',
            title3: 'User Accessibility Across Devices',
            title4: 'Scalability and Security',
            description1:
                'Most educational institutions operated with disconnected systems for admissions, attendance, fee collection, and academic records causing data silos and inefficiencies.',
            description2:
                'The client required real-time synchronization of student and staff data across multiple departments and branches without affecting system performance or user experience.',
            description3:
                'The solution had to work seamlessly across web and mobile platforms. While a hybrid framework was considered, the final decision leaned toward React Native for better performance and native-like behavior.',
            description4:
                'With thousands of users accessing the platform simultaneously, the architecture had to prioritize both scalability and data security especially for sensitive student and financial information.',
            icon: <ArrowCircleRightIcon fontSize={'large'}/>,
            image: phoneimg1,
        },
        {
            name: 'The Process',
            number: '02',
            title1: 'Discovery & Requirement Analysis',
            title2: 'System Architecture & Planning',
            title3: 'Design & Development',
            title4: 'Integration & Testing',
            title5: 'Deployment & Training',
            description1:
                'We began by engaging with educational stakeholders to understand their daily operational pain points, user roles, and process gaps.',
            description2:
                'A scalable and secure architecture was designed to handle real-time data processing, role-based access, and cross-platform accessibility.',
            description3:
                'We developed a clean, intuitive UI with a mobile-first approach using modern frameworks. The MVP was built with rapid deployment in mind, followed by iterative updates based on real-time feedback.',
            description4:
                'The platform was integrated with existing systems (e.g., payment gateways, SMS/email APIs), and underwent rigorous QA testing to ensure stability, data accuracy, and user experience.',
            description5: 'IMS was deployed in phases across departments. Onboarding sessions and user training ensured seamless adoption with minimal disruption to existing workflows.',
            icon: <LightbulbCircleIcon fontSize={'large'}/>,
            image: phoneimg2,
        },
        {
            name: 'Key Features',
            number: '03',
            title1: 'Centralized Dashboard',
            title2: 'Automated Fee Management',
            title3: 'Digital Attendance Tracking',
            title4: 'Admission & Enquiry Management',
            title5: 'Parent-Student Portal',
            title6: 'Communication Tools',
            title7: 'Secure Cloud-Based Storage',
            description1:
                'A role-based dashboard offering real-time visibility into admissions, fees, attendance, academic records, and communication logs.',
            description2:
                'Tracks payments, sends reminders, and generates receipts reducing manual effort and ensuring timely collections.',
            description3:
                'Instant attendance marking with biometric or manual options, integrated with analytics and alerts.',
            description4:
                'Simplifies lead capture, follow-up, and student enrollment through a streamlined CRM flow.',
            description5:
                'A dedicated mobile/web interface for students and parents to access reports, schedules, announcements, and payments.',
            description6:
                'Built-in email/SMS/notification system for real-time communication with parents, staff, and students.',
            description7:
                'All data is stored securely with encryption and real-time backups, ensuring compliance and reliability.',
            icon: <ArrowCircleRightIcon fontSize={'large'}/>,
            image: phoneimg3,
        },
    ];


    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Education CRM'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={'For over 15 years, Ravi Sharma has been a visionary leader in the education technology space, transforming how institutions engage with digital learning.'}
                description={
                    <>
                        He is the founder of EduCore Solutions, a company that has partnered with over 300 schools and
                        colleges across India to implement scalable learning management systems.<br/><br/>

                        Ravi previously served as a consultant for UNESCO's digital education initiatives and was
                        recognized as one of the “Top 50 EdTech Innovators in Asia” in 2022.
                    </>
                }
                slides={slides}
                name={'Ravi Sharma'}
                status={'Founder & CEO'}
                projectdes={'JBS Technology delivered far more than just a product they became a strategic partner in our digital transformation journey. Their deep understanding of the education sector and commitment to quality helped us streamline operations across over 300 institutions. The team\'s collaborative approach, consistent support, and innovative mindset made all the difference in scaling our impact.'}
            />
        </>
    );
}

export default Page;