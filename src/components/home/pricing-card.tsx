import React from "react";
import { Button } from "../ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "../ui/card";
import Typography from "../ui/typography";

export type PricingCardProps = {
   planName: "Starter" | "Professional" | "Elite";
   amount: number;
   features: Array<string>;
   handleDialog: (values: boolean) => void;
   onClick?: () => void;
};

export const PricingCard: React.FC<PricingCardProps> = ({
   planName,
   amount,
   features,
   onClick,
   handleDialog
}) => {
   const handleClick = () => {
      if (onClick) onClick();
      // To open the payment form.
      handleDialog(true)
   }

   return (
      <>
         <Card className="border-none rounded-3xl">
            <CardHeader className="pb-2">
               <Typography variant="h4" className="text-[15px] font-semibold">
                  {planName}
               </Typography>

               <CardTitle className="!mt-4 text-3xl lg:text-4xl">
                  $ {amount}
               </CardTitle>
            </CardHeader>

            <CardContent>
               {features.map((data, index) => (
                  <li
                     key={data + index}
                     className="grid grid-cols-[auto_1fr] gap-0.5"
                  >
                     <span className="mt-[9px] sm:mt-[12px]">✅</span>

                     <Typography
                        variant="p"
                        affects="removePMargin"
                        className="!mt-3 text-muted-foreground !text-sm first:mt-0"
                     >
                        {data}
                     </Typography>
                  </li>
               ))}
            </CardContent>

            <CardFooter>
               <Button
                  type="button"
                  onClick={handleClick}
                  className="text-sm sm:py-6 bg-[hsl(234,100%,60%)] text-white font-medium hover:bg-[hsl(234,100%,60%)]/90 text-md w-full lg:text-md"
               >
                  Get Started
               </Button>
            </CardFooter>
         </Card>
      </>
   );
};
