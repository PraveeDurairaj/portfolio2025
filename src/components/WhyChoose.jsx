import React from 'react';
import Image from 'next/image';
import tickIcon from '../../public/tick.png';
import PrimaryButton from './PrimaryButton';
const whyChooseData = ["Professional Development Standards", "Performance & Optimization", "Mobile-First, Responsive Design"]

const WhyChoose = () => {
    return (
        <div className='container' id='WhyChoose'>
            <div className="why-choose-container">
                <div className='text-center mb-20'>
                    <h2 className='why-choose-header'>Let's Work Together</h2>
                    <p className='common-para-varient-1 why-choose-description'>Looking for a dedicated Frontend Developer? I'm ready to bring clean code, performance-focused solutions, and a collaborative mindset to your team.</p>
                </div>
                <div className='why-choose-card-container'>
                    {
                        whyChooseData?.map((data, index) => {
                            return (
                                <article className='why-chosse-card' key={index} data-aos='fade-down-right'>
                                    <Image src={tickIcon} alt={data}></Image>
                                    <span>{data}</span>
                                </article>
                            )
                        })
                    }
                </div>
                <div className={'why-choose-btn'} >
                    <PrimaryButton type={'link'} link={'/contact'} text={'Get in Touch'} />
                </div >
            </div>
        </div>
    )
}

export default WhyChoose
