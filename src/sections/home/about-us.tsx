import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const"
import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

type SectionTItleProps = HTMLAttributes<HTMLSpanElement> & {
   deviceType: "mobile" | "desktop";
}

const SectionTItle: React.FC<SectionTItleProps> = ({ deviceType, className, ...props }) => {
   return (
      <span className={cn("px-6 py-5 rounded-full w-fit bg-primary/10 text-primary", {
         "lg:hidden": deviceType === "mobile",
         "max-lg:hidden": deviceType === "desktop"
      }, className)} {...props}>
         About Us
      </span>
   )
}

export const AboutUsSection = () => {
   return (
      <ScrollSpySection route={routeConstants.about} className="container relative py-20 lg:py-28">
         <img
            src="/grid-bg.svg"
            className="absolute top-0 right-0 object-fill -z-10 size-full"
         />

         <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-2">
               <SectionTItle deviceType="mobile" />

               <img src="/about-us-img.svg" className="max-lg:max-h-[400px]" />

               <div className="*:mt-10 *:text-md *:font-normal first:*:mt-0 ">
                  <SectionTItle deviceType="desktop" />

                  <Typography>
                     Exquisite Writers is a vibrant and inclusive community for writers of all levels. Established in [Year],
                  </Typography>

                  <Typography>
                     We offer a wide range of services, including custom content creation, professional ghostwriting, and meticulous editing to ensure your work shines. Our interactive workshops and webinars, led by industry experts, are designed to help you hone your craft and achieve your writing goals.
                  </Typography>

                  <Typography>
                     At Exquisite Writers, we believe in the power of words to inspire, connect, and transform. Our team is built on the principles of collaboration, integrity, and excellence. We are committed to providing a safe and nurturing space where writers can thrive and bring theirs and other people stories to life.
                  </Typography>
               </div>
            </div>

            <Card className="relative max-w-[550px] bg-[#00617D] border-none rounded-3xl max-lg:mt-16 max-lg:mx-auto lg:-top-8 lg:-translate-x-1/2 lg:left-1/2">
               <CardHeader className="py-8">
                  <CardTitle className="text-center">
                     <Typography variant="h1" className="font-medium border-none text-primary-foreground">
                        Our Vision and Mission Statement
                     </Typography>
                  </CardTitle>
               </CardHeader>

               <CardContent className="pt-0 space-y-8 pb-14">
                  <div className="flex text-primary-foreground">
                     <Typography className="font-semibold min-w-[100px]">
                        Vision:
                     </Typography>

                     <Typography affects="medium" className="font-normal">
                        To empower writers by providing high-quality resources, expert guidance, and a vibrant community that nurtures creativity and growth.
                     </Typography>
                  </div>

                  <div className="flex text-primary-foreground">
                     <Typography className="font-semibold min-w-[100px]">
                        Mission:
                     </Typography>

                     <Typography affects="medium" className="font-normal">
                        To empower writers by providing high-quality resources, expert guidance, and a vibrant community that nurtures creativity and growth.
                     </Typography>
                  </div>
               </CardContent>
            </Card>
         </div>
      </ScrollSpySection>
   )
}