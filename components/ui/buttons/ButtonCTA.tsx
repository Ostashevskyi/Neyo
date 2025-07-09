import React, { FC } from "react";

import { ButtonCTAProps } from "@/types/components/Button";

const ButtonCTA: FC<ButtonCTAProps> = ({ children, className }) => {
  return (
    <button
      className={`bg-hero-radial rounded-40 w-fit cursor-pointer px-16 py-18 text-xl capitalize font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
