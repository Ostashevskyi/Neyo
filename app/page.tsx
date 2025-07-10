import Footer from "@/components/layout/Footer";
import HomeHero from "../sections/home/HomeHero";
import HomeSliderSection from "../sections/home/HomeSliderSection";
import TargetAudienceSection from "../sections/home/TargetAudienceSection";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeSliderSection />
      <div className="bg-[url(/home/backgrounds/footer-bg.webp)] bg-cover bg-center bg-no-repeat">
        <TargetAudienceSection />
        <Footer />
      </div>
    </main>
  );
}
