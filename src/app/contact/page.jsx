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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4423.12279067631!2d72.88773985240977!3d21.2164534994015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c653d90c978a55f%3A0x5b466180ab933d3d!2sJBS%20Technology!5e0!3m2!1sen!2sin!4v1751617746451!5m2!1sen!2sin"
                    width="100%" height="500" style={{border : 0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>

        </>
    );
}

export default Page;