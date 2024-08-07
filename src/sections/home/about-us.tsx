import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const"


export const AboutUsSection = () => {
   return (
      <ScrollSpySection route={routeConstants.about} className="container relative py-28">
         <img
            src="/grid-bg.svg"
            className="absolute top-0 right-0 object-fill -z-10 size-full"
         />

         <div className="relative z-10">
            <div className="grid grid-cols-2 gap-6">
               <img src="/about-us-img.svg" />

               <div className="*:mt-10 *:text-md *:font-normal first:*:mt-0 ">
                  <span className="px-6 py-5 rounded-full bg-primary/10 text-primary">
                     About Us
                  </span>

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
         </div>
      </ScrollSpySection>
   )
}