import { useSearchParams } from "react-router-dom"
import { DialogContent, DialogHeader, Dialog, DialogTitle, DialogDescription, DialogFooter } from "../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { ScrollArea } from "../ui/scroll-area"
import { useEffect, useState } from "react"
import { PAYMENT_FORM_PARAMS } from "@/constants/home-const"
import { UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { homePaymentFormSchema } from "@/hooks/use-home"
import { Input } from "../ui/input"
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { Button } from "../ui/button"

type PaymentFormProps = {
   form: UseFormReturn<z.infer<typeof homePaymentFormSchema>>;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ form }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const [openDialog, setOpenDialog] = useState(false);

   useEffect(() => {
      if (searchParams.get(PAYMENT_FORM_PARAMS) === "true") {
         setOpenDialog(true)
      }
   }, [searchParams]);

   const handleCloseDialog = () => {
      setOpenDialog(false);
      searchParams.delete(PAYMENT_FORM_PARAMS);
      setSearchParams(searchParams);
   };

   const config = {
      public_key: 'FLWPUBK_TEST-8cb0b4a0bb9689abddc2d2c6ef16f10c-X',
      tx_ref: `TX_${Date.now().toString()}`,
      amount: form.watch('price'),
      currency: 'USD',
      payment_options: 'card,mobilemoney,ussd',
      customer: {
         email: form.watch('email') || "",
         phone_number: form.watch('phone') || "",
         name: form.watch('name') || "",
      },
      customizations: {
         title: `Payment for ${form.watch('planName')} Subscription`,
         description: `Secure payment for the ${form.watch('planName') || 'selected'}`,
         logo: 'https://theexquisitewriters.com/logo.svg',
      },
   };

   const handleFlutterPayment = useFlutterwave(config);

   return (
      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
         <DialogContent className="px-4 grid-rows-[auto_1fr]">
            <DialogHeader className="px-2">
               <DialogTitle>
                  Payment Information
               </DialogTitle>
               <DialogDescription>
                  Please enter your details below to proceed with the payment.
               </DialogDescription>
            </DialogHeader>

            <ScrollArea>
               <Form {...form}>
                  <form className="px-2 py-2 space-y-6">
                     <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>
                                 Full Name
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
                                 Email
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
                                 Phone Number
                              </FormLabel>

                              <FormControl>
                                 <Input placeholder="e.g +2348076568689" {...field} />
                              </FormControl>

                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </form>
               </Form>
            </ScrollArea>

            <DialogFooter>
               <Button onClick={() => {
                  handleFlutterPayment({
                     callback: (response) => {
                        console.log(response);
                        closePaymentModal()
                     },
                     onClose: () => {},
                  });
               }}>
                  Proceed to Pay With Flutterwave
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   )
}