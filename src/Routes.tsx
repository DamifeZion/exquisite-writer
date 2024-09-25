import { Routes as Router, Route } from "react-router-dom";
import { routeConstants } from "@/constants/route-const";
import React, { Suspense } from "react";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { LoadingFallback } from "./components/loading-fallback";

const Home = React.lazy(() => import("@/pages/Home"));
const Blog = React.lazy(() => import("@/pages/Blog"));
const BlogDetails = React.lazy(() => import("@/pages/BlogDetails"));
const Contact = React.lazy(() => import("@/pages/Contact"));
const PrivacyPolicy = React.lazy(() => import("@/pages/PrivacyPolicy"));
const Career = React.lazy(() => import("@/pages/Career"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));

const Routes = () => {
   return (
      <Suspense fallback={<LoadingFallback />}>
         <Navbar />
         <Router>
            <Route index path={routeConstants.home} element={<Home />} />
            <Route path={routeConstants.blogs} element={<Blog />} />
            <Route
               path={routeConstants.blogDetails}
               element={<BlogDetails />}
            />
            <Route path={routeConstants.contact} element={<Contact />} />
            <Route
               path={routeConstants.privacyPolicy}
               element={<PrivacyPolicy />}
            />
            <Route
               path={routeConstants.career}
               element={<Career />}
            />
            <Route path="*" element={<NotFound />} />
         </Router>
         <Footer />
      </Suspense>
   );
};

export default Routes;
