import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTopOnNavigate = (enabled: boolean = true) => {
   // Extracts pathname property(key) from an object
   const { pathname } = useLocation();

   // Automatically scrolls to top whenever pathname changes
   useEffect(() => {
      if (enabled) {
         window.scrollTo(0, 0);
      }
   }, [enabled, pathname]);
};
