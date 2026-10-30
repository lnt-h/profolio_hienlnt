export type Availability = "available" | "unavailable" | "empty" | "error";

export type SocialLink = {
  label: "Email" | "GitHub" | "LinkedIn";
  href: string;
};

export type Profile = {
  fullName: string;
  displayName: string;
  role: string;
  eyebrow: string;
  statement: readonly [string, string, string];
  shortBio: string;
  principle: string;
  socialLinks: readonly SocialLink[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: readonly string[];
  status: "In progress" | "Completed";
  image?: string;
  links: readonly { label: string; href: string }[];
};

export type Skill = {
  id: string;
  name: string;
  group: string;
  icon: string;
  context: string;
};

export type NavigationItem = {
  label: string;
  href: `#${string}`;
  matchSectionIds: readonly string[];
  parentMenu?: "more";
};

export type IntegrationState<T> =
  | { status: "available"; data: T }
  | { status: Exclude<Availability, "available">; message: string };

export const profile: Profile = {
  fullName: "Lê Ngọc Tân Hiền",
  displayName: "Hien Le",
  role: "Software Engineer",
  eyebrow: "$ whoami — Hien Le / Software Engineer",
  statement: ["I BUILD", "REAL-WORLD", "SOFTWARE."],
  shortBio:
    "I care about building software that solves real problems, with thoughtful engineering and a clear product purpose.",
  principle: "Useful software starts with clear decisions.",
  socialLinks: [],
};

export const projects: readonly Project[] = [];

// These labels describe the technology used to build this portfolio itself.
// Replace or extend only when the owner supplies a verified personal skill inventory.
export const skills: readonly Skill[] = [
  { id: "next", name: "Next.js", group: "Portfolio stack", icon: "N", context: "Application framework" },
  { id: "react", name: "React", group: "Portfolio stack", icon: "R", context: "Interface composition" },
  { id: "typescript", name: "TypeScript", group: "Portfolio stack", icon: "TS", context: "Strict typed source" },
  { id: "tailwind", name: "Tailwind CSS", group: "Portfolio stack", icon: "TW", context: "Responsive styling" },
  { id: "motion", name: "Motion", group: "Portfolio stack", icon: "M", context: "Accessible interaction" },
];

export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "#home", matchSectionIds: ["home"] },
  { label: "About", href: "#about", matchSectionIds: ["about"] },
  { label: "Projects", href: "#projects", matchSectionIds: ["projects"] },
  { label: "More", href: "#skills", matchSectionIds: ["skills", "more"], parentMenu: "more" },
  { label: "Contact", href: "#contact", matchSectionIds: ["contact"] },
];

export const githubState = {
  status: "unavailable",
  message: "A verified GitHub profile has not been connected yet.",
} satisfies IntegrationState<never>;

