import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from '../../../assets/images/home/industries/invest-investment-financial-income-profit-costs-concept_53876-128112.avif'

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Private Equity',route: '/home/private-equity'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Private Equity'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we provide advanced digital tools tailored for the dynamic world of private equity. Our solutions help firms streamline deal sourcing, enhance portfolio management, and gain deeper insights through real-time analytics and reporting. By integrating automation, secure data management, and AI-driven forecasting, we enable private equity firms to make faster, smarter investment decisions and maximize value creation. With a strong focus on performance, compliance, and scalability, JBS Technology is the trusted technology partner for modern private equity operations.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;