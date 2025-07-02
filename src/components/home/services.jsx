import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Heading from "../global/heading";
import portfolio1 from "../../assets/images/home/services/portfolio-1.jpg";
import portfolio2 from "../../assets/images/home/services/portfolio-2.jpg";
import portfolio3 from "../../assets/images/home/services/portfolio-3.jpg";
import portfolio4 from "../../assets/images/home/services/portfolio-4.jpg";

const allWorks = [
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio1,
    },
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio2,
    },
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio3,
    },
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio4,
    },
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio1,
    },
    {
        title: "Development",
        heading: "Getting tickets to a big show",
        backImg: portfolio2,
    },
];
const styles = {
    slide: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        height: "550px",
        width: "90%",
    },
};
function Services() {
    return (
        <>
            <Box
                sx={{py: "100px", backgroundColor: 'LightBlueBackground'}}
            >
                <Container maxWidth="xl">
                    <Box sx={{textAlign: "center"}}>
                        <Heading
                            heading={"Services"}
                            description={`Transform your business with advanced technologies`}
                            align="center"
                        />
                    </Box>
                    <Box my={"40px"}>
                        <Grid container>
                            {allWorks.map((item, ind) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    key={ind}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box className="portfolio" sx={styles.slide}>
                                        <Box className="thumbnail-inner" sx={{ height: "100%" }}>
                                            <Box
                                                className="thumbnail"
                                                sx={{ backgroundImage: `url(${item.backImg.src})` }}
                                            />
                                        </Box>
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                padding: "30px",
                                                bottom: "0",
                                                zIndex: "2",
                                            }}
                                        >
                                            <Typography
                                                component={"p"}
                                                sx={{
                                                    color: 'textGray',
                                                    fontSize: "14px",
                                                    letterSpacing: "0.9px",
                                                    mb: "18px",
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                component={"h2"}
                                                sx={{
                                                    color: 'white',
                                                    fontSize: "24px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {item.heading}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                className="button"
                                                sx={{
                                                    mt: "40px",
                                                    fontSize: "13px",
                                                    padding: "7px 18px !important",
                                                    color: `white !important`,
                                                }}
                                            >
                                                CASE STUDY
                                            </Button>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Services;