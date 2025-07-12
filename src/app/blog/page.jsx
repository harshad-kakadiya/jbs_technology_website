import bg1 from '../../assets/images/blog/b-1.webp';
import Newsletter from '../../components/global/newsletter';
import HeadingPage from "../../components/global/headingPage";
import Posts from "../../components/blog/posts";
import Blogslider from "../../components/blog/blogslider";

export const metadata = {
    title: "Tech Insights & Updates | JBS Technology Blogs",
    description:
        "Stay ahead with JBS Technology’s latest blogs on AI, IT solutions, digital innovation, software trends, and more. Explore industry insights and expert tips.",
    keywords:
        "AI blog, IT articles, tech insights, software development blog, JBS Technology blog, digital transformation, machine learning trends",
    openGraph: {
        title: "Tech Insights & Updates | JBS Technology Blogs",
        description:
            "Explore expert insights on AI, IT, and tech innovation. Read JBS Technology’s latest blogs on software, automation, and digital transformation.",
        url: "https://www.jbstechnology.com/blog",
        siteName: "JBS Technology",
        images: [
            {
                url: "https://www.jbstechnology.com/images/blog-og.jpg",
                width: 1200,
                height: 630,
                alt: "JBS Technology Blog",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Tech Insights & Updates | JBS Technology Blogs",
        description:
            "Explore the latest blog posts from JBS Technology — expert opinions, development trends, and digital insights.",
        images: ["https://www.jbstechnology.com/images/blog-og.jpg"],
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
            <HeadingPage bgImg={bg1.src} heading={'Blogs'} />
            <Blogslider />
            <Posts />
            <Newsletter />
        </>
    );
};

export default Page;
