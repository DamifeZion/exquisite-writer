import { AboutUsSection } from "@/sections/home/about-us";
import { Faq } from "@/sections/home/Faq";
import { HeroSection } from "@/sections/home/hero";
import { MeeetTheTeem } from "@/sections/home/meet-the-team";
import { Testimonial } from "@/sections/home/testimonial";
import { WhatWeDoSection } from "@/sections/home/what-we-do";


const Home = () => {

   return (
      <div>
         <HeroSection />
         <WhatWeDoSection />
         <AboutUsSection />
         <MeeetTheTeem />
         <Testimonial />
         <Faq />
      </div>
   )
}


export default Home;