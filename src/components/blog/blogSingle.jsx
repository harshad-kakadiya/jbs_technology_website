'use client';

import React, { useState } from 'react';
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
import profileimg7 from "../../assets/images/blog/posts/img7.jpg";
import profileimg6 from "../../assets/images/blog/posts/img6.jpeg";
import profileimg5 from "../../assets/images/blog/posts/img5.avif";
import profileimg4 from "../../assets/images/blog/posts/img4.jpg";
import profileimg3 from "../../assets/images/blog/posts/img3.jpg";
import profileimg2 from "../../assets/images/blog/posts/Img2.jpg";
import profileimg8 from "../../assets/images/blog/posts/csdcfad.jpg";

import Post1 from "../../assets/images/blog/bolg/p7-152x164.webp";
import Post2 from "../../assets/images/blog/bolg/p6-152x164.webp";
import Post3 from "../../assets/images/blog/bolg/p3-152x164.webp";
import SearchIcon from "@mui/icons-material/Search";
import {useParams} from 'next/navigation';

const BlogSingle = () => {
  const blogPosts = [
    {
      slug: 'ai-innovation-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '12 July 2024',
      category: 'Artificial Intelligence',
      commentsCount: 5,
      title: 'How AI Is Powering the Next Wave of IT Solutions',
      content: {
        introduction: [
          "Discover how artificial intelligence is transforming IT infrastructure, automation, and user experiences. Leverage AI to streamline operations, enhance decision-making, and unlock new levels of innovation."
        ],
        mainImage: single1,
        sections: [
          {
            title: 'Transforming IT with AI',
            content: "Artificial Intelligence is reshaping IT operations by enabling predictive analytics, intelligent automation, and real-time optimization.",
            subsections: [
              {
                title: '1. Smarter Infrastructure Management',
                content: 'AI tools detect issues proactively and automate responses, reducing downtime and improving reliability.'
              },
              {
                title: '2. Enhanced User Experience',
                content: 'Conversational AI and recommendation systems are improving customer engagement and personalization.'
              }
            ]
          }
        ],
        quote: {
          text: 'AI is no longer just a tool—it’s the engine behind next-gen IT.',
          author: 'Sophia King – AI Strategist'
        },
        images: [single2 , single3],
        conclusion: [
          'From automation to insights, AI is revolutionizing how businesses operate.',
          'Companies investing in AI now will lead tomorrow’s digital landscape.'
        ]
      },
      tags: ['AI', 'Automation', 'Innovation', 'IT Solutions']
    },

    {
      slug: 'agentic-ai-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '11 July 2024',
      category: 'Agentic AI',
      commentsCount: 4,
      title: 'The Rise of Agentic AI in Intelligent Automation',
      content: {
        introduction: [
          'Explore how autonomous AI agents are driving adaptive decision-making and continuous learning.'
        ],
        mainImage: single2,
        sections: [
          {
            title: 'Autonomous Agents at Work',
            content: 'Agentic AI introduces intelligent systems that adapt, learn, and act independently to optimize outcomes.',
            subsections: [
              {
                title: '1. Decision-Making Without Supervision',
                content: 'AI agents handle complex workflows with minimal human intervention, increasing agility.'
              },
              {
                title: '2. Learning Through Feedback Loops',
                content: 'They continuously refine strategies using data-driven feedback mechanisms.'
              }
            ]
          }
        ],
        quote: {
          text: 'Agentic AI will define the next frontier in business automation.',
          author: 'David Chen – Autonomous Systems Expert'
        },
        images: [single1, single3],
        conclusion: [
          'Agentic AI enables businesses to scale intelligently and respond in real-time.',
          'It’s not just automation—it’s autonomy with purpose.'
        ]
      },
      tags: ['Agentic AI', 'Autonomy', 'Business Automation']
    },

    {
      slug: 'web-development-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '10 July 2024',
      category: 'Web Development',
      commentsCount: 3,
      title: 'Modern Web Development Trends for Scalable Solutions',
      content: {
        introduction: [
          'Discover the latest frameworks, best practices, and performance strategies shaping today’s web applications.'
        ],
        mainImage: single3,
        sections: [
          {
            title: 'Future-Proofing Web Applications',
            content: 'Modern web development emphasizes scalability, responsiveness, and performance optimization.',
            subsections: [
              {
                title: '1. Component-Based Architectures',
                content: 'Frameworks like React and Vue.js offer modularity and reusability.'
              },
              {
                title: '2. JAMstack and Headless CMS',
                content: 'Speed and security through decoupled architectures.'
              }
            ]
          }
        ],
        quote: {
          text: 'Scalable web solutions begin with solid architecture and modern tools.',
          author: 'Jane Doe – Frontend Specialist'
        },
        images: [single2],
        conclusion: [
          'Stay ahead with adaptable web technologies and clean code practices.',
          'A fast, secure web app is the backbone of digital success.'
        ]
      },
      tags: ['Web Development', 'Performance', 'Frontend']
    },

    {
      slug: 'mobile-app-development-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '09 July 2024',
      category: 'Mobile App Development',
      commentsCount: 2,
      title: 'Creating Impactful Mobile Apps for a Digital-First World',
      content: {
        introduction: [
          'Learn how businesses are building seamless mobile experiences using cross-platform and native development tools.'
        ],
        mainImage: single3,
        sections: [
          {
            title: 'Mobile-First Engagement Strategies',
            content: 'Today’s users expect intuitive, fast, and personalized mobile experiences.',
            subsections: [
              {
                title: '1. Cross-Platform vs Native',
                content: 'Evaluate trade-offs in performance, cost, and user experience.'
              },
              {
                title: '2. Integration and Responsiveness',
                content: 'Ensure smooth data flow and adaptive layouts across devices.'
              }
            ]
          }
        ],
        quote: {
          text: 'A great app meets users where they are—on the move.',
          author: 'Arjun Patel – App Product Manager'
        },
        images: [single2],
        conclusion: [
          'Mobile apps are more than tools—they’re brand touchpoints.',
          'Designing with the user in mind drives retention and satisfaction.'
        ]
      },
      tags: ['Mobile Development', 'Cross-Platform', 'App Strategy']
    },

    {
      slug: 'ui-ux-design-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '08 July 2024',
      category: 'UI/UX Designing',
      commentsCount: 3,
      title: 'Crafting Exceptional Digital Experiences Through UI/UX',
      content: {
        introduction: [
          'Understand how design thinking, usability, and user research fuel successful digital interfaces.'
        ],
        mainImage: single3,
        sections: [
          {
            title: 'Design That Delivers',
            content: 'UI/UX design is the bridge between user needs and digital solutions.',
            subsections: [
              {
                title: '1. Empathy-Led Research',
                content: 'User research guides intuitive and useful designs.'
              },
              {
                title: '2. Accessibility and Aesthetics',
                content: 'Balance beauty with usability to reach and engage more users.'
              }
            ]
          }
        ],
        quote: {
          text: 'Good design is invisible. Great design is unforgettable.',
          author: 'Lea Tran – UX Researcher'
        },
        images: [single1, single2],
        conclusion: [
          'Prioritize UI/UX to drive conversions and build loyalty.',
          'A seamless interface is your competitive advantage.'
        ]
      },
      tags: ['UI', 'UX', 'User Experience', 'Design Thinking']
    },

    {
      slug: 'digital-marketing-india',
      author: 'Admin',
      authorAvatar: photo,
      date: '07 July 2024',
      category: 'Digital Marketing',
      commentsCount: 4,
      title: 'Digital Marketing Strategies for the Modern Tech Brand',
      content: {
        introduction: [
          'Explore performance marketing, SEO, content strategies, and analytics-driven campaigns that elevate your brand’s digital footprint.'
        ],
        mainImage: single3,
        sections: [
          {
            title: 'Winning in the Digital Arena',
            content: 'Digital marketing is a blend of art, science, and strategy for growth.',
            subsections: [
              {
                title: '1. Performance & SEO',
                content: 'Leverage data to optimize campaigns and increase visibility.'
              },
              {
                title: '2. Content & Storytelling',
                content: 'Connect with audiences through valuable, relevant content.'
              }
            ]
          }
        ],
        quote: {
          text: 'Marketing is no longer about the stuff you make but the stories you tell.',
          author: 'Seth Godin'
        },
        images: [single2],
        conclusion: [
          'Great digital marketing speaks to the right people at the right time.',
          'Craft stories, optimize delivery, and let data lead the way.'
        ]
      },
      tags: ['Marketing', 'SEO', 'Content Strategy', 'Digital Growth']
    }
  ];


  const {id} = useParams();
  const project = blogPosts.find((p) => p.slug === id);

  if (!project) {
    return (
        <div className="text-center py-20 text-white text-xl">
          Project not found.
        </div>
    );
  }

  const blogData = project;

  const [comments, setComments] = useState([
    {
      slug: 'ai-innovation-india',
      commentss: [
        {
          id: 1,
          author: "Raj Mehta",
          date: "July 4, 2025, at 10:15 am",
          avatar: photo,
          text: "Aligning IT with business strategies is something many companies still struggle with. Great read!"
        },
        {
          id: 2,
          author: "Priya Nair",
          date: "July 4, 2025, at 2:47 pm",
          avatar: photo,
          text: "The section on cloud transformation hit the nail on the head. Scalability is key in 2025 and beyond."
        },
        {
          id: 3,
          author: "Amit Solanki",
          date: "July 4, 2025, at 5:03 pm",
          avatar: photo,
          text: "Interesting point about cross-functional collaboration. IT can't work in a silo anymore."
        }
      ]
    },
    {
      slug: 'agentic-ai-india',
      commentss: [
        {
          id: 1,
          author: "Anjali Desai",
          date: "July 4, 2025, at 9:10 am",
          avatar: photo,
          text: "FinTech is truly changing how we interact with money. Great insights!"
        },
        {
          id: 2,
          author: "Kevin Shah",
          date: "July 4, 2025, at 11:22 am",
          avatar: photo,
          text: "AI in fraud detection is a game changer. Looking forward to seeing how it evolves further."
        },
        {
          id: 3,
          author: "Nirali Mehta",
          date: "July 4, 2025, at 2:05 pm",
          avatar: photo,
          text: "Loved the part on customer-centric platforms. That’s the future of banking."
        }
      ]
    },
    {
      slug: 'web-development-india',
      commentss: [
        {
          id: 1,
          author: "Rakesh Nair",
          date: "July 4, 2025, at 10:05 am",
          avatar: photo,
          text: "Legacy systems are really holding many banks back totally agree with the insights here."
        },
        {
          id: 2,
          author: "Sneha Patel",
          date: "July 4, 2025, at 12:15 pm",
          avatar: photo,
          text: "Change management in financial services needs more focus on people, not just platforms."
        },
        {
          id: 3,
          author: "Alok Trivedi",
          date: "July 4, 2025, at 3:40 pm",
          avatar: photo,
          text: "Great quote! Courage is indeed the first step to transformation in such traditional sectors."
        }
      ]
    },
    {
      slug: 'mobile-app-development-india',
      commentss: [
        {
          id: 1,
          author: "Emily Carter",
          date: "July 4, 2025, at 9:15 am",
          avatar: photo,
          text: "It's fascinating how work has become a form of fulfillment for many retirees with wealth."
        },
        {
          id: 2,
          author: "Daniel Reiss",
          date: "July 4, 2025, at 11:00 am",
          avatar: photo,
          text: "Completely agree purpose-driven work keeps people mentally sharp and engaged."
        },
        {
          id: 3,
          author: "Mira Joshi",
          date: "July 4, 2025, at 2:45 pm",
          avatar: photo,
          text: "This shift shows how retirement is no longer a one-size-fits-all idea."
        }
      ]
    },
    {
      slug: 'ui-ux-design-india',
      commentss: [
        {
          id: 1,
          author: "Emily Carter",
          date: "July 4, 2025, at 9:15 am",
          avatar: photo,
          text: "Customer-first strategies have helped our business grow significantly over the past year."
        },
        {
          id: 2,
          author: "Rajiv Patel",
          date: "July 4, 2025, at 10:30 am",
          avatar: photo,
          text: "Great insights! Personalized service really makes a difference in client retention."
        },
        {
          id: 3,
          author: "Anna Lopez",
          date: "July 4, 2025, at 11:00 am",
          avatar: photo,
          text: "Listening to customers and solving their pain points should be every company’s top priority."
        }
      ]
    },
    {
      slug: 'digital-marketing-india',
      commentss: [
        {
          id: 1,
          author: "Emily Carter",
          date: "June 12, 2024, at 09:20 am",
          avatar: photo,
          text: "The rise of blockchain in trade finance is a game changer. Transparency and speed are long overdue."
        },
        {
          id: 2,
          author: "Raj Patel",
          date: "June 13, 2024, at 02:45 pm",
          avatar: photo,
          text: "Real-time payments are revolutionizing cross-border trade makes you wonder how we managed before."
        },
        {
          id: 3,
          author: "Sandra Kim",
          date: "June 14, 2024, at 08:30 am",
          avatar: photo,
          text: "Digitizing supply chains isn't optional anymore. Great insight into how finance needs to catch up!"
        }
      ]
    }

  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: ""
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentForm.name && commentForm.email && commentForm.comment) {
      const commentGroup = comments.find(c => c.slug === id) || { slug: id, commentss: [] };
      const newComment = {
        id: commentGroup.commentss.length + 1,
        author: commentForm.name,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        avatar: photo,
        text: commentForm.comment,
      };

      if (commentGroup.commentss.length > 0) {
        setComments(comments.map(group =>
            group.slug === id
                ? {...group, commentss: [...group.commentss, newComment]}
                : group
        ));
      } else {
        setComments([...comments, { slug: id, commentss: [newComment] }]);
      }

      setCommentForm({ name: "", email: "", comment: "" });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Subscribed with email: ${newsletterEmail}`);
      setNewsletterEmail("");
    }
  };

  const handleReply = (commentId) => {
    console.log("Reply to comment:", commentId);
  };

  const sidebarData = [
    {
      slug: 'ai-innovation-india',
      author: {
        avatar: photo,
        name: "Dr. Anika Rao",
        role: "AI Solutions Architect",
        bio: "Leader in AI strategy and enterprise transformation, helping companies harness AI for competitive advantage.",
        socialLinks: [
          { name: "LinkedIn", url: "#" },
          { name: "Twitter", url: "#" }
        ]
      },
      categories: [
        { name: "Artificial Intelligence", count: 6 },
        { name: "IT Solutions", count: 4 },
        { name: "Enterprise Automation", count: 3 }
      ],
      recentPosts: [
        { image: Post1, date: "July 10, 2025", title: "The Impact of AI on Customer Support Systems" },
        { image: Post2, date: "July 5, 2025", title: "Leveraging AI for Predictive Maintenance in IT" }
      ],
      tags: ["AI", "Automation", "Digital Innovation", "Smart IT"]
    },

    {
      slug: 'agentic-ai-india',
      author: {
        avatar: profileimg2,
        name: "Victor Wang",
        role: "Autonomous Systems Expert",
        bio: "Designs scalable agentic architectures to power self-adaptive enterprise solutions and business logic automation.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Agentic AI", count: 4 },
        { name: "Autonomous Tech", count: 3 }
      ],
      recentPosts: [
        { image: Post3, date: "July 9, 2025", title: "Why Agentic AI Is the Future of Decision Engines" }
      ],
      tags: ["Agentic AI", "Intelligent Systems", "Adaptive Automation"]
    },

    {
      slug: 'web-development-india',
      author: {
        avatar: profileimg3,
        name: "Leah Moore",
        role: "Full Stack Developer",
        bio: "Passionate about building fast, scalable web applications using modern stacks like React, Node.js, and Next.js.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "GitHub", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Web Development", count: 7 },
        { name: "Frontend", count: 4 },
        { name: "JavaScript", count: 6 }
      ],
      recentPosts: [
        { image: Post1, date: "July 6, 2025", title: "Performance Optimization Tips for React Apps" },
        { image: Post2, date: "July 3, 2025", title: "Server-Side Rendering in Modern Web Apps" }
      ],
      tags: ["Web Dev", "React", "Next.js", "Frontend", "Backend"]
    },

    {
      slug: 'mobile-app-development-india',
      author: {
        avatar: profileimg4,
        name: "Karan Desai",
        role: "Mobile App Architect",
        bio: "Expert in cross-platform mobile development with Flutter and native technologies, focused on UX performance.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Mobile Apps", count: 5 },
        { name: "Flutter", count: 3 },
        { name: "Android/iOS", count: 4 }
      ],
      recentPosts: [
        { image: Post3, date: "July 4, 2025", title: "Native vs. Hybrid: Which App Strategy Wins?" }
      ],
      tags: ["Flutter", "React Native", "App UX", "Cross-Platform"]
    },

    {
      slug: 'ui-ux-design-india',
      author: {
        avatar: profileimg6,
        name: "Eliza Tran",
        role: "UX Researcher",
        bio: "Crafting accessible and intuitive digital interfaces by applying human-centered design principles and analytics.",
        socialLinks: [
          { name: "Instagram", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "UI/UX", count: 6 },
        { name: "Design Thinking", count: 3 },
        { name: "Product Design", count: 4 }
      ],
      recentPosts: [
        { image: Post1, date: "July 8, 2025", title: "UX Metrics That Actually Matter" },
        { image: Post2, date: "July 6, 2025", title: "How to Design for Accessibility" }
      ],
      tags: ["UX", "UI", "Design", "User Research", "Accessibility"]
    },

    {
      slug: 'digital-marketing-india',
      author: {
        avatar: profileimg7,
        name: "Nathan Joseph",
        role: "Digital Marketing Lead",
        bio: "Helping brands scale through content, SEO, paid media, and analytics-driven storytelling.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "Facebook", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Marketing", count: 8 },
        { name: "SEO", count: 5 },
        { name: "Content Strategy", count: 6 }
      ],
      recentPosts: [
        { image: Post1, date: "July 5, 2025", title: "How to Run a High-ROI Digital Campaign" },
        { image: Post2, date: "June 30, 2025", title: "Marketing Automation Tools for 2025" }
      ],
      tags: ["Marketing", "SEO", "Branding", "Content", "Analytics"]
    }
  ];

  const currentComments = comments.find(c => c.slug === id)?.commentss || [];
  const currentSidebarData = sidebarData.find(item => item.slug === id) || sidebarData[0];

  return (
      <Box sx={{ backgroundColor: "#F5F5F5" , padding:"120px 0" }}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={8}>
              <Box>
                <Box sx={{ maxWidth: "850px", margin: "0 auto", padding: "16px" }} >
                  <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", mb: 2, gap: 2, justifyContent: { xs: "center", sm: "start" }, }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar src={blogData.authorAvatar} alt={blogData.author} sx={{ width: 30, height: 30 }} />
                      <Typography variant="body1" sx={{ fontSize: "15px" }}>
                        By {blogData.author}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: { xs: 2, sm: 3 }, color: "gray", width: { xs: "100%", sm: "auto" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                        <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }} >
                          <CalendarMonthIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "black" }}>{blogData.date}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }} >
                        <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }}>
                          <LabelIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "black" }}>{blogData.category}</Typography>
                      </Box>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flex: { xs: "1 1 auto", sm: "none" }, justifyContent: { xs: "center", sm: "flex-start" }, }}>
                        <IconButton disableRipple sx={{ border: "1px solid #d4d6d7", borderRadius: "50%", p: "7px", }}>
                          <ChatBubbleOutlineIcon fontSize="small" sx={{ fontSize: "14px", color: "black" }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: "black", }}>{currentComments.length} Comments</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ mb: '43px', pt: '16px' }} />

                  {blogData.content.introduction.map((paragraph, index) => (
                      <Typography key={index} variant="body1" sx={{ color: "#4B535D", mb: index === blogData.content.introduction.length - 1 ? 6 : 2, fontSize: "15px", lineHeight: "25px" }} >
                        {paragraph}
                      </Typography>
                  ))}

                  <Box component="img" src={blogData.content.mainImage.src} alt="Blog Visual" sx={{ width: "100%", height: "auto", }} />

                  {blogData.content.sections.map((section, sectionIndex) => (
                      <Box key={sectionIndex}>
                        <Typography sx={{ fontWeight: "500", m: '40px 0px 17px', fontSize: "23px", color: "#0A1119" }}>
                          {section.title}
                        </Typography>

                        <Typography variant="body1" sx={{ color: "#4B535D", mb: 3, fontSize: "15px" }} >
                          {section.content}
                        </Typography>

                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                            <Box key={subIndex}>
                              <Typography sx={{ fontWeight: "500", mb: 1, fontSize: "17px", color: "#0A1119" }}>
                                {subsection.title}
                              </Typography>
                              <Typography variant="body1" sx={{ color: "#4B535D", mb: subIndex === section.subsections.length - 1 ? '43px' : 3 }} >
                                {subsection.content}
                              </Typography>
                            </Box>
                        ))}
                      </Box>
                  ))}

                  <Box sx={{ backgroundColor: "#121C27", color: "common.white", padding: { xs: "16px", sm: "24px" }, mb: 3, }}>
                    <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, mb: 3, gap: { xs: 2, sm: 3 }, }} >
                      <Avatar sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", width: { xs: 40, sm: 48 }, height: { xs: 40, sm: 48 }, marginRight: { xs: 0, sm: "16px" }, }} >
                        <FormatQuoteIcon fontSize="large" />
                      </Avatar>
                      <Typography variant="body1" sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: '400', lineHeight: '25px' }} >
                        {blogData.content.quote.text}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontWeight: "500", marginTop: "18px", borderTop: "1px solid rgba(255, 255, 255, .15)", pt: 2, fontSize: { xs: "13px", sm: "15px" }, textAlign: { xs: "center", sm: "left" }, }} >
                      {blogData.content.quote.author}
                    </Typography>
                  </Box>

                  {blogData.content.conclusion.map((para, index) => (
                      <Typography
                          key={`conclusion-${index}`}
                          variant="body1"
                          sx={{ color: "#4B535D", mt: '38px', fontSize: "15px" }}
                      >
                        {para}
                      </Typography>
                  ))}

                  {blogData.content.sections.map((section, index) => (
                      <React.Fragment key={`section-${index}`}>
                        <Typography
                            sx={{
                              fontWeight: "600",
                              m: '45px 0px 17px 0px',
                              fontSize: "23px",
                              color: "#0A1119"
                            }}
                        >
                          {section.title}
                        </Typography>

                        <Typography
                            sx={{
                              color: "#4B535D",
                              mb: 3,
                              fontSize: "15px",
                              lineHeight: "25px"
                            }}
                        >
                          {section.content}
                        </Typography>
                      </React.Fragment>
                  ))}
                  <Box sx={{ mb: 4 }}>
                    <Grid container spacing={2}>
                      {blogData.content.images.map((image, index) => (
                          <Grid item xs={6} key={index}>
                            <Box>
                              <Typography component="img" src={image.src} alt={`Blog Visual ${index + 1}`} sx={{ width: "100%", height: "auto", }}/>
                            </Box>
                          </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {blogData.content.conclusion.slice(1).map((paragraph, index) => (
                      <Typography key={index} sx={{ color: "#4B535D", mb: index === blogData.content.conclusion.length - 2 ? 3 : 2, fontSize: "15px", lineHeight: "25px" }} >
                        {paragraph}
                      </Typography>
                  ))}

                  <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #d3d5d6", mt: '40px', pb: '23px', flexDirection: { xs: "column", sm: "row" }, }}>
                    <Box>
                      {blogData.tags.map((tag, index) => (
                          <Button key={index} sx={{ backgroundColor: "#121c27", color: "white", fontSize: "13px", borderRadius: "50px", padding: "5px 25px", mr: 1, mb: { xs: 1, sm: 0 }, textTransform: "initial" }} >
                            {tag}
                          </Button>
                      ))}
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
                      {currentComments.length} Comments
                    </Typography>
                    {currentComments.map((comment) => (
                        <Box key={comment.id} sx={{ mb: 4 }}>
                          <Box>
                            <Box
                                sx={{ display: { md: "flex", xs: "block" }, gap: 3 }}
                            >
                              <Avatar sx={{ bgcolor: "#1976d2", color: "#fff" }}>
                                {comment.author.charAt(0).toUpperCase()}
                              </Avatar>
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
                                    onClick={() => handleReply(comment.id)}
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

                      <form onSubmit={handleCommentSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                placeholder="Your Name"
                                variant="outlined"
                                required
                                value={commentForm.name}
                                onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                                InputProps={{ sx: { borderRadius: "50px", backgroundColor: "#FFF", } }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                placeholder="Email Address"
                                variant="outlined"
                                required
                                type="email"
                                value={commentForm.email}
                                onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                                InputProps={{ sx: { borderRadius: "50px", backgroundColor: "#FFF", } }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Your Comment..."
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                                value={commentForm.comment}
                                onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
                                InputProps={{ sx: { borderRadius: "30px", backgroundColor: "#FFF", }, }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#121C27",
                                  color: "white",
                                  borderRadius: "50px",
                                  padding: "12px 30px",
                                  textTransform: "none",
                                  fontSize: "15px"
                                }}
                            >
                              Post Comment
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box sx={{ position: 'sticky', top: '12%' }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2, }}>
                  <Box sx={{  border: "1px solid #d7d7d7", textAlign: "center", mb: "50px", padding: 3, }}>
                    <Avatar
                        alt="Profile Picture"
                        src={currentSidebarData.author.avatar.src}
                        sx={{
                          width: {
                            xs: 100,   // Extra small screens
                            sm: 150,   // Small screens
                            md: 200,   // Medium screens
                            lg: 250,   // Large screens and up
                          },
                          height: {
                            xs: 100,
                            sm: 150,
                            md: 200,
                            lg: 250,
                          },
                          margin: "0 auto",
                          marginBottom: 2,
                        }}
                    />
                    <CardContent sx={{ p: 0 }}>
                      <Box sx={{ m: "30px 0px 20px 0px" }}>
                        <Typography
                            variant="h3"
                            sx={{ fontWeight: 500, marginBottom: "0px", fontSize: "17px", }} >
                          {currentSidebarData.author.name}
                        </Typography>
                      </Box>
                      <Typography
                          variant="body2"
                          sx={{ color: "#848B94", fontSize: "15px", fontFamily: ' "Public Sans", Sans-serif', }} >
                        {currentSidebarData.author.role}
                      </Typography>
                      <Divider sx={{ my: "15px" }} />
                      <Typography
                          variant="body2"
                          sx={{ color: "#4B535D", fontFamily: ' "Public Sans", Sans-serif', fontSize: "15px", lineHeight: "25px", }}>
                        {currentSidebarData.author.bio}
                      </Typography>
                      <Divider sx={{ marginY: 2 }} />
                      <Grid container justifyContent="center" spacing={2}>
                        {currentSidebarData.author.socialLinks.map((link, index) => (
                            <Grid item key={index}>
                              <Link
                                  href={link.url}
                                  underline="none"
                                  sx={{ color: "inherit", fontWeight: 600, fontSize: "15px", }}>
                                {link.name}
                              </Link>
                            </Grid>
                        ))}
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
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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
                      {currentSidebarData.categories.map((category, index) => (
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
                            {index < currentSidebarData.categories.length - 1 && (
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
                      {currentSidebarData.recentPosts.map((post, index) => (
                          <Box
                              key={index}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mb:
                                    index !== currentSidebarData.recentPosts.length - 1 ? "25px" : "none",
                                borderBottom:
                                    index !== currentSidebarData.recentPosts.length - 1
                                        ? "1px solid #d7d7d7"
                                        : "none",
                                pb:
                                    index !== currentSidebarData.recentPosts.length - 1 ? "25px" : "none",
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
                      {currentSidebarData.tags.map((tag, index) => (
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
                        <TextField
                            fullWidth
                            placeholder="  *Email address..."
                            variant="outlined"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            sx={{ height: "50px", marginBottom: "16px", "& .MuiOutlinedInput-root": { borderRadius: "50px", }, }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleNewsletterSubmit}
                            sx={{ fontSize: "15px", fontWeight: "400", textTransform: "capitalize", lineHeight: "50px", borderRadius: "50px", bgcolor: "#121C27", }}>
                          Subscribe Now!
                        </Button>
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