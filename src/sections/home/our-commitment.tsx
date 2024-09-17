import { OurCommitmentCard } from "@/components/home/our-commitment-card";
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { OUR_COMMITMENTS } from "@/constants/home-const";
import { routeConstants } from "@/constants/route-const";

export const OurCommitment = () => {
   return (
      <ScrollSpySection
         route={routeConstants.whyUs}
         className="relative  py-24 bg-[hsla(0,0%,98%)] pb-20 min-[550px]:pb-64 lg:pt-40"
      >
         <img
            src="/grid-bg.svg"
            className="absolute top-0 left-0 w-full h-[90%]"
         />

         <div className="container relative z-10 flex flex-col justify-between gap-24 lg:flex-row lg:gap-x-28">
            <div className="max-w-lg">
               <Typography
                  variant="h1"
                  className="font-semibold !leading-tight "
               >
                  Mastering Content Creation with Our Proven 6-D Process
               </Typography>

               <Typography variant="p" className="mt-8">
                  Our 6-D Process is designed to ensure your content not only
                  meets your expectations but exceeds them. Each phase is
                  handled with meticulous care and expertise. This comprehensive
                  approach guarantees success at every stage of your content
                  journey.
               </Typography>
            </div>

            <div className="grid gap-x-6 gap-y-6 min-[550px]:grid-cols-2 *:relative min-[550px]:gap-y-4 min-[550px]:[&>*:nth-child(2n+2)]:top-20 ">
               {OUR_COMMITMENTS.map((data, index) => (
                  <OurCommitmentCard key={index} {...data} />
               ))}
            </div>
         </div>
      </ScrollSpySection>
   );
};

// min-[550px]:gap-x-6 min-[550px]:[&>*:nth-child(1n+2)]:top-16 min-[550px]:[&>*:nth-child(1n+3)]:top-8 min-[550px]:[&>*:nth-child(1n+4)]:top-32
