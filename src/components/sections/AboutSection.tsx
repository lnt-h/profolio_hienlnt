import Image from "next/image";
import { HienlntSignature } from "@/components/motion/HienlntSignature";
import { Reveal } from "@/components/motion/Reveal";
import { credentials, profile } from "@/content/site";

export function AboutSection() {
  return (
    <section id="about" className="about section-light" data-theme="light">
      <div className="site-shell">
        <Reveal>
          <header className="section-heading about-heading">
            <span>Engineering ideas,</span>
            <h2>into real products.</h2>
          </header>
        </Reveal>
        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="portrait-frame">
              <span className="portrait-corner-index" aria-hidden="true">02 / PROFILE</span>
              <Image
                className="portrait-image"
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                sizes="(max-width: 900px) calc(100vw - 36px), 38vw"
                priority={false}
                style={{ "--portrait-position": profile.portrait.objectPosition, "--portrait-position-mobile": profile.portrait.mobileObjectPosition } as React.CSSProperties}
              />
              <span className="portrait-vignette" aria-hidden="true" />
              <span className="portrait-label">Hien Le</span>
            </div>
            <div className="portrait-meta">
              <strong>{profile.displayName}</strong>
              <span>{profile.role}</span>
            </div>
          </Reveal>
          <Reveal delay={0.2} className="about-copy">
            <p className="about-lead">Building useful software means understanding the problem before reaching for the tools.</p>
            <p>{profile.shortBio}</p>
            <blockquote>{profile.principle}</blockquote>
            <div className="about-signoff">
              <span>Built with intent,</span>
              <HienlntSignature />
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="credentials">
            <h3 className="credentials-heading">Credentials &amp; highlights</h3>
            <ul className="credentials-list">
              {credentials.map((item) => (
                <li key={item.id} className="credential">
                  <span className="credential-period">{item.period}</span>
                  <div className="credential-body">
                    <strong>{item.title}</strong>
                    <span className="credential-issuer">{item.issuer}</span>
                    {item.detail ? <p>{item.detail}</p> : null}
                    {item.href ? (
                      <a className="credential-link" href={item.href} target="_blank" rel="noreferrer noopener">
                        View announcement ↗
                      </a>
                    ) : null}
                    {item.image ? (
                      <figure className="credential-figure">
                        <Image src={item.image.src} alt={item.image.alt} width={1600} height={932} sizes="(max-width: 900px) calc(100vw - 32px), 620px" />
                      </figure>
                    ) : null}
                  </div>
                  <span className="credential-kind">{item.kind}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

