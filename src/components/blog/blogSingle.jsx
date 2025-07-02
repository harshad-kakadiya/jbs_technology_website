import React from "react";
import { Box, Typography, Avatar, IconButton, Divider, Grid, Container, Button, TextField, CardContent, Link, InputAdornment, Stack, } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LabelIcon from "@mui/icons-material/Label";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import photo from "../../assets/images/blog/bolg/author-96x96.jpg";
import single1 from "../../assets/images/blog/bolg/single1.webp";
import single2 from "../../assets/images/blog/bolg/single2.webp";
import single3 from "../../assets/images/blog/bolg/single3.webp";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ShareIcon from "@mui/icons-material/Share";
import ReplyIcon from "@mui/icons-material/Reply";

import Post1 from "../../assets/images/blog/bolg/p7-152x164.webp";
import Post2 from "../../assets/images/blog/bolg/p6-152x164.webp";
import Post3 from "../../assets/images/blog/bolg/p3-152x164.webp";
import SearchIcon from "@mui/icons-material/Search";

const BlogSingle = () => {
  const comments = [
    {
      id: 1,
      author: "Heather Smith",
      date: "April 24, 2024, at 9:58 am",
      avatar: photo,
      text: "Sed at nulla vel elit molestie rutrum non nec orci. Mauris varius, odio rutrum iaculis sagittis, erat urna luctus nisl, at tempor turpis mi at diam. Vestibulum ullamcorper neque eu sapien congue, a ultrices risus faucibus. Ut et felis non ipsum maximus laoreet. Curabitur iaculis bibendum.",
    },
    {
      id: 2,
      author: "Heather Smith",
      date: "April 25, 2024, at 3:10 am",
      avatar: photo,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, eros et scelerisque hendrerit, nisi augue placerat metus, at consequat justo lacus a ligula. Integer eget leo ac neque sagittis scelerisque ut non urna. Aenean suscipit velit ut libero viverra mollis et sagittis arcu.",
    },
    {
      id: 3,
      author: "Heather Smith",
      date: "April 25, 2024, at 3:11 am",
      avatar: photo,
      text: "As the world continues to fight COVID-19 some property owners are searching...",
    },
  ];

  const categories = [
    { name: "Business Consulting", count: 2 },
    { name: "Corporate", count: 4 },
    { name: "IT Solutions", count: 1 },
    { name: "Marketing", count: 1 },
    { name: "Startup Consulting", count: 5 },
  ];

  const recentPosts = [
    {
      title: "5 Impactful Elements That",
      date: "23 April 2024",
      image: Post1,
    },
    {
      title: "Revolutionizing the Future",
      date: "23 April 2024",
      image: Post2,
    },
    {
      title: "A Guide to Embracing",
      date: "23 April 2024",
      image: Post3,
    },
  ];

  const tags = [
    "Analysis",
    "Business",
    "Business Consulting",
    "Consulting",
    "Corporate",
    "Data",
    "Marketing",
    "Solutions",
    "Statistics",
    "Stocks",
    "Trading",
  ];

  return (
    <Box sx={{ backgroundColor: "#F5F5F5" , padding:"120px 0" }}>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={8}>
            <Box>
              <Box sx={{ maxWidth: "850px", margin: "0 auto", padding: "16px" }} >
                <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mb: 2, gap: 2, justifyContent: { xs: "center", sm: "start" }, }} >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src={photo.src} alt="Admin" sx={{ width: 30, height: 30 }} />
                    <Typography variant="body1" sx={{ fontSize: "15px" }}>
                      By Admin
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: { xs: 2, sm: 3 }, color: "gray", width: { xs: "100%", sm: "auto" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                      <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }} >
                        <CalendarMonthIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                      </IconButton>
                      <Typography variant="body2" sx={{ color: "black" }}>23 Apr 24</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                      <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }}>
                        <LabelIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                      </IconButton>
                      <Typography variant="body2" sx={{ color: "black" }}>Marketing</Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }}>
                      <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }}>
                        <ChatBubbleOutlineIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                      </IconButton>
                      <Typography variant="body2" sx={{ color: "black", }}>3 Comments</Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ mb: '43px', pt: '16px' }} />

                <Typography variant="body1" sx={{ color: "#4B535D", mb: 2, fontSize: "15px", lineHeight: "25px" }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  ultricies, erat ut commodo vulputate, elit purus porta leo, ut
                  rutrum lorem enim eu lacus. Quisque lacinia mollis congue.
                  Quisque condimentum cursus nulla, id venenatis quam imperdiet
                  eu. Duis tempor nisl odio, id auctor augue commodo vel.
                </Typography>
                <Typography variant="body1" sx={{ color: "#4B535D", mb: 6, fontSize: "15px", lineHeight: "25px" }} >
                  Praesent laoreet convallis tellus. Donec nulla orci, rutrum
                  sit amet nisi at, pharetra auctor justo. Pellentesque et
                  malesuada odio. Curabitur lectus erat, malesuada non dolor
                  vel, pellentesque scelerisque nunc. Morbi non aliquam sapien,
                  id gravida tellus. Sed eleifend vulputate volutpat. Duis id
                  erat nec ipsum elementum luctus nec vel nibh.
                </Typography>

                <Box component="img" src={single1.src} alt="Blog Visual" sx={{ width: "100%", height: "auto", }} />

                <Typography sx={{ fontWeight: "500", m: '40px 0px 17px', fontSize: "23px", color: "#0A1119" }}>
                  The Importance of Quality Websites in the Skincare Industry
                </Typography>

                <Typography variant="body1" sx={{ color: "#4B535D", mb: 3, fontSize: "15px" }} >
                  Donec ut consectetur augue, at gravida orci. Donec nec est
                  quis massa suscipit faucibus vitae id tellus. Vestibulum et
                  leo sem. Aliquam viverra arcu mattis orci vestibulum
                  tristique. Sed in gravida arcu.
                </Typography>

                <Typography sx={{ fontWeight: "500", mb: 1, fontSize: "17px", color: "#0A1119" }}>
                  1. Consumer Perception and Trust
                </Typography>
                <Typography variant="body1" sx={{ color: "#4B535D", mb: 3 }} >
                  Vestibulum tempor elit ac tellus ornare luctus. Donec ultrices
                  placerat elit id aliquam.
                </Typography>

                <Typography sx={{ fontWeight: "500", mb: 1, fontSize: "17px", color: "#0A1119" }}>
                  2. User Experience (UX) and Navigation
                </Typography>
                <Typography variant="body1" sx={{ color: "#4B535D", mb: '43px' }} >
                  Cras ac porttitor est, non tempor justo. Aliquam at gravida
                  ante, vitae suscipit nisi. Sed turpis lectus, convallis non
                  rhoncus a, aliquam eu lectus. Nunc ultrices justo id tellus
                  bibendum viverra.
                </Typography>

                <Box sx={{ backgroundColor: "#121C27", color: "common.white", padding: { xs: "16px", sm: "24px" }, mb: 3, }}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, mb: 3, gap: { xs: 2, sm: 3 }, }} >
                    <Avatar sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, marginRight: { xs: 0, sm: "16px" }, }} >
                      <FormatQuoteIcon fontSize="large" />
                    </Avatar>
                    <Typography variant="body1" sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: '400', lineHeight: '25px' }} >
                      A team of 30 seems like quite a significant resource to
                      focus on the digital pound,” Ian Taylor, an adviser to the
                      trade association CryptoUK, told the Times. “It shows the
                      impact it would have, and that the bank are serious about
                      it.
                    </Typography>
                  </Box>

                  <Typography sx={{ fontWeight: "500", marginTop: "18px", borderTop: "1px solid rgba(255, 255, 255, .15)", pt: 2, fontSize: { xs: "13px", sm: "15px" }, textAlign: { xs: "center", sm: "left" }, }} >
                    Mitchel Krytok – Quote
                  </Typography>
                </Box>

                <Typography variant="body1" sx={{ color: "#4B535D", mt: '38px', fontSize: "15px" }}>
                  Vestibulum luctus, leo eget congue iaculis, leo erat pharetra
                  nibh, finibus porta neque tellus ut erat. Aenean vulputate
                  velit quis pellentesque auctor. Integer eget scelerisque
                  neque, et tincidunt nunc. Etiam et pellentesque enim. Nam
                  efficitur ex nec arcu molestie.
                </Typography>

                <Typography sx={{ fontWeight: "600", m: '45px 0px 17px 0px', fontSize: "23px", color: "#0A1119" }}>
                  The Impact of Skincare Business Consulting Services
                </Typography>

                <Typography sx={{ color: "#4B535D", mb: 3, fontSize: "15px", lineHeight: "25px" }}>
                  Maecenas vestibulum iaculis orci. In ut cursus lectus. Nullam
                  semper vel ante at imperdiet. Quisque posuere vitae sem ac
                  elementum. Sed a commodo mauris. Aliquam blandit, turpis ut
                  faucibus consequat, augue tellus aliquet metus, eu posuere
                  nibh risus et sapien. Morbi sit amet lorem auctor lacus
                  efficitur ornare.
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Box>
                        <Typography component="img" src={single2.src} alt="Blog Visual" sx={{ width: "100%", height: "auto", }}/>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box>
                        <Typography component="img" src={single3.src} alt="Blog Visual" sx={{ width: "100%", height: "auto", }}/>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Typography sx={{ color: "#4B535D", mb: 2, fontSize: "15px", lineHeight: "25px" }}>
                  Maecenas vestibulum iaculis orci. In ut cursus lectus. Nullam
                  semper vel ante at imperdiet. Quisque posuere vitae sem ac
                  elementum. Sed a commodo mauris. Aliquam blandit, turpis ut
                  faucibus consequat, augue tellus aliquet metus, eu posuere
                  nibh risus et sapien. Morbi sit amet lorem auctor lacus
                  efficitur ornare.
                </Typography>

                <Typography sx={{ color: "#4B535D", mb: 3, fontSize: "15px", lineHeight: "25px" }} >
                  Phasellus interdum enim erat, sed viverra leo viverra vel.
                  Donec vel dictum mauris, eu gravida arcu. Sed finibus finibus
                  felis in facilisis. Maecenas nec justo et purus gravida
                  consectetur. Ut pharetra, dui a vulputate ultrices, nisi lacus
                  imperdiet urna, vel luctus ante lectus non ipsum. Pellentesque
                  non tortor nec odio egestas placerat eget sit amet
                  ex.Vestibulum elit nulla, facilisis et felis sed, egestas
                  faucibus lorem.
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #d3d5d6", mt: '40px', pb: '23px', flexDirection: { xs: "column", sm: "row" }, }}>
                  <Box>
                    <Button sx={{ backgroundColor: "#121c27", color: "white", fontSize: "13px", borderRadius: "50px", padding: "5px 25px", mr: 1, mb: { xs: 1, sm: 0 }, textTransform: "initial" }} >
                      Business Consulting
                    </Button>
                    <Button sx={{ backgroundColor: "#121c27", color: "white", fontSize: "13px", borderRadius: "50px", padding: "5px 20px", textTransform: "initial" }} >
                      Solutions
                    </Button>
                  </Box>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: 1, mt: { xs: 2, sm: 0 }, }} >
                    <Box sx={{ backgroundColor: "#e7e7e7", padding: 1, width: "40px", height: "40px", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                      <ShareIcon sx={{ fontSize: "18px", color: "#121c27", }} />
                    </Box>
                    <Typography sx={{ fontSize: "17px", fontWeight: 600, color: "#0a1119" }}>Share</Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h4" sx={{ mt: '70px', mb: '30px', fontSize: "35px", fontWeight: 600 }}>
                    3 Comments
                  </Typography>
                  {comments.map((comment,index) => (
                    <Box key={index + 1} sx={{ mb: 4 }}>
                      <Box>
                        <Box
                          sx={{ display: { md: "flex", xs: "block" }, gap: 3 }}
                        >
                          <Avatar alt={comment.author} src={comment.avatar.src} sx={{ width: 69, height: 69, mr: 1 }} />
                          <Box
                            sx={{ display: "flex", justifyContent: "space-between", width: "100%", flexDirection: { xs: "column", sm: "row" }, }}>
                            <Box>
                              <Typography variant="h4" sx={{ fontSize: '17px', fontWeight: '600', lineHeight: '26px', mt: '8px', mb: '3px', color: "#0a1119" }}>
                                {comment.author}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: "#4b535d", fontWeight: 500, fontSize: "15px", lineHeight: "28px" }}
                              >
                                {comment.date}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "black",
                                color: "white",
                                fontSize: "13px",
                                borderRadius: "50px",
                                padding: "4px 20px",
                                height: '32px',
                                gap: 1,
                                cursor: "pointer",
                              }}
                            >
                              <ReplyIcon sx={{ fontSize: "16px" }} />
                              Reply
                            </Box>
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="body1" sx={{ color: '#4b535d', mt: '22px', fontSize: '15px', lineHeight: '26px' }}>
                            {comment.text}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ margin: "5px 0" }} />

                <Box>
                  <Box sx={{ pt: '70px' }}>
                    <Typography
                      variant="h4"
                      sx={{ fontWeight: 600, mb: '9px', fontSize: '35px', color: "#0A1119" }}
                      gutterBottom
                    >
                      Leave A Comment
                    </Typography>
                    <Typography variant="body2" gutterBottom sx={{ mt: '16px', mb: '28px', fontSize: "15px", color:"#0A1119" }} >
                      Your email address will not be published. Required fields
                      are marked *
                    </Typography>

                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth placeholder="Your Name" variant="outlined" required InputProps={{ sx: { borderRadius: "50px", backgroundColor: "#FFF", } }} />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField fullWidth placeholder="Email Address" variant="outlined" required InputProps={{ sx: { borderRadius: "50px", backgroundColor: "#FFF", } }} />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField fullWidth placeholder="Your Comment..." variant="outlined" multiline rows={4} required InputProps={{ sx: { borderRadius: "30px", backgroundColor: "#FFF", }, }} />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>



          <Grid item xs={12} lg={4}>
            <Box sx={{ position: 'sticky', top: 0 }}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2, }}>
                <Box sx={{ maxWidth: 400, border: "1px solid #d7d7d7", textAlign: "center", mb: "50px", padding: 3, }}>
                  <Avatar alt="Profile Picture" src={photo.src} sx={{ width: "207px", height: "auto", margin: "0 auto", marginBottom: 2, }} />
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ m: "30px 0px 20px 0px" }}>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 500, marginBottom: "0px", fontSize: "17px", }} >
                        Heather Smith
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "#848B94", fontSize: "15px", fontFamily: ' "Public Sans", Sans-serif', }} >
                      Herrington Editor Post Blog
                    </Typography>
                    <Divider sx={{ my: "15px" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "#4B535D", fontFamily: ' "Public Sans", Sans-serif', fontSize: "15px", lineHeight: "25px", }}>
                      Cras ac porttitor est, non tempor justo. Aliquam at
                      gravida ante, vitae suscipit nisi. Sed turpis lectus
                      tellus bibendum viverra.
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Grid container justifyContent="center" spacing={2}>
                      <Grid item>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ color: "inherit", fontWeight: 600, fontSize: "15px", }}>
                          FaceBook
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ color: "inherit", fontWeight: 600, fontSize: "15px", }}>
                          Twitter / X
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="#"
                          underline="none"
                          sx={{ color: "inherit", fontWeight: 600, fontSize: "15px", }}>
                          Instagram
                        </Link>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2, mb: "50px", }}>
                  <TextField
                    variant="standard"
                    placeholder="Search..."
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon sx={{ color: "#333" }} />
                        </InputAdornment>
                      ),
                      disableUnderline: false,
                    }}
                    sx={{
                      width: "100%",
                      "& .MuiInputBase-input": {
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#333",
                      },
                      "& .MuiInput-underline:before": {
                        borderBottom: "1px solid #333",
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "1px solid #555",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ backgroundColor: "#f9f9f9", border: "1px solid #DDD", mx: "auto", mb: "50px", }}>
                  <Box sx={{ backgroundColor: "#000" }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: "23px", color: "#fff", fontWeight: "500", letterSpacing: "0.8px", p: "20px 0px 20px 35px", }}>
                      Categories
                    </Typography>
                  </Box>

                  <Box>
                    {categories.map((category, index) => (
                      <Box key={index}>
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="space-between"
                          sx={{ p: "15px 35px", }} >
                          <Typography
                            sx={{ color: "#0a1320", fontSize: "15px", fontWeight: "500", }} >
                            {category.name}
                          </Typography>
                          <Typography
                            sx={{ fontWeight: 600, color: "#333", }} >
                            {category.count}
                          </Typography>
                        </Grid>
                        {index < categories.length - 1 && (
                          <Divider sx={{ borderColor: "#ddd" }} />
                        )}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ border: "1px solid #DDD", mb: "40px", }} >
                  <Box sx={{ backgroundColor: "#000" }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: "23px", color: "#fff", fontWeight: "500", letterSpacing: "0.8px", p: "20px 0px 20px 35px", }} >
                      Latest Posts
                    </Typography>
                  </Box>

                  <Box sx={{ p: "35px" }}>
                    {recentPosts.map((post, index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb:
                            index !== recentPosts.length - 1 ? "25px" : "none",
                          borderBottom:
                            index !== recentPosts.length - 1
                              ? "1px solid #d7d7d7"
                              : "none",
                          pb:
                            index !== recentPosts.length - 1 ? "25px" : "none",
                        }}
                      >
                        <Avatar variant="square" src={post.image.src} alt={post.title} sx={{ width: "76px", height: "76px", bgcolor: "#FFF", marginRight: "16px", overflow: "hidden", "& img": { transition: "transform 0.8s ease", transform: "scale(1)", }, "&:hover img": { transform: "scale(1.1)", }, }} />

                        <Box>
                          <Box>
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "13px", color: "#4b535d", lineHeight: "1", display: "block", }} >
                              {post.date}
                            </Typography>
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{ mt: "18px", mb: 0, fontSize: "17px", color: "#1a191d", fontWeight: "400", maxHeight: "45px", }}>
                            {post.title}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{ border: "1px solid #DDD", mb: "40px", }}>
                  <Box sx={{ backgroundColor: "#000" }}>
                    <Typography
                      variant="h2"
                      sx={{ fontSize: "23px", color: "#fff", fontWeight: "500", letterSpacing: "0.8px", p: "20px 0px 20px 35px", }} >
                      Tags
                    </Typography>
                  </Box>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ p: "35px" }} >
                    {tags.map((tag, index) => (
                      <Box key={index}>
                        <Typography sx={{ fontSize: "15px", color: "#4b535d", display: "inline-block", lineHeight: "30px", position: "relative", transition: "0.4s", "&:hover": { textDecoration: "underline", color: "#000", }, }}>
                          {tag}{" "}
                        </Typography>
                        <Typography variant="span" sx={{ ml: 1 }}>
                          /
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>

              <Box>
                <Box sx={{ border: "1px solid #DDD", mb: "40px", }}>
                  <Box sx={{ backgroundColor: "#000" }}>
                    <Typography variant="h2" sx={{ fontSize: "23px", color: "#fff", fontWeight: "500", letterSpacing: "0.8px", p: "20px 0px 20px 35px", }} >
                      Subscribe Newsletter
                    </Typography>
                  </Box>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ p: "35px" }} >
                    <Box sx={{ textAlign: "start" }}>
                      <Typography
                        sx={{ color: "#4B535D", fontSize: "15px", lineHeight: "25px", pb: "22px", }} >
                        Sign up to receive notifications about the latest news and events from us!
                      </Typography>
                      <TextField fullWidth placeholder="  *Email address..." variant="outlined" sx={{ height: "50px", marginBottom: "16px", "& .MuiOutlinedInput-root": { borderRadius: "50px", }, }} />
                      <Button fullWidth variant="contained" sx={{ fontSize: "15px", fontWeight: "400", textTransform: "capitalize", lineHeight: "50px", borderRadius: "50px", bgcolor: "#121C27", }}>  Subscribe Now!</Button>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSingle;
