import {
  ISliderSectionData,
  ISocialData,
  TTargetAudienceImages,
} from "@/types/data/HomeData";

import ImageService from "@/public/svg/image-service.svg";
import VideoService from "@/public/svg/video-service.svg";
import CutService from "@/public/svg/cut-service.svg";
import VoiceService from "@/public/svg/voice-service.svg";
import TextService from "@/public/svg/text-service.svg";

import DesingerAudience from "@/public/home/target-audience/designer.webp";
import DeveloperAudience from "@/public/home/target-audience/developer.webp";
import MarketerAudience from "@/public/home/target-audience/marketer.webp";
import CopywriterAudience from "@/public/home/target-audience/copywriter.webp";
import ContentCreatorAudience from "@/public/home/target-audience/content-creator.webp";
import StartupAudience from "@/public/home/target-audience/startup.webp";

import FacebookIcon from "@/public/svg/socials/facebook.svg";
import InstagramIcon from "@/public/svg/socials/instagram.svg";
import TikTokIcon from "@/public/svg/socials/tiktok.svg";
import XIcon from "@/public/svg/socials/x.svg";

export const sliderSectionData: ISliderSectionData[] = [
  {
    title: "Image Generator",
    description:
      "Generate high-quality images from just a prompt — fast, easy, and customizable.",
    src: ImageService,
    alt: "Icon representing image generation service",
  },
  {
    title: "Video Generator",
    description:
      "Create dynamic videos effortlessly from text — ideal for promos, explainers, and more",
    src: VideoService,
    alt: "Icon representing video generation service",
  },
  {
    title: "Cut Service",
    description:
      "Easily crop, enhance, and modify visuals with smart AI-powered tools.",
    src: CutService,
    alt: "Icon representing image editing or cutting service",
  },
  {
    title: "Voice Generator",
    description: "Convert text into natural, expressive voices in seconds.",
    src: VoiceService,
    alt: "Icon representing voice generation service",
  },
  {
    title: "Chat Assistant",
    description:
      "Get instant answers, ideas, and support from your personal AI assistant",
    src: TextService,
    alt: "Icon representing AI text or chat assistant",
  },
];

export const targetAudienceImages: TTargetAudienceImages[] = [
  {
    src: DesingerAudience,
    alt: "Icon representing a designer using creative tools",
  },
  {
    src: DeveloperAudience,
    alt: "Icon representing a developer writing code",
  },
  {
    src: MarketerAudience,
    alt: "Icon representing a marketer analyzing growth metrics",
  },
  {
    src: CopywriterAudience,
    alt: "Icon representing a copywriter creating written content",
  },
  {
    src: ContentCreatorAudience,
    alt: "Icon representing a content creator producing video or media",
  },
  {
    src: StartupAudience,
    alt: "Icon representing a startup with a lightbulb idea",
  },
];

export const socialData: ISocialData[] = [
  {
    src: XIcon,
    alt: "Follow us on X (formerly Twitter)",
  },
  {
    src: InstagramIcon,
    alt: "Visit our Facebook page",
  },
  {
    src: FacebookIcon,
    alt: "See our photos on Instagram",
  },
  {
    src: TikTokIcon,
    alt: "Watch us on TikTok",
  },
];
