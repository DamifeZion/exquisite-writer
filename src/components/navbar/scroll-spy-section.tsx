import { cn } from "@/lib/utils";
import { setActiveMenu } from "@/services/slices/nav-slice";
import { StoreRootState } from "@/services/store";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { Element } from "react-scroll";
import { useScrollToTopOnNavigate } from "@/hooks/use-scroll-to-top";

type ScrollSpySectionProps = Omit<React.HTMLProps<HTMLDivElement>, "ref"> & {
   route?: string;
   scrollToTopOnNavigate?: boolean;
};

export const ScrollSpySection: React.FC<ScrollSpySectionProps> = ({
   children,
   className,
   scrollToTopOnNavigate,
   route,
   ...props
}) => {
   const { activeMenu } = useSelector(
      (state: StoreRootState) => state.navSlice
   );
   const dispatch = useDispatch();

   const { ref, inView } = useInView({
      threshold: 0.6,
   });

   // Everytime the user change location we scroll back to top.
   useScrollToTopOnNavigate(scrollToTopOnNavigate);

   useEffect(() => {
      if (inView && route) {
         dispatch(setActiveMenu(route));
      }
   }, [inView, route, dispatch, activeMenu]);

   return (
      <section ref={ref} {...props}>
         <Element name={route ? route : ""} className={cn(className)}>
            {children}
         </Element>
      </section>
   );
};
