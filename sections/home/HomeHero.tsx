import React from "react";

import ButtonCTA from "@/components/ui/buttons/ButtonCTA";
import HomeSectionWrapper from "@/components/ui/wrappers/HomeSectionWrapper";
import LimitContainer from "@/components/ui/wrappers/LimitContainer";
import HomeParagraph from "@/components/ui/paragraphs/HomeParagraph";

const HomeHero = () => {
  return (
    <LimitContainer>
      <HomeSectionWrapper className="mb-40 bg-[url(/home/backgrounds/hero-bg.webp)] bg-cover bg-center bg-no-repeat py-72">
        <h1 className="font-orbitron capitalize">Create the Future with AI</h1>
        <p className="text-28 leading-100 font-semibold capitalize">
          All-in-one platform for images, videos & smart answers
        </p>
        <HomeParagraph className="max-w-home-hero-text">
          Neyo brings together powerful AI tools — Chat Assistant, Image
          Generator, and Video Creator — all in one seamless experience.
        </HomeParagraph>
        <ButtonCTA>Get Started</ButtonCTA>
      </HomeSectionWrapper>
    </LimitContainer>
  );
};

export default HomeHero;
