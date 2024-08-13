import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Link } from "@/components/ui/link"
import { Skeleton } from "@/components/ui/skeleton"
import Typography from "@/components/ui/typography"
import { routeConstants } from "@/constants/route-const"
import { useWordpress } from "@/hooks/use-wordpress"
import { ChevronLeft } from "lucide-react"
import moment from "moment"



const BlogDetails = () => {
   const { postDetails } = useWordpress();

   if (!postDetails) {
      return (
         <div className="container flex flex-col max-w-screen-md gap-5 py-10 lg:max-w-screen-lg lg:gap-10 lg:flex-row">
            <Link to={routeConstants.blogs} variant="ghost" className="w-fit">
               <ChevronLeft className="mr-2 size-5" /> See all posts
            </Link>

            <div className="flex-grow">
               <Skeleton
                  className="h-6 rounded-full w-[170px]"
               />

               <Skeleton
                  className="w-full mt-2 rounded-full h-14"
               />

               <Skeleton
                  className="mt-6 rounded-xl w-full h-[393px]"
               />

               <Skeleton
                  className="mt-10 w-full h-[600px]"
               />
            </div>
         </div>
      )
   }

   return (
      <ScrollSpySection className="container py-10 max-w-screen-md min-h-[calc(100vh-300px)] flex flex-col gap-5 lg:max-w-screen-lg lg:gap-10 lg:flex-row">
         <Link to={routeConstants.blogs} variant="ghost" className="w-fit">
            <ChevronLeft className="mr-2 size-5" /> See all posts
         </Link>

         <div>
            <Typography variant="p" className="text-sm font text-muted-foreground">
               Published on {moment(postDetails?.date).format('MMMM D, YYYY')}
            </Typography>

            <Typography variant="h1" className="mt-1.5 !leading-tight">
               {postDetails?.title}
            </Typography>

            <img
               src={postDetails?.featuredImage}
               alt={postDetails?.title}
               className="w-full max-h-[393px] mt-6 rounded-xl "
            />

            <div
               dangerouslySetInnerHTML={{ __html: String(postDetails?.content) }}
               id="wordpress-contents"
               className="space-y-6"
            />
         </div>
      </ScrollSpySection>
   )
}

export default BlogDetails;