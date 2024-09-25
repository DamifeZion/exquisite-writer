import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   isNumeric?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, isNumeric, ...props }, ref) => {
      // Function to allow only numeric input and + sign
      const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
         if (isNumeric) {
            const allowedKeys = [
               "Backspace",
               "Tab",
               "Enter",
               "ArrowLeft",
               "ArrowRight",
               "Delete",
            ];

            // Allow number keys and the '+' sign
            const isNumberKey = /^[0-9+]$/.test(event.key);

            if (!isNumberKey && !allowedKeys.includes(event.key)) {
               event.preventDefault(); 
            }
         }
      };

      return (
         <input
            type={type}
            className={cn(
               "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
               className
            )}
            ref={ref}
            onKeyDown={handleKeyDown}
            {...props}
         />
      );
   }
);

Input.displayName = "Input";

export { Input };
