import type { LucideIcon } from "lucide-react";
import {
  Award,
  Boxes,
  Brain,
  Briefcase,
  CalendarClock,
  CandlestickChart,
  ClipboardCheck,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Gauge,
  GraduationCap,
  Languages,
  Layers,
  LineChart,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Timer,
  TrendingUp,
  Truck,
  Users,
  Wallet,
} from "lucide-react";
import type { IconType } from "react-icons";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, RiRobot2Fill } from "react-icons/ri";
import {
  SiAmazonaws,
  SiDocker,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiRedis,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

// thoda zada ts ho gya idhar
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
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "utility classes hitting different fr fr 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL but make it fashion, purr 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription: "making your code not a whole mess, thank u next 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "always extra, making everything more complicated, period! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "Google Cloud",
    shortDescription:
      "cloud computing but make it Google vibes, living rent free! ☁️🔥",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
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
      "Own the daily delivery plan for a grocery network serving Winn-Dixie, Fresco y Más, and Presidente — 90+ deliveries a day matched against available trucks, drivers, and dock capacity, held at 98% on-time against contract SLAs.",
      "Redesigned how work enters the plan. Cut 40 minutes of dwell per load, reduced inter-facility delays 35%, and raised throughput 18% by reallocating routing and labor.",
      "Run the recurring operations review that keeps warehouse, receiving, and transportation leads aligned on capacity and on the downstream cost when a date moves, with a root-cause writeup behind every repeat exception.",
      "Hold operational records at 97%+ accuracy across integrated systems so planning, billing, and reporting all run off one dataset.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 3,
    startDate: "Jul 2022",
    endDate: "Jul 2026",
    title: "Operations Technology Lead",
    company: "Ship AI",
    description: [
      "Built and launched an AI-native, commission-free freight marketplace on Next.js, React, TypeScript, Node.js, and Python — onboarding 300+ carrier companies representing 3,000+ trucks.",
      "Owned the money layer end to end: Stripe Connect payouts, billing and settlement flows, and the transaction data model behind carrier payments and shipper invoicing.",
      "Shipped AI copilots and agent workflows — LLMs, RAG, MCP integrations, tool calling, structured outputs — that read documents, triaged exceptions, and let users run complex logistics work conversationally, always behind human review.",
      "Designed the capacity model that replaced deal-by-deal guesswork with one integrated forecast, published on a fixed cadence against on-time rate, tender acceptance, dwell, cost per load, and exception rate.",
      "Ran the real-time infrastructure underneath it — event-driven services, WebSockets, async processing — plus the design system, CI/CD, Docker, and cloud deployment.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.DOCKER,
      SkillNames.AWS,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 4,
    startDate: "May 2024",
    endDate: "Jul 2025",
    title: "Senior Logistics Coordinator",
    company: "MCI Express Inc",
    description: [
      "Planned and locked capacity for multimillion-dollar concurrent programs (Carnival, Royal Caribbean, Ritz-Carlton) against fixed vessel and delivery windows, where commitments had to be made early and could not be re-cut.",
      "Ran the trade-off calls whenever a date or equipment tranche moved: reassessed the plan, decided which program absorbed the slip, and pushed the change to accounts the same day.",
      "Connected transportation platforms and carrier networks through REST and webhook APIs, EDI exchanges, and automated ETL pipelines, retiring an entirely manual reporting cycle.",
      "Standardized reporting with SQL and BI dashboards, using cost and performance data to find bottlenecks and support pricing and routing decisions.",
    ],
    skills: [
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.MONGODB,
      SkillNames.AWS,
    ],
  },
  {
    id: 5,
    startDate: "Jan 2020",
    endDate: "Mar 2024",
    title: "Founder & Software Engineer",
    company: "Dispatch 4 Now LLC",
    description: [
      "Founded and ran an operation that moved several million dollars in freight over four years, owning capacity procurement, rate and contract negotiation, and the margin on every load.",
      "Built the internal system of record (TypeScript, React, Next.js, Node.js, Python, PostgreSQL, Redis) covering dispatch, shipment lifecycle, route optimization, and driver assignment — the software the business actually ran on.",
      "Shipped live dashboards for capacity planning, unit economics, anomaly detection, and predictive reporting, and made daily pricing and allocation calls from them.",
      "Integrated carrier APIs, GPS and telematics providers, and mapping services into one operational data platform with real-time tracking over WebSockets.",
      "Wrote the SOPs and training library that let the operation absorb new lanes and volume without adding headcount.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
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
      "Used internal dashboards and monitoring to diagnose delivery anomalies, correlate system events, and shorten incident resolution.",
      "Recognized as a top performer, working in English and Spanish across distributed teams.",
    ],
    skills: [SkillNames.AWS, SkillNames.LINUX],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};



export type About = {
  paragraphs: string[];
  facts: { label: string; value: string; icon: LucideIcon }[];
};

export const ABOUT: About = {
  paragraphs: [
    "I'm a software engineer who spends his days inside the operations he builds for. Nine years across logistics networks, freight marketplaces, and the planning systems behind them — writing the TypeScript in the morning and living with the consequences on the dispatch floor in the afternoon.",
    "That loop is the whole point. I design internal systems of record, data models, and AI-assisted automation, then I actually run on them. It tends to produce software that survives contact with a real operation, because the person who shipped it is also the person the pager wakes up.",
    "A lot of that work is where the money moves: Stripe Connect payouts, billing and settlement flows, and the unit economics underneath them. Running my own freight company for four years meant negotiating the rates, owning the margin, and then building the dashboard I made those calls from — so I read a P&L the same way I read a schema.",
    "Lately most of my work is AI-native: LLM and RAG pipelines, agent orchestration, and the ETL and API plumbing that keeps a system current without anyone keying it in by hand — always behind human review gates, because automation you can't audit isn't automation, it's a liability.",
  ],
  facts: [
    { label: "Based in", value: "Miami, FL", icon: MapPin },
    { label: "Focus", value: "Full-stack + AI systems", icon: Target },
    { label: "Experience", value: "9+ years", icon: Briefcase },
    { label: "Off the clock", value: "Markets & investing", icon: CandlestickChart },
  ],
};

export type Metric = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

export const IMPACT_METRICS: Metric[] = [
  { value: 98, suffix: "%", label: "On-time vs. contract SLAs", icon: ShieldCheck },
  { value: 18, suffix: "%", label: "Throughput increase from workflow redesign", icon: TrendingUp },
  { value: 35, suffix: "%", label: "Reduction in inter-facility delays", icon: Timer },
  { value: 3000, suffix: "+", label: "Trucks of capacity planned", icon: Truck },
  { value: 300, suffix: "+", label: "Carrier companies onboarded", icon: Users },
  { value: 90, suffix: "+", label: "Deliveries dispatched daily", icon: Gauge },
  { value: 97, suffix: "%+", label: "Data accuracy across integrated systems", icon: Database },
  { value: 9, suffix: "+", label: "Years running live operations", icon: CalendarClock },
];

export type Capability = {
  title: string;
  blurb: string;
  items: string[];
  icon: LucideIcon;
  accent: string;
};

export const CAPABILITIES: Capability[] = [
  {
    title: "Software Engineering",
    blurb:
      "End-to-end product work, from schema to shipped interface — the systems teams run their day out of.",
    items: [
      "TypeScript",
      "React & Next.js",
      "Node.js",
      "PostgreSQL",
      "REST & webhook APIs",
      "System design",
    ],
    icon: Code2,
    accent: "sky",
  },
  {
    title: "AI & Automation",
    blurb:
      "Applied AI that does real work: reads the documents, triages the exceptions, and keeps a human in the loop.",
    items: [
      "LLM integration",
      "RAG pipelines",
      "Agent orchestration",
      "MCP integrations",
      "Document processing",
      "Human review gates",
    ],
    icon: Sparkles,
    accent: "violet",
  },
  {
    title: "Data & Systems of Record",
    blurb:
      "One dataset everyone plans from, plus the pipelines and integrations that keep it honest.",
    items: [
      "SQL & data modeling",
      "KPI / BI dashboards",
      "ETL pipelines",
      "EDI",
      "TMS / WMS / ERP",
      "Telematics platforms",
    ],
    icon: Database,
    accent: "cyan",
  },
  {
    title: "Payments & Financial Systems",
    blurb:
      "The money layer: getting funds to the right party, on time, with a reconciliation trail behind every cent.",
    items: [
      "Stripe Connect",
      "Payouts & settlement",
      "Billing & invoicing",
      "Reconciliation",
      "Transaction modeling",
      "Financial reporting",
    ],
    icon: CreditCard,
    accent: "emerald",
  },
  {
    title: "Commercial & Unit Economics",
    blurb:
      "Knowing what a unit costs, what it should cost, and which lever actually moves the margin.",
    items: [
      "Rate & contract negotiation",
      "Cost-per-unit analytics",
      "Margin & P&L ownership",
      "Budget planning",
      "Financial scenario modeling",
      "Pricing strategy",
    ],
    icon: TrendingUp,
    accent: "amber",
  },
  {
    title: "Planning & Operations",
    blurb:
      "The operator half: forecasting capacity, running the trade-off calls, and designing the process that holds.",
    items: [
      "Capacity forecasting",
      "Scenario modeling",
      "Process & SOP design",
      "Cross-functional execution",
      "Risk escalation",
      "Continuous improvement",
    ],
    icon: ClipboardCheck,
    accent: "rose",
  },
];

export type TechCategory = {
  title: string;
  icon: LucideIcon;
  accent: string;
  items: { label: string; icon?: IconType | LucideIcon }[];
};

export const TECH_STACK: TechCategory[] = [
  {
    title: "Languages & Query",
    icon: Terminal,
    accent: "sky",
    items: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "JavaScript", icon: SiJavascript },
      { label: "Python", icon: SiPython },
      { label: "SQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    accent: "violet",
    items: [
      { label: "React", icon: RiReactjsFill },
      { label: "Next.js", icon: RiNextjsFill },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "Framer Motion", icon: TbBrandFramerMotion },
      { label: "Radix UI", icon: SiRadixui },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    accent: "cyan",
    items: [
      { label: "Node.js", icon: RiNodejsFill },
      { label: "PostgreSQL", icon: SiPostgresql },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Redis", icon: SiRedis },
      { label: "REST & webhooks", icon: TbApi },
      { label: "EDI" },
    ],
  },
  {
    title: "AI Engineering",
    icon: Brain,
    accent: "fuchsia",
    items: [
      { label: "LLM integration", icon: SiOpenai },
      { label: "RAG pipelines" },
      { label: "Agent orchestration", icon: RiRobot2Fill },
      { label: "MCP" },
      { label: "Embeddings" },
      { label: "Vector search" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    accent: "orange",
    items: [
      { label: "AWS", icon: SiAmazonaws },
      { label: "Google Cloud", icon: SiGooglecloud },
      { label: "Docker", icon: SiDocker },
      { label: "Kubernetes", icon: SiKubernetes },
      { label: "Vercel", icon: SiVercel },
      { label: "CI/CD" },
    ],
  },
  {
    title: "Finance & Business Systems",
    icon: Wallet,
    accent: "emerald",
    items: [
      { label: "Stripe Connect", icon: SiStripe },
      { label: "Billing & settlement" },
      { label: "Unit economics", icon: LineChart },
      { label: "BI & KPI dashboards" },
      { label: "TMS / WMS / ERP", icon: Boxes },
      { label: "Forecasting models" },
    ],
  },
];

export type Credential = {
  title: string;
  org: string;
  period?: string;
  detail?: string;
  icon: LucideIcon;
};

export const CREDENTIALS: Credential[] = [
  {
    title: "B.S. Computer Science",
    org: "University of the People",
    period: "2021 - 2024",
    detail:
      "Relational database systems, data analysis, and applied AI/LLM engineering.",
    icon: GraduationCap,
  },
  {
    title: "NVIDIA Inception",
    org: "Member",
    detail: "Startup program for AI and accelerated-computing companies.",
    icon: Award,
  },
  {
    title: "AWS Activate",
    org: "Member",
    detail: "Cloud infrastructure credits and technical enablement program.",
    icon: Cloud,
  },
  {
    title: "Cloud & Infrastructure",
    org: "Self-directed",
    detail: "AWS, GCP, Docker, and Kubernetes for LLM, RAG, and agent workloads.",
    icon: Server,
  },
  {
    title: "Languages",
    org: "Fluent",
    detail: "English, Spanish, and Portuguese.",
    icon: Languages,
  },
];
