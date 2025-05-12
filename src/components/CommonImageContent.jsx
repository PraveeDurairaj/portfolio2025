import React from 'react';
import Image from 'next/image';


const CommonImageContent = ({title,description,description2,image,sectionId,containerClass,subTitle}) => {
    return (
        <div id={sectionId} className={`${containerClass}`}>
            <div className='container'>
                <div className='about-flex'>
                    <div className='content-container'>
                     {title && <h2 className={`common_h2 ${!subTitle && 'mb-12'}`} data-aos='fade-up' >{title}</h2> }
                     {subTitle && <p className='mb-18'>{subTitle}</p>}   
                     {description &&  <p className='common-para-varient-1 about-description' data-aos='fade-up' >{description}</p> }  
                     {description2 &&  <p className='common-para-varient-1 about-description mt-20' data-aos='fade-up' >{description2}</p> }  
                    </div>
                    <div className='img-container'>
                        {image &&  <Image src={image} alt={'image'} /> }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CommonImageContent
