import { TeamCard } from "@/components/home/team-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import Typography from "@/components/ui/typography"
import { THE_TEAM } from "@/constants/home-const"
import { routeConstants } from "@/constants/route-const"

export const MeeetTheTeem = () => {

   return (
      <ScrollSpySection
         route={routeConstants.about}
         className="relative grid grid-rows-1 pt-28"
      >
         <img
            loading="lazy"
            src="/line-curve.svg"
            className="absolute w-full -z-10 top-20"
         />

         <div className="z-[15] bg-background">
            <main className="relative z-20 pt-20 mt-20 pb-36 bg-muted/30">
               <img
                  loading="lazy"
                  src="/grid-bg.svg"
                  className="absolute top-0 w-full -translate-x-1/2 h-[80%] -z-10 left-1/2"
               />

               {/* TEXT HEADING */}
               <div className="container max-w-md text-center sm:max-w-xl lg:max-w-6xl">
                  <Typography variant="h1" className="font-medium">
                     Meet the team
                  </Typography>

                  <Typography className="max-w-md mx-auto mt-8">
                     There are great minds  behind great things, we think innovations, we think exceptional
                  </Typography>

                  <div className="grid gap-6 mx-auto mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                     {THE_TEAM.map((data, index) => (
                        <TeamCard
                           key={index}
                           {...data}
                        />
                     ))}
                  </div>
               </div>
            </main>
         </div>
      </ScrollSpySection>
   )
}