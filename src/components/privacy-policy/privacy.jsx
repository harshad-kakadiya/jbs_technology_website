'use client';

import React from 'react';
import {
    Box,
    Typography,
    Link,
    List,
    ListItem,
    ListItemText,
    Divider,
    Container
} from '@mui/material';

const textColor = '#1A1F26';

const privacyData = [
    {
        title: 'Privacy Policy',
        subtitle: 'Effective Date: July 12, 2025',
        description: [
            `Welcome to JBS Technology ("Company", "we", "our", or "us"). Your privacy is critically important to us, and we are committed to protecting your personal information and your right to privacy.`,
            `This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website `,
            {
                type: 'link',
                label: 'https://www.jbstechnology.in',
                url: 'https://www.jbstechnology.in'
            },
            ` and use our services. By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.`,
        ]
    },
    {
        title: '1. Information We Collect',
        description: [
            'We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.'
        ],
        sections: [
            {
                subtitle: 'a. Personal Information',
                description: 'When you interact with our services, we may collect the following personal information:',
                items: [
                    'Full name and preferred name',
                    'Email address and secondary contact emails',
                    'Phone number and mobile number',
                    'Company name and department',
                    'Job title and professional role',
                    'Billing and shipping addresses',
                    'Payment information (processed securely)',
                    'Professional credentials and certifications',
                    'Project requirements and specifications',
                    'Communication preferences',
                    'Additional information you voluntarily provide'
                ]
            },
            {
                subtitle: 'b. Technical and Usage Data',
                description: 'We automatically collect technical information when you use our services:',
                items: [
                    'IP address and geographical location',
                    'Browser type, version, and settings',
                    'Operating system and device information',
                    'Pages visited and navigation patterns',
                    'Time and date of access',
                    'Referring website and exit pages',
                    'Search queries and interactions',
                    'Session duration and frequency of visits',
                    'Screen resolution and display settings',
                    'Network connection information'
                ]
            },
            {
                subtitle: 'c. Cookies and Tracking Technologies',
                description: 'We use various technologies to collect information automatically:',
                items: [
                    'Essential cookies for basic website functionality',
                    'Analytics cookies to understand user behavior',
                    'Marketing cookies for personalized advertising',
                    'Preference cookies to remember your settings',
                    'Security cookies to protect against fraud',
                    'Third-party cookies from integrated services',
                    'Web beacons and pixel tags',
                    'Local storage and session storage'
                ],
                footer: 'You can manage cookie preferences through your browser settings or our cookie consent manager.'
            },
            {
                subtitle: 'd. Information from Third Parties',
                description: 'We may receive information from various third-party sources:',
                items: [
                    'Business partners and referral sources',
                    'Social media platforms (LinkedIn, Twitter, etc.)',
                    'Professional networking sites',
                    'Marketing and advertising partners',
                    'Data enhancement services',
                    'Public databases and registries',
                    'Integration platforms and APIs'
                ]
            }
        ]
    },
    {
        title: '2. How We Use Your Information',
        description: [
            'We use the collected information for various purposes to provide and improve our services, communicate with you, and fulfill our business obligations.'
        ],
        sections: [
            {
                subtitle: 'a. Service Provision',
                items: [
                    'Provide, operate, and maintain our IT services',
                    'Process transactions and manage billing',
                    'Deliver custom software solutions',
                    'Provide technical support and troubleshooting',
                    'Manage project timelines and deliverables',
                    'Facilitate communication and collaboration'
                ]
            },
            {
                subtitle: 'b. Communication and Marketing',
                items: [
                    'Respond to inquiries and customer support requests',
                    'Send service updates and important notifications',
                    'Provide marketing communications (with consent)',
                    'Send newsletters and industry insights',
                    'Conduct surveys and gather feedback',
                    'Invite you to events and webinars'
                ]
            },
            {
                subtitle: 'c. Business Operations',
                items: [
                    'Analyze usage patterns to improve services',
                    'Conduct research and development',
                    'Perform security monitoring and fraud prevention',
                    'Comply with legal and regulatory requirements',
                    'Protect our rights and enforce terms of service',
                    'Facilitate business transfers or restructuring'
                ]
            }
        ]
    },
    {
        title: '3. Legal Basis for Processing',
        description: [
            'We process your personal information based on the following legal grounds:'
        ],
        items: [
            {
                label: 'Contract Performance',
                text: 'Processing necessary to fulfill our contractual obligations to you'
            },
            {
                label: 'Legitimate Interests',
                text: 'Processing for our legitimate business interests, such as improving services and security'
            },
            {
                label: 'Legal Compliance',
                text: 'Processing required to comply with applicable laws and regulations'
            },
            {
                label: 'Consent',
                text: 'Processing based on your explicit consent, which you can withdraw at any time'
            },
            {
                label: 'Vital Interests',
                text: 'Processing necessary to protect the vital interests of you or another person'
            }
        ]
    },
    {
        title: '4. Sharing Your Information',
        description: [
            'We respect your privacy and do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information in the following circumstances:'
        ],
        sections: [
            {
                subtitle: 'a. Service Providers and Business Partners',
                items: [
                    'Cloud hosting and infrastructure providers',
                    'Payment processors and financial institutions',
                    'Marketing and advertising platforms',
                    'Analytics and performance monitoring services',
                    'Customer support and communication tools',
                    'Security and fraud prevention services',
                    'Professional services (legal, accounting, consulting)'
                ]
            },
            {
                subtitle: 'b. Legal and Regulatory Requirements',
                items: [
                    'Government authorities and regulatory bodies',
                    'Law enforcement agencies (when legally required)',
                    'Courts and legal proceedings',
                    'Compliance with subpoenas and legal orders',
                    'Protection of legal rights and interests'
                ]
            },
            {
                subtitle: 'c. Business Transactions',
                items: [
                    'Mergers, acquisitions, or sale of assets',
                    'Business restructuring or reorganization',
                    'Due diligence processes',
                    'Successor entities or buyers'
                ]
            }
        ],
        footer: 'All third parties are contractually required to maintain the confidentiality and security of your information.'
    },
    {
        title: '5. International Data Transfers',
        description: [
            'As a global IT services provider, we may transfer your information to countries outside your jurisdiction. We ensure appropriate safeguards are in place for such transfers.',
            'For transfers outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards approved by relevant authorities.'
        ]
    },
    {
        title: '6. Data Retention',
        description: [
            'We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.'
        ],
        sections: [
            {
                subtitle: 'Retention Periods',
                items: [
                    'Account information: For the duration of your account plus 7 years',
                    'Transaction records: 7 years after the last transaction',
                    'Marketing communications: Until you unsubscribe or object',
                    'Support tickets: 3 years after resolution',
                    'Website analytics: 26 months from collection',
                    'Security logs: 1 year from creation'
                ]
            }
        ],
        footer: 'After the retention period expires, we securely delete or anonymize your information.'
    },
    {
        title: '7. Security of Your Information',
        description: [
            'We implement comprehensive security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        ],
        sections: [
            {
                subtitle: 'Technical Safeguards',
                items: [
                    'Encryption of data in transit and at rest',
                    'Secure socket layer (SSL) technology',
                    'Multi-factor authentication systems',
                    'Regular security assessments and penetration testing',
                    'Intrusion detection and prevention systems',
                    'Secure backup and disaster recovery procedures'
                ]
            },
            {
                subtitle: 'Administrative Safeguards',
                items: [
                    'Employee training on data protection',
                    'Background checks for personnel',
                    'Access controls and authorization procedures',
                    'Regular security policy updates',
                    'Incident response and breach notification procedures',
                    'Third-party security assessments'
                ]
            }
        ],
        footer: 'While we strive to protect your information, no security system is 100% secure. Please use strong passwords and keep your login credentials confidential.'
    },
    {
        title: '8. Your Privacy Rights',
        description: [
            'Depending on your location and applicable laws, you may have the following rights regarding your personal information:'
        ],
        sections: [
            {
                subtitle: 'General Rights',
                items: [
                    'Right to access your personal information',
                    'Right to correct or update inaccurate information',
                    'Right to delete your personal information',
                    'Right to restrict processing of your information',
                    'Right to object to processing for certain purposes',
                    'Right to data portability',
                    'Right to withdraw consent'
                ]
            },
            {
                subtitle: 'Additional Rights (EU/UK Residents)',
                items: [
                    'Right to lodge a complaint with supervisory authorities',
                    'Right to receive information about automated decision-making',
                    'Right to appoint a representative for data protection matters'
                ]
            }
        ],
        footer: 'To exercise your rights, please contact us at ',
        link: {
            label: 'jbs.technology26@gmail.com',
            url: 'mailto:jbs.technology26@gmail.com'
        }
    },
    {
        title: '9. Marketing Communications',
        description: [
            'We may send you marketing communications about our services, industry insights, and events. You can opt out of these communications at any time.'
        ],
        items: [
            'Click the "unsubscribe" link in any marketing email',
            'Update your preferences in your account settings',
            'Contact us directly to opt out',
            'Use the "Do Not Sell My Personal Information" option (where applicable)'
        ],
        footer: 'Even after opting out, we may still send you transactional and service-related communications.'
    },
    {
        title: '10. Third-Party Links and Services',
        description: [
            'Our website may contain links to third-party websites, services, or applications. We are not responsible for the privacy practices or content of these third parties.',
            'We encourage you to review the privacy policies of any third-party services before providing your information to them.'
        ]
    },
    {
        title: '11. Children\'s Privacy',
        description: [
            'Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16.',
            'If we discover that we have collected information from a child under 16, we will promptly delete such information from our systems.',
            'If you believe we may have collected information from a child under 16, please contact us immediately.'
        ]
    },
    {
        title: '12. California Privacy Rights',
        description: [
            'California residents have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):'
        ],
        sections: [
            {
                subtitle: 'Categories of Personal Information',
                items: [
                    'Identifiers (name, email, phone number)',
                    'Commercial information (transaction history)',
                    'Internet or network activity information',
                    'Professional or employment information',
                    'Geolocation data',
                    'Inferences drawn from personal information'
                ]
            },
            {
                subtitle: 'Your California Rights',
                items: [
                    'Right to know what personal information is collected',
                    'Right to delete personal information',
                    'Right to correct inaccurate personal information',
                    'Right to opt out of sale/sharing of personal information',
                    'Right to limit use of sensitive personal information',
                    'Right to non-discrimination for exercising privacy rights'
                ]
            }
        ]
    },
    {
        title: '13. Changes to This Privacy Policy',
        description: [
            'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.',
            'When we make material changes, we will notify you by email, through our website, or by other appropriate means.',
            'The updated Privacy Policy will be effective immediately upon posting, with a new "Effective Date" at the top of the policy.',
            'We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.'
        ]
    },
    {
        title: '14. Contact Information',
        description: [
            'If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:'
        ],
        contact: [
            'JBS Technology',
            'Data Protection Team',
            {
                type: 'link',
                label: 'Email: jbs.technology26@gmail.com',
                url: 'mailto:jbs.technology26@gmail.com'
            },
            {
                type: 'link',
                label: 'Phone: +91 79844 43901',
                url: 'tel:+917984443901'
            },
            {
                type: 'link',
                label: 'Website: https://www.jbstechnology.in',
                url: 'https://www.jbstechnology.in'
            },
            'Response Time: We will respond to your inquiry within 30 days'
        ]
    },
    {
        title: '15. Complaints and Dispute Resolution',
        description: [
            'If you have concerns about our privacy practices, we encourage you to contact us first so we can address your concerns.',
            'If you are not satisfied with our response, you may file a complaint with the relevant data protection authority in your jurisdiction.',
            'For EU residents, you can contact your local supervisory authority or the European Data Protection Board.',
            'For UK residents, you can contact the Information Commissioner\'s Office (ICO).'
        ]
    }
];

function Privacy() {
    return (
        <Container maxWidth="xl">
            <Box sx={{ padding: "180px 0 50px 0" }}>
                {privacyData.map((section, index) => (
                    <Box key={index} mb={index === 0 ? 8 : 7}>
                        {/* Section Title */}
                        {section.title && (
                            <Typography
                                variant={index === 0 ? 'h2' : 'h4'}
                                fontWeight={700}
                                gutterBottom
                                sx={{
                                    color: textColor,
                                    mb: index === 0 ? 2 : 3
                                }}
                            >
                                {section.title}
                            </Typography>
                        )}

                        {/* Subtitle */}
                        {section.subtitle && (
                            <Typography
                                variant="subtitle1"
                                fontWeight={500}
                                gutterBottom
                                sx={{
                                    color: textColor,
                                    fontSize: '18px',
                                    mb: 3
                                }}
                            >
                                {section.subtitle}
                            </Typography>
                        )}

                        {/* Descriptions */}
                        {section.description?.map((desc, i) =>
                            typeof desc === 'string' ? (
                                <Typography
                                    variant="body1"
                                    paragraph
                                    key={i}
                                    sx={{
                                        color: textColor,
                                        fontSize: '18px',
                                        lineHeight: 1.6,
                                        mb: 2
                                    }}
                                >
                                    {desc}
                                </Typography>
                            ) : (
                                <Typography
                                    variant="body1"
                                    paragraph
                                    key={i}
                                    sx={{
                                        color: textColor,
                                        fontSize: '18px',
                                        lineHeight: 1.6,
                                        mb: 2
                                    }}
                                >
                                    <Link
                                        href={desc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        sx={{
                                            color: 'primary.main',
                                            fontSize: '18px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {desc.label}
                                    </Link>
                                </Typography>
                            )
                        )}

                        {/* Subsections */}
                        {section.sections?.map((sub, subIndex) => (
                            <Box key={subIndex} mb={4}>
                                <Typography
                                    variant="subtitle1"
                                    fontWeight={600}
                                    gutterBottom
                                    sx={{
                                        color: textColor,
                                        fontSize: '20px',
                                        mb: 2
                                    }}
                                >
                                    {sub.subtitle}
                                </Typography>
                                {sub.description && (
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: textColor,
                                            fontSize: '17px',
                                            mb: 2,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {sub.description}
                                    </Typography>
                                )}
                                <List dense disablePadding sx={{ pl: 3 }}>
                                    {sub.items.map((item, j) => (
                                        <ListItem key={j} sx={{ py: 0.2 }}>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body2" sx={{
                                                        color: textColor,
                                                        fontSize: '16px',
                                                        lineHeight: 1.5
                                                    }}>
                                                        • {item}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                {sub.footer && (
                                    <Typography
                                        variant="body2"
                                        display="block"
                                        mt={2}
                                        sx={{
                                            color: textColor,
                                            fontSize: '16px',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        {sub.footer}
                                    </Typography>
                                )}
                            </Box>
                        ))}

                        {/* Bullet list - plain string items */}
                        {section.items && typeof section.items[0] === 'string' && (
                            <List dense sx={{ pl: 3, mb: 2 }}>
                                {section.items.map((item, i) => (
                                    <ListItem key={i} sx={{ py: 0.3 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" sx={{
                                                    color: textColor,
                                                    fontSize: '17px',
                                                    lineHeight: 1.6
                                                }}>
                                                    • {item}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}

                        {/* Label: value style list */}
                        {section.items && typeof section.items[0] === 'object' && (
                            <List dense sx={{ pl: 3, mb: 2 }}>
                                {section.items.map((item, i) => (
                                    <ListItem key={i} sx={{ py: 0.4 }}>
                                        <ListItemText
                                            primary={
                                                <Typography variant="body2" sx={{
                                                    color: textColor,
                                                    fontSize: '17px',
                                                    lineHeight: 1.6
                                                }}>
                                                    <strong>{item.label}:</strong> {item.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        )}

                        {/* Footer text with optional link */}
                        {section.footer && (
                            <Typography variant="body2" mt={2} sx={{
                                color: textColor,
                                fontSize: '17px',
                                lineHeight: 1.6
                            }}>
                                {section.footer}
                                {section.link && (
                                    <Link
                                        href={section.link.url}
                                        underline="hover"
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
                                            color: 'primary.main',
                                            fontSize: '17px',
                                            fontWeight: 500
                                        }}
                                    >
                                        {section.link.label}
                                    </Link>
                                )}
                            </Typography>
                        )}

                        {/* Contact Information */}
                        {section.contact && (
                            <List dense sx={{ pl: 3 }}>
                                {section.contact.map((contactItem, idx) =>
                                    typeof contactItem === 'string' ? (
                                        <ListItem key={idx} sx={{ py: 0.3 }}>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body2" sx={{
                                                        color: textColor,
                                                        fontSize: '17px',
                                                        lineHeight: 1.6,
                                                        fontWeight: contactItem.includes(':') ? 500 : 400
                                                    }}>
                                                        {contactItem}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    ) : (
                                        <ListItem key={idx} sx={{ py: 0.3 }}>
                                            <ListItemText
                                                primary={
                                                    <Link
                                                        href={contactItem.url}
                                                        underline="hover"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{
                                                            color: 'primary.main',
                                                            fontSize: '17px',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        {contactItem.label}
                                                    </Link>
                                                }
                                            />
                                        </ListItem>
                                    )
                                )}
                            </List>
                        )}

                        {/* Divider except last */}
                        {index !== privacyData.length - 1 && (
                            <Divider sx={{ mt: 5, mb: 3 }} />
                        )}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Privacy;