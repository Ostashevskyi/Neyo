import React from "react";

import SocialSection from "@/sections/home/SocialSection";

import HomeSectionWrapper from "../ui/wrappers/HomeSectionWrapper";
import Logo from "../ui/links/Logo";

const Footer = () => {
  return (
    <footer>
      <HomeSectionWrapper className="pt-15 pb-5">
        <Logo />
        <SocialSection />
        <p className="md:text-base md:leading-5 text-xs leading-100">© {new Date().getFullYear()} NEYO. All rights reserved.</p>
      </HomeSectionWrapper>
    </footer>
  );
};

export default Footer;
