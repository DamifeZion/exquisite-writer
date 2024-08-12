import { Link } from "react-router-dom";
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader } from "../ui/card"
import Typography from "../ui/typography";
import { routeConstants } from "@/constants/route-const";

export type BlogCardProps = {
   id: string,
   category?: string;
   title?: string;
   description?: string;
   url?: string
}

export const BlogCard: React.FC<BlogCardProps> = ({ id }) => {
   return (
      <Card className="*:p-4">
         <CardHeader className="gap-4">
            <img
               src="/blog-1.jpg"
               className="w-full max-h-[220px] rounded-lg"
            />

            <div className="flex gap-1.5 flew-wrap ">
               <Badge className="bg-[hsla(32,100%,41%)] text-primary-foreground px-3 py-2 font-medium w-fit hover:bg-[hsla(32,100%,41%)]/90">
                  Heathcare
               </Badge>
            </div>
         </CardHeader>

         <CardContent className="!pt-0 space-y-4">
            <Link to={routeConstants.blogDetails.replace(":id", id)}>
               <Typography variant="h3" className="text-foreground underline-offset-2 hover:underline">
                  The Future of AI in Healthcare: Transforming Patient Care
               </Typography>
            </Link>

            <Typography variant="p" affects="removePMargin" className="lg:text-md">
               Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. Dive into real-world examples and gain insights into the future of healthcare.
            </Typography>
         </CardContent>
      </Card>
   )
}