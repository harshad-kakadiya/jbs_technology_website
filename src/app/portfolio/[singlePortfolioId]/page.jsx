import Experiences from "../../../components/portfolio/caseStudy/experiences";
import TechUse from "../../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../../components/portfolio/caseStudy/mediaProject";
import React from "react";
import bg1 from "../../../assets/images/blog/b-1.webp";
import HeadingPage from "../../../components/global/headingPage";


function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'portfolio',route: '/portfolio/1'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'portfolio'} breadcrumbs={breadCrumbs}/>
            <Experiences/>
            <TechUse/>
            <MediaProject/>
        </>
    );
}

export default Page;