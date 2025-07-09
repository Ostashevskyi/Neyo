import React from "react";

import ButtonCTA from "@/components/ui/button/ButtonCTA";
import HomeSectionWrapper from "@/components/sections/HomeSectionWrapper";

const HomeHero = () => {
  return (
    <HomeSectionWrapper className="mb-40 bg-[url(/home/hero-bg.webp)] bg-cover bg-center bg-no-repeat py-72">
      <h1 className="font-orbitron capitalize">Create the Future with AI</h1>
      <p className="text-28 leading-100 font-semibold capitalize">
        All-in-one platform for images, videos & smart answers
      </p>
      <p className="max-w-home-hero-text text-center font-medium capitalize">
        Neyo brings together powerful AI tools — Chat Assistant, Image
        Generator, and Video Creator — all in one seamless experience.
      </p>
      <ButtonCTA>Get Started</ButtonCTA>
    </HomeSectionWrapper>
  );
};

export default HomeHero;
