import React from 'react';
import { notFound } from 'next/navigation';
import BlogSingle from "../../../components/blog/blogSingle";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";

const posts = [
    { slug: 'ai-innovation-india', id: '1', title: 'How AI Is Powering the Next Wave of IT Solutions' },
    { slug: 'agentic-ai-india', id: '2', title: 'The Rise of Agentic AI in Intelligent Automation' },
    { slug: 'web-development-india', id: '3', title: 'Modern Web Development Trends for Scalable Solutions' },
    { slug: 'mobile-app-development-india', id: '4', title: 'Creating Impactful Mobile Apps for a Digital-First World' },
    { slug: 'ui-ux-design-india', id: '5', title: 'Crafting Exceptional Digital Experiences Through UI/UX' },
    { slug: 'digital-marketing-india', id: '6', title: 'Digital Marketing Strategies for the Modern Tech Brand' },
];

// ✅ SEO: Dynamic Meta Tags
export async function generateMetadata({ params }) {
    const post = posts.find((p) => p.slug === params.id);

    if (!post) {
        return {
            title: 'Blog Not Found | JBS Technology',
            description: 'Explore insights on IT and business from JBS Technology blogs.',
            robots: { index: false, follow: false },
        };
    }

    return {
        title: `${post.title} | JBS Technology Blog`,
        description: `Read our blog on "${post.title}" and explore expert insights, innovations, and ideas by JBS Technology.`,
        keywords: 'JBS Technology Blog, IT Consulting, Startup Strategy, Financial Services, Tech Trends, Business Transformation',
        openGraph: {
            title: `${post.title} | JBS Technology`,
            description: `Explore: ${post.title} – a deep dive from the team at JBS Technology.`,
            url: `https://www.jbstechnology.com/blogs/${post.slug}`,
            type: 'article',
            siteName: 'JBS Technology',
            images: [
                {
                    url: 'https://www.jbstechnology.com/images/blog-og.jpg', // customize per post if needed
                    width: 1200,
                    height: 630,
                    alt: `${post.title} - Blog by JBS Technology`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | JBS Technology`,
            description: `Read our take: ${post.title}`,
            images: ['https://www.jbstechnology.com/images/blog-og.jpg'],
        },
    };
}

function Page({ params }) {
    const project = posts.find((p) => p.slug === params.id);

    const breadCrumbs = [
        { label: 'Home', route: '/' },
        { label: 'Blog', route: '/blog' },
    ];

    if (!project) {
        notFound(); // Show 404 page
    }

    return (
        <>
            <HeadingPage
                bgImg={bg1.src}
                heading={project.title}
                breadcrumbs={breadCrumbs}
            />
            <BlogSingle post={project} />
        </>
    );
}

export default Page;
