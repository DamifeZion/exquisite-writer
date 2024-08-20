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
      <span className={cn("px-6 py-3 rounded-full w-fit bg-primary/10 text-primary md:py-5", {
         "lg:hidden": deviceType === "mobile",
         "max-lg:hidden": deviceType === "desktop"
      }, className)} {...props}>
         About Us
      </span>
   )
}

export const AboutUsSection = () => {
   return (
      <ScrollSpySection
         route={routeConstants.about}
         className="container relative !py-20 lg:!pt-28 lg:!pb-10"
      >
         <img
            loading="lazy"
            src="/grid-bg.svg"
            className="absolute top-0 right-0 object-fill -z-10 size-full"
         />

         <div className="relative z-10">
            <div className="grid gap-6 lg:grid-cols-2">
               <SectionTItle deviceType="mobile" />

               <img src="/about-us-img.svg" loading="lazy" className="max-lg:max-h-[400px]" />

               <div className="*:mt-10 *:text-md *:font-normal first:*:mt-0 ">
                  <SectionTItle deviceType="desktop" />

                  <Typography variant="p" className="!font-bold">
                     Delivering Uncompromised Quality and Unique Writing Services
                  </Typography>

                  <Typography>
                     We are a team of professional freelance writers who specialized in various types/niches of writing.  Our writing team focuses on delivering individualized writing service that suits your need. We assist small and large business owners with various writing needs.
                  </Typography>

                  <Typography>
                     At Exquisite Writers, we believe in the power of words to inspire, connect, and transform. Our team is built on the principles of collaboration, integrity, and excellence. We are committed to providing a safe and nurturing space where writers can thrive and bring theirs and other people stories to life.
                  </Typography>
               </div>
            </div>

            <Card
               className="relative transition-all ease-linear duration-150 max-w-[550px] bg-[#00617D] border-none rounded-3xl mx-auto max-lg:mt-16 lg:top-16 xl:-top-8"
            >
               <CardHeader className="py-8 pb-4">
                  <CardTitle className="text-center">
                     <Typography variant="h1" className="font-medium border-none text-primary-foreground max-[400px]:text-[24px]">
                        Our Vision and Mission Statement
                     </Typography>
                  </CardTitle>
               </CardHeader>

               <CardContent className="pt-0 space-y-8 pb-14">
                  <div className="flex text-primary-foreground  max-[380px]:flex-col max-[380px]:gap-3">
                     <Typography className="font-semibold min-w-[100px] max-[400px]:text-md">
                        Mission:
                     </Typography>

                     <Typography affects="medium" className="font-normal">
                        Our mission is to deliver unique and uncompromised quality in every piece of content we create. We focus on providing personalized writing services that cater to the specific needs of both small and large businesses. By transforming your ideas into words, we aim to enhance your personal and business presence through exceptional content.
                     </Typography>
                  </div>

                  <div className="flex text-primary-foreground max-[380px]:flex-col max-[380px]:gap-3">
                     <Typography className="font-semibold min-w-[100px] text-md">
                        Vision:
                     </Typography>

                     <Typography affects="medium" className="font-normal max-[400px]:text-md">
                        To be recognized as a premier writing agency known for its creativity, excellence, and dedication to delivering high-quality, tailored content that meets the diverse needs of our clients.
                     </Typography>
                  </div>
               </CardContent>
            </Card>
         </div>
      </ScrollSpySection>
   )
}