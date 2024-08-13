import { toast } from "sonner";

// Type guard to check if error is an instance of Error
export const axiosErrorHandler = (error: unknown) => {
   if (error instanceof Error) {
      toast.error(`Error fetching categories: ${error.message}`);
   } else {
      toast.error("An unexpected error occurred.");
   }
};
