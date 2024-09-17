import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";

export const PolicyHeader = () => {
   return (
      <ScrollSpySection
         route={routeConstants.privacyPolicy}
         className="relative py-20 lg:py-52"
      >
         <img
            id="bg-img"
            src="/hero-bg.svg"
            className="absolute top-0 left-0 object-cover w-full h-full -z-10"
         />

         <div className="relative container max-w-xl lg:max-w-[900px] !text-center">
            <Typography
               variant="h1"
               className="text-center text-[40px] text-balance !leading-tight text-[hsl(32,100%,42%)] min-[500px]:text-5xl md:text-6xl lg:text-7xl"
            >
               Privacy Policy
            </Typography>
         </div>
      </ScrollSpySection>
   );
};
