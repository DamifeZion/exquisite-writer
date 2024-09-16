import { PricingCardProps } from "@/components/home/pricing-card";
import {
   ContentType,
   DESCRIPTION_COUNT,
   WORD_COUNT,
} from "@/constants/home-const";

export const getContentTypeRangeLabel = (contentType: ContentType) => {
   let label;

   if (contentType === "website content") {
      label = "Number of page(s)";
   } else {
      label = "Number of words";
   }

   return label;
};

const resoolvePriceByPlan = (
   planName: PricingCardProps["planName"],
   straterPrice: number,
   professionalPrice: number,
   elitePrice: number
) => {
   let price;
   switch (planName) {
      case "Elite":
         price = elitePrice;
         break;
      case "Professional":
         price = professionalPrice;
         break;
      default:
         price = straterPrice;
   }

   return price;
};

export const getCategoryBasePrice = (
   contentType: ContentType,
   plan: PricingCardProps["planName"]
) => {
   let basePrice;

   if (contentType === "articles" || contentType === "blog") {
      basePrice = resoolvePriceByPlan(plan, 12, 18, 20);
   } else if (contentType === "website content") {
      basePrice = resoolvePriceByPlan(plan, 15, 25, 25);
   } else if (contentType === "product description") {
      basePrice = resoolvePriceByPlan(plan, 4, 8, 12);
   } else if (contentType === "ebooks") {
      basePrice = resoolvePriceByPlan(plan, 20, 28, 40);
   } else if (contentType === "academic writing") {
      basePrice = resoolvePriceByPlan(plan, 15, 18, 20);
   } else if (contentType === "business plan") {
      basePrice = resoolvePriceByPlan(plan, 25, 35, 30);
   } else {
      basePrice = resoolvePriceByPlan(plan, 3, 4, 5);
   }

   return basePrice;
};

export const calculatePriceByRange = (
   basePrice: number,
   wordCount: string,
   contentType: ContentType
) => {
   const maxSelectedWords = String(wordCount).includes("-")
      ? parseInt(wordCount.split("-")[1])
      : parseInt(wordCount);

   let additionalCost;

   // Website Content is per page. so it will be times 2
   if (contentType === "website content") {
      additionalCost = parseInt(wordCount);
   } else if (contentType === "product description") {
      additionalCost = maxSelectedWords / 100;
   } else {
      additionalCost = maxSelectedWords / 1000;
   }

   return basePrice * additionalCost;
};

export const renderWordCount = (contentType: ContentType) => {
   let array = WORD_COUNT;

   if (contentType === "product description") {
      array = DESCRIPTION_COUNT;
   }

   return array;
};
