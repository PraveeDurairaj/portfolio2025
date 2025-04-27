import { useEffect } from "react";
import dynamic from "next/dynamic";
import Seo from "@/components/Seo";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGetDocs } from "@/hook/useFirebaseCURD";
import  Layout  from "@/layout/Layout";

const Banner = dynamic(() => import("@/components/Banner"));
const About = dynamic(() => import("@/components/About"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const Blog = dynamic(() => import("@/components/Blog"));

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

  return (
    <>
      <Seo
        title={data?.metaTitle ?? 'Praveen | React Frontend Developer | 1 Year Experience | Scalable Web Apps'}
        Description={data?.MetaDescription ?? 'Praveen is a skilled React Frontend Developer with 1 year of experience in building scalable,high-performance, and responsive web applications using React.js, JavaScript, and modern frontend technologies.'}
        keywords={data?.MetaKeywords ?? 'React Frontend Developer, React.js Developer, Praveen durairaj, Web Developer,praveen, Scalable Web Apps, Responsive UI=, Next.js, Tailwind CSS,praveen durairaj react developerś, Frontend Engineer'}
        ogDiscription={'I specialize in React.js and modern frontend technologies, crafting scalable, high-performance, and responsive web applications.'}
        ogImage={'https://res.cloudinary.com/dpairr3zz/image/upload/v1744972235/og_hisl1t.webp'}
        url={'dev.praveen.com'}
      />
      <Layout>
        <Banner />
        <About />
        <TechStack/>
        <WhyChoose />
        <Blog />
      </Layout>
    </>
  );
}
