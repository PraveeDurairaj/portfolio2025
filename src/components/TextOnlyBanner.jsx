import React from 'react';
import Image from 'next/image';
import tickIcon from '../../public/tick.png';
import PrimaryButton from './PrimaryButton';

const TextOnlyBanner = () => {
    const bannerData = {
        header: "Building Clean, Responsive, and Scalable Web Interfaces",
        subHeader: "As a React Frontend Developer, I focus on crafting modular components, maintaining clean codebases, and delivering user-friendly interfaces that perform across all devices.",
        cta: 'Chat with us',
        whyChooseData: ["Professional Expertise", "Performance & Optimization", "Mobile-First Approach"]
    }
    const renderLeadPoints = ({ className }) => {
        return (
            <div className={`text-banner-whyChoose ${className}`}>
                {
                    bannerData?.whyChooseData?.map((data, index) => {
                        return (
                            <article className='why-chosse-card' key={index} data-aos='fade-down-right'>
                                <Image src={tickIcon} alt={data}></Image>
                                <span>{data}</span>
                            </article>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <div className='text-banner-container'>
            <div className='content-box'>
                {renderLeadPoints({ className: 'hiddenMobile' })}
                <h1>{bannerData?.header}</h1>
                <p>{bannerData?.subHeader}</p>
                {renderLeadPoints({ className: 'showMobile' })}
                <div className='text-banner-cta-btn'>
                    <PrimaryButton type={'button'} text={bannerData?.cta} />
                </div>
            </div>
        </div>
    )
}

export default TextOnlyBanner
