import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from "../../../assets/images/home/industries/programming-background-collage_23-2149901789.avif";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Technology',route: '/home/technology'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Technology'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, innovation is at the heart of everything we do. We specialize in building advanced technology solutions that help businesses streamline operations, enhance performance, and unlock new opportunities. From custom software development and cloud integration to AI, IoT, and cybersecurity, we provide end-to-end digital solutions tailored to your unique goals. Our team of experts is dedicated to turning complex challenges into smart, scalable systems that drive growth and transformation. With JBS Technology, you\'re not just keeping up with the future—you’re leading it.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;