import Modification from "../../components/about/modification";
import AboutSlider from "../../components/about/aboutSlider";
import Business from "../../components/about/business";
import Industry from "../../components/about/industry";
import ProgecksRets from "../../components/about/progecksRets";
import TeamPage from "../../components/about/teamPage";
import Customers from "../../components/about/customers";
import Collab from "../../components/about/collab";
import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/blog/b-1.webp";

export const metadata = {
    title: "About Us | JBS Technology – AI & IT Solution Experts",
    description:
        "Learn more about JBS Technology, a forward-thinking AI and IT service provider. Discover our mission, team, achievements, and what drives our innovation.",
    keywords:
        "About JBS Technology, IT company, AI development team, software agency, tech partners, company mission, tech leadership",
    openGraph: {
        title: "About Us | JBS Technology – Our Mission & Team",
        description:
            "Explore the story, team, and values behind JBS Technology. We're empowering businesses through AI and digital innovation.",
        url: "https://www.jbstechnology.com/about-us",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About JBS Technology Team",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | JBS Technology – Meet the Innovators",
        description:
            "Meet the people behind JBS Technology, a leading AI & IT company. Learn about our journey, purpose, and vision.",
        images: ["https://www.jbstechnology.com/images/about-og.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};

const Page = () => {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'About Us'} />
            <Modification />
            <AboutSlider />
            <Business />
            <Industry />
            {/*<ProgecksRets />*/}
            <TeamPage />
            <Customers />
            <Collab />
        </>
    );
};

export default Page;
