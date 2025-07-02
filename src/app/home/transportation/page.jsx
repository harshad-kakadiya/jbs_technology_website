import React from 'react';
import Enterprise from "../../../components/home/manufacturing/enterprise";
import Sector from "../../../components/home/manufacturing/sector";
import CostomerField from "../../../components/home/manufacturing/costomerField";
import HeadingPage from "../../../components/global/headingPage";
import bg1 from "../../../assets/images/blog/b-1.webp";
import image from "../../../assets/images/home/industries/vehicles-laptop-supply-chain-representation_23-2149853161.avif";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Trasportation',route: '/home/trasportation'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Trasportation'} breadcrumbs={breadCrumbs}/>

            <Sector
                    description={'At JBS Technology, we deliver innovative digital solutions that optimize and transform the transportation industry. Our technology helps logistics companies, fleet operators, and transit systems streamline operations, reduce costs, and improve safety. From real-time vehicle tracking and route optimization to automated scheduling and predictive maintenance, we empower transportation providers to operate with greater efficiency and reliability. With a focus on connectivity, scalability, and data-driven insights, JBS Technology is paving the way for smarter, faster, and more sustainable mobility solutions.'}
                    image={image}
            />
            <CostomerField/>
            <Enterprise/>
        </>
    );
}

export default Page;