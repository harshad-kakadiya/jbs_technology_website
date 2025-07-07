import React from 'react';
import Service from "../../components/services/service";
import BusinessVenture from "../../components/services/businessventure";
import Ourproducts from "../../components/services/ourproducts";
import bg1 from "../../assets/images/blog/b-1.webp";
import HeadingPage from "../../components/global/headingPage";
import Software from "@/components/services/software";
import KeyBenefits from "@/components/services/keyBenefits";
import HowItWorks from "@/components/services/howItWorks";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Services',route: '/services'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Services'} breadcrumbs={breadCrumbs}/>
            <Software/>
            <KeyBenefits/>
            {/*<Service />*/}
            <BusinessVenture/>
            <HowItWorks/>
            <Ourproducts/>
        </>
    );
}

export default Page;