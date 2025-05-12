import React from 'react';
import Image from 'next/image';
import gymWebsite from '../../public/gymProjectImg.png';
import portfolio from '../../public/portfolioProjectImg.png';
import nextJs from '../../public/nextJs.svg';
import tailwind from '../../public/tailwind.svg';
import materialUI from '../../public/materialUI.svg';
import firebase from '../../public/firebase.svg';

const projectsData = [
  {
    id: 1,
    projectImg: gymWebsite,
    link:'https://gym-demo-ashen.vercel.app/',
    websiteName: 'Gym website',
    websiteStack: [
      {
        stackImg: nextJs,
        stackName: 'Next Js'
      },
      {
        stackImg: tailwind,
        stackName: 'Tailwind'
      }
    ]
  },
  {
    id: 2,
    projectImg: portfolio,
    link:'https://portfolio2025-sandy.vercel.app/',
    websiteName: 'Portfolio website',
    websiteStack: [
      {
        stackImg: nextJs,
        stackName: 'Next Js'
      },
      {
        stackImg: materialUI,
        stackName: 'Material UI'
      },
      {
        stackImg: firebase,
        stackName: 'Firebase'
      }
    ]
  }
]
const ProjectCard = ({ data }) => {
  return (
    <div className="project_item_container">
      <Image className={'project_image'} src={data?.projectImg} alt={data?.websiteName} />
      <div className='project_name_flex'>
        <h3 className="project_name">{data?.websiteName}</h3>
        <a target='_blank' href={data?.link} className='view_btn'>view</a>
      </div>
      <div className="project_stack_container">
        {data?.websiteStack?.map((stack) => {
          return (
            <div className="project_stack_container_item">
              <Image src={stack?.stackImg} alt={stack?.stackName} />
              <span>{stack?.stackName}</span>
            </div>
          )
        })}

      </div>
    </div>
  )
}
const Projects = () => {
  return (
    <div className='container'>
      <div className="projects_container">
        {projectsData?.map((card) => {
          return (
            <ProjectCard data={card} key={card?.id} />
          )
        })}
      </div>
    </div>
  )
}

export default Projects

