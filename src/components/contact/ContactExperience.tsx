"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { profile } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

type ContactState = "idle" | "typing" | "done";

export function ContactExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<ContactState>("idle");

  useEffect(() => {
    if (reduceMotion || !rootRef.current) return;

    const root = rootRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasStarted.current) return;
      hasStarted.current = true;
      setState("typing");
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(root);
    return () => observer.disconnect();
  }, [reduceMotion]);

  useEffect(() => {
    if (state !== "typing") return;
    const timeout = window.setTimeout(() => setState("done"), 800);
    return () => window.clearTimeout(timeout);
  }, [state]);

  const showTyping = state === "typing";

  return (
    <div ref={rootRef} className="contact-conversation">
      <div className="chat outgoing">how do i actually reach you?</div>
      {showTyping && (
        <div className="chat incoming typing-bubble" aria-hidden="true">
          <i /><i /><i />
        </div>
      )}
      <div className={`chat incoming contact-response${showTyping ? " is-waiting" : ""}`}>
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
    </div>
  );
}
