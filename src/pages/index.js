import { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGetDocs } from "@/hook/useFirebaseCURD";
import  Layout  from "@/layout/Layout";
import TextOnlyBanner from "@/components/TextOnlyBanner";
import ExprinceTab from "@/components/ExprinceTab";
import CommonImageContent from "@/components/CommonImageContent";
import aboutImg from '../../public/aboutImg.jpg';

const Banner = dynamic(() => import("@/components/Banner"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
// const Blog = dynamic(() => import("@/components/Blog"));

export default function Home() {
  const { getDocsData, data } = useGetDocs('site data')
  useEffect(() => {
    Aos.init(
      {
        duration: 800,
        once: true,
        offset: 100,
      }
    )
    getDocsData('KgLZiVEA1X1JFFf3Bl6h')
  },[])

  const textBanner = true;


  return (
    <>
      <Seo
        title={data?.metaTitle ?? 'Praveen | React Frontend Developer | 1 Year Experience | Scalable Web Apps'}
        Description={data?.MetaDescription ?? 'Praveen is a skilled React Frontend Developer with 1 year of experience in building scalable,high-performance, and responsive web applications using React.js, JavaScript, and modern frontend technologies.'}
        keywords={data?.MetaKeywords ?? 'React Frontend Developer, React.js Developer, Praveen durairaj, Web Developer,praveen, Scalable Web Apps, Responsive UI=, Next.js, Tailwind CSS,praveen durairaj react developerś, Frontend Engineer'}
        ogDiscription={'I specialize in React.js and modern frontend technologies, crafting scalable, high-performance, and responsive web applications.'}
        ogImage={'https://res.cloudinary.com/dpairr3zz/image/upload/v1746333534/og_1_wz5bs2.webp'}
        url={'dev.praveen.com'}
      />
      <Layout>
        {textBanner ? <TextOnlyBanner/> : <Banner />}
        <CommonImageContent 
        title={'Who I Am'}
        description={"Hi, I'm Praveen — a Frontend Developer with 1+ years of experience in building responsive, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, and modern frameworks like React, Next.js, and Gatsby. I collaborate closely with designers to bring UI/UX concepts to life and work alongside backend developers to ensure seamless integration and performance across the stack."}
        image={aboutImg}
        sectionId={'About'}
       />
        <TechStack/>
        <ExprinceTab/>
        <WhyChoose />
        {/* <Blog /> */}
      </Layout>
    </>
  );
}
