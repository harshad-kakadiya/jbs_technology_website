'use client';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {useRef} from "react";
import img1 from "../../assets/images/home/industries/img1.jpg";
import img2 from "../../assets/images/home/industries/img2.jpg";
import img3 from "../../assets/images/home/industries/img3.jpg";
import img4 from "../../assets/images/home/industries/img4.jpg";
import img5 from "../../assets/images/home/industries/img5.jpg";
import img6 from "../../assets/images/home/industries/img6.jpg";
import img7 from "../../assets/images/home/industries/img7.jpg";
import img8 from "../../assets/images/home/industries/img8.jpg";
import WestIcon from "@mui/icons-material/West";
import PowerOutlinedIcon from '@mui/icons-material/PowerOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import EastIcon from "@mui/icons-material/East";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {useRouter} from "next/navigation";

function Industries() {
    const swiperRef = useRef(null);
    const router = useRouter();
    const allIndustries = [
        {
            title: "Private Equity",
            icon: <PowerOutlinedIcon/>,
            img: img1,
        },
        {
            title: "Technology",
            icon: <DevicesOutlinedIcon/>,
            img: img2,
        },
        {
            title: "Healthcare",
            icon: <LocalHospitalOutlinedIcon/>,
            img: img3,
        },
        {
            title: "Real Estate",
            icon: <HomeOutlinedIcon/>,
            img: img4,
        },
        {
            title: "Finance",
            icon: <AccountBalanceOutlinedIcon/>,
            img: img5,
        },
        {
            title: "Education",
            icon: <SchoolOutlinedIcon/>,
            img: img6,
        },
        {
            title: "Retail",
            icon: <ShoppingCartOutlinedIcon/>,
            img: img7,
        },
        {
            title: "Transportation",
            icon: <DirectionsCarOutlinedIcon/>,
            img: img8,
        },
    ];

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    return (
        <Box className={'industries'}>
            <Box sx={{my: 10}}>
                <Container maxWidth={'xl'}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <Box component={'h2'} sx={{fontSize: 45, fontWeight: 600}}>Industries</Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component={'p'} sx={{color: 'cardTextGrey', fontWeight: 500}}>
                                Our expertise spans 13 industries from banking, insurance, telecommunications, media,
                                entertainment, distribution, retail, to many more.</Box>
                        </Grid>
                        <Grid item xs={2} sx={{display:{xs:'none',md:'block'}}}>
                            <Box sx={{position: 'relative'}}>
                                <Button
                                    className="swiper-button-prev1"
                                    sx={{
                                        color: 'cardTextGrey',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        border: '1px solid gray',
                                        borderRadius: '50%',
                                        height: '75px',
                                        width: '75px',
                                        p: 2.5,
                                        display: {xs: "none", md: "flex"},
                                        transition: '0.5s',
                                        "&:hover": {
                                            transform: 'scale(0.8)',
                                        },
                                    }}
                                    onClick={handlePrev}
                                >
                                    <WestIcon/>
                                </Button>
                                <Button
                                    className="swiper-button-next1"
                                    sx={{
                                        color: 'cardTextGrey',
                                        position: 'absolute',
                                        top: 0,
                                        right: 12,
                                        border: '1px solid gray',
                                        borderRadius: '50%',
                                        height: '75px',
                                        width: '75px',
                                        p: 2.5,
                                        display: {xs: "none", md: "flex"},
                                        transition: '0.5s',
                                        "&:hover": {
                                            transform: 'scale(0.8)',
                                        },
                                    }}
                                    onClick={handleNext}
                                >
                                    <EastIcon/>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next1",
                    prevEl: ".swiper-button-prev1",
                }}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
            >
                {allIndustries.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box onClick={() => router.push('/home/industries')}
                             sx={{
                                 width: '100%',
                                 transition: '0.5s',
                                 overflow: 'hidden',
                                 ':hover img': {filter: 'grayscale(0%) !important'},
                                 ':hover ': {transform: 'scaleX(1.05)'},
                             }}>
                            <Box sx={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                border: '1px solid #E7E7E7'
                            }}>
                                <Box sx={{p: {xs:'70px 7px',md:'80px 8px',sm:'100px 10px'}}}>
                                    <Box sx={{' svg': {fontSize: {xs:'50px',md:'65px'}}}}>
                                        {item.icon}
                                    </Box>
                                    <Box sx={{my: 1, fontSize: 17}}>{item.title}</Box>
                                </Box>
                            </Box>
                            <Box>
                                <Image src={item.img} alt={item.img} style={{width: '100%', height: '100%', filter: 'grayscale(90%)',mb: '-10px'}}/>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>

        </Box>
    );
}

export default Industries;