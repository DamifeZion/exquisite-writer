import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";
import Typewriter from "typewriter-effect";

export const HeroSection = () => [
   <ScrollSpySection route={routeConstants.home} className="relative">
      <img
         loading="lazy"
         src="/hero-bg.svg"
         className="absolute top-0 object-cover -z-10 size-full"
      />

      <div className="container">
         <div className="md:grid md:grid-cols-2">
            <div id="text-writer" className="py-20 lg:py-28">
               <div id="hero-text" className="max-w-[580px]">
                  <div className="!min-h-10">
                     <Typewriter
                        options={{
                           strings: [
                              "<h6 class='inline-block text-primary font-medium text-xl lg:text-3xl'>Write. <span class='text-[#C110FF]'>Connect.</span> <span class='text-[#00CC52]'>Grow.</span></h6>",
                           ],
                           autoStart: true,
                           loop: true,
                        }}
                     />
                  </div>

                  <Typography
                     variant="h1"
                     className="text-4xl leading-[1.18] min-[400px]:text-[46px] min-[480px]:text-[50px] min-[480px]:leading-[1.15] md:text-5xl md:leading-tight lg:text-[65px] lg:leading-[76px]"
                  >
                     Transform Your Ideas into Engaging Content
                  </Typography>

                  <Typography className="mt-4 text-md lg:mt-9">
                     Exceptional Writing Services for Every Need, whether you
                     need a single blog post or a comprehensive content
                     strategy, our team of expert writers is here to bring your
                     ideas to life.
                  </Typography>
               </div>

               {/* NOTE: Clients Small Screen Only (Less than Tablet) max-lg:hidden*/}
               <div className="flex flex-wrap items-center gap-6 mt-24 ">
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

            <div className="relative overflow-visible max-md:-mb-4 max-md:mt-4">
               <img
                  src="/hero.svg"
                  loading="lazy"
                  className="absolute object-cover object-left size-full"
               />
            </div>
         </div>

         {/* NOTE: Clients Tablet Screens and Above */}

         {/* <div className="flex flex-wrap items-center gap-6 mt-12 lg:hidden">
            <Typography variant="" className="font-semibold text-md">
               Trusted by over <br />
               <span className="text-xl font-medium">10+</span> Clients
            </Typography>

            <img loading="lazy" src="/client-1.svg" />
            <img loading="lazy" src="/client-2.svg" />
            <img loading="lazy" src="/client-3.svg" />
            <img loading="lazy" src="/client-4.svg" />
         </div> */}
      </div>
   </ScrollSpySection>,
];
