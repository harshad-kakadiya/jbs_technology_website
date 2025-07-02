import {Box, Grid, Typography, Container} from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import OpenInFullOutlinedIcon from "@mui/icons-material/OpenInFullOutlined";
// import img1 from '../../assets/images/home/value-proposition/wallet.png'
// import img2 from '../../assets/images/home/value-proposition/network.png'
// import img3 from '../../assets/images/home/value-proposition/file.png'
// import img4 from '../../assets/images/home/value-proposition/scale.png'

const valuePropositions = [
    {
        title: "Cost-Effectiveness",
        description:
            "We guarantee to provide affordable business consulting solutions that help you reduce costs and improve your profits.",
        icon: <CloudOutlinedIcon fontSize="large"/>,
    },
    {
        title: "Innovative Technology",
        description:
            "We utilize cutting-edge technologies to deliver modern and efficient solutions.",
        icon: <CloudOutlinedIcon fontSize="large"/>,
    },
    {
        title: "Industry Expertise",
        description:
            "Our team has deep expertise across various industries to meet your unique needs.",
        icon: <FolderOutlinedIcon fontSize="large"/>,
    },
    {
        title: "Scale Expansion",
        description:
            "We help you expand your business scale with strategic solutions and guidance.",
        icon: <OpenInFullOutlinedIcon fontSize="large"/>,
    },
];

const ValuePropositions = () => {
    return (
        <Container maxWidth="xl" sx={{paddingY: 6}}>
            <Grid container spacing={0} justifyContent="center">
                {valuePropositions.map((item, index) => (
                    <Grid
                        item
                        xs={6}
                        md={3}
                        key={index}
                        sx={{
                            position: "relative",
                            px: {xs:2,sm:4},
                            "&:not(:last-child)::after": {
                                content: '""',
                                position: "absolute",
                                top: "25%",
                                bottom: "25%",
                                right: "-1px",
                                width: "1px",
                                backgroundColor: "#d3d3d3",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: "center",
                                overflow: "hidden",
                                position: "relative",
                                height: {xs: '190px',md:'210px'},
                                borderRadius: "8px",
                                transition: "transform 0.5s ease",
                                "&:hover .contain": {
                                    transform: "translateY(-60px)",
                                },
                                "&:hover .icon": {
                                    transform: "scale(0)",
                                },

                            }}
                        >
                            <Box className={'contain'} sx={{transform: "translateY(40px)",transition: "transform 0.5s ease",}}>
                                <Box
                                    className="icon"
                                    sx={{
                                        marginBottom: 2,
                                        color: "darkGray",
                                        ' svg': {fontSize: {xs:65,lg:75}},
                                        transition: "transform 0.4s ease",
                                    }}
                                >
                                    {item.icon}
                                </Box>
                                {/*<Image className="icon"*/}
                                {/*    src={item.icon.src}*/}
                                {/*    width={100} // Adjust width as needed*/}
                                {/*    height={100} // Adjust height as needed*/}
                                {/*    alt="Icon"*/}
                                {/*/>*/}
                                <Typography
                                    className="title"
                                    fontWeight="bold"
                                    sx={{
                                        marginBottom: 1,
                                        mt: 2,
                                        fontSize: {xs:18,sm:23},
                                        fontWeight: 500,
                                        transition: "transform 0.4s ease",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Box
                                    className="line"
                                    sx={{
                                        width: "65px",
                                        height: "1px",
                                        backgroundColor: "#000",
                                        margin: "0 auto 6px",
                                        my: 2,
                                        transition: "transform 0.4s ease",
                                    }}
                                />
                                <Typography
                                    className="description"
                                    variant="body2"
                                    sx={{
                                        color: "text.secondary",
                                        lineHeight: 1.5,
                                        opacity: 1,
                                        padding: '0px 10px',
                                        transition: "all 0.4s ease",
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ValuePropositions;
