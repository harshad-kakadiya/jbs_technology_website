import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from '../../../assets/images/home/industries/6256458.jpg'

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Finance',route: '/home/finance'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Finance'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we are revolutionizing the financial sector with smart, secure, and scalable tech solutions. Our cutting-edge financial software helps banks, fintech companies, and financial institutions streamline operations, enhance customer experiences, and ensure data security. From automated billing systems to AI-driven analytics and real-time reporting, we empower businesses to make smarter financial decisions with confidence. With a strong focus on compliance and innovation, JBS Technology delivers future-ready solutions that drive growth, efficiency, and trust in the world of finance.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;