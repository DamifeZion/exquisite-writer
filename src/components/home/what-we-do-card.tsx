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
      <Card className="flex flex-col rounded-3xl">
         <CardContent className="grid gap-4 p-4">
            <div className={cn("w-fit p-2 rounded-full border text-primary-foreground", iconContainerStyle)}>
               <Icon className="size-8" />
            </div>

            <CardTitle>
               {title}
            </CardTitle>

            <CardDescription>
               {description}
            </CardDescription>
         </CardContent>
      </Card>
   )
}