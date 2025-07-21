import React from "react";

import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo.webp";

import ButtonAuth from "@/components/ui/buttons/ButtonAuth";
import BurgerMenu from "../ui/menus/BurgerMenu";

const Header = () => {
  return (
    <header className="between-flex px-4 py-5 md:px-8 md:py-7 lg:px-15">
      <Link href={"/"}>
        <Image src={Logo} alt="Neyo site logo" width={152} height={40} className="h-7 w-24.5 md:w-38 md:h-10"/>
      </Link>
      <div className="hidden gap-6 md:flex">
        <ButtonAuth variant="default">Log In</ButtonAuth>
        <ButtonAuth variant="cta">Sign Up</ButtonAuth>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
