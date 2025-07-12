import React from 'react';
import Privacy from "@/components/privacy-policy/privacy";
import HeadingPage from "@/components/global/headingPage";
import bg1 from "../../assets/images/blog/b-1.webp";

function Page() {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Privacy Policy'}/>
            <Privacy/>
        </>
    );
}

export default Page;