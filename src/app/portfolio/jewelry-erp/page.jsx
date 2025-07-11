import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/Bootstrap_logo.svg.png";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/download.jpg";
import img4 from "@/assets/images/portfolio/techuse/sql.jpg";
import img5 from "@/assets/images/portfolio/techuse/tech-express-js.svg";
import img6 from "@/assets/images/services/ourproducts/next.png";
import img7 from "@/assets/images/portfolio/techuse/download.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 184635.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 184852.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 185010.png";

export const metadata = {
    title: "Case Study: Jewelry ERP System for RFID & EAS Integration | JBS Technology",
    description:
        "Discover how JBS Technology developed a real-time Jewelry ERP system for Diamond Software, integrating RFID and EAS hardware with smart alerts, dashboards, and analytics.",
    keywords:
        "Jewelry ERP, RFID ERP integration, EAS ERP software, retail security software, smart inventory, Diamond Software, JBS Technology, ERP for jewelry industry",
    openGraph: {
        title: "Jewelry ERP System – Diamond Software | Case Study by JBS Technology",
        description:
            "Explore how JBS Technology built a powerful ERP solution for jewelry retail and warehouse operations, integrating RFID and EAS systems in real time.",
        url: "https://www.jbstechnology.com/portfolio/loyal-string", // Replace with actual live URL
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/portfolio/loyal-string-og.jpg", // Replace with actual OG image
                width: 1200,
                height: 630,
                alt: "Jewelry ERP Case Study – JBS Technology",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Jewelry ERP with RFID & EAS Integration – Diamond Software x JBS Technology",
        description:
            "JBS Technology helped Diamond Software digitize and integrate retail security hardware with a real-time Jewelry ERP dashboard.",
        images: ["https://www.jbstechnology.com/images/portfolio/loyal-string-og.jpg"], // Replace if needed
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};


function Page() {
    const breadCrumbs = [
        {label: 'Home', route: '/'},
        {label: 'Portfolio', route: '/portfolio'},
    ]

    const detaile = [
        {
            title: "Industry",
            description: "Jewelry ERP",
        },
        {
            title: "Project Duration",
            description: "5 months",
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
            title: "Lack of Integration Between Software and Hardware Systems",
            description:
                "Diamond Software faced difficulties managing their EAS and RFID hardware with outdated or disconnected systems that lacked real-time capabilities and streamlined user experience",
        },
        {
            name: "Solution",
            title: "Custom ERP for Seamless Hardware-Software Integration",
            description:
                "JBS Technology designed a robust ERP platform tailored to the jewelry industry that connected directly with RFID and EAS systems offering real-time insights, instant alerts, and powerful analytics in a simplified interface",
        },
        {
            name: "Results",
            title: "Efficient Operations with Real-Time Visibility",
            description:
                "The integrated ERP enhanced operational accuracy, reduced theft risks through real-time tracking, and empowered staff with actionable data leading to faster decision-making and improved system reliability",
        },
    ];

    const app = {
        "FRONT-END": [
            {name: "React", image: img2},
            {name: "Bootstrap", image: img1},
        ],
        "BACK-END & DATABASES": [
            {name: ".net", image: img3},
            {name: "mySQL", image: img4},
        ],
    };

    const slides = [
        {
            name: 'Challenges',
            number: '01',
            title1: 'Disconnected ERP and RFID/EAS Hardware',
            title2: 'Lack of Real-Time Monitoring Capabilities',
            title3: 'Manual Reporting & Delay in Notifications',
            title4: 'Complex UI for Daily Users',
            description1:
                'Diamond Software’s hardware was not integrated with a centralized platform, leading to fragmented data and management issues',
            description2:
                'There was no system in place to monitor hardware events live, limiting staff’s ability to respond instantly',
            description3:
                'Notifications and security alerts were often delayed or missed due to lack of automation',
            description4:
                'Staff found the existing UI overwhelming and difficult to navigate on a daily basis',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg1,
        },
        {
            name: 'Process',
            number: '02',
            title1: 'Requirements Gathering & Hardware Sync Mapping',
            title2: 'Custom UI/UX with Real-Time Dashboard',
            title3: 'Smart Alert & Notification System',
            title4: 'Integrated Analytics Engine',
            description1:
                'Collaborated with Diamond Software to map EAS and RFID behavior, signal events, and sync parameters for ERP integration',
            description2:
                'Designed a modular UI that gives real-time status, hardware health, and movement alerts through an easy-to-read interface',
            description3:
                'Built a notification system that triggers SMS, in-app alerts, and emails instantly based on event categories',
            description4:
                'Developed a reporting system to analyze daily trends, identify anomalies, and provide predictive insights',
            icon: <LightbulbCircleIcon fontSize={'large'} />,
            image: phoneimg2,
        },
        {
            name: 'Features',
            number: '03',
            title1: 'Hardware-Linked ERP Dashboard',
            title2: 'Real-Time RFID & EAS Monitoring',
            title3: 'Smart Alert Engine',
            title4: 'Role-Based Access & Analytics',
            description1:
                'Connects directly with Diamond’s RFID tags and EAS gates to reflect real-time movement and triggers',
            description2:
                'Tracks every RFID tag scanned and alerts any unauthorized movement or tampering with gate-level precision',
            description3:
                'Sends immediate alerts through multi-channel notifications to predefined personnel based on event priority',
            description4:
                'Admins and store managers can access reports, hardware status, and activity history filtered by user roles',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg3,
        },
    ];




    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Jewelry ERP'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'Diamond Software approached us to develop a comprehensive software solution tailored to their advanced EAS and RFID systems'
                }
                description={
                    <>
                        The project involved creating a user-friendly platform that integrates seamlessly with their existing hardware,<br /><br />
                        offering real-time monitoring, instant notifications, and robust data analytics across retail and warehouse environments
                    </>
                }
                slides={slides}
                name={'Siddharth Desai'}
                status={'CTO, Diamond Software'}
                projectdes={
                    'We were impressed by JBS Technology’s ability to understand our unique hardware-software challenge and deliver a platform that not only worked but elevated our system altogether. The integration, performance, and intuitive design exceeded our expectations.'
                }
            />
        </>
    );
}

export default Page;