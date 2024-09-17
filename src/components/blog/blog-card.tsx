import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader } from "../ui/card";
import Typography from "../ui/typography";
import { routeConstants } from "@/constants/route-const";
import { WordpressPostType } from "@/hooks/use-wordpress";
import { capitalizeFirstLetters } from "@/helper/capitalize-first-letter";

export type BlogCardProps = WordpressPostType;

export const BlogCard: React.FC<BlogCardProps> = ({
   id,
   categories,
   content,
   date,
   featuredImage,
   title,
}) => {
   return (
      <Card className="*:p-4">
         <CardHeader className="gap-4">
            <img
               loading="lazy"
               src={featuredImage || "https://placehold.co/600x400"}
               className="w-full h-[220px] rounded-lg object-cover border"
            />

            <div className="flex gap-1.5 flew-wrap ">
               {categories.map((name: string, index: number) => (
                  <Badge
                     key={name + index + date}
                     className="bg-[hsla(32,100%,41%)] text-primary-foreground px-3 py-2 font-medium w-fit hover:bg-[hsla(32,100%,41%)]/90"
                  >
                     {capitalizeFirstLetters(name)}
                  </Badge>
               ))}
            </div>
         </CardHeader>

         <CardContent className="!pt-0 space-y-4">
            <Link
               to={{
                  pathname: routeConstants.blogDetails.replace(
                     ":id",
                     String(id)
                  ),
                  search: new URLSearchParams({
                     title: title.split(" ").join("-"),
                  }).toString(),
               }}
            >
               <Typography
                  variant="h3"
                  className="underline-offset-2 hover:underline"
                  dangerouslySetInnerHTML={{ __html: title }}
               />
            </Link>

            <Typography
               variant="p"
               affects="removePMargin"
               className="lg:text-md line-clamp-4"
               dangerouslySetInnerHTML={{ __html: content }}
            />
         </CardContent>
      </Card>
   );
};
