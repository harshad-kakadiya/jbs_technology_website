import Modification from "../../components/about/modification";
import AboutSlider from "../../components/about/aboutSlider";
import Business from "../../components/about/business";
import Industry from "../../components/about/industry";
import ProgecksRets from "../../components/about/progecksRets";
import TeamPage from "../../components/about/teamPage";
import Customers from "../../components/about/customers";
import Clients from "../../components/about/clients";
import Collab from "../../components/about/collab";
import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/blog/b-1.webp";


const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'About',route: '/about'},
]

const Page = () => {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'About'} breadcrumbs={breadCrumbs}/>
            <Modification/>
            <AboutSlider/>
            <Business/>
            <Industry/>
            <ProgecksRets/>
            <TeamPage/>
            <Customers/>
            <Clients/>
            <Collab/>
        </>
    );
}

export default Page;