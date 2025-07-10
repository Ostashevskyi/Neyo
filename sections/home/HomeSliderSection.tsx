"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { sliderSectionData } from "../../app/data/homeData";

import { ISliderSectionData } from "@/types/data/HomeData";

import ButtonCTA from "@/components/ui/buttons/ButtonCTA";
import HomeSlider from "@/components/ui/sliders/home/HomeSlider";
import HomeHeading2 from "@/components/ui/headings/HomeHeading2";
import LimitContainer from "@/components/ui/wrappers/LimitContainer";
import HomeSectionWrapper from "@/components/ui/wrappers/HomeSectionWrapper";
import HomeParagraph from "@/components/ui/paragraphs/HomeParagraph";

const HomeSliderSection = () => {
  const [sliderActiveSectionData, setSliderActiveSectionData] =
    useState<ISliderSectionData>(sliderSectionData[0]);

  return (
    <LimitContainer>
      <HomeSectionWrapper className="bg-[url(/home/backgrounds/home-slider-bg.webp)] bg-cover bg-center bg-no-repeat py-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={sliderActiveSectionData.title}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="center-column-flex gap-10"
          >
            <HomeHeading2>{sliderActiveSectionData.title}</HomeHeading2>
            <HomeParagraph className="max-w-home-hero-text h-14 text-xl leading-150">
              {sliderActiveSectionData.description}
            </HomeParagraph>
          </motion.div>
        </AnimatePresence>
        <ButtonCTA>Try now</ButtonCTA>

        <HomeSlider setSliderActiveSectionData={setSliderActiveSectionData} />
      </HomeSectionWrapper>
    </LimitContainer>
  );
};

export default HomeSliderSection;
