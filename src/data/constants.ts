import type { IconType } from "react-icons";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiRobot2Fill } from "react-icons/ri";
import {
  SiAmazonaws,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNginx,
  SiNpm,
  SiOpenai,
  SiPostgresql,
  SiPrettier,
  SiPython,
  SiRadixui,
  SiRedis,
  SiSass,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion, TbChartLine } from "react-icons/tb";

export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VIM = "vim",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

/**
 * `shortDescription` renders on the 3D keycap plate when a key is pressed or hovered.
 * It's one of the first things a visitor reads, so it's written in Sebastian's voice.
 * the upstream template shipped these as internet slang.
 */
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Where it started. Still the shortest path to something a user can touch.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Types as documentation. Nine years of production code says it pays for itself.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantics first. Screen readers and crawlers both read what you actually wrote.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Layout stopped being the hard part. Grid and flexbox did that.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Components, state, and the discipline to keep both small.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription: "Reached for it on projects that wanted less ceremony.",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Routing, server components, and picking the render strategy per page.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "A design system that lives in the markup. Quick to write, quicker to change.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "APIs, workers, and the event-driven services under a live marketplace.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Routes and middleware. Not every service needs more than that.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "The system of record. Constraints in the database, not in hope.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "Right call for documents that genuinely don't have a shape yet.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Small commits, honest messages, diffs a reviewer can actually read.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Where the reviews, the CI, and the argument about naming all happen.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "Formatting should never cost a code review comment.",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Dependencies are liabilities. Take few, pin them, read the changelog.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Fast to start on. Know the exit cost before you build the business on it.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "Still runs a serious slice of the internet, whatever engineers say about it.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Where the services actually run, and where you go when the logs stop making sense.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Same image locally and in production, or it doesn't count as reproducible.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "Reverse proxy, TLS termination, and static files served properly.",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Where most of it is deployed. Read the bill every month.",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Used it for the data and ML side of things.",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "Muscle memory at this point. :wq",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Preview deploy on every pull request. Review the thing, not the description.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  /** Trimmed to 2-4 lines per role. A recruiter reads the first two. */
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 2,
    startDate: "May 2025",
    endDate: "Present",
    title: "Fleet Transportation Dispatcher & Operations",
    company: "C&S Wholesale Grocers",
    description: [
      "Own the daily delivery plan for a grocery network serving Winn-Dixie, Fresco y Más and Presidente.",
      "Match 90+ deliveries a day against available trucks, drivers and dock capacity.",
      "Hold 98% on-time performance against contract SLAs.",
      "Cut 40 minutes of dwell per load by redesigning how work enters the plan.",
      "Reduced inter-facility delays 35% and raised throughput 18% by reallocating routing and labor.",
      "Run the recurring operations review that keeps warehouse, receiving and transportation leads aligned on capacity, and on the downstream cost when a date moves.",
      "Write a root-cause analysis behind every repeat exception, so the same failure stops coming back.",
      "Hold operational records at 97%+ accuracy across integrated systems, so planning, billing and reporting all run off one dataset.",
    ],
    skills: [SkillNames.NODEJS, SkillNames.POSTGRES, SkillNames.DOCKER],
  },
  {
    id: 3,
    startDate: "Jul 2022",
    endDate: "Jul 2026",
    title: "Operations Technology Lead",
    company: "Ship AI",
    description: [
      "Built and launched an AI-native, commission-free freight marketplace on Next.js, React, TypeScript, Node.js and Python.",
      "Onboarded 300+ carrier companies representing 3,000+ trucks of capacity.",
      "Owned the money layer end to end: Stripe Connect payouts, billing and settlement flows.",
      "Designed the transaction data model behind carrier payments and shipper invoicing.",
      "Shipped AI copilots and agent workflows using LLMs, RAG, MCP integrations, tool calling and structured outputs.",
      "Automated document reading and exception triage, with a human review gate in front of every action taken.",
      "Let users run complex logistics work conversationally instead of through forms.",
      "Designed the capacity model that replaced deal-by-deal guesswork with one integrated forecast.",
      "Published that forecast on a fixed cadence against on-time rate, tender acceptance, dwell, cost per load and exception rate.",
      "Ran the real-time infrastructure underneath it: event-driven services, WebSockets and async processing.",
      "Owned the design system, CI/CD, Docker and cloud deployment.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
  {
    id: 4,
    startDate: "May 2024",
    endDate: "Jul 2025",
    title: "Senior Logistics Coordinator",
    company: "MCI Express Inc",
    description: [
      "Planned and locked capacity for multimillion-dollar concurrent programs including Carnival, Royal Caribbean and Ritz-Carlton.",
      "Committed against fixed vessel and delivery windows, where the plan had to be right the first time because it could not be re-cut.",
      "Ran the trade-off calls whenever a date or equipment tranche moved, deciding which program absorbed the slip and pushing the change to accounts the same day.",
      "Connected transportation platforms and carrier networks through REST and webhook APIs.",
      "Integrated EDI exchanges between carrier, broker and shipper systems.",
      "Built automated ETL pipelines that retired an entirely manual reporting cycle.",
      "Standardized reporting with SQL and BI dashboards.",
      "Used cost and performance data to find bottlenecks and support pricing and routing decisions.",
    ],
    skills: [SkillNames.NODEJS, SkillNames.POSTGRES, SkillNames.AWS],
  },
  {
    id: 5,
    startDate: "Jan 2020",
    endDate: "Mar 2024",
    title: "Founder & Software Engineer",
    company: "Dispatch 4 Now LLC",
    description: [
      "Founded and ran an operation that moved several million dollars in freight over four years.",
      "Owned capacity procurement, rate and contract negotiation, and the margin on every load.",
      "Built the internal system of record in TypeScript, React, Next.js, Node.js, Python, PostgreSQL and Redis.",
      "Covered dispatch, shipment lifecycle, route optimization and driver assignment: the software the business actually ran on.",
      "Shipped live dashboards for capacity planning, unit economics, anomaly detection and predictive reporting.",
      "Made daily pricing and allocation calls directly off those dashboards.",
      "Integrated carrier APIs, GPS and telematics providers and mapping services into one operational data platform, tracked in real time over WebSockets.",
      "Wrote the SOPs and training library that let the operation absorb new lanes and volume without adding headcount.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 6,
    startDate: "Jan 2017",
    endDate: "Dec 2019",
    title: "Bilingual Customer Service Representative",
    company: "Amazon",
    description: [
      "Supported Amazon's delivery network at scale against strict service-level targets, working the operational signals behind millions of package events.",
      "Traced data synchronization failures across internal platforms back to root cause, validating event consistency through the package lifecycle.",
      "Used internal dashboards and monitoring to diagnose delivery anomalies and correlate system events.",
      "Recognized as a top performer, working in English and Spanish across distributed teams.",
    ],
    skills: [SkillNames.AWS, SkillNames.LINUX],
  },
];

export const themeDisclaimers = {
  light: [
    "Light mode. Bold choice.",
    "Switching to light mode. Hope you're somewhere sunny.",
    "Light mode on. The dark side will be here when you get back.",
    "Fine. Light mode. Don't say I didn't warn you.",
    "Light mode engaged. Somewhere, a designer is nodding.",
  ],
  dark: [
    "Back to dark mode. Your retinas thank you.",
    "Dark mode. How was it out there in the light?",
    "Dark mode on. This is how it was meant to be read.",
    "Welcome back to the shadows.",
    "Dark mode restored. Equilibrium.",
  ],
};

export type About = {
  paragraphs: string[];
  facts: { label: string; value: string }[];
};

export const ABOUT: About = {
  paragraphs: [
    "I'm a software engineer who spends his days inside the operations he builds for. Nine years across logistics networks, freight marketplaces, and the planning systems behind them, writing the TypeScript in the morning and living with the consequences on the dispatch floor in the afternoon.",
    "That loop is the whole point. I design internal systems of record, data models, and AI-assisted automation, then I actually run on them. It tends to produce software that survives contact with a real operation, because the person who shipped it is also the person the pager wakes up.",
    "A lot of that work is where the money moves: Stripe Connect payouts, billing and settlement flows, and the unit economics underneath them. Running my own freight company for four years meant negotiating the rates, owning the margin, and then building the dashboard I made those calls from, so I read a P&L the same way I read a schema.",
    "Lately most of my work is AI-native: LLM and RAG pipelines, agent orchestration, and the ETL and API plumbing that keeps a system current without anyone keying it in by hand, always behind human review gates, because automation you can't audit isn't automation, it's a liability.",
  ],
  facts: [
    { label: "Based in", value: "Miami, FL" },
    { label: "Focus", value: "Full-stack + AI systems" },
    { label: "Experience", value: "9+ years" },
    { label: "Languages", value: "EN · ES · PT" },
  ],
};

export type Metric = {
  value: number;
  suffix: string;
  label: string;
};

/**
 * Five, not eight. A row that reads in one pass beats a grid that reads as decoration.
 */
export const IMPACT_METRICS: Metric[] = [
  { value: 98, suffix: "%", label: "On-time against contract SLAs" },
  { value: 3000, suffix: "+", label: "Trucks of capacity planned" },
  { value: 300, suffix: "+", label: "Carrier companies onboarded" },
  { value: 18, suffix: "%", label: "Throughput gain from workflow redesign" },
  { value: 9, suffix: "+", label: "Years running live operations" },
];

export type Capability = {
  title: string;
  items: string[];
};

/**
 * Rendered as a compact line-list, not a card grid. Breadth matters when applying
 * broadly; six pastel icon cards did not convey it.
 */
export const CAPABILITIES: Capability[] = [
  {
    title: "Software Engineering",
    items: ["TypeScript", "React & Next.js", "Node.js", "PostgreSQL", "System design"],
  },
  {
    title: "AI & Automation",
    items: ["LLM integration", "RAG pipelines", "Agent orchestration", "MCP", "Human review gates"],
  },
  {
    title: "Data & Systems of Record",
    items: ["SQL & data modeling", "ETL pipelines", "BI dashboards", "EDI", "TMS / WMS / ERP"],
  },
  {
    title: "Payments & Financial Systems",
    items: ["Stripe Connect", "Payouts & settlement", "Billing", "Reconciliation", "Transaction modeling"],
  },
  {
    title: "Commercial & Unit Economics",
    items: ["Rate negotiation", "Cost-per-unit analytics", "Margin & P&L", "Pricing strategy"],
  },
  {
    title: "Planning & Operations",
    items: ["Capacity forecasting", "Scenario modeling", "SOP design", "Risk escalation"],
  },
];

export type TechCategory = {
  title: string;
  /**
   * `color` is the vendor's official brand hex. Omit it for logos that are
   * themselves monochrome (Next.js, Vercel, GitHub, Express, Three.js, Radix,
   * Socket.io, OpenAI): those inherit `currentColor` so they flip with the theme
   * instead of vanishing into one of the two backgrounds.
   */
  items: { label: string; icon?: IconType; color?: string }[];
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { label: "Python", icon: SiPython, color: "#3776AB" },
      { label: "SQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "HTML", icon: SiHtml5, color: "#E34F26" },
      { label: "CSS", icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "React", icon: RiReactjsFill, color: "#61DAFB" },
      { label: "Next.js", icon: RiNextjsFill },
      { label: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
      { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { label: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
      { label: "GSAP", icon: SiGreensock, color: "#0BC93E" },
      { label: "Radix UI", icon: SiRadixui },
      { label: "shadcn/ui" },
      { label: "Sass", icon: SiSass, color: "#CC6699" },
      { label: "Three.js / Spline", icon: SiThreedotjs },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { label: "Node.js", icon: RiNodejsFill, color: "#5FA04E" },
      { label: "Express", icon: SiExpress },
      { label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { label: "Redis", icon: SiRedis, color: "#FF4438" },
      { label: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { label: "REST & webhooks", icon: TbApi, color: "var(--brand)" },
      { label: "WebSockets", icon: SiSocketdotio },
      { label: "Zod" },
      { label: "ETL pipelines" },
      { label: "EDI" },
    ],
  },
  {
    title: "AI Engineering",
    items: [
      { label: "LLM integration", icon: SiOpenai },
      { label: "RAG pipelines" },
      { label: "Agent orchestration", icon: RiRobot2Fill, color: "var(--brand)" },
      { label: "MCP" },
      { label: "Tool calling" },
      { label: "Structured outputs" },
      { label: "Embeddings" },
      { label: "Vector search" },
      { label: "Human review gates" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      { label: "AWS", icon: SiAmazonaws, color: "#FF9900" },
      { label: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { label: "Vercel", icon: SiVercel },
      { label: "Docker", icon: SiDocker, color: "#2496ED" },
      { label: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { label: "NginX", icon: SiNginx, color: "#009639" },
      { label: "Linux", icon: SiLinux, color: "#FCC624" },
      { label: "CI/CD" },
    ],
  },
  {
    title: "Finance & Business Systems",
    items: [
      { label: "Stripe Connect", icon: SiStripe, color: "#635BFF" },
      { label: "Payouts & settlement" },
      { label: "Billing & invoicing" },
      { label: "Reconciliation" },
      { label: "Unit economics", icon: TbChartLine, color: "var(--brand)" },
      { label: "BI & KPI dashboards" },
      { label: "Forecasting models" },
      { label: "TMS / WMS / ERP" },
    ],
  },
  {
    title: "Tooling & Practice",
    items: [
      { label: "Git", icon: SiGit, color: "#F05032" },
      { label: "GitHub", icon: SiGithub },
      { label: "npm", icon: SiNpm, color: "#CB3837" },
      { label: "Prettier", icon: SiPrettier, color: "#F7B93E" },
      { label: "WordPress", icon: SiWordpress, color: "#21759B" },
      { label: "System design" },
      { label: "Code review" },
    ],
  },
];

export type Credential = {
  title: string;
  org: string;
  period?: string;
  detail?: string;
};

export const CREDENTIALS: Credential[] = [
  {
    title: "B.S. Computer Science",
    org: "University of the People",
    period: "2021 to 2024",
    detail: "Relational database systems, data analysis, and applied AI/LLM engineering.",
  },
  {
    title: "NVIDIA Inception",
    org: "Member",
    detail: "Startup program for AI and accelerated-computing companies.",
  },
  {
    title: "AWS Activate",
    org: "Member",
    detail: "Cloud infrastructure credits and technical enablement program.",
  },
  {
    title: "Languages",
    org: "Fluent",
    detail: "English, Spanish, and Portuguese.",
  },
];
