import { profile } from "@/content/site";

export function HeroSection() {
  return (
    <section id="home" className="hero section-light" data-theme="light">
      <div className="hero-inner site-shell">
        <p className="terminal-eyebrow">{profile.eyebrow}</p>
        <h1 className="hero-title" data-cursor="hero">
          {profile.statement.map((line) => <span key={line}>{line}</span>)}
        </h1>
        <div className="hero-foot">
          <p>{profile.shortBio}</p>
          <a className="text-link" href="#projects">Explore the work <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  );
}

