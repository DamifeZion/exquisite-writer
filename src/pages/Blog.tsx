import { BlogHero } from "@/sections/blog/blog-hero"
import { BlogLists } from "@/sections/blog/blog-list"
import { Faq } from "@/sections/home/faq"
import { OurCommitment } from "@/sections/home/our-commitment"


const Blog = () => {

   return (
      <div>
         <BlogHero />
         <BlogLists />
         <OurCommitment />
         <Faq />
      </div>
   )

}

export default Blog