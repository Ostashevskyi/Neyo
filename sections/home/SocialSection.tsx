import { socialData } from "@/app/data/homeData";
import LinkSocial from "@/components/ui/links/LinksSocial";
import Image from "next/image";
import React from "react";

const SocialSection = () => {
  return (
    <div className="flex items-center md:gap-5 lg:gap-7 gap-5">
      {socialData.map((social) => (
        <LinkSocial
          className="h-fit w-fit"
          key={social.src.src}
        >
          <Image src={social.src} alt={social.alt} className="w-5 h-5 md:w-6 md:h-6" />
        </LinkSocial>
      ))}
    </div>
  );
};

export default SocialSection;
