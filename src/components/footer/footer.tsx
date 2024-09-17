import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Typography from "../ui/typography";
import { OTHER_LINKS, SERVICES } from "@/constants/footer-const";
import { Link } from "../ui/link";
import { MENU_LiST } from "@/constants/nav-const";
import { cn } from "@/lib/utils";
import { routeConstants } from "@/constants/route-const";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
   const location = useLocation();

   return (
      <footer className="py-16 bg-[hsl(210,25%,16%)]">
         <section className="container">
            <div className="flex flex-col justify-between max-sm:gap-20 sm:flex-row">
               <div>
                  <Typography variant="h4" className="text-primary-foreground">
                     Ready to get started?
                  </Typography>

                  <Link
                     to={routeConstants.pricing}
                     variant="secondary"
                     className="mt-6"
                  >
                     Get Started
                  </Link>
               </div>

               <div className="grid gap-x-16 grid-cols-2 min-[400px]:grid-cols-3 sm:max-w-sm sm:grid-cols-3 [&_li]:!w-fit">
                  {/* SERVICES */}
                  <ul>
                     <li className="mb-3 text-[hsl(345,100%,91%)]">Services</li>

                     {SERVICES.map((data, index) => (
                        <li key={index}>
                           <Link
                              to={data.href}
                              variant="ghost"
                              className={cn(
                                 "px-0 font-normal text-primary-foreground hover:bg-transparent hover:text-primary-foreground hover:underline hover:underline-offset-2"
                              )}
                           >
                              {data.label}
                           </Link>
                        </li>
                     ))}
                  </ul>

                  {/* LINKS */}
                  <ul>
                     {MENU_LiST.filter((item) => !item.button).map(
                        (data, index) => (
                           <li key={index}>
                              <Link
                                 to={data.href}
                                 variant="ghost"
                                 className={cn(
                                    "px-0 font-normal text-primary-foreground hover:bg-transparent hover:text-primary-foreground hover:underline hover:underline-offset-2",
                                    {
                                       "text-[hsl(345,100%,91%)]":
                                          location.pathname === data.href,
                                       "pt-0": index === 0,
                                    }
                                 )}
                              >
                                 {data.label}
                              </Link>
                           </li>
                        )
                     )}
                  </ul>

                  {/* OTHER LINKS */}
                  <ul>
                     {OTHER_LINKS.map((data, index) => (
                        <li key={index}>
                           <Link
                              to={data.href}
                              variant="ghost"
                              className={cn(
                                 "!px-0 font-normal text-primary-foreground hover:bg-transparent hover:text-primary-foreground hover:underline hover:underline-offset-2",
                                 {
                                    "text-[hsl(345,100%,91%)]":
                                       location.pathname === data.href,
                                    "pt-0 text-[hsl(345,100%,91%)]":
                                       index === 0,
                                 }
                              )}
                           >
                              {data.label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="mt-28">
               <Separator />

               <div className="flex flex-wrap items-center mt-6 justify-normal max-[450px]:gap-y-10 max-[450px]:flex-col">
                  <div
                     id="tc-&-policy"
                     className="flex items-center gap-8 text-primary-foreground *:!text-sm"
                  >
                     <Typography variant="p">Terms & Conditions</Typography>

                     <Typography affects="removePMargin" variant="p">
                        <RouterLink to={routeConstants.privacyPolicy}>
                           Privacy Policy
                        </RouterLink>
                     </Typography>
                  </div>

                  <div
                     id="socials"
                     className="min-[451px]:ml-auto space-x-6 [&_button]:size-fit *:[&_button]:size-[30px] *:[&_button]:p-1.5 *:[&_button]:text-primary-foreground *:[&_button:hover]:text-primary"
                  >
                     <a
                        target="_blank"
                        href="https://www.facebook.com/exquisitewriter"
                     >
                        <Button size="icon" variant="ghost">
                           <FaFacebookF />
                        </Button>
                     </a>

                     <a target="_blank" href="https://x.com/exquisitewrite">
                        <Button size="icon" variant="ghost">
                           <FaTwitter />
                        </Button>
                     </a>

                     <a
                        target="_blank"
                        href="https://www.instagram.com/exquisite.writers/"
                     >
                        <Button size="icon" variant="ghost">
                           <FaInstagram strokeWidth={2} />
                        </Button>
                     </a>
                  </div>
               </div>
            </div>
         </section>
      </footer>
   );
};
