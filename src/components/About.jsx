import React from 'react';
import Image from 'next/image';
import aboutImg from '../../public/aboutImg.jpg';
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

const About = () => {
    return (
        <div className='bg-gray' id='About'>
            <div className='container'>
                <div className='about-flex'>
                    <div className='content-container'>
                        <h2 className='common_h2 mb-12' data-aos='fade-up' >{aboutData?.title}</h2>
                        <p className='common-para-varient-1 about-description' data-aos='fade-up' >{aboutData?.description}</p>
                    </div>
                    <div className='img-container'>
                        <Image src={aboutImg} alt={'about us image'} />
                    </div>
                </div>
            </div>
{/* 
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
            </div> */}
        </div>


    )
}

export default About
