import { BlogCard } from "@/components/blog/blog-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { useWordpress, WordpressPostType } from "@/hooks/use-wordpress"



export const BlogLists = () => {
   const { posts } = useWordpress()

   return (
      <div className="relative">
         <ScrollSpySection className="container relative max-w-md sm:max-w-7xl lg:pt-28 lg:pb-40">
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