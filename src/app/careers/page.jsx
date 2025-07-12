import React from 'react';
import IdeasAndDrive from "@/components/career/ideasAndDrive";
import HeadingPage from "@/components/global/headingPage";
import bg1 from "@/assets/images/career/cr1.webp";
import Openings from "@/components/career/openings";

export const metadata = {
    title: "Careers at JBS Technology | Join Our AI & IT Team",
    description:
        "Looking to grow your career in AI and IT? Explore current openings at JBS Technology and become part of our innovative, passionate team.",
    keywords:
        "careers, jobs in IT, AI job openings, tech careers, join JBS Technology, software developer jobs, tech company hiring",
    openGraph: {
        title: "Careers at JBS Technology | Explore Job Openings",
        description:
            "Join our team of innovators. View open positions and discover how JBS Technology is shaping the future of tech with AI, software, and digital transformation.",
        url: "https://www.jbstechnology.com/careers",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/careers-og.jpg",
                width: 1200,
                height: 630,
                alt: "JBS Technology Careers",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers at JBS Technology | Join Our Team",
        description:
            "Find your future at JBS Technology. We’re hiring AI engineers, developers, designers, and more.",
        images: ["https://www.jbstechnology.com/images/careers-og.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

function Page() {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Careers'} />
            <IdeasAndDrive />
            <Openings />
        </>
    );
}

export default Page;
