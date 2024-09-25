import { DialogContent, DialogHeader, Dialog, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { ScrollArea } from "../ui/scroll-area"
import { useForm, UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { homePaymentFormSchema } from "@/hooks/use-home"
import { Input } from "../ui/input"
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { Button } from "../ui/button"
import { capitalizeFirstLetters } from "@/helper/capitalize-first-letter"
import { zodResolver } from "@hookform/resolvers/zod"

type PaymentFormProps = {
   subscriptionForm: UseFormReturn<z.infer<typeof homePaymentFormSchema>>;
   openDialog: boolean;
   handleDialog: (value: boolean) => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ subscriptionForm, openDialog, handleDialog }) => {
   const handleCloseDialog = () => {
      handleDialog(false);
   };

   const formSchema = z.object({
      name: z.string().min(5, {
         message: "Please enter your full name"
      }),
      email: z
         .string()
         .email({ message: "Please enter a valid email address" }),
      phone: z.string().min(9, {
         message: "Please enter a valid phone number"
      }),
   });

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         email: "",
         phone: ""
      },
   });

   const config = {
      public_key: 'FLWPUBK-be3a1407d7ff36223686ddc7c8709af3-X',
      tx_ref: `TX_${Date.now().toString()}`,
      amount: subscriptionForm.watch('price'),
      currency: 'USD',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
         email: form.watch('email') || "",
         phone_number: form.watch('phone') || "",
         name: form.watch('name') || "",
      },
      customizations: {
         title: `Payment for ${subscriptionForm.watch('planName')} Subscription`,
         description: `Secure payment for the ${subscriptionForm.watch('planName') || 'selected'}`,
         logo: 'https://theexquisitewriters.com/logo.svg',
      },
   };

   const handleFlutterPayment = useFlutterwave(config);

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      if (process.env.NODE_ENV === 'development') {
         console.log(values);
      }
      
      handleFlutterPayment({
         callback: (response) => {
            console.log(response);
            closePaymentModal();
         },
         onClose: () => { },
      });
   };

   return (
      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
         <DialogContent className="px-4 grid-rows-[auto_1fr]">
            <DialogHeader className="px-2">
               <DialogTitle>Payment Information</DialogTitle>
               <DialogDescription>
                  Please enter your details below to proceed with the payment for:
                  <ul className="mt-4 text-foreground [&_li]:ml-4 [&_li]:list-disc [&_span]:font-normal">
                     <li>Plan: <span>{subscriptionForm.watch('planName')}</span></li>
                     <li>Content type: <span>{capitalizeFirstLetters(subscriptionForm.watch('contentType'))}</span> </li>
                     <li>Word Count: <span>{subscriptionForm.watch('wordCount')}</span></li>
                  </ul>
               </DialogDescription>
            </DialogHeader>

            <ScrollArea>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="px-2 py-2 space-y-6">
                     <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Full Name <span className="text-destructive">*</span>
                              </FormLabel>

                              <FormControl>
                                 <Input placeholder="e.g John Doe" {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        name="email"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Email <span className="text-destructive">*</span>
                              </FormLabel>

                              <FormControl>
                                 <Input placeholder="e.g johndoe@gmail.com" {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <FormField
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Phone Number <span className="text-destructive">*</span>
                              </FormLabel>

                              <FormControl>
                                 <Input isNumeric placeholder="e.g +2348076568689" {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <DialogFooter>
                        <Button type="submit">
                           Proceed to Pay With Flutterwave
                        </Button>
                     </DialogFooter>
                  </form>
               </Form>
            </ScrollArea>
         </DialogContent>
      </Dialog>
   );
};
