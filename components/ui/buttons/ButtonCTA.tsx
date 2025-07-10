import React, { FC } from "react";

import { ButtonCTAProps } from "@/types/components/Button";

const ButtonCTA: FC<ButtonCTAProps> = ({ children, className, variant = "default" }) => {
  return (
    <button
      className={`bg-hero-radial  w-fit cursor-pointer ${variant === "default" ?  "px-16 py-18 rounded-40" : "rounded-full p-2"} text-xl capitalize font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
