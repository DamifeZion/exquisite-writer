import { BlogHero } from "@/sections/blog/blog-hero"
import { BlogLists } from "@/sections/blog/blog-list"
import { FrequentlyAskedQuestions } from "@/sections/home/frequent-questions"
import { OurCommitment } from "@/sections/home/our-commitment"


const Blog = () => {

   return (
      <div>
         <BlogHero />
         <BlogLists />
         <OurCommitment />
         <FrequentlyAskedQuestions />
      </div>
   )

}

export default Blog