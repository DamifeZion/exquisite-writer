import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

export type TeamCardProps = React.HTMLAttributes<HTMLDivElement> & {
   src: string;
   name: string;
   position: string;
   description: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ src, name, position, description }) => {

   return (
      <Card className="border shadow-none bg-[#F2F2F2]">
         <CardHeader className="items-center">
            <img
               loading="lazy"
               src={src}
               className="border-4 rounded-full border-primary size-28"
            />

            <CardTitle className="text-xl leading-none !mt-4">
               {name} <br /> <span className="text-sm md:text-md">({position})</span>
            </CardTitle>

            <CardDescription>
               {description}
            </CardDescription>
         </CardHeader>
      </Card>
   )
}