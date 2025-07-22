import React, { FC } from "react";

import { ButtonCTAProps } from "@/types/components/Button";

const ButtonCTA: FC<ButtonCTAProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`bg-hero-radial w-fit cursor-pointer rounded-40 md:px-12 py-3.5 lg:px-16 lg:py-4.5 px-8 font-semibold capitalize max-lg:leading-100 md:text-lg lg:text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
