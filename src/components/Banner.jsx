import React from 'react';
import hero from '../../public/heroImg.png'
import Image from 'next/image';


const Banner = () => {
  const cardData = [
    {
      id: 1,
      text: 'I specialized in creating modern eye-catching user interfaces with React'
    },
    {
      id: 2,
      text: 'I ensure that every design adapts responsive & pixel-perfect design'
    },
    {
      id: 3,
      text: 'My design prioritize speed and efficiency for better performance'
    },
    {
      id: 4,
      text: 'I specialized in building multi-language websites'
    },
  ]
  return (
    <div className='banner-container mt-10' id='Home'>
      <h1 data-aos='fade-up' className='common_h1 '>
        <p>Hi, I'm <span className='highlight-text'> Praveen </span> </p>
        A Passionate Frontend Developer
      </h1>
      <p data-aos='fade-up' data-aos-delay="200" className='common-para-varient-1 text-center description-text'>I design & develop sleek,responsive website that users love to explore</p>
      <div className='key-points-card-container'>
        {cardData?.map((data) => {
          return (
            <div data-aos='zoom-in'
             key={data?.id}>{data?.text}</div>
          )
        })
        }
      </div>
      <Image src={hero} priority className='hero-img' alt='developer image'></Image>
    </div>
  )
}

export default Banner
