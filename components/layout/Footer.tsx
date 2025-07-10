import React from "react";

import Image from "next/image";

import Logo from "@/public/logo.webp";

import SocialSection from "@/sections/home/SocialSection";

import HomeSectionWrapper from "../ui/wrappers/HomeSectionWrapper";

const Footer = () => {
  return (
    <footer>
      <HomeSectionWrapper className="pt-15 pb-5">
        <Image src={Logo} alt="Neyo site logo" width={152} height={40} />
        <SocialSection />
        <p className="text-base leading-5">© {new Date().getFullYear()} NEYO. All rights reserved.</p>
      </HomeSectionWrapper>
    </footer>
  );
};

export default Footer;
