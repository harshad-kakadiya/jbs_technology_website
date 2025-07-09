import React from 'react';
import IdeasAndDrive from "@/components/career/ideasAndDrive";
import CompanyValue from "@/components/career/companyValue";
import SeeAbout from "@/components/career/seeAbout";
import SomeofthePerks from "@/components/career/someofthePerks";
import Hiring from "@/components/career/hiring";
import HeadingPage from "@/components/global/headingPage";
import bg1 from "@/assets/images/career/cr1.webp";
import Openings from "@/components/career/openings";

function Page() {

    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Career',route: '/career'},
    ]

    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Career'} breadcrumbs={breadCrumbs}/>
            <IdeasAndDrive/>
            <CompanyValue/>
            <SeeAbout/>
            <SomeofthePerks/>
            <Hiring/>
            <Openings/>
        </>
    );
}

export default Page;