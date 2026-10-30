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

export type SourceRepository = {
  label: string;
  mobileLabel: string;
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
  group: "software" | "engineering" | "devops" | "cloud";
  icon: string;
  context: string;
  position: { x: number; y: number };
  accent: "gold" | "cyan" | "violet" | "orange";
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

export type SpotifyTrack = {
  title: string;
  artist: string;
  externalUrl: string;
  embedUrl: string;
};

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

export const sourceRepository: SourceRepository = {
  label: "View source",
  mobileLabel: "Source on GitHub",
  href: "https://github.com/lnt-h/profolio_hienlnt",
};

export const spotifyTrack: SpotifyTrack = {
  title: "As It Was",
  artist: "Harry Styles",
  externalUrl: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e",
  embedUrl: "https://open.spotify.com/embed/track/4Dvkj6JhhA12EX05fT7y2e",
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
    image: "/images/gonarra-app.png",
    brandColor: "linear-gradient(145deg, #182232 0%, #0e1624 50%, #151d2a 100%)",
    links: [
      { label: "GitHub Repository", href: "https://github.com/lnt-h/fyp_dana" },
      { label: "Figma Prototype", href: "https://www.figma.com/design/JvXw7rVf5KxoA6LlDJEqAt/Tourguide-app-UI" },
    ],
  },
];

// Owner-confirmed software, delivery, and cloud inventory.
export const skills: readonly Skill[] = [
  { id: "typescript", name: "TypeScript", group: "software", icon: "TS", context: "Type-safe application development", position: { x: 9, y: 17 }, accent: "cyan" },
  { id: "react", name: "React", group: "software", icon: "R", context: "Component-driven interfaces", position: { x: 25, y: 47 }, accent: "cyan" },
  { id: "next", name: "Next.js", group: "software", icon: "N", context: "Full-stack web applications", position: { x: 31, y: 11 }, accent: "cyan" },
  { id: "node", name: "Node.js", group: "software", icon: "JS", context: "Server-side JavaScript runtime", position: { x: 12, y: 62 }, accent: "cyan" },
  { id: "git", name: "Git", group: "engineering", icon: "G", context: "Version control and collaboration", position: { x: 45, y: 36 }, accent: "violet" },
  { id: "linux", name: "Linux", group: "engineering", icon: "L", context: "Development and server environment", position: { x: 48, y: 67 }, accent: "violet" },
  { id: "docker", name: "Docker", group: "devops", icon: "D", context: "Containerized delivery", position: { x: 62, y: 13 }, accent: "orange" },
  { id: "cicd", name: "CI/CD", group: "devops", icon: "CI", context: "Automated build and delivery workflows", position: { x: 66, y: 54 }, accent: "orange" },
  { id: "nginx", name: "Nginx", group: "devops", icon: "NX", context: "Web serving and reverse proxy", position: { x: 78, y: 27 }, accent: "orange" },
  { id: "aws", name: "AWS", group: "cloud", icon: "AWS", context: "Cloud platform fundamentals", position: { x: 86, y: 58 }, accent: "gold" },
];

export const navigation: readonly NavigationItem[] = [
  { label: "Home", href: "#home", matchSectionIds: ["home"] },
  { label: "About", href: "#about", matchSectionIds: ["about"] },
  { label: "Projects", href: "#projects", matchSectionIds: ["projects"] },
  { label: "More", href: "#skills", matchSectionIds: ["skills", "more"], parentMenu: "more" },
  { label: "Contact", href: "#contact", matchSectionIds: ["contact"] },
];

