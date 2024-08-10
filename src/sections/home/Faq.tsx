import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"
import { FAQ_DATA } from "@/constants/home-const"

export type FAQProps = {
   title: string;
   description: string;
}

export const Faq = () => {

   return (
      <ScrollSpySection className="container flex gap-20 !pb-40 !pt-28 max-md:flex-col">
         <div className="md:max-w-xs lg:max-w-md">
            <Typography variant="h1">
               FAQs
            </Typography>

            <Typography variant="p" className="mt-6">
               Explore answers to common questions about our services, including content creation, revisions, security measures, team support, pricing plans, and more. Find out everything you need to know to make the most of Exquisite Writers and elevate your writing journey.
            </Typography>

            <Button variant="outline" className="mt-14">
               Contact Us
            </Button>
         </div>

         <div className="flex-grow">
            <Accordion type="single" collapsible >
               {FAQ_DATA.map((data, index) => (
                  <AccordionItem key={index} value={data.title} >
                     <AccordionTrigger>
                        {data.title}
                     </AccordionTrigger>

                     <AccordionContent>
                        {data.description}
                     </AccordionContent>
                  </AccordionItem>
               ))}
            </Accordion>
         </div>
      </ScrollSpySection>
   )
}