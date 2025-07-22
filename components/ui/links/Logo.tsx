import React from "react";
import LogoImg from "@/public/logo.webp";
import Image from "next/image";
import Link from "next/link";


const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={LogoImg}
        alt="Neyo site logo"
        width={152}
        height={40}
        className="h-7 w-24.5 md:h-10 md:w-38"
      />
    </Link>
  );
};

export default Logo;
