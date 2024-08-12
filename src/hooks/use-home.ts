import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { PricingCardProps } from "@/components/home/pricing-card";
import { CONTENT_TYPES, PLANS, WORD_COUNT } from "@/constants/home-const";

export const useHome = () => {
   const formSchema = z.object({
      contentType: z.string().min(4, {
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
         contentType: CONTENT_TYPES[0],
         wordCount: WORD_COUNT[0],
         price: 0,
         planName: "",
      },
   });

   const [subscriptionPlans, setSubscriptionPlans] = useState<
      Array<PricingCardProps>
   >([]);

   const amountPerThousandWords = 1; // $1 per thousand words

   const calculatePrice = (basePrice: number, wordCount: string) => {
      const maxSelectedWords = parseInt(wordCount.split("-")[1]);
      const additionalCost = (maxSelectedWords / 1000) * amountPerThousandWords;
      return basePrice + additionalCost;
   };

   const wordCount = form.watch("wordCount");

   // Calculate and change the amount based on the word count
   useEffect(() => {
      let updatedPlans;

      updatedPlans = PLANS.map((plan) => ({
         ...plan,
         amount: calculatePrice(plan.amount, wordCount),
      }));

      if (wordCount) {
         updatedPlans = PLANS.map((plan) => ({
            ...plan,
            amount: calculatePrice(plan.amount, wordCount),
         }));
      }

      setSubscriptionPlans(updatedPlans);
   }, [wordCount]);

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
