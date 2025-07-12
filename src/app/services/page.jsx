import React from 'react';
import BusinessVenture from "../../components/services/businessventure";
import Ourproducts from "../../components/services/ourproducts";
import bg1 from "../../assets/images/blog/b-1.webp";
import HeadingPage from "../../components/global/headingPage";
import Software from "@/components/services/software";
import KeyBenefits from "@/components/services/keyBenefits";
import HowItWorks from "@/components/services/howItWorks";
import Newsletter from "@/components/global/newsletter";

export const metadata = {
    title: "Our IT & AI Services | JBS Technology",
    description:
        "Explore JBS Technology's comprehensive AI and IT services—from software development to digital ventures—designed to drive growth and innovation.",
    keywords:
        "AI services, IT services, software development, business automation, digital solutions, JBS Technology",
    openGraph: {
        title: "Our IT & AI Services | JBS Technology",
        description:
            "Explore JBS Technology's comprehensive AI and IT services—from software development to digital ventures—designed to drive growth and innovation.",
        url: "https://www.jbstechnology.com/services",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/services-og.jpg",
                width: 1200,
                height: 630,
                alt: "JBS Technology Services",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our IT & AI Services | JBS Technology",
        description:
            "Get expert IT and AI services with JBS Technology—driving smarter businesses through innovation and custom software.",
        images: ["https://www.jbstechnology.com/images/services-og.jpg"],
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
            <HeadingPage bgImg={bg1.src} heading={'Services'} />
            <Software />
            <KeyBenefits />
            <BusinessVenture />
            <HowItWorks />
            <Ourproducts />
            <Newsletter />
        </>
    );
}

export default Page;
