"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { sliderSectionData } from "../data/homeData";

import { ISliderSectionData } from "@/types/data/HomeData";

import ButtonCTA from "@/components/ui/button/ButtonCTA";
import HomeSlider from "@/components/ui/slider/HomeSlider";
import HomeSectionWrapper from "@/components/sections/HomeSectionWrapper";

const HomeSliderSection = () => {
  const [sliderActiveSectionData, setSliderActiveSectionData] =
    useState<ISliderSectionData>(sliderSectionData[0]);
    
  return (
    <HomeSectionWrapper className="bg-[url(/home/home-slider-bg.webp)] bg-cover bg-center bg-no-repeat py-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={sliderActiveSectionData.title}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.4 }}
          className="center-column-flex gap-10"
        >
          <h2 className="font-orbitron text-center capitalize">
            {sliderActiveSectionData.title}
          </h2>
          <p className="max-w-home-hero-text h-14 text-center text-xl leading-150 font-medium capitalize">
            {sliderActiveSectionData.description}
          </p>
        </motion.div>
      </AnimatePresence>
      <ButtonCTA>Try now</ButtonCTA>

      <HomeSlider
        setSliderActiveSectionData={setSliderActiveSectionData}
      />
    </HomeSectionWrapper>
  );
};

export default HomeSliderSection;
