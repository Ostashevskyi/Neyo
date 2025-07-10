import React from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.webp";

import ButtonAuth from "@/components/ui/buttons/ButtonAuth";

const Header = () => {
  return (
    <header className="between-flex px-14 py-7">
      <Link href={"/"}>
        <Image
          src={Logo}
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
