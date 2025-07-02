import HeadingPage from "../../components/global/headingPage";
import bg1 from "../../assets/images/contact/ct1.webp";
import Collaborate from "../../components/contact-us/collaborate";
import Offices from "../../components/contact-us/offices";
import {Box} from "@mui/material";
const breadCrumbs = [
    {label:'Home',route: '/'},
    {label:'Contact',route: '/contact'},
]
function Page() {
    return (
        <>
            <HeadingPage bgImg={bg1.src} heading={'Contact Us'} breadcrumbs={breadCrumbs}/>
            <Collaborate/>
            {/*<Offices/>*/}
            <Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.6549429336176!2d72.89848194725786!3d21.21955690865314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6411e7f31a0a24f5%3A0x1c52672a58347a1d!2sBeyond%20Tech%20Solution!5e0!3m2!1sen!2sin!4v1736485321653!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{
                        border:0
                    }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>

        </>
    );
}

export default Page;