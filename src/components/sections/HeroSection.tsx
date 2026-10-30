import { Reveal } from "@/components/motion/Reveal";
import { profile } from "@/content/site";

export function HeroSection() {
  return (
    <section id="home" className="hero section-light" data-theme="light">
      <div className="hero-inner site-shell">
        <Reveal yOffset={16}>
          <div className="hero-top-row">
            <p className="terminal-eyebrow">{profile.eyebrow}</p>
            {profile.availabilityStatus && (
              <div className="availability-badge" data-cursor="interactive">
                <span className="availability-pulse-dot" />
                <span>{profile.availabilityStatus}</span>
              </div>
            )}
          </div>
        </Reveal>
        <h1 className="hero-title" data-cursor="hero">
          {profile.statement.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <Reveal delay={0.15} yOffset={20}>
          <div className="hero-foot">
            <p>{profile.shortBio}</p>
            <a className="text-link" href="#projects">Explore the work <span aria-hidden="true">↘</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

