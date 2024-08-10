import { BlogCard } from "@/components/blog/blog-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"



export const BlogLists = () => {

   return (
      <ScrollSpySection className="container relative lg:pt-28 lg:pb-40">
         <div className="grid gap-8 py-20 max-w-7xl md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 15 }).map((_, index) => (
               <BlogCard
                  key={index}
               />
            ))}
         </div>

         <img
            src="/line-curve.svg"
            className="absolute left-0 w-full h-auto bottom-36 -z-10 opacity-90 [transform:scaleY(-1)]"
         />
      </ScrollSpySection>
   )
}