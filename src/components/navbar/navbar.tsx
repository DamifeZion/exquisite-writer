import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { MenuList } from "./menu-list"
import { cn } from "@/lib/utils"
import { ScrollArea } from "../ui/scroll-area"
import { useNavbar } from "@/hooks/use-navbar"


type LogoProps = {
   className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
   return (
      <img
         src="/logo.svg"
         alt="Logo"
         className={cn("w-14 h-14", className)}
      />
   )
}

export const Navbar = () => {
   const { desktop, openSheet, setOpenSheet } = useNavbar()

   return (
      <nav className="sticky top-0 left-0 z-30 bg-background/60 backdrop-blur-md">
         <div className="container flex items-center justify-between h-16">
            <Logo />

            {desktop && <MenuList />}

            {!desktop && (
               <Sheet open={openSheet} onOpenChange={() => setOpenSheet(prev => !prev)}>
                  <SheetTrigger asChild>
                     <Button size="icon" variant="ghost">
                        <Menu />
                     </Button>
                  </SheetTrigger>

                  <SheetContent side="left" className="grid grid-rows-[auto_1fr] pr-3 *:pr-3">
                     <SheetHeader className="">
                        <Logo className="size-20" />

                        <SheetTitle className="sr-only">
                           Exquisite Writing Service
                        </SheetTitle>

                        <SheetDescription className="sr-only">
                           This is the side bar for exquisite writes
                        </SheetDescription>
                     </SheetHeader>

                     <ScrollArea>
                        <MenuList onClick={() => setOpenSheet(false)} />
                     </ScrollArea>
                  </SheetContent>
               </Sheet>
            )}
         </div>
      </nav>
   )
}