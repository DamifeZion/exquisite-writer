import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";

export const BlogHero = () => {
   return (
      <ScrollSpySection
         route={routeConstants.blogs}
         className="relative py-40 lg:py-52"
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
               Discover Insights and Inspiration
            </Typography>

            <Typography
               variant="h2"
               className="max-w-sm mx-auto mt-7 font-normal text-md !leading-snug border-none sm:max-w-[500px] min-[450px]:text-lg md:text-2xl lg:max-w-2xl"
            >
               Explore our captivating blog filled with thought-provoking
               articles and inspiring content that will ignite your creativity
               and expand your knowledge.
            </Typography>
         </div>
      </ScrollSpySection>
   );
};
