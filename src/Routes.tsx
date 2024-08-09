import { Routes as Router, Route } from "react-router-dom";
import { routeConstants } from "@/constants/route-const"
import Home from "@/pages/Home"
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";

const Routes = () => {
   return (
      <div id="body  ">
         <Navbar />
         <Router>
            <Route index path={routeConstants.home} element={<Home />} />
         </Router>
         <Footer />
      </div>
   );
};

export default Routes;
