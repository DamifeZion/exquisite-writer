import { PricingCard } from "@/components/home/pricing-card"
import { ScrollSpySection } from "@/components/navbar/scroll-spy-section"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Typography from "@/components/ui/typography"
import { CONTENT_TYPES, WORD_COUNT } from "@/constants/home-const"
import { routeConstants } from "@/constants/route-const"
import { useHome } from "@/hooks/use-home"
import { capitalizeFirstLetters } from "@/helper/capitalize-first-letter";
import { getContentTypeRangeLabel, renderWordCount } from "@/helper/pricing"
import { cn } from "@/lib/utils"

export const Pricing = () => {
   const { form, subscriptionPlans, onSubmit } = useHome();

   return (
      <ScrollSpySection route={routeConstants.pricing} className="py-28 bg-[#f9f9f9]">
         <div className="container">
            <div className="max-w-[750px] mx-auto text-center">
               <Typography variant="h1">
                  Pricing plans
               </Typography>

               <Typography variant="p" className="text-[hsl(215,15%,38%)]">
                  Get content written on-demand or get it consistently delivered with our subscription plans and added benefits.
               </Typography>
            </div>
         </div>

         <Form {...form}>
            <form>
               <div className="flex flex-wrap items-start justify-center mt-14 gap-x-20 gap-y-4">
                  <FormField
                     control={form.control}
                     name="contentType"
                     render={({ field }) => (
                        <FormItem className="grid items-center *:text-center">
                           <FormLabel>
                              Content Type
                           </FormLabel>

                           <FormControl>
                              <Select
                                 value={field.value}
                                 onValueChange={field.onChange}
                              >
                                 <SelectTrigger className="gap-4 py-2.5 h-fit bg-[hsla(0,0%,92%)] text-muted-foreground">
                                    <SelectValue placeholder="Select content type" />
                                 </SelectTrigger>

                                 <SelectContent className="bg-[hsla(0,0%,92%)]">
                                    {CONTENT_TYPES.map((data, index) => (
                                       <SelectItem key={data + index} value={data}>
                                          {capitalizeFirstLetters(data)}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                           </FormControl>

                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="wordCount"
                     render={({ field }) => (
                        <FormItem className={cn("grid items-center *:text-center", {
                           "max-w-[130px]": form.watch("contentType") === "website content"
                        })}>
                           <FormLabel>
                              {getContentTypeRangeLabel(form.watch("contentType"))}
                           </FormLabel>

                           <FormControl>
                              {/* NOTE: If the "content type" is website content, we show an input, to allow user select number else a select */}
                              {form.watch("contentType") === "website content" ? (
                                 <Input
                                    type="number"
                                    placeholder="Enter number of page(s)"
                                    className="py-2.5 h-fit bg-[hsla(0,0%,92%)] text-muted-foreground"
                                    {...field}
                                 />
                              ) : (
                                 <Select
                                    value={field.value}
                                    defaultValue={WORD_COUNT[0]}
                                    onValueChange={field.onChange}
                                 >
                                    <SelectTrigger className="gap-4 py-2.5 h-fit bg-[hsla(0,0%,92%)] text-muted-foreground">
                                       <SelectValue placeholder="Select number of words" />
                                    </SelectTrigger>

                                    <SelectContent className="max-h-64 bg-[hsla(0,0%,92%)]">

                                       {renderWordCount(form.watch("contentType")).map((data, index) => (
                                          <SelectItem key={data + index} value={data}>
                                             {capitalizeFirstLetters(data)}
                                          </SelectItem>
                                       ))}
                                    </SelectContent>
                                 </Select>
                              )}

                           </FormControl>
                        </FormItem>
                     )}
                  />
               </div>

               <div className="container grid gap-4 mt-20 max-md:max-w-3xl sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                  {subscriptionPlans.map((data, index) => (
                     <PricingCard
                        key={index}
                        onClick={() => {
                           form.setValue('price', data.amount);
                           form.setValue('planName', data.planName);
                           form.handleSubmit(onSubmit)();
                        }}
                        {...data}
                     />
                  ))}
               </div>
            </form>

            <Typography variant="p" className="text-xs font-normal text-center text-muted-foreground">
               🔒 Secure Payment by Payment Gateway
            </Typography>
         </Form>
      </ScrollSpySection>
   )
}
