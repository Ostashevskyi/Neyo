import { KeenSliderInstance } from "keen-slider";

export const slidesConfigs = (slider: KeenSliderInstance) => {
  const centerIndex = slider.track.details.rel;

  slider.track.details.slides.forEach((slideDetail, i) => {
    const slide = slider.slides[i];
    const el = slide;

    const centerSlide = slider.slides[centerIndex].querySelector(
      ".content-wrapper",
    ) as HTMLElement;
    const content = el.querySelector(".content-wrapper") as HTMLElement;
    const contentImage = el.querySelector(".slider-image") as HTMLElement;
    if (!content && !centerSlide && !contentImage) return;

    const distance = Math.abs(
      slideDetail.abs - slider.track.details.slides[centerIndex].abs,
    );

    const scales = [1, 124 / 180, 80 / 180];
    const scale = scales[Math.min(distance, scales.length - 1)];
    const imageScales = [1, 0.69];
    const imageScale = scales[Math.min(distance, imageScales.length - 1)];

    content.style.transform = `scale(${scale})`;
    content.style.transition = "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"; // best so far
    content.style.willChange = "transform";

    contentImage.style.transform = `scale(${imageScale})`;

    if (distance < 0.5) {
      content.classList.add("keen-slider__center-slide");
    } else {
      content.classList.remove("keen-slider__center-slide");
    }
  });
};