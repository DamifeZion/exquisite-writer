import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Typography from "../ui/typography";

export type CommitmentCardProps = {
   title: string;
   description: string;
};

export const OurCommitmentCard: React.FC<CommitmentCardProps> = ({
   title,
   description,
}) => {
   return (
      <Card className="flex flex-col items-center justify-center border-none shadow-[0_0_20px_rgba(0,0,0,0.07)] rounded-2xl">
         <CardHeader className="items-center gap-3 pb-2">
            <img src="/safe.svg" loading="lazy" className="size-8" />

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
   );
};
