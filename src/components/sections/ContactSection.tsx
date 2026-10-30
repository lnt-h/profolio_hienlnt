import { profile } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="contact section-light" data-theme="light">
      <div className="contact-inner">
        <p className="section-eyebrow">Contact</p>
        <div className="chat outgoing">how do i actually reach you?</div>
        <div className="chat incoming">
          <p>Verified contact links are being prepared.</p>
          {profile.socialLinks.length > 0 ? (
            <div className="contact-actions">
              {profile.socialLinks.map((link) => <a href={link.href} key={link.label}>{link.label}</a>)}
            </div>
          ) : (
            <span className="contact-pending">No guessed addresses. No dead links.</span>
          )}
        </div>
      </div>
    </section>
  );
}

