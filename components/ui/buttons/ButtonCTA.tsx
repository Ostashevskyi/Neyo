import React, { FC } from "react";

import { ButtonCTAProps } from "@/types/components/Button";

const ButtonCTA: FC<ButtonCTAProps> = ({
  children,
  className,
  variant = "default",
}) => {
  return (
    <button
      className={`bg-hero-radial w-fit cursor-pointer ${variant === "default" ? "rounded-40 lg:px-16 lg:py-18 md:py-5 px-12" : "rounded-full p-2"} font-bold capitalize md:text-lg lg:text-xl max-lg:leading-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
