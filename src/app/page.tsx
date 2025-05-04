import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import VideoSection from "@/components/VideoSection";


export default function Home() {
  return (
    <>
    <Hero/> 
    <Packages/>
    <Values/> 
    <VideoSection/>
   <Testimonials/>
    {/* <CTA/> */}
   <Footer/>  
   </>
  );
}
