import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../ui/card";
import Typography from "../ui/typography";

export type TestimonialCardProps = {
   ratingNo: string;
   rating: "1" | "2" | "3" | "4" | "5";
   date: string;
   time: string;
   packagPlan: string;
   type: string;
   description: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
   ratingNo,
   rating,
   date,
   time,
   packagPlan,
   type,
   description,
}) => {
   const totalRating: number = 5;
   const selectedRating = parseInt(rating);

   return (
      <Card>
         <CardHeader className="gap-2">
            <div className="flex items-center gap-2">
               <CardTitle className="font-semibold">{ratingNo}</CardTitle>

               {/* NOTE: If there is rating, we want to color 2 and leave the rest muted and so */}
               <div className="flex items-center gap-1 mt-auto *:size-5 md:*:size-6 lg:*:size-7">
                  {rating &&
                     Array.from({ length: selectedRating }).map((_, index) => (
                        <AiFillStar key={index} className="text-[#ffcd59]" />
                     ))}

                  {rating &&
                     Array.from({ length: totalRating - selectedRating }).map(
                        (_, index) => (
                           <AiOutlineStar
                              key={index}
                              className="text-muted-foreground"
                           />
                        )
                     )}
               </div>
            </div>

            <CardDescription className="flex items-center md:text-lg lg:text-xl">
               <span className="w-5 h-0.5 mr-3 bg-[#89838e]" /> {date} at {time}
            </CardDescription>
         </CardHeader>

         <CardContent>
            <Typography variant="h4">Package: {packagPlan}</Typography>

            <span className="inline-flex w-4 h-0.5 mr-3 bg-[#89838e]" />

            <Typography affects="smallHeading" className="mt-2 font-semibold">
               {type}
            </Typography>
         </CardContent>

         <CardFooter className="text-muted-foreground">
            <Typography variant="p" className="max-w-md">
               {description}
            </Typography>
         </CardFooter>
      </Card>
   );
};
