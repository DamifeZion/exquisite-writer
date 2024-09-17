import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { PricingCardProps } from "@/components/home/pricing-card";
import {
   CONTENT_TYPES,
   ContentType,
   PLANS,
   WORD_COUNT,
} from "@/constants/home-const";
import {
   calculatePriceByRange,
   getCategoryBasePrice,
   renderWordCount
} from "@/helper/pricing";

export const useHome = () => {
   const formSchema = z.object({
      contentType: z.enum(CONTENT_TYPES as [ContentType, ...ContentType[]], {
         message: "Please select a content type",
      }),
      wordCount: z.string().min(4, {
         message: "Number of words must be at least 4 characters long",
      }),
      price: z.number().min(1, {
         message: "Price must be at least 1 character long",
      }),
      planName: z.string().optional(),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         contentType: "blog",
         wordCount: WORD_COUNT[0],
         price: 0,
         planName: "",
      },
   });

   const [subscriptionPlans, setSubscriptionPlans] =
      useState<Array<PricingCardProps>>(PLANS);

   const wordCount = form.watch("wordCount");
   const contentType = form.watch("contentType");

   //Everytime the content type changes, we reset the range to the default for the content type.
   const { setValue } = form;
   useEffect(() => {
      setValue("wordCount", WORD_COUNT[0]);

      if (contentType === "website content") {
         setValue("wordCount", "1");
      }
      else if (contentType === "product description") {
         setValue("wordCount", renderWordCount(contentType)[0]);
      }
   }, [setValue, contentType]);

   // Calculate and change the amount based on the word count;
   useEffect(() => {
      let updatedPlans;

      updatedPlans = PLANS.map((plan) => ({
         ...plan,
         amount: getCategoryBasePrice(contentType, plan.planName),
      }));

      if (wordCount && contentType) {
         updatedPlans = PLANS.map((plan) => {
            const basePrice = getCategoryBasePrice(contentType, plan.planName);
            const calculatedPrice = calculatePriceByRange(
               basePrice,
               wordCount,
               contentType
            );

            return {
               ...plan,
               amount: calculatedPrice,
            };
         });
      }

      setSubscriptionPlans(updatedPlans);
   }, [wordCount, contentType]);

   // NOTE: Handle submitting these values using
   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   return {
      form,
      subscriptionPlans,
      onSubmit,
   };
};
