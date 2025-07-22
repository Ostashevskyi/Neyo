import React from "react";

import Image from "next/image";

import { targetAudienceImages } from "../../app/data/homeData";

import ButtonCTA from "@/components/ui/buttons/ButtonCTA";
import HomeHeading2 from "@/components/ui/headings/HomeHeading2";
import LimitContainer from "@/components/ui/wrappers/LimitContainer";
import HomeParagraph from "@/components/ui/paragraphs/HomeParagraph";
import ResponsiveText from "@/components/ui/paragraphs/ResponsiveText";
import HomeSectionWrapper from "@/components/ui/wrappers/HomeSectionWrapper";

const TargetAudienceSection = () => {
  return (
    <LimitContainer>
      <HomeSectionWrapper className="py-16 md:pt-20 md:pb-30 lg:pt-40 lg:pb-50">
        <HomeHeading2>Made for Creators Like You</HomeHeading2>

        <div className="flex w-full items-center justify-between md:justify-center md:gap-9 lg:gap-20">
          {targetAudienceImages.map((image) => (
            <Image
              src={image.src}
              alt={image.alt}
              key={image.src.src}
              width={100}
              height={100}
              className="w-10 md:h-20 md:w-20"
            />
          ))}
        </div>

        <HomeParagraph className="max-w-60 leading-150 font-medium normal-case md:max-w-180 md:text-base lg:text-xl">
          <ResponsiveText
            desktop="Whether you're designing interfaces, writing code, editing visuals or
          launching campaigns — NEYO empowers every step of your creative
          journey."
            tablet="From design to code to campaigns — NEYO supports your entire creative process"
            mobile="Design. Code. Visuals. Campaigns. NEYO powers every step"
          />
        </HomeParagraph>

        <ButtonCTA>Start For Free</ButtonCTA>
      </HomeSectionWrapper>
    </LimitContainer>
  );
};

export default TargetAudienceSection;
