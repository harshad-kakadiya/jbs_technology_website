import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from '../../../assets/images/home/industries/male-doctor-hands-holding-plush-heart.jpg'

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Healthcare',route: '/home/healthcare'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Healthcare'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we are committed to transforming the healthcare industry through intelligent and reliable digital solutions. Our healthcare technologies are designed to enhance patient care, streamline hospital operations, and improve data management. From telemedicine platforms and patient record systems to AI-based diagnostics and remote monitoring tools, we help healthcare providers deliver faster, safer, and more personalized services. With a deep understanding of industry compliance and privacy standards, JBS Technology ensures secure and efficient solutions that support better outcomes for patients and providers alike.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;