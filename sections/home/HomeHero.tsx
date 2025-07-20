import React from "react";

import ButtonCTA from "@/components/ui/buttons/ButtonCTA";
import HomeSectionWrapper from "@/components/ui/wrappers/HomeSectionWrapper";
import LimitContainer from "@/components/ui/wrappers/LimitContainer";
import HomeParagraph from "@/components/ui/paragraphs/HomeParagraph";
import ResponsiveText from "@/components/ui/paragraphs/ResponsiveText";

const HomeHero = () => {
  return (
    <LimitContainer>
      <HomeSectionWrapper className="lg:mb-40 bg-[url(/home/backgrounds/hero-bg.webp)] bg-cover bg-center bg-no-repeat lg:py-72 md:py-84">
        <h1 className="font-orbitron md:text-40 capitalize lg:text-6xl">
          Create the Future with AI
        </h1>
        <p className="md:text-28 leading-100 font-semibold capitalize">
          <ResponsiveText
            desktop="All-in-one platform for images, videos & smart answers"
            tablet="All-in-one platform for media & answers"
            mobile="Images. Videos. Answers. All in one"
          />
        </p>
        <HomeParagraph className="lg:max-w-home-hero-text">
          <ResponsiveText
            desktop="Neyo brings together powerful AI tools — Chat Assistant, Image Generator, and Video Creator — all in one seamless experience."
            tablet="Neyo brings together smart AI tools — Chat, Image & Video — in one seamless experience"
            mobile="Chat, Image & Video tools — powered by Neyo"
          />
        </HomeParagraph>
        <ButtonCTA>Get Started</ButtonCTA>
      </HomeSectionWrapper>
    </LimitContainer>
  );
};

export default HomeHero;
