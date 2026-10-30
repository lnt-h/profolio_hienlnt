import { Suspense } from "react";
import { GitHubActivityCard, GitHubActivityFallback } from "@/components/behind/GitHubActivityCard";
import { HienlntSignature } from "@/components/motion/HienlntSignature";
import { Reveal } from "@/components/motion/Reveal";
import { spotifyTrack } from "@/content/site";

export function BehindSection() {
  return (
    <section id="more" className="behind section-dark" data-theme="dark">
      <div className="site-shell">
        <header className="behind-heading">
          <p className="section-eyebrow">Behind the curtains</p>
          <h2>Beyond the code<br /><em>&amp;&amp; a little more.</em></h2>
        </header>
        <div className="behind-grid">
          <Reveal delay={0.04} className="behind-card-reveal">
            <Suspense fallback={<GitHubActivityFallback />}><GitHubActivityCard /></Suspense>
          </Reveal>
          <Reveal delay={0.11} className="behind-card-reveal">
            <article className="personality-card guestbook-card">
              <span className="card-label">Guestbook</span>
              <div>
                <h3>Leave your <em>signature</em></h3>
                <p>The guestbook will open only with moderation and anti-spam safeguards in place.</p>
                <HienlntSignature compact />
              </div>
              <button type="button" disabled>Coming later <span aria-hidden="true">→</span></button>
            </article>
          </Reveal>
          <Reveal delay={0.18} className="behind-card-reveal">
            <article className="personality-card spotify-card">
              <span className="card-label"><span className="spotify-dot" /> Spotify pick</span>
              <div className="sound-bars" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <iframe
                className="spotify-embed"
                src={spotifyTrack.embedUrl}
                title={`${spotifyTrack.title} by ${spotifyTrack.artist} on Spotify`}
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

