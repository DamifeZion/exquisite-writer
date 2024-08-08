import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export type TeamCardProps = React.HTMLAttributes<HTMLDivElement> & {
   src: string;
   name: string;
   position: string;
   email: string;
   twitterLink?: string;
   linkedInLink?: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ src, name, position, email, twitterLink, linkedInLink }) => {

   return (
      <Card className="border shadow-none bg-[#F2F2F2]">
         <CardHeader className="items-center">
            <img
               loading="lazy"
               src={src}
               className="border-4 rounded-full border-primary size-28"
            />

            <CardTitle className="text-xl leading-none !mt-4">
               {name}
            </CardTitle>
            <CardDescription>
               {position}
            </CardDescription>
         </CardHeader>

         <CardContent className="pt-14 flex flex-wrap items-center justify-center gap-4 *:w-fit [&_button]:bg-primary/10 [&_button:hover]:bg-primary/15 [&_button:hover]:scale-105 [&_button]:size-fit [&_button]:p-1.5 [&_button]:rounded-full [&_svg]:size-6 [&_svg]:text-primary">
            <a href={`mailto:${email}`}>
               <Button size="icon" >
                  <CiMail />
               </Button>
            </a>

            <a href={twitterLink} target="_blank">
               <Button size="icon" >
                  <CiTwitter />
               </Button>
            </a>

            <a href={linkedInLink} target="_blank">
               <Button size="icon" >
                  <CiLinkedin />
               </Button>
            </a>
         </CardContent>
      </Card>
   )
}