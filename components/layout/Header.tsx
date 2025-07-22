import React from "react";

import Link from "next/link";
import Image from "next/image";


import ButtonAuth from "@/components/ui/buttons/ButtonAuth";
import BurgerMenu from "../ui/menus/BurgerMenu";
import Logo from "../ui/links/Logo";

const Header = () => {
  return (
    <header className="between-flex px-4 py-3 md:px-8 md:py-7 lg:px-15">
      <Logo />
      <div className="hidden gap-6 md:flex">
        <ButtonAuth variant="default">Log In</ButtonAuth>
        <ButtonAuth variant="cta">Sign Up</ButtonAuth>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
