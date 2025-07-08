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

import Post1 from "../../assets/images/blog/bolg/p7-152x164.webp";
import Post2 from "../../assets/images/blog/bolg/p6-152x164.webp";
import Post3 from "../../assets/images/blog/bolg/p3-152x164.webp";
import SearchIcon from "@mui/icons-material/Search";
import {useParams} from 'next/navigation';

const BlogSingle = () => {
  const blogPosts = [
    {
      slug: 'marketing',
      author: "Admin",
      authorAvatar: photo,
      date: "23 Apr 24",
      category: "Business Strategy",
      commentsCount: 5,
      title: "5 Impactful Elements That Promote IT and Business",
      content: {
        introduction: [
          "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula.",
          "Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo…"
        ],
        mainImage: single1,
        sections: [
          {
            title: "5 Impactful Elements That Promote IT and Business",
            content: "Technology and business are increasingly intertwined, and their integration is vital for competitive growth. Below are five key elements driving this transformation:",
            subsections: [
              {
                title: "1. Strategic IT Alignment",
                content: "Aligning IT initiatives with business goals ensures optimal investment in technologies that directly support growth and operational efficiency."
              },
              {
                title: "2. Data-Driven Decision Making",
                content: "Leveraging big data and analytics tools enables companies to uncover insights, forecast trends, and make informed decisions quickly and effectively."
              },
              {
                title: "3. Cybersecurity Resilience",
                content: "With growing digital operations, robust cybersecurity practices are essential to protect data, maintain trust, and ensure business continuity."
              },
              {
                title: "4. Cloud Transformation",
                content: "Cloud computing offers scalability, cost savings, and remote access, making it a key factor in agile business models and digital collaboration."
              },
              {
                title: "5. IT-Enabled Innovation",
                content: "Innovation through digital platforms, automation, and emerging tech (like AI/ML) enables businesses to differentiate and respond to market changes."
              }
            ]
          },
          {
            title: "The Role of Cross-Functional Collaboration",
            content: "Effective collaboration between IT and business teams fosters communication, reduces silos, and accelerates the delivery of valuable outcomes."
          }
        ],
        quote: {
          text: "Digital transformation isn’t just an IT project it’s a business revolution.",
          author: "Elena Wirth – CIO Insights"
        },
        images: [single2, single3],
        conclusion: [
          "In a tech-driven world, aligning IT with core business priorities is no longer optional it's essential for long-term growth and success.",
          "Organizations that embrace these elements are better positioned to innovate, compete, and thrive in dynamic markets."
        ]
      },
      tags: ["Digital Strategy", "IT Alignment", "Innovation"]
    },

    {
      slug: 'startup-consulting',
      author: "Sophia Turner",
      authorAvatar: photo,
      date: "23 Apr 24",
      category: "Startup-Consulting",
      commentsCount: 4,
      title: "Revolutionizing the Future of Financial Services",
      content: {
        introduction: [
          "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula.",
          "Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo…"
        ],
        mainImage: single2,
        sections: [
          {
            title: "Technology-Driven Disruption",
            content: "The financial sector is undergoing a dramatic transformation through digitalization, automation, and customer-first platforms.",
            subsections: [
              {
                title: "1. FinTech Integration",
                content: "Emerging FinTech tools are improving access, lowering fees, and challenging legacy banking models."
              },
              {
                title: "2. AI and Automation",
                content: "Artificial intelligence powers smarter decisions in lending, fraud detection, and customer service."
              }
            ]
          }
        ],
        quote: {
          text: "The future of finance will be personalized, predictive, and always available.",
          author: "Lena Brooks – FinTech Analyst"
        },
        images: [single1, single3],
        conclusion: [
          "Financial services are rapidly evolving, shifting power toward consumers.",
          "Companies that embrace innovation today will define the industry tomorrow."
        ]
      },
      tags: ["Finance", "FinTech", "Innovation"]
    },
    {
      slug: 'corporate',
      author: "Michael Lee",
      authorAvatar: photo,
      date: "23 Apr 24",
      category: "Corporate",
      commentsCount: 5,
      title: "A Guide to Embracing Meaningful Change in Banking",
      content: {
        introduction: [
          "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula.",
          "Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo…"
        ],
        mainImage: single3,
        sections: [
          {
            title: "Modernizing Legacy Systems",
            content: "Change in banking starts with upgrading the technology stack while maintaining compliance and trust.",
            subsections: [
              {
                title: "1. Rethinking Outdated Infrastructure",
                content: "Legacy systems limit growth and customer experience strategic upgrades are vital."
              },
              {
                title: "2. Driving Cultural and Process Shifts",
                content: "Change isn't just tech; it requires mindset and workflow adjustments across teams."
              }
            ]
          }
        ],
        quote: {
          text: "Transformation in banking doesn’t start with systems it starts with courage.",
          author: "Michael Lee"
        },
        images: [single2],
        conclusion: [
          "Banks that embrace change proactively are positioned to lead, not follow.",
          "It’s not about disruption for the sake of it, but about building a resilient, future-ready institution."
        ]
      },
      tags: ["Banking", "Change Management", "Digital Transformation"]
    },
    {
      slug: 'startup',
      author: "Salman Rushdie",
      authorAvatar: photo,
      date: "23 Apr 24",
      category: "Modern Startup",
      commentsCount: 5,
      title: "For the Wealthy, Work Is the New Retirement",
      content: {
        introduction: [
          "Quisque consectetur purus ut suscipit faucibus. Sed at ornare ligula.",
          "Quisque dignissim justo arcu, ut viverra elit venenatis. Pellentesque leo…"
        ],
        mainImage: single3,
        sections: [
          {
            title: "Redefining Retirement for the Ultra-Wealthy",
            content: "For many high-net-worth individuals, retirement no longer means stepping away it means engaging more meaningfully.",
            subsections: [
              {
                title: "1. Purpose Over Rest",
                content: "Many affluent individuals pursue passion projects, startups, or philanthropy instead of traditional retirement."
              },
              {
                title: "2. Legacy Building Through Work",
                content: "Work becomes a way to create impact, build influence, and leave a lasting legacy beyond just wealth."
              }
            ]
          }
        ],
        quote: {
          text: "For some, work isn’t about income anymore it’s about identity and meaning.",
          author: "Michael Lee"
        },
        images: [single2],
        conclusion: [
          "Retirement, for the wealthy, is less about escape and more about evolution.",
          "The next chapter isn’t about slowing down it’s about shifting focus with purpose."
        ]
      },
      tags: ["Wealth", "Lifestyle", "Retirement", "Purpose", "Identity"]
    },
    {
      slug: 'consulting',
      author: "R.K. Narayan",
      authorAvatar: photo,
      date: "18 Apr 24",
      category: "Business Consulting",
      commentsCount: 6,
      title: "Providing Best Service for Customers",
      content: {
        introduction: [
          "Exceptional service has become a major differentiator in today’s market.",
          "Businesses that prioritize customer satisfaction build stronger, lasting relationships."
        ],
        mainImage: single3,
        sections: [
          {
            title: "Customer-Centric Service Models",
            content: "Focusing on customer needs and feedback fosters loyalty and trust...",
            subsections: [
              {
                title: "1. Listening Actively",
                content: "Effective service starts with understanding listening to your customer is key."
              },
              {
                title: "2. Personalizing the Experience",
                content: "Tailoring solutions to individual needs helps customers feel valued and heard."
              }
            ]
          }
        ],
        quote: {
          text: "Customers may forget what you said but they'll never forget how you made them feel.",
          author: "Maya Angelou"
        },
        images: [single1, single2],
        conclusion: [
          "Investing in excellent service is investing in long-term success.",
          "Make service a culture, not just a department."
        ]
      },
      tags: ["Customer Experience", "Service Excellence", "Business Consulting", "Loyalty"]
    },
    {
      slug: 'corporatee',
      author: "Marco Lee",
      authorAvatar: photo,
      date: "18 Apr 24",
      category: "Corporate",
      commentsCount: 6,
      title: "A New Age for Trade & Supply Chain Finance",
      content: {
        introduction: [
          "Global trade is evolving rapidly, and financial systems must keep pace.",
          "Modern supply chains demand smarter, faster, and more secure financial frameworks."
        ],
        mainImage: single3,
        sections: [
          {
            title: "Digitization in Trade Finance",
            content: "The shift from paper-based to digital systems is redefining how trade operates.",
            subsections: [
              {
                title: "1. Blockchain and Transparency",
                content: "Distributed ledger technologies provide verifiable records and reduce fraud in trade transactions."
              },
              {
                title: "2. Real-Time Payments",
                content: "Instant cross-border payment solutions are speeding up the movement of goods and capital."
              }
            ]
          },
          {
            title: "Risk Management and Compliance",
            content: "Increased visibility across supply networks helps mitigate financial risk and adhere to global regulations.",
            subsections: [
              {
                title: "1. Automated Risk Scoring",
                content: "AI-powered tools help lenders assess buyer/supplier reliability instantly."
              },
              {
                title: "2. Dynamic Compliance Tools",
                content: "Adapting to changing regulatory environments with real-time updates improves global partnerships."
              }
            ]
          }
        ],
        quote: {
          text: "Trade finance isn't just about money it's the backbone of global commerce.",
          author: "Michael Lee"
        },
        images: [single2],
        conclusion: [
          "As supply chains get more complex, finance must get smarter.",
          "Adopting digital solutions today sets the foundation for tomorrow’s global growth."
        ]
      },
      tags: ["Trade", "Finance", "Supply Chain", "Blockchain", "Innovation"]
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
      slug: 'marketing',
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
      slug: 'startup-consulting',
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
      slug: 'corporate',
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
      slug: 'startup',
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
      slug: 'consulting',
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
      slug: 'corporatee',
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
      slug: 'marketing',
      author: {
        avatar: photo,
        name: "Mehul Patel",
        role: "IT Strategy Expert",
        bio: "Expert in aligning technology with business goals to drive transformation and performance in digital-first organizations.",
        socialLinks: [
          { name: "Facebook", url: "#" },
          { name: "Twitter", url: "#" },
          { name: "Instagram", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Digital Strategy", count: 4 },
        { name: "IT Solutions", count: 5 },
        { name: "Business Consulting", count: 6 },
        { name: "Enterprise Tech", count: 3 },
        { name: "Cloud Computing", count: 2 }
      ],
      recentPosts: [
        { image: Post1, date: "July 1, 2025", title: "How Cloud Adoption Drives Business Agility" },
        { image: Post2, date: "June 28, 2025", title: "Top Cybersecurity Trends Businesses Should Watch" },
        { image: Post3, date: "June 25, 2025", title: "Digital Innovation: Tools That Power Growth" }
      ],
      tags: ["Digital Strategy", "IT Alignment", "Innovation", "Cloud", "Business"]
    },
    {
      slug: 'startup-consulting',
      author: {
        avatar: profileimg2,
        name: "Sophia Turner",
        role: "FinTech Analyst",
        bio: "Researcher and strategist focused on the intersection of technology and financial innovation, helping firms navigate digital disruption.",
        socialLinks: [
          { name: "Facebook", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "FinTech", count: 5 },
        { name: "Financial Services", count: 4 },
        { name: "Innovation", count: 3 }
      ],
      recentPosts: [
        { image: Post2, date: "July 2, 2025", title: "Top 5 Blockchain Trends Reshaping Finance" },
        { image: Post3, date: "June 30, 2025", title: "Why Personalization is the Future of Banking" }
      ],
      tags: ["FinTech", "Banking", "Innovation", "Finance", "Automation"]
    },
    {
      slug: 'corporate',
      author: {
        avatar: profileimg3,
        name: "Michael Lee",
        role: "Transformation Advisor",
        bio: "Specialist in leading digital and operational change for financial institutions across global markets.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Financial Consulting", count: 6 },
        { name: "Banking Strategy", count: 4 }
      ],
      recentPosts: [
        { image: Post2, date: "June 28, 2025", title: "A Guide to Embracing Meaningful Change in Banking" }
      ],
      tags: ["Banking", "Change", "Consulting", "Transformation"]
    },
    {
      slug: 'startup',
      author: {
        avatar: profileimg4,
        name: "Salman Rushdie",
        role: "Lifestyle & Wealth Advisor",
        bio: "Advising high-net-worth individuals on purpose-driven work and post-retirement legacy planning.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Modern Lifestyles", count: 7 },
        { name: "Wealth Management", count: 4 }
      ],
      recentPosts: [
        { image: Post1, date: "July 4, 2025", title: "For the Wealthy, Work Is the New Retirement" }
      ],
      tags: ["Wealth", "Retirement", "Legacy", "Lifestyle", "Purpose"]
    },
    {
      slug: 'consulting',
      author: {
        avatar: profileimg6,
        name: "R.K. Narayan",
        role: "Customer Success Strategist",
        bio: "Dedicated to elevating customer experience through scalable consulting solutions and long-term vision.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" },
          { name: "Facebook", url: "#" }
        ]
      },
      categories: [
        { name: "Business Consulting", count: 8 },
        { name: "Customer Experience", count: 6 },
        { name: "Service Strategy", count: 4 }
      ],
      recentPosts: [
        { image: Post1, date: "June 15, 2024", title: "Providing Best Service for Customers" },
        { image: Post2, date: "May 28, 2024", title: "How to Build a Customer-Centric Culture" },
        { image: Post3, date: "May 10, 2024", title: "Key KPIs for Service-Led Organizations" }
      ],
      tags: ["Consulting", "Customer Service", "Experience", "Retention", "Strategy"]
    },
    {
      slug: 'corporatee',
      author: {
        avatar: profileimg7,
        name: "Marco Lee",
        role: "Supply Chain Finance Analyst",
        bio: "Specialist in trade finance, blockchain in logistics, and global economic shifts. Passionate about digital transformation in supply chains.",
        socialLinks: [
          { name: "Twitter", url: "#" },
          { name: "LinkedIn", url: "#" }
        ]
      },
      categories: [
        { name: "Trade Finance", count: 7 },
        { name: "Supply Chain", count: 4 },
        { name: "FinTech", count: 6 }
      ],
      recentPosts: [
        { image: Post1, date: "June 01, 2024", title: "A New Age for Trade & Supply Chain Finance" },
        { image: Post2, date: "May 20, 2024", title: "How Blockchain Is Reshaping Global Trade" },
        { image: Post3, date: "May 12, 2024", title: "Smart Contracts and the Future of Logistics" }
      ],
      tags: ["Finance", "Supply Chain", "Blockchain", "Trade", "Innovation"]
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