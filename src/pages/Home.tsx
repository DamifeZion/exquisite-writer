import { AboutUsSection } from "@/sections/home/about-us";
import { FrequentlyAskedQuestions } from "@/sections/home/frequent-questions";
import { HeroSection } from "@/sections/home/hero";
import { MeeetTheTeem } from "@/sections/home/meet-the-team";
import { OurCommitment } from "@/sections/home/our-commitment";
import { Pricing } from "@/sections/home/pricing";
import { Testimonial } from "@/sections/home/testimonial";
import { WhatWeDoSection } from "@/sections/home/what-we-do";


const Home = () => {

   return (
      <div>
         <HeroSection />
         <WhatWeDoSection />
         <OurCommitment />
         <AboutUsSection />
         <MeeetTheTeem />
         <Testimonial />
         <Pricing />
         <FrequentlyAskedQuestions />
      </div>
   )
}


export default Home;