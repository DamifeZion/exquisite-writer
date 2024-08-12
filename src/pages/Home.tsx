import { AboutUsSection } from "@/sections/home/about-us";
import { FAQ } from "@/sections/home/FAQ";

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
         <FAQ />
      </div>
   )
}


export default Home;