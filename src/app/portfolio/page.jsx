import React from 'react';
import Socialmedia from "../../components/portfolio/socialmedia";
import bg1 from "../../assets/images/blog/b-1.webp";
import HeadingPage from "../../components/global/headingPage";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Portfolio',route: '/portfolio'},
]

function Page() {
    return (
        <>

            <HeadingPage bgImg={bg1.src} heading={'Portfolio'} breadcrumbs={breadCrumbs}/>
            <Socialmedia/>
        </>
    );
}

export default Page;