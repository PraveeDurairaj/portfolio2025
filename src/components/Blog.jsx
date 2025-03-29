import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogImage1 from '../../public/blogImage1.png';
const blogData = [
  {
    id: 1,
    img: blogImage1,
    title: "Implementing Dark and Light Mode in Next.js — 2025",
    description: "A complete guide to persistent theming with local storage and Next.js",
    link: '/'
  },
  {
    id: 2,
    img: blogImage1,
    title: "Implementing Dark and Light Mode in Next.js — 2025",
    description: "A complete guide to persistent theming with local storage and Next.js",
    link: '/'
  },
  {
    id: 3,
    img: blogImage1,
    title: "Implementing Dark and Light Mode in Next.js — 2025",
    description: "A complete guide to persistent theming with local storage and Next.js",
    link: '/'
  },
]
const Blog = () => {
  const BlogCard = ({ content }) => {
    const { img, title, description, link,id } = content;
    return (
      <Link href={link} target='_blank' className='blog-card' data-aos='fade-up' data-aos-delay={`${id + 2}00`}>
        <div className='blog-img-container'>
          <Image src={img} alt={title} className='blog-img'></Image>
        </div>
        <p className="theme-text-black font-weight-500 mb-8">{title}</p>
        <p className="blog-description">{description}</p>
      </Link>
    )
  }

  return (
    <div className='container' id='Blog'>
      <h2 className='common_h2 mb-12 text-center' data-aos='zoom-in'>Code & Craft</h2>
      <p className='common-para-varient-1 text-center'>A collection of my experiences and lessons learned in frontend development</p>
      <div className='blog-card-container'>
        {
          blogData?.map((data)=>{
            return(
              <BlogCard content={data} key={data?.id}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default Blog
