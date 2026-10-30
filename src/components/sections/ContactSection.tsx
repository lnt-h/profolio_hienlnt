import { profile } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function ContactSection() {
  return (
    <section id="contact" className="contact section-light" data-theme="light">
      <div className="contact-inner">
        <p className="section-eyebrow">Contact</p>
        <div className="chat outgoing">how do i actually reach you?</div>
        <div className="chat incoming">
          <p>Verified contact links are being prepared.</p>
          <div className="contact-actions" aria-label="Contact channels">
            {profile.contactChannels.map((channel) => channel.status === "available" && channel.href ? (
              <a href={channel.href} key={channel.label} aria-label={channel.label}>
                <SocialIcon label={channel.label} />
                <span>{channel.label}</span>
              </a>
            ) : (
              <span className="contact-action is-pending" key={channel.label} aria-label={`${channel.label} link coming soon`} aria-disabled="true">
                <SocialIcon label={channel.label} />
                <span>{channel.label}</span>
              </span>
            ))}
          </div>
          <span className="contact-pending">Official links coming soon.</span>
        </div>
      </div>
    </section>
  );
}

