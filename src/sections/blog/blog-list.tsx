import { BlogCard } from "@/components/blog/blog-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useWordpress, WordpressPostType } from "@/hooks/use-wordpress"



export const BlogLists = () => {
   const { posts, loading } = useWordpress();

   if (!posts.length || loading.posts) {
      return (
         <div className="container max-w-md sm:max-w-7xl lg:pt-28 lg:pb-40">
            <div className="grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3">
               {Array.from({ length: 6 }).map((_, index) => (
                  <Card key={index} className="*:p-3" >
                     <CardHeader className="!pb-0">
                        <Skeleton
                           className="w-full h-[229px]"
                        />
                     </CardHeader>

                     <CardContent>
                        <Skeleton
                           className="h-6 w-28"
                        />

                        <div className="grid gap-2 mt-4">
                           <Skeleton
                              className="w-full h-6"
                           />

                           <Skeleton
                              className="w-full h-6"
                           />

                           <Skeleton
                              className="w-full h-6"
                           />
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      )
   }

   return (
      <div className="relative">
         <ScrollSpySection scrollToTopOnNavigate={false} className="container relative max-w-md sm:max-w-7xl lg:pt-28 lg:pb-40">
            <div className="grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3">
               {posts && posts.map((data: WordpressPostType, index) => (
                  <BlogCard
                     key={index}
                     {...data}
                  />
               ))}
            </div>
         </ScrollSpySection>

         <img
            src="/line-curve.svg"
            className="absolute left-0 w-full h-auto bottom-36 -z-10 opacity-90 [transform:scaleY(-1)]"
         />
      </div>
   )
}