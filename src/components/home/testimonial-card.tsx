import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Typography from "../ui/typography";

export type TestimonialCardProps = {
   src?: string;
   name: string;
   rating: '1' | '2' | '3' | '4' | '5';
   description: string;
   date: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ src, name, rating, description, date }) => {
   const totalRating: number = 5;
   const selectedRating = parseInt(rating)


   return (
      <Card>
         <CardHeader className="flex-row gap-4">
            {src ? (
               <img src={src} className="object-cover rounded-full size-14 md:size-[70px]" />
            ) : (
               <span className="rounded-full bg-card text-[#a2a2a2]">
                  <FaUserCircle className="size-14 md:size-[70px]" />
               </span>
            )}

            <div className="grid">
               <CardTitle className="font-normal">
                  {name}
               </CardTitle>

               {/* NOTE: If there is rating, we want to color 2 and leave the rest muted and so */}
               <div className="flex items-center gap-1 mt-auto *:size-5 md:*:size-6">
                  {rating && Array.from({ length: selectedRating }).map((_, index) => (
                     <AiFillStar key={index} className="text-[#ffcd59]" />
                  ))}

                  {rating && Array.from({ length: totalRating - selectedRating }).map((_, index) => (
                     <AiOutlineStar key={index} className="text-muted-foreground" />
                  ))}
               </div>
            </div>
         </CardHeader>

         <CardContent>
            <Typography variant="p" className="max-w-md">
               {description}
            </Typography>
         </CardContent>

         <CardFooter className="text-muted-foreground">
            <Typography variant="p">
               {date}
            </Typography>
         </CardFooter>
      </Card>
   )
}