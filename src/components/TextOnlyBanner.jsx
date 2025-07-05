import React from 'react';
import Image from 'next/image';
import tickIcon from '../../public/tick.png';
import PrimaryButton from './PrimaryButton';

const TextOnlyBanner = () => {
    const bannerData = {
        header: "Creating Fast, Reliable & Scalable Web Interface",
        subHeader: "I'm Praveen Durairaj, a React Frontend Developer committed to building clean, reusable components and delivering fast, reliable web experiences that work flawlessly on every device.",
        cta: "Get in Touch",
        whyChooseData: ["Modern Frontend Expertise", "Clean, Maintainable Code", "Performance-Driven & Mobile-First"]
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
