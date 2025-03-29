import React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


const techStackData = [
    {
        id: 1,
        techTitle: 'Frontend Technologies',
        techItem: ['Html', 'Css', 'JavaScript'],
        whyUseCard: [
            {
                avatar: 'T',
                userName: 'Tim Berners-Lee ',
                description: "HTML defines the webpage’s structure, including elements like headings, paragraphs, and images."
            },
            {
                avatar: 'H',
                userName: 'Håkon Wium',
                description: "CSS enhances the visual appeal by applying colors, fonts, and layouts."
            },
            {
                avatar: 'B',
                userName: 'Brendan Eich',
                description: "JavaScript brings interactivity, enabling animations and dynamic content updates."
            },
        ]
    },
    {
        id: 2,
        techTitle: 'Frameworks & Libraries',
        techItem: ['React js', 'Next js', 'Gatsby'],
        whyUseCard: [
            {
                avatar: 'J',
                userName: 'Jordan Walke',
                description: "React provides a fast and efficient UI rendering with its virtual DOM."
            },
            {
                avatar: 'G',
                userName: 'Guillermo Rauch',
                description: "Next.js enables server-side rendering (SSR) and static site generation (SSG) for improved performance."
            },
            {
                avatar: 'K',
                userName: 'Kyle Mathews',
                description: "Gatsby pre-builds pages at compile time, ensuring blazing-fast load speeds."
            },
            {
                avatar: 'G',
                userName: 'Guillermo Rauch',
                description: "Next.js and Gatsby improve SEO with pre-rendered pages, making content easily indexable."
            }
        ]
    },
    {
        id: 3,
        techTitle: 'UI & Styling Frameworks',
        techItem: ['Tailwind Css', 'Bootstrap', 'Material UI'],
        whyUseCard: [
            {
                avatar: 'A',
                userName: 'Adam Wathan',
                description: "Tailwind CSS provides utility-first classes for rapid styling without writing custom CSS."
            },
            {
                avatar: 'M',
                userName: 'Mark Otto',
                description: "Bootstrap offers a responsive grid system and pre-styled components for quick layout design."
            },
            {
                avatar: 'H',
                userName: 'Hai Nguyen',
                description: "Material UI includes ready-made React components following Google’s Material Design guidelines."
            },
        ]
    },
    {
        id: 4,
        techTitle: 'Carousel & Animation Libraries',
        techItem: ['Swiper.js', 'React Slick'],
        whyUseCard: [
            {
                avatar: 'P',
                userName: 'Praveen',
                description: "Swiper.js offers advanced features like touch gestures, parallax effects, and lazy loading."
            },
            {
                avatar: 'N',
                userName: 'Naveen',
                description: "React Slick provides easy customization with props for autoplay, infinite scrolling, and navigation controls."
            }
        ]
    },
    {
        id: 5,
        techTitle: 'Version Control',
        techItem: ['Git', 'GitHub'],
        whyUseCard: [
            {
                avatar: 'P',
                userName: 'Praveen',
                description: "Git tracks changes in code, allowing developers to revert to previous versions if needed."
            },
            {
                avatar: 'N',
                userName: 'Naveen',
                description: "GitHub enables seamless collaboration with features like pull requests, branches, and code reviews."
            }
        ]
    },
    {
        id: 6,
        techTitle: 'Development Tool',
        techItem: ['Vs Code'],
        whyUseCard: [
            {
                avatar: 'P',
                userName: 'Praveen',
                description: "VS Code is a lightweight yet powerful code editor that runs efficiently on most systems."
            },
            {
                avatar: 'N',
                userName: 'Naveen',
                description: "It provides a smooth coding experience with minimal resource usage compared to full-fledged IDEs."
            }
        ]
    },
]
const TechStack = () => {
    const [expanded, setExpanded] = useState('panel1');
    const [value, setValue] = useState(0);

    const handleChange = (panel) => (isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box className='comment-card-Active'>{children}</Box>}
            </div>
        );
    }


    return (
        <div className='container' id='Skills'>
            <h2 className='common_h2 mb-20 text-center'>Tech Stack & Skills</h2>
            <div className='tech-stack-container' data-aos='fade-up'>
                <div className='left-panel'>
                    <Tabs value={value} onChange={handleChange2} orientation="vertical">
                        {
                            techStackData?.map((data) => {
                                return (
                                    <Tab key={data?.id} disableRipple disableFocusRipple label={
                                        <Accordion  className={'accordionActive'} expanded={expanded === `panel${data?.id}`} onChange={handleChange(`panel${data?.id}`)}>
                                            <AccordionSummary component={'div'}
                                                className='accordionHeading common-sub-heading-varient-1 mb-12 font-weight-600'
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header">
                                                {data?.techTitle}
                                            </AccordionSummary>
                                            <AccordionDetails className='stack-container'>
                                                {
                                                    data?.techItem?.map((techItem, index) => {
                                                        return (
                                                            <span key={index}>{techItem}</span>
                                                        )
                                                    })
                                                }
                                            </AccordionDetails>
                                        </Accordion>
                                    } />
                                )
                            })
                        }
                    </Tabs>
                </div>
                <div className='right-panel'>
                    {
                        techStackData?.map((data, index) => {
                            return (
                                <CustomTabPanel key={index} value={value} index={index} className={'comment-card-main-Container'}>
                                    {
                                        data?.whyUseCard?.map((card, index) => {
                                            return (
                                                <div className="comment-card" key={index}>
                                                    <div className="avatar-container">{card?.avatar}</div>
                                                    <div className="comment-content">
                                                        <p className="common-para-varient-1 font-weight-500">{card?.userName}</p>
                                                        <p className="common-para-varient-3">{card?.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </CustomTabPanel>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStack
