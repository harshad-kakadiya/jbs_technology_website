import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/download.png";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/python_logo_icon_168886.webp";
import img4 from "@/assets/images/portfolio/techuse/sql.jpg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 184100.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 184356.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 184443.png";

export const metadata = {
    title: "Case Study: Digital Cooperative Platform for NCCF | JBS Technology",
    description:
        "Discover how JBS Technology helped NCCF modernize its cooperative systems with a unified digital platform, improving transparency, governance, and operational efficiency.",
    keywords:
        "NCCF, consumer cooperative, case study, digital transformation, AI for cooperatives, cooperative management software, JBS Technology project",
    openGraph: {
        title: "Case Study: Digital Cooperative Platform for NCCF | JBS Technology",
        description:
            "Explore our work with NCCF to build a unified digital system for cooperatives across India, enhancing transparency, compliance, and efficiency.",
        url: "https://www.jbstechnology.com/portfolio/consumer-co-operative", // Replace with your actual URL
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/portfolio/nccf-og.jpg", // Replace with actual OG image
                width: 1200,
                height: 630,
                alt: "NCCF Case Study – JBS Technology",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Case Study: NCCF Cooperative Platform | JBS Technology",
        description:
            "JBS Technology built a transparent, scalable cooperative platform for NCCF to modernize operations and support democratic processes.",
        images: ["https://www.jbstechnology.com/images/portfolio/nccf-og.jpg"], // Replace with actual OG image
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
            description: "consumer-co-operative",
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
            title: "Disconnected Cooperative Systems & Legacy Operations",
            description:
                "NCCF and its member cooperatives operated in fragmented environments with paper-based systems, poor visibility, and inconsistent implementation of best practices limiting efficiency and transparency",
        },
        {
            name: "Solution",
            title: "Unified Digital Platform for Cooperative Management",
            description:
                "JBS Technology delivered a scalable, tech-enabled system that connected multiple cooperative entities under one roof, improving governance, transparency, and standardization across operations while supporting digital civil work documentation",
        },
        {
            name: "Results",
            title: "Improved Transparency, Governance & Member Satisfaction",
            description:
                "Member cooperatives reported increased efficiency and better market access The platform enabled democratic workflows, transparent reporting, and easier alignment with government compliance and funding models",
        },
    ];

    const app = {
        "FRONT-END": [
            {name: "React", image: img2},
            {name: "Material UI", image: img1},
        ],
        "BACK-END & DATABASES": [
            {name: "Python", image: img3},
            {name: "mySQL", image: img4},
        ],
    };

    const slides = [
        {
            name: 'Challenges',
            number: '01',
            title1: 'Fragmented Operational Systems',
            title2: 'Limited Transparency & Trust',
            title3: 'Inconsistent Use of Best Practices',
            title4: 'Manual Reporting and Infrastructure Tracking',
            description1:
                'Each cooperative operated with different tools and processes, creating inefficiencies and misaligned workflows',
            description2:
                'Stakeholders had limited insight into operations and decision-making, affecting member confidence',
            description3:
                'Lack of standard operating procedures made scaling and quality control difficult across regions',
            description4:
                'Tracking of government-aided civil works and compliance was manual and error-prone',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg1,
        },
        {
            name: 'Process',
            number: '02',
            title1: 'Workflow Standardization Across Cooperatives',
            title2: 'Member Management & Role-Based Access',
            title3: 'Real-Time Progress Monitoring Tools',
            title4: 'Digital Compliance Integration',
            description1:
                'Mapped operational and governance processes to create a standardized framework across all cooperatives',
            description2:
                'Implemented secure user roles and digital workflows to support democratic participation',
            description3:
                'Built dashboards and reports for tracking cooperative KPIs, performance, and infrastructure milestones',
            description4:
                'Integrated regulatory compliance features aligned with national cooperative development guidelines',
            icon: <LightbulbCircleIcon fontSize={'large'} />,
            image: phoneimg2,
        },
        {
            name: 'Features',
            number: '03',
            title1: 'Cooperative Registry & Directory',
            title2: 'Digital Meeting & Voting Tools',
            title3: 'Civil Works Planning & Documentation',
            title4: 'Reporting, Insights & Market Access Tools',
            description1:
                'Unified member cooperative records and digital identity profiles in a centralized platform',
            description2:
                'Tools for scheduling, conducting, and documenting general body meetings and elections',
            description3:
                'Modules to track infrastructure projects, budgets, approvals, and progress with media proof',
            description4:
                'Market insights dashboard and e-procurement integrations to improve buying power and logistics',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg3,
        },
    ];




    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'consumer-co-operative'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'NCCF promotes the consumer cooperative movement by facilitating the formation and democratic functioning of cooperatives.'
                }
                description={
                    <>
                        We aim to meet consumer needs satisfactorily while maintaining transparency and a focus on consumer satisfaction.<br /><br />
                        Our mission includes striving for higher performance standards, fostering growth among member cooperatives through best practices and technology, achieving better market penetration, and undertaking essential civil and infrastructure works as outlined by government guidelines.
                    </>
                }
                slides={slides}
                name={'Mr. Anil Verma'}
                status={'Chairman, NCCF'}
                projectdes={
                    'Working with JBS Technology helped us modernize our cooperative network across the country. Their deep understanding of digital transformation, especially for public and semi-public institutions, enabled us to move from paper-driven workflows to a transparent, member-focused, and fully integrated ecosystem. Their solutions support our mission of mutual aid and self-reliance with the power of technology.'
                }
            />
        </>
    );
}

export default Page;