import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { ComponentType, SVGProps } from "react";

// Define a type that covers both react-icons and lucide-react icons
export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type WhatWeDOCardProps = {
   icon: IconType;
   title: string;
   description: string;
   iconContainerStyle: string,
}

export const WhatWeDoCard: React.FC<WhatWeDOCardProps> = ({ description, icon: Icon, iconContainerStyle, title }) => {

   return (
      <Card className="flex flex-col rounded-xl md:rounded-3xl">
         <CardContent className="grid p-4">
            <div className="items-center max-lg:flex max-lg:gap-2">
               <div className={cn("size-fit p-2 rounded-full border text-primary-foreground", iconContainerStyle)}>
                  <Icon className="size-5 lg:size-8" />
               </div>

               <CardTitle className="lg:mt-4 max-sm:text-xl">
                  {title}
               </CardTitle>
            </div>

            <CardDescription className="mt-3">
               {description}
            </CardDescription>
         </CardContent>
      </Card>
   )
}