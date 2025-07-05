import React from 'react';
import Image from 'next/image';


const CommonImageContent = ({title,description,description2,image,sectionId,containerClass,subTitle}) => {
    return (
        <div id={sectionId} className={`${containerClass}`}>
            <div className='container'>
                <div className='about-flex'>
                    <div className='content-container'>
                     {title && <h2 className={`common_h2 ${!subTitle && 'mb-12'}`} >{title}</h2> }
                     {subTitle && <p className='mb-18 about-year-flex'>{subTitle}</p>}   
                     {description &&  <p className='common-para-varient-1 about-description'  >{description}</p> }  
                     {description2 &&  <p className='common-para-varient-1 about-description mt-20'  >{description2}</p> }  
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
