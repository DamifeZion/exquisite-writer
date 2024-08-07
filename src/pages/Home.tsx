import { AboutUsSection } from "@/sections/home/about-us";
import { HeroSection } from "@/sections/home/hero";
import { WhatWeDoSection } from "@/sections/home/what-we-do";


const Home = () => {

   return (
      <div>
         <HeroSection />
         <WhatWeDoSection />
         <AboutUsSection />
      </div>
   )
}


export default Home;