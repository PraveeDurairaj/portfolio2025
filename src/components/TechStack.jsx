import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import development from '../../public/web-development.png';
import responsive from '../../public/responsive.png';
import rtl from '../../public/rtl-language.png';

const aboutData = {
    title: 'Who I Am',
    description: "Hi, I'm Praveen — a Frontend Developer with 1+ years of experience in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Gatsby. I collaborate closely with designers to bring UI/UX concepts to life and work alongside backend developers to ensure seamless integration and performance across the stack.",
    cardData: [
        {
            cardIcon: development,
            cardTitle: 'Professional Web Development',
            cardDes: "Expert in React, Next.js, Tailwind CSS, and Firebase, delivering high-performance, scalable websites."
        },
        {
            cardIcon: responsive,
            cardTitle: 'Pixel-Perfect & Responsive Design',
            cardDes: "Ensuring flawless, fully responsive websites with precise, pixel-perfect UI for all devices."
        },
        {
            cardIcon: rtl,
            cardTitle: 'RTL & Full Customization Support',
            cardDes: "Specializing in right-to-left (RTL) language support and 100% customizable UI solutions."
        }
    ]
}

const techStackData = [
    {
        id: 1,
        techTitle: 'Frontend Technologies',
        techItem: ['Html', 'Css', 'JavaScript']
    },
    {
        id: 2,
        techTitle: 'Frameworks & Libraries',
        techItem: ['React js', 'Next js', 'Gatsby']
    },
    {
        id: 3,
        techTitle: 'UI & Styling Frameworks',
        techItem: ['Tailwind Css', 'Bootstrap', 'Material UI']
    },
    {
        id: 4,
        techTitle: 'Carousel & Animation Libraries',
        techItem: ['Swiper.js', 'React Slick']
    },
    {
        id: 5,
        techTitle: 'Version Control',
        techItem: ['Git', 'GitHub']
    },
    {
        id: 6,
        techTitle: 'Development Tool',
        techItem: ['Vs Code']
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
                                        <Accordion className={'accordionActive'} expanded={expanded === `panel${data?.id}`} onChange={handleChange(`panel${data?.id}`)}>
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
            </div>
            <div className=''>
                {[['Html', 'Css', 'JavaScript', 'React js', 'Next js', 'Gatsby', 'Tailwind Css', 'Bootstrap'],
                ['Material UI', 'Swiper.js', 'React Slick', 'Git', 'GitHub', 'Vs Code']].map((data) => {
                    return (
                        <div className='stack-web-container'>
                                {data?.map((tech,key) => {
                                    return (
                                        <div key={key} data-aos='zoom-in' >{tech}</div>
                                    )
                                })}
                        </div>
                    )
                })}

            </div>
            <div className='about-grid'>
                {aboutData?.cardData?.map((data, index) => {
                    return (
                        <div className='about-card' data-aos-easing="ease-in-sine" data-aos='fade-up' data-aos-delay={`${index + 2}00`} key={index}>
                            <span><Image src={data?.cardIcon} alt={data?.cardTitle}></Image></span>
                            <p className='common-para-varient-1 font-weight-600'>{data?.cardTitle}</p>
                            <p className='common-para-varient-2'>{data?.cardDes}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechStack
