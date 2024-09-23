import { TestimonialCard } from "@/components/home/testimonial-card";
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section";
import { Card, CardContent } from "@/components/ui/card";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/components/ui/link";
import Typography from "@/components/ui/typography";
import { TESTIMONIALS } from "@/constants/home-const";
import { routeConstants } from "@/constants/route-const";
import Autoplay from "embla-carousel-autoplay"

export const Testimonial = () => {
   return (
      <ScrollSpySection className="relative py-20 lg:py-28">
         <img
            src="/grid-bg.svg"
            loading="lazy"
            className="absolute top-0 left-0 size-full"
         />

         <Card className="container relative z-10 !pb-0 border-none rounded-[24px] bg-[#9104FF] overflow-auto lg:rounded-[40px]">
            <CardContent className="relative flex flex-col justify-center max-lg:items-center pb-0 min-h-[650px] max-sm:px-0 md:gap-5 md:flex-row lg:gap-10 lg:justify-between">
               <div className="max-w-sm py-8 lg:max-w-md place-self-center max-md:text-center">
                  <Typography
                     variant="h1"
                     className="font-semibold !leading-tight text-primary-foreground"
                  >
                     Real Stories of Transformation and Success
                  </Typography>

                  <Typography
                     variant="p"
                     className="mt-5 text-primary-foreground"
                  >
                     See how Exquisite Writers has transformed writing journeys,
                     boosting confidence and achieving dreams. Read real success
                     stories and discover our commitment to excellence.
                  </Typography>

                  <Link
                     to={routeConstants.pricing}
                     className="px-10 py-6 mt-20 font-light transition-all duration-150 ease-linear bg-black border w-fit rounded-smborder-primary-foreground hover:bg-black hover:scale-105"
                  >
                     Get Started
                  </Link>
               </div>
               -
               <div className="relative flex-grow max-w-xl before:absolute before:-top-4 before:w-full before:min-h-[100px] before:lg:min-h-[220px] before:z-10 before:bg-gradient-to-b before:from-[hsl(274,100%,51%)] before:via-[hsl(274,100%,51%)]/95 max-lg:mt-20">
                  <Carousel
                     opts={{
                        loop: true,
                     }}
                     orientation="vertical"
                     plugins={[
                        Autoplay({
                           delay: 3000,
                           stopOnFocusIn: false,
                           stopOnInteraction: false,
                           stopOnMouseEnter: false,
                        }),
                     ]}
                  >
                     <CarouselContent className="grid h-full pb-0 max-h-[670px]">
                        {TESTIMONIALS.map((data, index) => (
                           <CarouselItem key={index}>
                              <TestimonialCard {...data} />
                           </CarouselItem>
                        ))}
                     </CarouselContent>

                     <CarouselPrevious className="-translate-y-1/2 lg:-left-10 max-lg:hidden top-1/2 xl:-left-20" />
                     <CarouselNext className="translate-y-full lg:-left-10 max-lg:hidden top-1/2 xl:-left-20" />
                  </Carousel>
               </div>
            </CardContent>
         </Card>
      </ScrollSpySection>
   );
};
