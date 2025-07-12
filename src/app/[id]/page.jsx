import React from 'react';
import DevlopTogether from "@/components/singleCapability/devlopTogether";
import Servicess from "@/components/singleCapability/service";
import OurApproach from "@/components/singleCapability/ourApproach";
import Collaborate from "@/components/singleCapability/collaborate";
import Faqs from "@/components/singleCapability/faqs";

function Page() {
    return (
        <>
         <DevlopTogether/>
            <Servicess />
            <OurApproach />
             <DevlopTogether/>
             <Collaborate/>
             <Faqs/>
        </>
    );
}

export default Page;