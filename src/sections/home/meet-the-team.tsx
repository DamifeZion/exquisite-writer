import { TeamCard } from "@/components/home/team-card";
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import Typography from "@/components/ui/typography";
import { THE_TEAM } from "@/constants/home-const";
import { routeConstants } from "@/constants/route-const";

export const MeeetTheTeem = () => {
   return (
      <ScrollSpySection
         route={routeConstants.about}
         className="relative grid grid-rows-1 pt-28"
      >
         <img
            loading="lazy"
            src="/line-curve.svg"
            className="absolute top-0 w-full -z-10"
         />

         <div className="z-[15] bg-background">
            <main className="relative z-20 pt-20 max-md:mt-10 pb-36 bg-muted/30 lg:mt-20">
               <img
                  loading="lazy"
                  src="/grid-bg.svg"
                  className="absolute top-0 w-full -translate-x-1/2 h-[80%] -z-10 left-1/2"
               />

               {/* TEXT HEADING */}
               <div className="container max-w-md text-center sm:max-w-xl lg:max-w-6xl">
                  <Typography variant="h1" className="font-medium leading-none">
                     Meet the team
                  </Typography>

                  <Typography
                     variant="p"
                     className="max-w-md mx-auto min-[450px]:mt-8"
                  >
                     There are great minds behind great things, we think
                     innovations, we think exceptional
                  </Typography>

                  <div className="grid gap-6 mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-4">
                     {THE_TEAM.map((data, index) => (
                        <TeamCard key={index} {...data} />
                     ))}
                  </div>
               </div>
            </main>
         </div>
      </ScrollSpySection>
   );
};
