import dynamic from "next/dynamic";
import Seo from "@/components/Seo";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = dynamic(() => import("@/components/Header"));
const Banner = dynamic(() => import("@/components/Banner"));
const About = dynamic(() => import("@/components/About"));
const TechStack = dynamic(() => import("@/components/TechStack"));
const WhyChoose = dynamic(() => import("@/components/WhyChoose"));
const Blog = dynamic(() => import("@/components/Blog"));

export default function Home() {
  useEffect(() => {
    Aos.init(
      {
        duration: 800,
        once:true,
        offset: 100,
      }
    )
  }, [])
  return (
    <>
      <Seo
        title={'Praveen | React Frontend Developer | 1 Year Experience | Scalable Web Apps'}
        Description={'Praveen is a skilled React Frontend Developer with 1 year of experience in building scalable,high-performance, and responsive web applications using React.js, JavaScript, and modern frontend technologies.'}
        keywords={'React Frontend Developer, React.js Developer, Praveen durairaj, Web Developer,praveen, Scalable Web Apps, Responsive UI=, Next.js, Tailwind CSS,praveen durairaj react developerś, Frontend Engineer'}
        ogDiscription={'I specialize in React.js and modern frontend technologies, crafting scalable, high-performance, and responsive web applications.'}
        ogImage={'https://res.cloudinary.com/dpairr3zz/image/upload/v1740209237/ogImage_dgjwnv.png'}
        url={'dev.praveen.com'}
      />
      <Header />
      <Banner />
      <About/>
      <TechStack/>
      <WhyChoose/>
      <Blog/>
      <Footer/>
    </>
  );
}
