import React from 'react';
import Image from 'next/image';
import development from '../../public/web-development.png';
import responsive from '../../public/responsive.png';
import rtl from '../../public/rtl-language.png';

const aboutData = {
    title:'Who I Am',
    description:"Hi, I'm Praveen, a Frontend Developer with 1 year of experience. I focus on building responsive and user-friendly websites. I work with HTML, CSS, JavaScript, and popular frameworks like React, Next.js, and Gatsby",
    cardData:[
        {
            cardIcon:development,
            cardTitle:'Professional Web Development',
            cardDes:"Expert in React, Next.js, Tailwind CSS, and Firebase, delivering high-performance, scalable websites."
        },
        {
            cardIcon:responsive,
            cardTitle:'Pixel-Perfect & Responsive Design',
            cardDes:"Ensuring flawless, fully responsive websites with precise, pixel-perfect UI for all devices."
        },
        {
            cardIcon:rtl,
            cardTitle:'RTL & Full Customization Support',
            cardDes:"Specializing in right-to-left (RTL) language support and 100% customizable UI solutions."
        }
    ]
}

const About = () => {
    return (
        <div className='bg-gray' id='About'>
            <div className='container'>
                <h2 className='common_h2 mb-12 text-center ' data-aos='fade-up' >{aboutData?.title}</h2>
                <p className='common-para-varient-1 about-description text-center' data-aos='fade-up' >{aboutData?.description}</p>
                <div className='about-grid'>
                    {aboutData?.cardData?.map((data,index)=>{
                        return(
                            <div className='about-card' data-aos-easing="ease-in-sine" data-aos='fade-up' data-aos-delay={`${index + 2}00`} key={index}>
                              <span><Image src={data?.cardIcon} alt={data?.cardTitle}></Image></span>
                              <p className='common-para-varient-1 font-weight-600'>{data?.cardTitle}</p>
                              <p className='common-para-varient-2'>{data?.cardDes}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>


    )
}

export default About
