import { socialData } from "@/app/data/homeData";
import ButtonCTA from "@/components/ui/buttons/ButtonCTA";
import Image from "next/image";
import React from "react";

const SocialSection = () => {
  return (
    <div className="flex items-center md:gap-5 lg:gap-7">
      {socialData.map((social) => (
        <ButtonCTA
          className="h-fit w-fit"
          key={social.src.src}
          variant="rounded"
        >
          <Image src={social.src} alt={social.alt} />
        </ButtonCTA>
      ))}
    </div>
  );
};

export default SocialSection;
