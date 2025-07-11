import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/chakra.png";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/tech-node-js.svg";
import img4 from "@/assets/images/portfolio/techuse/png-transparent-postgresql-database-logo-database-symbol-blue-text-logo-thumbnail-removebg-preview.png";
import img5 from "@/assets/images/portfolio/techuse/tech-express-js.svg";
import img7 from "@/assets/images/portfolio/techuse/sequelize.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 180208.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 180419.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 180504.png";


function Page() {
    const breadCrumbs = [
        {label: 'Home', route: '/'},
        {label: 'Portfolio', route: '/portfolio'},
    ]

    const detaile = [
        {
            title: "Industry",
            description: "Programmatic Advertising",
        },
        {
            title: "Project Duration",
            description: "3 months",
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
            title: "Inefficient Ad Performance with Traditional Agencies",
            description: "Most businesses struggle with inefficient ad spending and underperforming campaigns due to the limitations of traditional marketing agencies that lack specialized expertise in programmatic advertising",
        },
        {
            name: "Solution",
            title: "Precision-Driven Programmatic Advertising by Experts",
            description: "War Room offers a laser-focused approach to programmatic advertising through a dedicated and highly specialized ad operations team. By leveraging advanced targeting, data optimization, and real-time adjustments, we craft campaigns that outperform industry standards",
        },
        {
            name: "Results",
            title: "Consistently Higher Conversions and ROI",
            description: "Clients consistently see a measurable increase in conversions, improved ROI, and overall campaign performance that far exceeds expectations proving that when ads are done right, results follow",
        },

    ];

    const app = {
        "FRONT-END": [
            {name: "React", image: img2},
            {name: "Chakra UI", image: img1},
        ],
        "BACK-END & DATABASES": [
            {name: "Node.js", image: img3},
            {name: "PostgreSQL", image: img4},
            {name: "Express.js", image: img5},
            {name: "Sequelize", image: img7},
        ],
    };

    const slides = [
        {
            name: 'Challenges',
            number: '01',
            title1: 'Low ROI from Traditional Agencies',
            title2: 'Lack of Real-Time Optimization',
            title3: 'Generic Targeting Strategies',
            title4: 'Disjointed Ad Tech Stack',
            description1:
                'Brands often struggle to see strong returns from traditional marketing agencies that lack specialized expertise in programmatic buying',
            description2:
                'Without real-time campaign optimization, ad spend is wasted on underperforming channels or irrelevant audiences',
            description3:
                'Broad targeting methods result in impressions without conversions failing to capture high-intent users at the right time',
            description4:
                'Managing multiple disconnected tools and platforms creates inefficiencies and poor attribution accuracy',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg1,
        },
        {
            name: 'Process',
            number: '02',
            title1: 'Audit & Performance Review',
            title2: 'Precision Targeting Setup',
            title3: 'Real-Time Optimization Framework',
            title4: 'Data-Driven Campaign Scaling',
            description1:
                'We begin with a comprehensive analysis of past ad performance, user behavior, and platform gaps to identify areas of opportunity',
            description2:
                'Custom targeting blueprints are created using behavioral data, device info, and location reaching the right person at the right moment',
            description3:
                'Our ad ops team monitors campaign performance live, making intelligent adjustments on-the-fly to maximize effectiveness',
            description4:
                'Winning creatives and audiences are scaled efficiently, while underperforming elements are paused to ensure cost-effective results',
            icon: <LightbulbCircleIcon fontSize={'large'} />,
            image: phoneimg2,
        },
        {
            name: 'Features',
            number: '03',
            title1: 'Specialized Ad Operations Team',
            title2: 'Advanced Targeting & Retargeting',
            title3: 'Real-Time Bidding & Optimization',
            title4: 'Transparent Reporting Dashboard',
            description1:
                'A dedicated team of programmatic experts works exclusively on your campaign, ensuring hands-on management and deep performance focus',
            description2:
                'Leverages user behavior, location, and intent signals to build precise audience segments and conversion paths',
            description3:
                'Uses live bidding adjustments and performance-based triggers to continuously refine delivery and spend',
            description4:
                'Clients have access to real-time dashboards tracking KPIs, audience insights, and spend-to-conversion ratios',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg3,
        },
    ];



    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Programmatic Advertising'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'Dr. Ravi Menon is a globally recognized healthcare innovator focused on improving rural health outcomes in Southeast Asia and Sub-Saharan Africa'
                }
                description={
                    <>
                        He founded HealthBridge Solutions, a digital health platform that has connected over 2 million patients in remote areas to licensed doctors through AI-powered telemedicine and mobile diagnostics<br/><br/>

                        Amina has collaborated with UN Women, the World Bank, and multiple grassroots NGOs to tackle sex-for-grades and economic abuse. She was honored with the “Global Change Leader” award in 2023
                    </>
                }
                slides={slides}
                name={'Dr. Ravi Menon'}
                status={'Founder & CEO'}
                projectdes={'Working with JBS Technology was a game-changer for us. Their technical precision and deep expertise in healthcare systems enabled us to launch a fully integrated platform across 7 countries. Their proactive communication and agile delivery made even complex implementations feel seamless. Truly a partner we can trust for mission-critical work.'}
            />
        </>
    );
}

export default Page;