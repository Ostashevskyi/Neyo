import { ButtonAuthProps } from "@/types/components/Button";
import React, { FC } from "react";

const ButtonAuth: FC<ButtonAuthProps> = ({ children, variant }) => {
  return (
    <button
      className={`${variant === "default" ? "border border-white bg-transparent" : "bg-hero-radial"} rounded-40 w-fit cursor-pointer px-12 py-3 text-base leading-snug font-semibold tracking-normal text-white`}
    >
      {children}
    </button>
  );
};

export default ButtonAuth;
