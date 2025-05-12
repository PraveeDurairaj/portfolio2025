import React from 'react'
import CustomeTab from './CustomeTab';
import WhyChoose from './WhyChoose';
import Projects from './Projects';


const ExprinceTab = () => {
    const tabs = ['Exprince','Projects']
    const tabPanel = [<WhyChoose/>,<Projects/>]

  return (
    <>
      <CustomeTab tabsData={tabs} tabPanelData={tabPanel}/>
    </>
  )
}

export default ExprinceTab
