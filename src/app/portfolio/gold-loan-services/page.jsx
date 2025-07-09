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
import img7 from "@/assets/images/portfolio/techuse/download.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182524.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182556.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182741.png";


function Page() {
    const breadCrumbs = [
        {label: 'Home', route: '/'},
        {label: 'Portfolio', route: '/portfolio'},
    ]

    const detaile = [
        {
            title: "Industry",
            description: "Gold Loan Services",
        },
        {
            title: "Project Duration",
            description: "2 months",
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
            title: "Manual Processes and Lack of Transparency",
            description:
                "Traditional gold loan services relied heavily on paperwork and in-person visits, leading to slow processing times, limited scalability, and lack of real-time visibility for customers and administrators.",
        },
        {
            name: "Solution",
            title: "Digitized Gold Loan Platform with Real-Time Access",
            description:
                "JBS Technology developed a secure, fully digitized platform enabling customers to apply, track, and manage their loans online. The system integrated KYC, valuation, and verification workflows for seamless end-to-end processing.",
        },
        {
            name: "Results",
            title: "Faster Processing, Increased Customer Trust",
            description:
                "Loan application times were reduced by 60%, and customer satisfaction improved significantly thanks to real-time updates, a transparent dashboard, and secure access across devices.",
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
        {
            name:'Material UI',
            image: img7
        }
    ];

    const slides = [
        {
            name: 'The Challenges',
            number: '01',
            title1: 'Manual Loan Application Processes',
            title2: 'No Real-Time Customer Updates',
            title3: 'Limited Access Across Branches',
            title4: 'Security & Regulatory Compliance Risks',
            description1:
                'Applications were handled manually, resulting in delays, human errors, and customer dissatisfaction.',
            description2:
                'Customers lacked visibility into their application status, leading to frequent queries and low trust.',
            description3:
                'Branch operations were disconnected, making it hard to manage and track loans across locations.',
            description4:
                'Manual systems struggled to meet evolving compliance, audit, and data protection requirements.',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg1,
        },
        {
            name: 'The Process',
            number: '02',
            title1: 'Workflow Digitization & KYC Automation',
            title2: 'Cross-Device Platform Development',
            title3: 'Real-Time Customer Notifications',
            title4: 'Compliance-Ready Infrastructure',
            description1:
                'We mapped and automated each loan-related step integrating e-KYC, credit scoring, and valuation modules.',
            description2:
                'Developed a responsive platform for web and mobile to serve both customers and staff across branches.',
            description3:
                'Integrated SMS/email push updates and in-app notifications for real-time loan tracking.',
            description4:
                'Designed with audit logs, encryption, and compliance features to meet RBI and financial industry regulations.',
            icon: <LightbulbCircleIcon fontSize={'large'} />,
            image: phoneimg2,
        },
        {
            name: 'Key Features',
            number: '03',
            title1: 'Digital Loan Application Portal',
            title2: 'e-KYC and Document Upload',
            title3: 'Customer Dashboard & EMI Tracker',
            title4: 'Branch Admin Panel & Audit Trail',
            description1:
                'User-friendly application system with digital onboarding, gold valuation capture, and OTP verification.',
            description2:
                'Integrated e-KYC and digital document submission with secure storage.',
            description3:
                'Customers can view loan balance, EMI schedules, and make payments or requests in real-time.',
            description4:
                'Back-office panel allows admins to view reports, manage records, and track compliance activities.',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg3,
        },
    ];




    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Gold Loan Services'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'At Easy Gold Fincorp, we are dedicated to providing innovative financial solutions tailored to meet your needs.'
                }
                description={
                    <>
                        With a commitment to excellence and customer satisfaction, we deliver reliable services that empower individuals and businesses alike.<br /><br />
                        Our experienced team is here to assist you every step of the way, ensuring transparency, security, and efficiency in all our endeavors. Trust Easy Gold Fincorp for your financial needs and embark on a journey towards prosperity today.
                    </>
                }
                slides={slides}
                name={'Rohit Sharma'}
                status={'Managing Director'}
                projectdes={'JBS Technology’s deep industry knowledge and ability to translate our goals into a cutting-edge digital experience was invaluable. From seamless loan processing tools to secure customer portals, their end-to-end solution streamlined our operations and improved customer trust. Their commitment to quality and responsiveness made them an ideal partner for our digital transformation.'}
            />
        </>
    );
}

export default Page;