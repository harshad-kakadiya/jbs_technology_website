import headingPage from '../../components/global/headingPage';
import bg1 from '../../assets/images/blog/b-1.webp';

import Newsletter from '../../components/global/newsletter';
import HeadingPage from "../../components/global/headingPage";
import Posts from "../../components/blog/posts";
import Blogslider from "../../components/blog/blogslider";
import Experiences from "../../components/portfolio/caseStudy/experiences";
import TechUse from "../../components/portfolio/caseStudy/techUse";
import MediaProject from "../../components/portfolio/caseStudy/mediaProject";
import Socialmedia from "../../components/portfolio/socialmedia";

const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Blogs',route: '/blog'},
]
const Page = () => {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Blogs'} breadcrumbs={breadCrumbs}/>
            <Newsletter />
            <Blogslider/>
            <Posts/>
            {/*<Socialmedia/>*/}
            {/*<Experiences/>*/}
            {/*<TechUse/>*/}
            {/*<MediaProject/>*/}



        </>
    );
}

export default Page;