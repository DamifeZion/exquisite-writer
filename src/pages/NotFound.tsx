import { Link } from "@/components/ui/link";
import Typography from "@/components/ui/typography";
import { routeConstants } from "@/constants/route-const";

const NotFound = () => {
   return (
      <section className="min-h-[calc(100vh-70px)] bg-[hsl(180,43%,96%)]">
         <div className="container flex flex-col-reverse justify-between gap-20 md:flex-row">
            <div className="!pb-28 md:max-w-md md:!py-40">
               <Typography
                  variant="h1"
                  className="!leading-normal text-[40px] min-[450px]:text-5xl sm:!text-[64px]"
               >
                  Ooops...
               </Typography>

               <Typography className="!leading-10 text-4xl min-[450px]:text-5xl min-sm:text-[56px]">
                  Page not found
               </Typography>

               <Typography variant="p" className="!mt-10 text-balance">
                  The page you are looking for doesn’t exist. Click the below
                  button to go back to home page.
               </Typography>

               <Link
                  variant="outline"
                  to={routeConstants.home}
                  className="mt-10 bg-transparent text-primary border-primary hover:bg-primary hover:text-primary-foreground"
               >
                  Go Back Home
               </Link>
            </div>

            <img
               src="/404.svg"
               className="object-cover object-left w-full max-w-3xl py-10"
            />
         </div>
      </section>
   );
};

export default NotFound;
