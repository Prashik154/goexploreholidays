import { AboutUs } from "@/components/AboutUs";
import HomeSection from "@/components/home/Hero";
import { OurOfferings } from "@/components/OurOfferings";
import { SafariPackages } from "@/components/packages/SafariPackages";
import { AvailabilityChecker } from "@/components/safari/AvailabilityChecker";
import { SafariBentoGrid } from "@/components/safari/SafariBento";
import { SightingTracker } from "@/components/safari/SightingTracker";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <div className="flex flex-col">
    <HomeSection/>
   </div>
  );
}
    // <div className="container mx-auto px-4 py-16">
    //   <AboutUs/>
    //   <WhyChooseUs/>
    //   <OurOfferings/>
    //   {/* <AvailabilityChecker/> */}
    //   <SafariBentoGrid/>
    //   <SightingTracker/>
    //   <SafariPackages/>
    //   <Testimonials/>
    // </div>
