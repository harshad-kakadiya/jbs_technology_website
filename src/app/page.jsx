import Herosection from "../components/home/herosection";
import Testimonial from "../components/global/testimonial";
import Ourmission from "../components/home/ourmission";
import Industries from "../components/home/industries";
import Capabilities from "../components/home/capabilities";
import ValuePropositions from "../components/home/value-propositions";
import FunFactCounter from "../components/global/funfactcouter";
import Clients from "@/components/about/clients";

export const metadata = {
    title: "Top AI & IT Services Company | JBS Technology",
    description:
        "JBS Technology empowers businesses by integrating AI & IT solutions that drive innovation and growth. Discover our capabilities and success stories.",
    keywords:
        "AI development, IT solutions, software development, machine learning, enterprise software, digital transformation",
    openGraph: {
        title: "Top AI & IT Services Company | JBS Technology",
        description:
            "Explore cutting-edge IT & AI solutions with JBS Technology. Delivering innovation, results, and smarter businesses.",
        url: "https://www.jbstechnology.com",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "JBS Technology – AI & IT Solutions",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top AI & IT Services Company | JBS Technology",
        description:
            "Explore cutting-edge IT & AI solutions with JBS Technology. Delivering innovation, results, and smarter businesses.",
        images: ["https://www.jbstechnology.com/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

export default function Home() {
    return (
        <>
            <Herosection />
            <ValuePropositions />
            <Capabilities />
            <FunFactCounter
                gap={true}
                color={false}
                heading="Fun Facts"
                counters={[
                    { value: 100 },
                    { value: 160 },
                    { value: 30 },
                    { value: 9300 },
                ]}
                counterDetails={[
                    "Happy Clients",
                    "Projects",
                    "In-house specialists",
                    "Hours Spent",
                ]}
            />
            <Ourmission />
            <Industries />
            <Testimonial />
            <Clients />
        </>
    );
}
