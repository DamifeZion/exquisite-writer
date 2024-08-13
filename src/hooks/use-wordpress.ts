import { useEffect, useState } from "react";
import { axiosErrorHandler } from "@/lib/axios-error";
import { createAxiosInstance } from "@/config/axios-config";
import { useNavigate, useParams } from "react-router-dom";
import { routeConstants } from "@/constants/route-const";

// API Base URL
const wordpress_development_base_api =
   "https://theexquisitewriters.com/blog/wp-json/wp/v2";

// Types for Categories and Posts
export type WordpressCategoryType = {
   id: number;
   name: string;
   slug: string;
   count: number;
   parent?: number;
};

export type WordpressPostType = {
   id: number;
   date: string;
   featuredImage: string;
   status: "publish" | string;
   content: string;
   title: string;
   categories: string[];
};

export type WordpressPostDetailsType = {
   id: number;
   date: string;
   featuredImage: string;
   status: "publish" | string;
   content: string;
   title: string;
   categories: string[];
};

// Create an Axios instance for WordPress API
const wordpressAPI = createAxiosInstance(wordpress_development_base_api);

export const useWordpress = () => {
   const navigate = useNavigate();

   // Initialize state with empty arrays
   const [categories, setCategories] = useState<WordpressCategoryType[]>([]);
   const [posts, setPosts] = useState<WordpressPostType[]>([]);

   // Fetch post details.
   const { id: blogDetailsID } = useParams();
   const [postDetails, setPostDetails] = useState<WordpressPostDetailsType>();

   // Fetch all categories
   useEffect(() => {
      const getAllCategories = async () => {
         try {
            const res = await wordpressAPI.get("/categories");

            // Replace parent ID with parent name
            const categoriesWithParentName = res.data.map(
               (item: WordpressCategoryType) => {
                  const parentCategory = res.data.find(
                     (cat: WordpressCategoryType) => cat.id === item.parent
                  );

                  return {
                     id: item.id,
                     name: item.name,
                     slug: item.slug,
                     parent: parentCategory ? parentCategory.name : null,
                     count: item.count,
                  };
               }
            );

            // Sort categories by count in descending order
            const sortedCategories = categoriesWithParentName.sort(
               (a: WordpressCategoryType, b: WordpressCategoryType) =>
                  b.count - a.count
            );

            setCategories(sortedCategories);
         } catch (error: unknown) {
            axiosErrorHandler(error);
         }
      };

      getAllCategories();
   }, []);

   // Fetch all posts and filter only published posts
   useEffect(() => {
      const getAllPosts = async () => {
         try {
            const res = await wordpressAPI.get("/posts");

            const publishedPosts = res.data
               .filter((item: { status: string }) => item.status === "publish")
               .map(
                  (item: {
                     id: number;
                     date: string;
                     jetpack_featured_media_url: string;
                     content: { rendered: string };
                     title: { rendered: string };
                     categories: Array<number>;
                  }): WordpressPostType => {
                     return {
                        id: item.id,
                        date: item.date,
                        featuredImage: item.jetpack_featured_media_url || "",
                        content: item.content.rendered,
                        title: item.title.rendered,
                        status: "publish",
                        categories: item.categories.map(
                           (categoryId: number) => {
                              const category = categories.find(
                                 (c) => c.id === categoryId
                              );
                              return category ? category.name : "Unknown";
                           }
                        ),
                     };
                  }
               );

            setPosts(publishedPosts);
         } catch (error: unknown) {
            axiosErrorHandler(error);
         }
      };

      // Only fetch posts after categories have been loaded
      if (categories.length > 0) {
         getAllPosts();
      }
   }, [categories]);

   //NOTE: Get post by ID from posts array when it loads.
   useEffect(() => {
      if (blogDetailsID && posts.length > 0) {
         // NOTE: Check the post array if the id in the route param match, else redirect to blogs;
         const post = posts.find((p) => p.id === parseInt(blogDetailsID));

         if (post) {
            setPostDetails(post);
         } else {
            // NOTE: Redirect to blog
            navigate(routeConstants.blogs);
         }
      }
   }, [blogDetailsID, navigate, posts]);

   return { categories, posts, postDetails };
};
