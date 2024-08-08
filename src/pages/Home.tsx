import { AboutUsSection } from "@/sections/home/about-us";
import { HeroSection } from "@/sections/home/hero";
import { MeeetTheTeem } from "@/sections/home/meet-the-team";
import { WhatWeDoSection } from "@/sections/home/what-we-do";


const Home = () => {

   return (
      <div>
         <HeroSection />
         <WhatWeDoSection />
         <AboutUsSection />
         <MeeetTheTeem />
      </div>
   )
}


export default Home;