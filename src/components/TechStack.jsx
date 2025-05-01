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
            </div>
            <div className='stack-web-container'>
                {['Html', 'Css', 'JavaScript','React js', 'Next js', 'Gatsby','Tailwind Css', 'Bootstrap',
                 'Material UI','Swiper.js', 'React Slick','Git', 'GitHub','Vs Code'].map((data) => {
                    return (
                        <div data-aos='zoom-in' >{data}</div>
                    )
                })}

            </div>
        </div>
    )
}

export default TechStack
