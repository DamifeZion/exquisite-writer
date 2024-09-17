import { MENU_LiST } from "@/constants/nav-const";
import { Link } from "../ui/link";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { StoreRootState } from "@/services/store";

type MenuListProps = {
   onClick?: () => void;
};

export const MenuList: React.FC<MenuListProps> = ({ onClick }) => {
   const { activeMenu } = useSelector(
      (state: StoreRootState) => state.navSlice
   );

   const handleClick = () => {
      onClick && onClick();
   };

   return (
      <ul className="flex flex-col items-center lg:flex-row">
         {MENU_LiST.map((data, index) => (
            <li key={index} className={cn("w-full", {
               "ml-3": index === MENU_LiST.length - 1
            })}>
               <Link
                  to={data.href}
                  variant={
                     activeMenu === data.href
                        ? "link"
                        : data.button
                           ? "outline"
                           : "ghost"
                  }
                  onClick={handleClick}
                  className={cn(
                     "justify-start w-full font-medium max-lg:text-lg max-lg:py-6",
                     {
                        "font-semibold": activeMenu === data.href,
                        "text-primary border-primary bg-transparent hover:bg-primary hover:text-primary-foreground !no-underline border":
                           data.button,
                     }
                  )}
               >
                  {data.label}
               </Link>
            </li>
         ))}
      </ul>
   );
};
