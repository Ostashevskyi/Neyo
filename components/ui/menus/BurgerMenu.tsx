import React from "react";

const BurgerMenu = () => {
  return (
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="flex h-10 w-10 cursor-pointer flex-col items-center justify-between rounded-lg px-1.5 py-2 text-sm focus:outline-none md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <span className="bg-hero-radial h-1 w-7 rounded"></span>
      <span className="bg-hero-radial h-1 w-7 rounded"></span>
      <span className="bg-hero-radial h-1 w-7 rounded"></span>
    </button>
  );
};

export default BurgerMenu;
