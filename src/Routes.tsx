import { Routes as Router, Route } from "react-router-dom";
import { routeConstants } from "@/constants/route-const"
import React, { Suspense } from "react";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { LoadingFallback } from "./components/loading-fallbacl";

const Home = React.lazy(() => import('@/pages/Home'))
const Blog = React.lazy(() => import('@/pages/Blog'))
const BlogDetails = React.lazy(() => import("@/pages/BlogDetails"))



const Routes = () => {
   return (
      <Suspense fallback={<LoadingFallback />}>
         <Navbar />
         <Router>
            <Route index path={routeConstants.home} element={<Home />} />
            <Route  path={routeConstants.blogs} element={<Blog />} />
            <Route path={routeConstants.blogDetails} element={<BlogDetails />} />
         </Router>
         <Footer />
      </Suspense>
   );
};

export default Routes;
