import { sourceRepository } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function SourceLink() {
  return (
    <a
      className="source-link"
      href={sourceRepository.href}
      target="_blank"
      rel="noreferrer"
      aria-label="View portfolio source code on GitHub"
      data-cursor="interactive"
    >
      <SocialIcon label="GitHub" />
      <span>{sourceRepository.label}</span>
      <span className="source-link-external" aria-hidden="true">↗</span>
    </a>
  );
}
