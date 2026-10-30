export type Availability = "available" | "unavailable" | "empty" | "error";

export type ContactChannel = {
  label: "Email" | "GitHub" | "LinkedIn";
  href?: string;
  status: "available" | "pending";
};

export type Portrait = {
  src: string;
  alt: string;
  objectPosition: string;
  mobileObjectPosition: string;
};

export type TemplateDownload = {
  label: string;
  href: string;
};

export type Profile = {
  fullName: string;
  displayName: string;
  role: string;
  availabilityStatus?: string;
  eyebrow: string;
  statement: readonly [string, string, string];
  shortBio: string;
  principle: string;
  portrait: Portrait;
  contactChannels: readonly ContactChannel[];
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: readonly string[];
  status: "In progress" | "Completed";
  image?: string;
  brandColor?: string;
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
  availabilityStatus: "Open to Software Engineer / Intern Opportunities",
  eyebrow: "$ whoami — Hien Le / Software Engineer",
  statement: ["I BUILD", "REAL-WORLD", "SOFTWARE."],
  shortBio:
    "I care about building software that solves real problems, with thoughtful engineering and a clear product purpose.",
  principle: "Useful software starts with clear decisions.",
  portrait: {
    src: "/images/hien-portrait.jpg",
    alt: "Portrait of Hien Le",
    objectPosition: "78% 50%",
    mobileObjectPosition: "82% 50%",
  },
  contactChannels: [
    { label: "Email", href: "mailto:lengoctanhien090@gmail.com", status: "available" },
    { label: "GitHub", href: "https://github.com/lnt-h", status: "available" },
    { label: "LinkedIn", status: "pending" },
  ],
};

export const templateDownload: TemplateDownload = {
  label: "Download template",
  href: "https://github.com/lnt-h/profolio_hienlnt",
};

export const projects: readonly Project[] = [
  {
    id: "gonarra",
    title: "Gonarra — Audio-first Tour Guide in Da Nang",
    summary:
      "A location-aware, audio-first mobile companion for international visitors to discover Da Nang through curated walking stops, local cultural stories, and authentic experiences. Built as my final year engineering project.",
    role: "Solo Mobile & Product Engineer (Final Year Project)",
    stack: ["React Native", "Expo Router", "TypeScript", "Clerk Auth"],
    status: "In progress",
    image: "/images/gonarra-full.png",
    brandColor: "linear-gradient(145deg, #18191c 0%, #0d0e11 100%)",
    links: [
      { label: "GitHub Repository", href: "https://github.com/lnt-h/fyp_dana" },
      { label: "Figma Prototype", href: "https://www.figma.com/design/JvXw7rVf5KxoA6LlDJEqAt/Tourguide-app-UI" },
    ],
  },
];

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

