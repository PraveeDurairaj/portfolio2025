import Head from 'next/head';
import React from 'react';


const Seo = ({title,Description,keywords,ogImage,url,ogDiscription}) => {
  return (
  <Head>
    <title>{title}</title>
    <meta name='description' content={Description}/>
    <meta name='keywords' content={keywords}/>
    <meta property='og:title' content={title}/>
    <meta property='og:description' content={ogDiscription}/>
    <meta property='og:image' content={ogImage}/>
    <meta property='og:url' content={url}/>
    <meta property='og:type' content={'website'}/>
  </Head>
  )
}

export default Seo
