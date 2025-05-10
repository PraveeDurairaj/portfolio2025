import React from 'react';
import Image from 'next/image';
import gymWebsite from '../../public/gymProjectImg.png';
import portfolio from '../../public/portfolioProjectImg.png';

const Projects = () => {
  return (
    <div className='container'>
        <h2 className='common_h2 mb-20 text-center'>Projects</h2>
        <div className="projects_container">
        <Image src={gymWebsite} alt={'projects'}/>
        <Image src={portfolio} alt={'projects'}/>
        </div>
        
    </div>
  )
}

export default Projects
