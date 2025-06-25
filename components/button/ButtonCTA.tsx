import { ButtonCTAProps } from "@/types/components/Button";
import React, { FC } from "react";

const ButtonCTA: FC<ButtonCTAProps> = ({ children }) => {
  return (
    <button
      className={`bg-hero-radial rounded-40 w-fit cursor-pointer px-16 py-18`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
