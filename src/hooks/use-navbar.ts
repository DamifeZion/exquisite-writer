import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useDispatch } from "react-redux";
import { setActiveMenu } from "@/services/slices/nav-slice";

export const useNavbar = () => {
   const desktop = useMediaQuery("(min-width: 1023px)");
   const [openSheet, setOpenSheet] = useState(false);

   const location = useLocation();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(setActiveMenu(location.pathname + location.hash));
   });

   //NOTE: Update the active menu  onClick and based on react router
   useEffect(() => {
      if (location.hash) {
         scroller.scrollTo(location.pathname + location.hash, {
            duration: 500,
            smooth: true,
            offset: -70,
            spy: true,
         });

         dispatch(setActiveMenu(location.pathname + location.hash));
      }

      if (!location.hash) {
         window.scrollTo({
            top: 0,
            behavior: "smooth",
         });
         dispatch(setActiveMenu(location.pathname));
      }
   }, [location, dispatch]);

   //NOTE: Update the menu if in same page and user scroll into view any of the element with the hash
   useEffect(() => {});

   return {
      desktop,
      openSheet,
      setOpenSheet,
   };
};
