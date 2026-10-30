import { templateDownload } from "@/content/site";

export function TemplateDownload() {
  return (
    <a
      className="template-download"
      href={templateDownload.href}
      target="_blank"
      rel="noreferrer"
      aria-label="View or clone the hienlnt portfolio repository on GitHub"
      data-cursor="interactive"
    >
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2.5v9m-3.5-3 3.5 3.5 3.5-3.5M3.5 14v3h13v-3" />
      </svg>
      <span>{templateDownload.label}</span>
    </a>
  );
}
