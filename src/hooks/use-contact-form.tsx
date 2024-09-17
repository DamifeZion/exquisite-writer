import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const useContactForm = () => {
   const formSchema = z.object({
      fullname: z.string().min(2, {
         message: "Please enter your full name",
      }),
      email: z.string().email({
         message: "Please enter a valid email address",
      }),
      message: z.string().min(2, {
         message: "Please enter a message",
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         fullname: "",
         email: "",
         message: "",
      },
   });

   const [isLoading, setIsLoading] = useState(false);

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      // EmailJS Configuration
      const service_id = "service_f6yrihi";
      const template_id = "template_m1muv8w";
      const PUBLIC_KEY = "DiOWWG7ZN150daoPL";

      const template_params = {
         to_name: "Exquisite Writing Service",
         from_name: values.fullname,
         from_email: values.email,
         message: values.message,
      };

      const data = {
         service_id,
         template_id,
         user_id: PUBLIC_KEY,
         template_params,
      };

      // Correct EmailJS API endpoint
      const emailjs_uri = "https://api.emailjs.com/api/v1.0/email/send";

      try {
         setIsLoading(true);
         await axios.post(emailjs_uri, data);

         toast.success("Successful! A writer will reach out to you soon.");
         setIsLoading(false);

         form.reset();
      } catch (err: unknown) {
         setIsLoading(false);
         toast.error("Failed to send email. Please try again.");
      }
   };

   return {
      form,
      onSubmit,
      isLoading,
   };
};
