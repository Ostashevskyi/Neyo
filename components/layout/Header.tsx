import React from "react";

import Link from "next/link";
import Image from "next/image";

import ButtonAuth from "@/components/button/ButtonAuth";

const Header = () => {
  return (
    <header className="between-flex py-7">
      <Link href={"/"}>
        <Image
          src={"/logo.webp"}
          alt="Neyo site logo"
          width={152}
          height={40}
        />
      </Link>
      <div className="flex gap-6">
        <ButtonAuth variant="default">Log In</ButtonAuth>
        <ButtonAuth variant="cta">Sign Up</ButtonAuth>
      </div>
    </header>
  );
};

export default Header;
