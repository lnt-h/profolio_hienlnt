import { FloatingGlassNav } from "@/components/layout/FloatingGlassNav";
import { MiniScrollProgress } from "@/components/layout/MiniScrollProgress";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SourceLink } from "@/components/layout/SourceLink";
import { AdaptiveCursor } from "@/components/motion/AdaptiveCursor";
import { Preloader } from "@/components/motion/Preloader";
import { AboutSection } from "@/components/sections/AboutSection";
import { BehindSection } from "@/components/sections/BehindSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { KineticMarquee } from "@/components/sections/KineticMarquee";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Preloader />
      <MiniScrollProgress />
      <FloatingGlassNav />
      <SourceLink />
      <AdaptiveCursor />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <KineticMarquee />
        <BehindSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

