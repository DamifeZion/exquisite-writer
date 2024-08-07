import { VariantProps } from "class-variance-authority";
import React from "react";
import { LinkProps as RouterLinkProps, Link as RouterLink } from "react-router-dom";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

interface LinkProps extends RouterLinkProps, VariantProps<typeof buttonVariants> {

}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
   ({ className, variant, size, ...props }, ref) => {

      return (
         <RouterLink ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {props.children}
         </RouterLink>
      );
   }
);

Link.displayName = "Link";