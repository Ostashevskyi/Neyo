import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HomeParagraph: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={`text-center text-sm font-normal capitalize md:text-base md:font-medium lg:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default HomeParagraph;
