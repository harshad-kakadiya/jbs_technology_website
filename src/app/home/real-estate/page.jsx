import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from "../../../assets/images/home/industries/modern-creative-communication-internet-network-connection-smart-city_31965-7261.avif";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Real Estate',route: '/home/real-estate'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Real Estate'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we help real estate companies embrace digital transformation to stay ahead in a competitive market. Our smart solutions simplify property management, automate workflows, and enhance the buying, selling, and leasing experience for both agents and clients. From virtual tours and CRM integration to AI-powered market insights and smart contract systems, we equip real estate businesses with the tools they need to operate efficiently and deliver exceptional service. With innovation at the core, JBS Technology is shaping the future of real estate—one property at a time.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;