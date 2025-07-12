import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";
import StarIcon from "@mui/icons-material/Star";
import img1 from "@/assets/images/portfolio/techuse/Typescript_logo_2020.svg.png";
import img2 from "@/assets/images/portfolio/techuse/React.webp";
import img3 from "@/assets/images/portfolio/techuse/tech-node-js.svg";
import img4 from "@/assets/images/portfolio/techuse/png-transparent-postgresql-database-logo-database-symbol-blue-text-logo-thumbnail-removebg-preview.png";
import img5 from "@/assets/images/portfolio/techuse/tech-express-js.svg";
import img6 from "@/assets/images/portfolio/techuse/tailwind-css-icon.png";
import img7 from "@/assets/images/portfolio/techuse/sequelize.png";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import phoneimg1 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182201.png";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import phoneimg2 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182308.png";
import phoneimg3 from "@/assets/images/portfolio/mediaProject/Screenshot 2025-07-03 182340.png";

export const metadata = {
    title: "Case Study: Girls First Finance – Social Impact Platform | JBS Technology",
    description:
        "Explore how JBS Technology helped Girls First Finance build a secure, dignified digital platform for educational funding and financial empowerment of women across Africa and South Asia.",
    keywords:
        "girls education platform, financial empowerment, social impact finance, microloans for girls, anti-sexual exploitation tech, digital grants platform, gender equality fintech, JBS Technology, Girls First Finance case study",
    openGraph: {
        title: "Social Impact Finance Case Study – Girls First Finance | JBS Technology",
        description:
            "JBS Technology developed a safe and accessible platform enabling thousands of girls to access microloans, scholarships, and financial mentorship without exploitation.",
        url: "https://www.jbstechnology.com/portfolio/social-impect-finance", // update to real URL
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/portfolio/social-impact-og.jpg", // change to actual OG image
                width: 1200,
                height: 630,
                alt: "Social Impact Finance Platform – Girls First Finance | JBS Technology",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Girls First Finance – Empowerment Platform by JBS Technology",
        description:
            "See how JBS Technology built a secure digital microloan and scholarship platform to empower girls with safe, independent access to education.",
        images: ["https://www.jbstechnology.com/images/portfolio/social-impact-og.jpg"], // change to real path
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
            description: "Social Impact Finance",
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
            title: "The Price of Education: Exploitation in Exchange for Opportunity",
            description: "Many girls and young women face sexual exploitation by individuals in positions of power such as sugar daddies, teachers, and employers who offer tuition, grades, or job opportunities in exchange for sexual favors. This practice undermines their dignity, limits their opportunities, and perpetuates cycles of poverty and abuse. Without safe and affordable funding options, too many are forced to choose between their future and their safety",
        },
        {
            name: "Solution",
            title: "Empowering Through Access: Safe, Affordable Funding for Girls",
            description: "Girls First Finance provides innovative, safe, and dignified financial solutions that empower girls and young women to fund their education, living expenses, or entrepreneurial dreams. Through grants, scholarships, microloans, and financial literacy training, we ensure they no longer have to rely on exploitative relationships. We also advocate for cultural change, working to make sex-for-favors practices socially unacceptable and legally condemned",
        },
        {
            name: "Results",
            title: "Freedom and Dignity Restored: A Generation of Empowered Women",
            description: "Girls and young women are now gaining access to education, training, and work opportunities on their own terms free from coercion or abuse. With increased financial independence and awareness, they are able to make empowered decisions about their futures. Communities are beginning to reject exploitative practices, and a new generation of confident, capable women is rising to lead",
        },

    ];

    const app = {
        "FRONT-END": [
            {name: "React", image: img2},
            {name: "Typescript", image: img1},
            {name: "Tailwind", image: img6},
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
            title1: 'Exploitation for Education and Employment',
            title2: 'Lack of Safe Financial Alternatives',
            title3: 'Cultural Normalization of Abuse',
            title4: 'Limited Financial Literacy Among Girls',
            description1:
                'Girls and young women often face sexual exploitation by sugar daddies, teachers, and employers in exchange for tuition, grades, or job placements',
            description2:
                'Without access to safe and affordable funding, many are forced to choose between exploitation and dropping out of school or missing opportunities',
            description3:
                'In many communities, the practice of sex-for-grades or favors-for-funding is normalized, leaving victims without support or a voice',
            description4:
                'Many girls lack the financial knowledge or tools needed to budget, save, or make informed career and education choices',
            icon: <ArrowCircleRightIcon fontSize={'large'}/>,
            image: phoneimg1,
        },
        {
            name: 'Process',
            number: '02',
            title1: 'Needs Assessment & Community Research',
            title2: 'Building Safe Financial Access Channels',
            title3: 'Designing Scalable, Inclusive Platforms',
            title4: 'Advocacy, Education & Policy Engagement',
            description1:
                'We conducted grassroots research to understand the needs, risks, and barriers facing girls in different regions regarding education funding',
            description2:
                'Developed grant, scholarship, and microloan programs tailored to different income levels, ages, and education stages',
            description3:
                'Built a mobile-first financial platform accessible to all, with secure user onboarding, multilingual support, and real-time support',
            description4:
                'Partnered with schools, NGOs, and government bodies to raise awareness, change narratives, and influence systemic change',
            icon: <LightbulbCircleIcon fontSize={'large'}/>,
            image: phoneimg2,
        },
        {
            name: 'Features',
            number: '03',
            title1: 'Safe and Transparent Financial Access',
            title2: 'Microloans, Grants & Tuition Support',
            title3: 'Financial Literacy & Mentorship',
            title4: 'Social Impact Dashboard & Reporting',
            description1:
                'A secure digital platform where girls can apply for and manage educational or startup funds without middlemen or risks of exploitation',
            description2:
                'Flexible financial products designed specifically for education and early-stage entrepreneurship, with low to no interest',
            description3:
                'Built-in financial education tools, budgeting support, and mentorship matching to help girls make informed decisions',
            description4:
                'Real-time dashboards that track impact, application rates, and funding allocation visible to partners, funders, and communities',
            icon: <ArrowCircleRightIcon fontSize={'large'}/>,
            image: phoneimg3,
        },
    ];


    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Social Impact Finance'} breadcrumbs={breadCrumbs}/>
            <Experiences Data={data} Detaile={detaile}/>
            <TechUse app={app}/>
            <MediaProject
                title={
                    'For over a decade, Amina Yusuf has been a relentless advocate for financial empowerment and gender equity across Africa and South Asia'
                }
                description={
                    <>
                        She is the founder of Girls First Finance, an organization that has helped over 10,000 girls access safe, non-exploitative funding for education, entrepreneurship, and personal development<br/><br/>

                        Amina has collaborated with UN Women, the World Bank, and multiple grassroots NGOs to tackle sex-for-grades and economic abuse. She was honored with the “Global Change Leader” award in 2023
                    </>
                }
                slides={slides}
                name={'Amina Yusuf'}
                status={'Founder & CEO'}
                projectdes={'JBS Technology delivered far more than just a product they became a strategic partner in our digital transformation journey. Their deep understanding of the education sector and commitment to quality helped us streamline operations across over 300 institutions. The team\'s collaborative approach, consistent support, and innovative mindset made all the difference in scaling our impact.'}
            />
        </>
    );
}

export default Page;