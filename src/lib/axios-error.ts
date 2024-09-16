import { toast } from "sonner";

// Type guard to check if error is an instance of Error
export const axiosErrorHandler = (error: unknown) => {
   if (error instanceof Error) {
      if (error.message.includes("timeout")) {
         return toast.error(
            "Request timed out. Please refresh the page and try again."
         );
      }
      toast.error(`Erro: ${error.message}`);
   } else {
      toast.error("An unexpected error occurred.");
   }
};
