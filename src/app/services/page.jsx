import React from 'react';
import Service from "../../components/services/services/service";
import BusinessVenture from "../../components/services/services/businessventure";
import Ourproducts from "../../components/services/services/ourproducts";
import bg1 from "../../assets/images/blog/b-1.webp";
import HeadingPage from "../../components/global/headingPage";

function Page() {
    const breadCrumbs = [
        {label:'Home',route: '/'},
        {label:'Services',route: '/services'},
    ]
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Services'} breadcrumbs={breadCrumbs}/>
            <Service />
            <BusinessVenture/>
            <Ourproducts/>
        </>
    );
}

export default Page;