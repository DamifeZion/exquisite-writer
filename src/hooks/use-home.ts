import { CONTENT_TYPES, WORD_COUNT } from "@/constants/home-const";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useHome = () => {
   const formSchema = z.object({
      contentType: z.string().min(4, {
         message: "Content type must be at least 4 characters long",
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

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
   };

   return {
      form,
      onSubmit,
   };
};
