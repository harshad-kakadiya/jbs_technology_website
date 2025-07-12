import React from 'react';
import {Box} from "@mui/material";
import DevlopTogether from "@/components/singleCapability/devlopTogether";
import Servicess from "@/components/singleCapability/service";
import OurApproach from "@/components/singleCapability/ourApproach";

function Page() {
    return (
        <>
         <DevlopTogether/>
            <Servicess />
            <OurApproach />
        </>
    );
}

export default Page;