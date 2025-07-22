import Link from "next/link";
import React, { FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const LinkSocial: FC<Props> = ({ className, children }) => {
  return (
    <Link className={`bg-hero-radial rounded-full md:p-2 p-1 ${className}`} href={"#"}>
      {children}
    </Link>
  );
};

export default LinkSocial;
