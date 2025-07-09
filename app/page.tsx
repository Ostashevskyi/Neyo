import HomeHero from "./home/HomeHero";
import HomeSliderSection from "./home/HomeSliderSection";
import TargetAudienceSection from "./home/TargetAudienceSection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSliderSection />
      <div className="bg-[url(/home/backgrounds/footer-bg.webp)] bg-cover bg-center bg-no-repeat">
        <TargetAudienceSection />
      </div>
    </main>
  );
}
