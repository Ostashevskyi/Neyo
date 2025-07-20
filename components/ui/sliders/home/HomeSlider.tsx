import React, { FC, useState } from "react";

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { sliderSectionData } from "@/app/data/homeData";

import { ISetState } from "@/types/utils/SetState";
import { ISliderSectionData } from "@/types/data/HomeData";
import { slidesConfigs } from "./config";

interface Props {
  setSliderActiveSectionData: ISetState<ISliderSectionData> 
}

const HomeSlider: FC<Props> = ({ setSliderActiveSectionData }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 5, spacing: 1, origin: "center" },
    rubberband: true,
    detailsChanged(slider) {
      slidesConfigs(slider);
      setSliderActiveSectionData(sliderSectionData[slider.track.details.rel])
    },
    created() {
      setIsLoaded(true);
    },
    defaultAnimation: {
      duration: 800,
      easing: (t) => t * t * (3 - 2 * t) 
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider decoration-circle lg:h-[420px] md:h-[260px]">
      {sliderSectionData.map((data, idx) => (
        <div
          key={idx}
          className={`keen-slider__slide max-w-fit flex cursor-pointer items-center justify-center ${isLoaded ? "visible" : "hidden"}`}
          onClick={() => slider.current?.moveToIdx(idx)}
          style={{ maxWidth: slider.current?.slides[idx].clientWidth}}
        >
          <div
            className={`content-wrapper origin-center rounded-xl border-2 border-white/50 p-4 shadow-[0_0_10px_0_rgba(255,255,255,0.3)] backdrop-blur-[60px]`}
          >
            <Image
              src={data.src}
              alt={`Service ${idx}`}
              className="slider-image h-auto w-full origin-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;
