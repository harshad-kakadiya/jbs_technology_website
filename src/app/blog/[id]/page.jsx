"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import BlogSingle from "../../../components/blog/blogSingle";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";

const posts = [
    { slug: 'marketing', id: '1', title: '5 Impactful Elements That Promote IT and Business' },
    { slug: 'startup-consulting', id: '2', title: 'Revolutionizing the Future of Financial Services' },
    { slug: 'corporate', id: '2', title: 'A Guide to Embracing Meaningful Change in Banking' },
    { slug: 'startup', id: '2', title: 'For the Wealthy, Work Is the New Retirement' },
    { slug: 'consulting', id: '2', title: 'Providing best service for customers' },
    { slug: 'corporatee', id: '2', title: 'A New Age for Trade & Supply Chain Finance' },
];

function Page() {
    const { id } = useParams();
    const project = posts.find((p) => p.slug === id);

    const breadCrumbs = [
        { label: "Home" , route: '/' },
        { label: 'Blog', route: '/blog' },
    ];

    if (!project) {
        return (
            <div className="text-center py-20 text-white text-xl">
                Blog not found.
            </div>
        );
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