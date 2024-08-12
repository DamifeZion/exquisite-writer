import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Typography from "../ui/typography";

export type CommitmentCardProps = {
   title: string;
   description: string;
}

export const OurCommitmentCard: React.FC<CommitmentCardProps> = ({ title, description }) => {

   return (
      <Card className="border-none shadown-2xl !h-fit">
         <CardHeader className="items-center gap-3 pb-2">
            <img 
               src="/safe.svg" 
               className="size-8"
            />

            <CardTitle className="leading-tight text-center max-sm:text-xl">
               {title}
            </CardTitle>
         </CardHeader>

         <CardContent>
            <Typography variant="p" className="text-sm text-center lg:text-md">
               {description}
            </Typography>
         </CardContent>
      </Card>
   )
}