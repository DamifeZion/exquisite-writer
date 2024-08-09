import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";
import Typewriter from 'typewriter-effect';

export const HeroSection = () => [

   <ScrollSpySection route={routeConstants.home} className="relative pt-20 pb-10 lg:pt-28">
      <img
         loading="lazy"
         src="/hero-bg.svg"
         className="absolute top-0 object-cover -z-10 size-full"
      />

      <div className="container">
         <div className="md:grid md:grid-cols-2">
            <div>
               <div id="hero-text" className="max-w-[550px]">
                  <div className="!min-h-10">
                     <Typewriter
                        options={{
                           strings:
                              ["<h6 class='inline-block text-primary font-medium text-xl lg:text-3xl'>Write. <span class='text-[#C110FF]'>Connect.</span> <span class='text-[#00CC52]'>Grow.</span></h6>"],
                           autoStart: true,
                           loop: true,
                        }}
                     />
                  </div>

                  <Typography variant="h1" className="text-4xl leading-[1.18] min-[400px]:text-[46px] min-[480px]:text-[50px] min-[480px]:leading-[1.15] md:text-5xl md:leading-tight lg:text-[72px] lg:leading-[86px]">
                     Transform Your Ideas into Masterpieces
                  </Typography>

                  <Typography className="mt-4 text-md lg:mt-9">
                     Step into a world where your writing dreams come to life. We provide the tools, Service, and inspiration to help you thrive.
                  </Typography>
               </div>

               {/* NOTE: Clients Small Screen Only (Less than Tablet) */}
               <div className="flex flex-wrap items-center gap-6 mt-24 max-lg:hidden">
                  <Typography variant="" className="font-semibold text-md">
                     Trusted by over <br />
                     <span className="text-xl font-medium">10+</span> Clients
                  </Typography>

                  <img loading="lazy" src="/client-1.svg" />
                  <img loading="lazy" src="/client-2.svg" />
                  <img loading="lazy" src="/client-3.svg" />
                  <img loading="lazy" src="/client-4.svg" />
               </div>
            </div>

            <img src="/hero.svg" className="w-full h-auto max-md:max-w-sm max-md:mt-10" />
         </div>

         {/* NOTE: Clients Tablet Screens and Above */}
         <div className="flex flex-wrap items-center gap-6 mt-12 lg:hidden">
            <Typography variant="" className="font-semibold text-md">
               Trusted by over <br />
               <span className="text-xl font-medium">10+</span> Clients
            </Typography>

            <img loading="lazy" src="/client-1.svg" />
            <img loading="lazy" src="/client-2.svg" />
            <img loading="lazy" src="/client-3.svg" />
            <img loading="lazy" src="/client-4.svg" />
         </div>
      </div>
   </ScrollSpySection >
]