import React from "react";

import Image from "next/image";

import { targetAudienceImages } from "../../app/data/homeData";

import HomeHeading2 from "@/components/ui/headings/HomeHeading2";
import HomeSectionWrapper from "@/components/ui/wrappers/HomeSectionWrapper";
import LimitContainer from "@/components/ui/wrappers/LimitContainer";
import HomeParagraph from "@/components/ui/paragraphs/HomeParagraph";
import ButtonCTA from "@/components/ui/buttons/ButtonCTA";

const TargetAudienceSection = () => {
  return (
    <LimitContainer>
      <HomeSectionWrapper className="pt-40 pb-50">
        <HomeHeading2>Made for Creators Like You</HomeHeading2>

        <div className="center-flex w-full gap-20">
          {targetAudienceImages.map((image) => (
            <Image src={image.src} alt={image.alt} key={image.src.src} />
          ))}
        </div>

        <HomeParagraph className="h-14 text-xl leading-150 max-w-180 normal-case">
          Whether you're designing interfaces, writing code, editing visuals or
          launching campaigns — NEYO empowers every step of your creative
          journey.
        </HomeParagraph>

        <ButtonCTA>Start For Free</ButtonCTA>
      </HomeSectionWrapper>
    </LimitContainer>
  );
};

export default TargetAudienceSection;
