import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Manufacturing',route: '/Manufacturing/1'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Manufacturing'} breadcrumbs={breadCrumbs}/>

            <Sector/>
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;