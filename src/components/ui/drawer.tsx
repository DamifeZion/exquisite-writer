"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { ScrollArea } from "./scroll-area";

const Drawer = ({
   shouldScaleBackground = true,
   ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
   <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...props}
   />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
   React.ElementRef<typeof DrawerPrimitive.Overlay>,
   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
   <DrawerPrimitive.Overlay
      ref={ref}
      className={cn("fixed inset-0 z-50 bg-black/80", className)}
      {...props}
   />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
   React.ElementRef<typeof DrawerPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
   const [gridRows, setGridRows] = React.useState<
      "grid-rows-[auto_1fr]" | "grid-rows-[auto_1fr_auto]"
   >("grid-rows-[auto_1fr]");

   const childrenCount = React.Children.count(children);

   React.useEffect(() => {
      if (childrenCount > 2) {
         setGridRows("grid-rows-[auto_1fr_auto]");
      } else {
         setGridRows("grid-rows-[auto_1fr]");
      }

      if (childrenCount === 1) {
         throw console.error(
            "Make sure to add a DialogHeader and set it to 'sr-only' in the className, in order to make the body scrollable and also for better user accessibility."
         );
      }
   }, [setGridRows, childrenCount]);

   return (
      <DrawerPortal>
         <DrawerOverlay />
         <DrawerPrimitive.Content
            ref={ref}
            className={cn(
               "fixed inset-x-0 bottom-0 z-50 mt-24 grid h-auto max-h-screen min-w-[320px] flex-col rounded-t-[10px] border bg-background [&:has(#dialog-body)_#dialog-footer]:px-3",
               gridRows,
               className
            )}
            {...props}
         >
            <div
               id="line"
               className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
            />
            {children}
         </DrawerPrimitive.Content>
      </DrawerPortal>
   );
});

const DrawerBody = ({
   children,
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <ScrollArea>
         <div className={cn("py-2 px-4", className)} {...props}>
            {children}
         </div>
      </ScrollArea>
   );
};

DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
   <div
      className={cn(
         "grid gap-1.5 p-4 pb-2 text-center sm:text-left",
         className
      )}
      {...props}
   />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
   <div
      className={cn("mt-auto flex flex-col gap-2 p-4 pt-2", className)}
      {...props}
   />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
   React.ElementRef<typeof DrawerPrimitive.Title>,
   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
   <DrawerPrimitive.Title
      ref={ref}
      className={cn(
         "text-lg font-semibold leading-none tracking-tight",
         className
      )}
      {...props}
   />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
   React.ElementRef<typeof DrawerPrimitive.Description>,
   React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
   <DrawerPrimitive.Description
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
   />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
   Drawer,
   DrawerPortal,
   DrawerOverlay,
   DrawerTrigger,
   DrawerClose,
   DrawerContent,
   DrawerHeader,
   DrawerFooter,
   DrawerTitle,
   DrawerDescription,
   DrawerBody,
};
