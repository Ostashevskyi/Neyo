import React from "react";

import ButtonCTA from "@/components/button/ButtonCTA";

const HomeHero = () => {
  return (
    <section className="center-column-flex gap-10 bg-[url(/home/hero-bg.webp)] bg-cover bg-center bg-no-repeat px-12 py-72 text-white mb-40">
      <h1 className="font-orbitron capitalize">Create the Future with AI</h1>
      <p className="text-28 font-semibold capitalize">
        All-in-one platform for images, videos & smart answers
      </p>
      <p className="max-w-home-hero-text text-center font-medium capitalize leading-">
        Neyo brings together powerful AI tools — Chat Assistant, Image
        Generator, and Video Creator — all in one seamless experience.
      </p>
      <ButtonCTA className="text-xl">Get Started</ButtonCTA>
    </section>
  );
};

export default HomeHero;
