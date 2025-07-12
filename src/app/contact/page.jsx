import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/contact/ct1.webp";
import Collaborate from "../../components/contact-us/collaborate";
import { Box } from "@mui/material";

export const metadata = {
    title: "Contact Us | JBS Technology - Get in Touch",
    description:
        "Have a project in mind? Contact JBS Technology to discuss your AI and IT service needs. We're here to build innovative digital solutions together.",
    keywords:
        "Contact JBS Technology, IT service company, AI company, software consultation, business inquiry, tech partner",
    openGraph: {
        title: "Contact Us | JBS Technology",
        description:
            "Reach out to JBS Technology for custom software solutions, AI integration, or tech partnership. Let’s collaborate on your next big idea.",
        url: "https://www.jbstechnology.com/contact",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/contact-og.jpg",
                width: 1200,
                height: 630,
                alt: "Contact JBS Technology",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | JBS Technology",
        description:
            "Talk to JBS Technology about your business goals. We offer IT and AI services to help you grow and innovate.",
        images: ["https://www.jbstechnology.com/images/contact-og.jpg"],
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
            <HeadingPage bgImg={bg1.src} heading={'Contact Us'} />
            <Collaborate />
            <Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4423.12279067631!2d72.88773985240977!3d21.2164534994015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c653d90c978a55f%3A0x5b466180ab933d3d!2sJBS%20Technology!5e0!3m2!1sen!2sin!4v1751617746451!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </>
    );
}

export default Page;
