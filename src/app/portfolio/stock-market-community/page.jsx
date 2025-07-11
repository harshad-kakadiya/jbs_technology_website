import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/tailwind-css-icon.png";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/tech-node-js.svg";
import img4 from "@/assets/images/portfolio/techuse/tech.mongodb.svg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 183819.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 183650.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 183942.png";

export const metadata = {
    title: "Stock Market Community Platform – Hedger by JBS Technology",
    description:
        "Explore how JBS Technology built 'Hedger Community' – a real-time stock market platform offering expert insights, discussion forums, and educational resources for investors.",
    keywords:
        "Stock market app, stock community platform, investor community, real-time stock tracker, JBS Technology, Hedger case study, financial platform development, stock discussion board, stock education app, beginner investing tools",
    openGraph: {
        title: "Case Study: Hedger Stock Market Community | JBS Technology",
        description:
            "A smart, user-centric stock market platform with real-time APIs, community forums, and financial insights built by JBS Technology.",
        url: "https://www.jbstechnology.com/portfolio/stock-market-community", // update if needed
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/portfolio/stock-market-og.jpg", // update to real OG image
                width: 1200,
                height: 630,
                alt: "Hedger Stock Market Community Platform by JBS Technology",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hedger – Stock Market Community Case Study | JBS Technology",
        description:
            "Discover how JBS Technology helped build Hedger – a social-first stock platform with real-time data, forums, and beginner-friendly education.",
        images: ["https://www.jbstechnology.com/images/portfolio/stock-market-og.jpg"], // update to real OG image
    },
    robots: {
        index: true,
        follow: true,
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
            description: "Stock Market Community",
        },
        {
            title: "Project Duration",
            description: "1.5 months",
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
            title: "Lack of Reliable and Engaging Stock Market Platforms",
            description:
                "Stock market enthusiasts, especially beginners, often find it difficult to access trusted information, real-time updates, and a sense of community, which limits their ability to make informed investment decisions",
        },
        {
            name: "Solution",
            title: "Interactive Community Platform with Live Market Insights",
            description:
                "JBS Technology created a responsive platform where users can access real-time market updates, educational content, expert advice, and community discussions all in one place",
        },
        {
            name: "Results",
            title: "Empowered Users and High Engagement Rates",
            description:
                "Hedger Community saw a 3x increase in user engagement and retention. New investors reported increased confidence, and advanced users appreciated the insightful forums and timely data",
        },
    ];


    const app = {
        "FRONT-END": [
            {name: "React", image: img2},
            {name: "Tailwind", image: img1},
        ],
        "BACK-END & DATABASES": [
            {name: "Node.js", image: img3},
            {name: "MongoDB", image: img4},
        ],
    };

    const slides = [
        {
            name: 'Challenges',
            number: '01',
            title1: 'Scattered Market Information',
            title2: 'Lack of Beginner-Friendly Resources',
            title3: 'Low User Engagement on Existing Platforms',
            title4: 'Delayed Market Updates',
            description1:
                'Users had to navigate multiple platforms to access market news, stock charts, and discussions',
            description2:
                'New investors struggled to understand complex financial jargon without guided learning paths',
            description3:
                'Traditional finance sites lacked interactive features to retain and grow a loyal community',
            description4:
                'Without live updates, users often missed key moments for buying or selling stocks',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg1,
        },
        {
            name: 'Process',
            number: '02',
            title1: 'UX-Focused Design for Accessibility',
            title2: 'Integrated Real-Time APIs',
            title3: 'Community Forum and Gamification',
            title4: 'Content Strategy and SEO Planning',
            description1:
                'Built intuitive navigation, light/dark mode, and mobile responsiveness to ensure usability across skill levels',
            description2:
                'Integrated market APIs to stream real-time stock prices, news, and performance data',
            description3:
                'Enabled user profiles, discussion threads, comment upvoting, and contribution badges',
            description4:
                'Collaborated with finance experts to create SEO-optimized content for organic growth',
            icon: <LightbulbCircleIcon fontSize={'large'} />,
            image: phoneimg2,
        },
        {
            name: 'Features',
            number: '03',
            title1: 'Live Stock Market Tracker',
            title2: 'Beginner Education Hub',
            title3: 'Investor Discussion Boards',
            title4: 'Expert Tips & Weekly Insights',
            description1:
                'Interactive dashboards with real-time prices, portfolio tracking, and trending tickers',
            description2:
                'Tutorials, videos, and FAQs designed to help new users get started quickly',
            description3:
                'A moderated community space for peer-to-peer learning, stock tips, and experience sharing',
            description4:
                'Verified experts share technical analysis, market strategies, and weekly recaps',
            icon: <ArrowCircleRightIcon fontSize={'large'} />,
            image: phoneimg3,
        },
    ];




    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Stock Market Community'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'Hedger Community is your go-to platform for all things related to the stock market.'
                }
                description={
                    <>
                        Whether you're a seasoned investor or a beginner, our website provides the resources, tools, and community support you need to navigate the stock market with confidence<br /><br />
                        At Hedger Community, we aim to empower our users with comprehensive information, real-time updates, and expert insights to help you make informed investment decisions
                    </>
                }
                slides={slides}
                name={'Nikhil Agarwal'}
                status={'Founder & Market Analyst'}
                projectdes={
                    'JBS Technology brought our vision of an inclusive, data-driven stock market platform to life. Their team not only delivered a robust and scalable platform but also guided us through critical UX, performance, and integration decisions. Their technical insight and dedication were instrumental in helping us engage thousands of investors effectively.'
                }
            />
        </>
    );
}

export default Page;