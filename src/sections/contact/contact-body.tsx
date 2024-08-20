import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { Button } from "@/components/ui/button";   
import { ContactForm } from "@/components/contact/contact-form";
import { CONTACT_DETAILS, CONTACT_SOCIAL_LINK } from "@/constants/contact-const";
import { HiOutlineLocationMarker } from "react-icons/hi";


export const COntactBody = () => {
   return (
      <div className="container py-20 lg:py-40">
         <Card className="bg-[#ECECEC] border-none">
            <CardContent className="flex flex-col justify-between gap-10 p-4 md:flex-row md:py-16 md:px-8">
               
               <div className="max-w-xs lg:max-w-[500px] xl:max-w-[580px] flex flex-col gap-10">
                  <Typography className="text-xl md:text-2xl text-pretty md:font-semibold">
                     We can't do without our esteemed client, and we look forward to delivering the best service to you. Kindly contact us
                  </Typography>

                  <div id="contacts" className="mt-auto space-y-4 ">
                     <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <span className="p-2.5 rounded-full h-fit bg-primary/[0.1] text-primary">
                           <MdOutlineEmail size={24} />
                        </span>

                        <Typography variant="p" affects="removePMargin" className="text-lg">
                           <a href={`mailto:${CONTACT_DETAILS.email}`}>
                              {CONTACT_DETAILS.email}
                           </a>
                        </Typography>
                     </div>

                     <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <span className="p-2.5 rounded-full h-fit bg-primary/[0.1] text-primary">
                           <BiPhone size={24} />
                        </span>

                        <Typography variant="p" affects="removePMargin" className="text-lg">
                           <a href={`tel:${CONTACT_DETAILS.phone}`}>
                              {CONTACT_DETAILS.phone}
                           </a>
                        </Typography>
                     </div>

                     <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <span className="p-2.5 rounded-full h-fit bg-primary/[0.1] text-primary">
                           <HiOutlineLocationMarker size={24} />
                        </span>

                        <Typography variant="p" affects="removePMargin" className="text-lg">
                           <a>
                              {CONTACT_DETAILS.address}
                           </a>
                        </Typography>
                     </div>
                  </div>

                  <div id="socials" className="mt-auto flex items-center gap-4 *:size-fit *:p-3">
                     {CONTACT_SOCIAL_LINK.map((data, index) => (
                        <a key={index} href={data.href}>
                           <Button size="icon" className="rounded-full">
                              <data.icon size={24} />
                           </Button>
                        </a>
                     ))}
                  </div>
               </div>


               <Card className="flex-grow max-w-[550px] shadow-none border-none max-md:*:px-3">
                  <CardHeader>
                     <CardTitle className="font-normal max-md:text-lg">
                        Fill in your details below
                     </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-8">
                     <ContactForm />
                  </CardContent>
               </Card>
            </CardContent>
         </Card>
      </div>
   )
}