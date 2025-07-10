import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const LimitContainer = ({ children, className }: Props) => {
  return <div className={`max-w-page-limit w-full m-auto ${className}`}>{children}</div>;
};

export default LimitContainer;
