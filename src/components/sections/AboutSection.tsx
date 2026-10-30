import Image from "next/image";
import { HienlntSignature } from "@/components/motion/HienlntSignature";
import { profile } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="about section-light" data-theme="light">
      <div className="site-shell">
        <header className="section-heading about-heading">
          <span>Engineering ideas,</span>
          <h2>into real products.</h2>
        </header>
        <div className="about-grid">
          <div>
            <div className="portrait-frame">
              <Image
                className="portrait-image"
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                sizes="(max-width: 900px) calc(100vw - 36px), 38vw"
                priority={false}
                style={{ "--portrait-position": profile.portrait.objectPosition, "--portrait-position-mobile": profile.portrait.mobileObjectPosition } as React.CSSProperties}
              />
              <span className="portrait-label">Hien Le</span>
            </div>
            <div className="portrait-meta">
              <strong>{profile.displayName}</strong>
              <span>{profile.role}</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="about-lead">Building useful software means understanding the problem before reaching for the tools.</p>
            <p>{profile.shortBio}</p>
            <blockquote>{profile.principle}</blockquote>
            <div className="about-signoff">
              <span>Built with intent,</span>
              <HienlntSignature />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

