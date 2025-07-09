import { StaticImageData } from "next/image";

export interface ISliderSectionData {
    title: string;
    description: string;
    src: StaticImageData;
    alt: string;
}

export type TTargetAudienceImages = Pick<ISliderSectionData, "src" | "alt"> 