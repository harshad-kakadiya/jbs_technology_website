import React from 'react';
import Socialmedia from "../../components/portfolio/socialmedia";
import bg1 from "../../assets/images/blog/b-1.webp";
import HeadingPage from "../../components/global/headingPage";

export const metadata = {
    title: "Our Portfolio | JBS Technology - AI & IT Projects",
    description:
        "Discover JBS Technology's diverse portfolio of AI, software, and digital marketing projects that showcase our innovation, quality, and results.",
    keywords:
        "portfolio, AI projects, IT case studies, software development, digital transformation, JBS Technology work",
    openGraph: {
        title: "Our Portfolio | JBS Technology",
        description:
            "Explore our successful AI and IT projects in software development, digital solutions, and innovative technologies.",
        url: "https://www.jbstechnology.com/portfolio",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/portfolio-og.jpg",
                width: 1200,
                height: 630,
                alt: "JBS Technology Portfolio Showcase",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Portfolio | JBS Technology",
        description:
            "Explore our successful AI and IT projects in software development, digital solutions, and innovative technologies.",
        images: ["https://www.jbstechnology.com/images/portfolio-og.jpg"],
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
            <HeadingPage bgImg={bg1.src} heading={'Portfolio'} />
            <Socialmedia />
        </>
    );
}

export default Page;
