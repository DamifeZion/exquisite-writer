import { cn } from "@/lib/utils"
import { setActiveMenu } from "@/services/slices/nav-slice"
import { StoreRootState } from "@/services/store"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useDispatch, useSelector } from "react-redux"
import { Element } from "react-scroll"

type ScrollSpySectionProps = Omit<React.HTMLProps<HTMLDivElement>, 'ref'> & {
   route: string
}

export const ScrollSpySection: React.FC<ScrollSpySectionProps> = ({ children, className, route, ...props }) => {
   const { activeMenu } = useSelector((state: StoreRootState) => state.navSlice)
   const dispatch = useDispatch();

   const { ref, inView } = useInView({
      threshold: 0.6,
   })

   useEffect(() => {
      if (inView) {
         dispatch(setActiveMenu(route))
      }
   }, [inView, route, dispatch, activeMenu])


   return (
      <section ref={ref} {...props}>
         <Element name={route} className={cn(className)}>
            {children}
         </Element>
      </section >
   )
}