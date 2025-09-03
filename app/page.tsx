import HomeHero from "../sections/home/HomeHero";
import HomeSliderSection from "../sections/home/HomeSliderSection";
import TargetAudienceSection from "../sections/home/TargetAudienceSection";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="bg-primary-black">
      <Header />
      <main>
        <HomeHero />
        <HomeSliderSection />
        <div className="bg-[url(/home/backgrounds/footer-bg.webp)] bg-cover bg-center bg-no-repeat">
          <TargetAudienceSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
