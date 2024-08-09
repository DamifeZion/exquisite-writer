import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const"
import { Button } from "@/components/ui/button"
import { WhatWeDoCard } from "@/components/home/what-we-do-card"
import { WHAT_WE_DO } from "@/constants/home-const"
import { cn } from "@/lib/utils"


type GetStartedButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
   deviceType: "mobile" | "desktop";
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ deviceType, className, ...props }) => {
   return (
      <Button
         className={cn(
            "w-fit px-10 py-6 font-light bg-black border rounded-sm transition-all duration-150 ease-linear border-primary-foreground hover:bg-black hover:scale-105",
            {
               "lg:hidden mt": deviceType === "mobile",
               "max-lg:hidden mt-16": deviceType === "desktop",
            }, className
         )}
         {...props}
      >
         Get Started
      </Button>
   )
}

export const WhatWeDoSection = () => {

   return (
      <ScrollSpySection route={routeConstants.whatWeDo} className="pb-20 pt-28 lg:container lg:pb-40">
         <Card className="bg-[#F5650A] rounded-[20px] pt-10 max-lg:pb-20 lg:rounded-[40px]">
            <CardContent className="flex flex-col p-4 gap-x-20 md:p-8 lg:flex-row lg:items-center">
               <div className="flex flex-col max-w-xl max-lg:mx-auto max-lg:text-center lg:max-w-xsI">
                  <Badge className=" w-fit px-5 py-2 max-lg:mx-auto text-[#F5650A] text-md bg-primary-foreground md:py-4 hover:bg-primary-foreground">
                     What We Do
                  </Badge>

                  <Typography variant="p" className="max-w-[550px] mt-5 text-primary-foreground">
                     At Exquisite Writers, we offer a comprehensive suite of services designed to support and elevate your writing journey.
                  </Typography>

                  <GetStartedButton deviceType="desktop" />
               </div>

               <div className="grid flex-grow gap-6 max-lg:mt-16 min-[700px]:grid-cols-2">
                  {WHAT_WE_DO.map((data, index) => (
                     <WhatWeDoCard
                        key={index}
                        {...data}
                     />
                  ))}
               </div>

               <GetStartedButton deviceType="mobile" className="max-lg:mx-auto max-lg:mt-14" />
            </CardContent>
         </Card>
      </ScrollSpySection>
   )
}