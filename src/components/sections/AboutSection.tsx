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
            <div className="portrait-frame" role="img" aria-label="Portrait placeholder for Hien Le; final portrait pending">
              <div className="portrait-monogram" aria-hidden="true">HL</div>
              <span className="portrait-label">Portrait pending</span>
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
            <p>The final biography and portrait will be added only after the owner verifies them.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

