import React from "react";
import logoFull from "../assets/images/FullLogo_resized.png"
import logoSymbol from "../assets/images/SymbolLogo_resized.png"

export const FullLogo = ({ className = "" }) => (
 <div className={`flex items-center justify-center ${className}`}>
    <img 
        src={logoFull}
        alt="Lancashire Web Fixers"
        className="h-28 md:h-32 lg:h-44 w-auto max-w-full"
    />
 </div>
);

export const SymbolLogo = ({ className = "" }) => (
    <img 
        src={logoSymbol}
        alt="Lancashire Web Fixers"
        className={`h-32 md:h-32 lg:h-36 w-auto ${className}`}
    />
);