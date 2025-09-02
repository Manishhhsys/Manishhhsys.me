import React from "react";

export const GlowLine=()=>{
    return (
        <div className="relative md:w-[93%] w-[80%] h-[2px] m-8 
  bg-gradient-to-r from-[#F53938] via-red-300 to-[#F53938] 
  dark:from-[#F53938] dark:via-red-400 dark:to-[#F53938]">
  
  <div className="absolute inset-0 -z-10 
    bg-gradient-to-r from-red-300 via-red-200 to-red-300 
    dark:from-red-400 dark:via-red-300 dark:to-red-400 
    blur-lg opacity-25">
  </div>
</div>

    )
}