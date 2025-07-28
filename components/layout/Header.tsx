import React from "react";

import Logo from "../ui/links/Logo";
import BurgerMenu from "../ui/menus/BurgerMenu";
import LoginButton from "../ui/buttons/LoginButton";
import RegisterButton from "../ui/buttons/RegisterButton";

const Header = () => {
  return (
    <header className="between-flex px-4 py-3 md:px-8 md:py-7 lg:px-15">
      <Logo />
      <div className="hidden gap-6 md:flex">
        <LoginButton>Log In</LoginButton>
        <RegisterButton>Sign Up</RegisterButton>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
