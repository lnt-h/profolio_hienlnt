import { profile } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function ContactExperience() {
  return (
    <div className="contact-conversation">
      <div className="chat outgoing">how do i actually reach you?</div>
      <div className="chat incoming contact-response">
        <p>Easiest is email—or pick whatever works below.</p>
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
        <span className="contact-pending">LinkedIn coming soon.</span>
      </div>
      <div className="chat outgoing typing-bubble reply-wait" aria-hidden="true">
        <i /><i /><i />
      </div>
    </div>
  );
}
