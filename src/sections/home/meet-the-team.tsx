import { TeamCard } from "@/components/home/team-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const"

export const MeeetTheTeem = () => {

   return (
      <ScrollSpySection
         route={routeConstants.about}
         className="relative grid grid-rows-1 pt-28"
      >
         <img
            src="/line-curve.svg"
            className="absolute w-full -z-10 top-20"
         />

         <div className="z-10 bg-background">
            <main className="relative py-20 mt-20 bg-muted/30">
               <img
                  src="/public/grid-bg.svg"
                  className="absolute top-0 -translate-x-1/2 size-full left-1/2"
               />

               {/* TEXT HEADING */}
               <div className="text-center">
                  <Typography variant="h1" className="font-medium">
                     Meet the team
                  </Typography>

                  <Typography className="max-w-md mx-auto mt-8">
                     There are great minds  behind great things, we think innovations, we think exceptional
                  </Typography>

                  <div className="grid grid-cols-4 mt-16">
                     <TeamCard />
                     <TeamCard />
                     <TeamCard />
                     <TeamCard />
                  </div>
               </div>
            </main>
         </div>
      </ScrollSpySection>
   )
}