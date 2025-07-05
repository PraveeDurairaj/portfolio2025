import React from 'react'
import CustomeTab from './CustomeTab';
import Projects from './Projects';
import CommonImageContent from './CommonImageContent';
import exprience from '../../public/exprience.jpg';


const ExprinceTab = () => {
  const tabs = ['Exprience', 'Projects']
  const tabPanel = [
  <CommonImageContent
    title={'Frontend Developer'}
    subTitle={'1+ Years Experience'}
    description={'I have worked on a variety of web projects including an Airbnb clone with booking and listing features, an Uber clone featuring ride-request and real-time tracking, and a handyman service website designed for both users and service providers. I also contributed to Wooberly Eats, a food delivery platform, where I developed key UI components, and built multiple SEO-friendly marketing and promotional websites to support product visibility.'}
    description2={'I focused on building reusable components optimized for performance and scalability, while ensuring that all interfaces were fully responsive and consistent across major devices and browsers.'}
    image={exprience}
  />, 
  <Projects />]

  return (
    <>
      <h2 className='common_h2 text-center mb-18' id='Expreience'>Experience & Projects</h2>
      {/* <p className='common-para-varient-1 text-center theme-text-black mb-18'>Delivering scalable and responsive web solutions with modern frontend technologies.</p> */}
      <CustomeTab tabsData={tabs} tabPanelData={tabPanel} />
    </>
  )
}

export default ExprinceTab
