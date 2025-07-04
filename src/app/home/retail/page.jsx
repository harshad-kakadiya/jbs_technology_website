import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from "../../../assets/images/home/industries/digital-environment-scene_23-2151873117.jpg";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Retail',route: '/home/retail'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Retail'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we empower retail businesses to thrive in a fast-evolving digital marketplace. Our technology solutions help streamline operations, enhance customer experiences, and drive sales—both online and in-store. From custom eCommerce platforms and inventory management systems to personalized marketing tools and data-driven insights, we deliver smart, scalable solutions tailored to modern retail needs. Whether you\'re a small boutique or a large retail chain, JBS Technology helps you stay ahead of trends and build stronger connections with your customers.'}
                    image={image}
            />
            <CostomerField/>
            {/*<Enterprise/>*/}
        </>
    );
}

export default Page;