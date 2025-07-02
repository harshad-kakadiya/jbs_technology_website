import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from '../../../assets/images/home/industries/everything-will-be-awesome-group-young-people-casual-clothes-working-modern-office.jpg'

function Page() {
    const breadCrumbs = [
        {label: 'Home', route: '/'},
        {label: 'Education', route: '/home/education'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Education'} breadcrumbs={breadCrumbs}/>

            <Sector
                description={'At JBS Technology, we believe education is the foundation for innovation and progress. Our mission is to bridge the gap between traditional learning and modern digital tools by offering smart, scalable, and future-ready solutions for schools, colleges, and institutions. From interactive e-learning platforms to AI-powered classroom management systems, we empower educators to deliver personalized and engaging learning experiences. With a strong focus on accessibility and adaptability, JBS Technology is transforming how knowledge is delivered and received—making learning more effective, inclusive, and inspiring for the next generation.'}
                image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;