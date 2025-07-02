import React from 'react';
import BlogSingle from "../../../components/blog/blogSingle";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";

function Page(props) {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Single Blog',route: '/singleblog/1'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Single Blog'} breadcrumbs={breadCrumbs}/>
            <BlogSingle/>
        </>
    );
}

export default Page;