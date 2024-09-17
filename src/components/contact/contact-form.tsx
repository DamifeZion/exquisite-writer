import { useContactForm } from "@/hooks/use-contact-form";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export const ContactForm = () => {
   const { form, onSubmit, isLoading } = useContactForm();

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 md:space-y-8 [&_#label]:text-sm [&_#label]:font-normal lg:[&_#label]:text-lg"
         >
            <FormField
               name="fullname"
               control={form.control}
               disabled={isLoading}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel id="label">Full Name</FormLabel>

                     <FormControl>
                        <Input
                           placeholder="What can we call you ?"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="email"
               control={form.control}
               disabled={isLoading}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel id="label">Email Address</FormLabel>

                     <FormControl>
                        <Input
                           placeholder="What's your email address ?"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               name="message"
               control={form.control}
               disabled={isLoading}
               render={({ field }) => (
                  <FormItem>
                     <FormLabel id="label">Message</FormLabel>

                     <FormControl>
                        <Textarea
                           rows={8}
                           placeholder="Write a message here"
                           className="resize-none"
                           {...field}
                        />
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button
               disabled={isLoading}
               className="w-full !mt-10 border border-primary bg-primary-foregroun text-primary hover:bg-primary hover:text-primary-foreground"
            >
               {isLoading && <Loader2 className="mr-3 animate-spin" />} Send
               Message
            </Button>
         </form>
      </Form>
   );
};
