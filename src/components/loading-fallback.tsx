export const LoadingFallback = () => {
   return (
      <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/80">
         <span className="p-0.5 bg-white shadow-sm rounded-full animate-spin">
            <img
               src="/logo.svg"
               loading="lazy"
               className="size-20 animate-pulse"
            />
         </span>
      </div>
   );
};
