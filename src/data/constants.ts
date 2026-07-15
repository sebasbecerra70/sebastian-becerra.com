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
    id: 1,
    startDate: "Mar 2026",
    endDate: "Present",
    title: "Video Creator & AI Specialist",
    company: "G Luxe Jewelers",
    description: [
      "Manage day-to-day social media presence across Instagram, TikTok, Facebook, and related platforms, planning content calendars and keeping the brand voice consistent for a luxury jewelry audience.",
      "Create and edit short-form Reels, TikToks, and Stories that showcase product drops, styling looks, behind-the-scenes moments, and promotional campaigns designed to drive engagement and conversions.",
      "Produce polished photo and video posts for feed, Stories, and ads — including cuts, color, captions, transitions, music, and platform-native formatting optimized for each channel.",
      "Leverage AI tools for marketing campaigns: script ideation, caption writing, hook testing, visual concept generation, thumbnail variants, and A/B copy to accelerate content production without losing brand quality.",
      "Build AI-assisted creative workflows for campaign launches — from brief to publish — reducing turnaround time on promotional assets while keeping messaging on-brand across channels.",
      "Track performance analytics (reach, watch time, saves, shares, CTR) and iterate on formats, posting cadence, and creative angles to grow audience engagement and support sales goals.",
      "Coordinate with owners and sales teams to align social content with promotions, new collections, and seasonal campaigns so marketing stays tightly coupled to store priorities.",
    ],
    skills: [],
  },
  {
    id: 2,
    startDate: "May 2025",
    endDate: "Present",
    title: "Fleet Transportation Dispatcher & Operations",
    company: "C&S Wholesale Grocers",
    description: [
      "System Reliability & Monitoring: Served as primary monitor for daily supply chain uptime across distributed fleet networks, maintaining a 98% on-time delivery rate for Tier-1 partners (Fresco y Mas, Presidente, Winn-Dixie). Applied proactive system monitoring, GPS/telematics tracking, and automated alerting to identify and resolve operational bottlenecks before customer impact.",
      "Workflow Optimization: Analyzed routing data and optimized dispatch workflows for 90+ daily deliveries, increasing throughput by 18% through iterative process refinement, algorithmic resource allocation, and route optimization logic. Used performance dashboards and reporting tools to benchmark efficiency metrics and surface actionable insights.",
      "Data Integrity & Compliance: Managed mission-critical operational data (BOLs, POs, ELD logs) within Transportation Management Systems (TMS) and integrated databases, maintaining 97%+ data accuracy across synchronized platforms. Ensured full regulatory compliance, audit readiness, and structured data governance.",
      "Cross-functional Engineering Collaboration: Partnered with warehouse, receiving, and technical teams to diagnose system lag and workflow inefficiencies using root-cause analysis, reducing inter-facility delays by 35% and cutting average latency (dock time) by 40 minutes per load. Supported process automation, API-driven data handoffs, and cross-platform integrations.",
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
    title: "Full-Stack Software Engineer",
    company: "Ship AI",
    description: [
      "Architected and launched an AI-native, commission-free freight marketplace connecting shippers and carriers through scalable cloud infrastructure and AI-powered workflow automation.",
      "Designed and developed the core platform using Next.js, React, TypeScript, Node.js, and Python, delivering high-performance, real-time applications focused on scalability, reliability, and developer experience.",
      "Built AI-powered operational workflows leveraging LLMs, Retrieval-Augmented Generation (RAG), agentic architectures, and Model Context Protocol (MCP) integrations to automate document processing, load management, customer support, and operational decision-making.",
      "Engineered AI copilots capable of natural language interactions, structured outputs, tool calling, and contextual reasoning, enabling users to execute complex logistics workflows conversationally.",
      "Developed secure API-first backend services and integrated Stripe Connect, third-party logistics providers, mapping services, and enterprise APIs to orchestrate payments, shipment execution, and real-time operational data.",
      "Implemented event-driven architectures, asynchronous processing, WebSockets, and real-time state synchronization to power live shipment tracking, fleet visibility, notifications, and operational monitoring.",
      "Built reusable design systems and component libraries using Tailwind CSS, Radix UI, and modern frontend patterns, accelerating product development while maintaining accessibility and consistency.",
      "Applied modern AI engineering practices including prompt engineering, semantic search, vector embeddings, AI workflow orchestration, observability, CI/CD, Docker, GitHub Actions, and cloud-native deployment.",
      "Led product strategy, architecture, and rapid iteration from MVP to production, onboarding 300+ carrier companies representing +3,000 trucks while shipping AI-driven features based on customer feedback and operational analytics.",
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
      "Managed enterprise logistics technology ecosystems supporting Tier-1 clients including Carnival, Royal Caribbean, and Ritz-Carlton, operating mission-critical transportation workflows through integrated TMS, ELD, GPS/telematics, fleet management, and IoT-enabled tracking platforms.",
      "Designed and maintained digital logistics workflows across distributed systems, improving shipment lifecycle management, carrier coordination, and real-time operational visibility using cloud-based architectures.",
      "Integrated transportation platforms, carrier networks, and internal systems through API-driven workflows, REST/webhook integrations, EDI exchanges, JSON/XML data structures, and automated ETL pipelines, improving system interoperability.",
      "Used SQL, relational databases, BI dashboards, and KPI monitoring to identify performance bottlenecks, optimize routing algorithms, and support data-driven decision-making.",
      "Managed high-volume operational data flows across TMS, ELD, and GPS systems while maintaining data integrity, synchronization, observability, and workflow reliability across cloud and on-prem environments.",
      "Built automation frameworks using no-code/low-code platforms (Make.com, Zapier) and API integrations to streamline shipment updates, compliance documentation, exception handling, and reporting workflows.",
      "Applied systems engineering principles including workflow orchestration, event-driven architecture, real-time data processing, system monitoring, and scalable infrastructure design to strengthen logistics operations.",
      "Partnered with engineers, technical teams, and operations leaders to translate business requirements into scalable technology solutions, automation pipelines, and internal tooling.",
      "Developed hands-on expertise in AI-ready enterprise systems, including intelligent automation, predictive analytics, LLMs, AI copilots, semantic search, vector databases, embeddings, RAG, and AI agents.",
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
    title: "Software Engineer",
    company: "Dispatch 4 Now LLC",
    description: [
      "Architected and developed an AI-ready internal dispatch platform that modernized logistics operations through intelligent workflow automation, real-time fleet orchestration, and centralized operational intelligence.",
      "Designed and shipped production-grade full-stack applications using TypeScript, React, Next.js, Node.js, Python, PostgreSQL, and Redis, following API-first architecture and cloud-native development practices.",
      "Built scalable backend services to automate dispatching, shipment lifecycle management, route optimization, driver assignment, and event-driven operational workflows, reducing manual coordination across the organization.",
      "Implemented real-time data synchronization using WebSockets and asynchronous processing, enabling live shipment tracking, operational monitoring, intelligent alerting, and low-latency system updates.",
      "Integrated carrier APIs, GPS/telematics providers, mapping services, and third-party enterprise systems to create a unified operational data platform with high reliability and data consistency.",
      "Developed internal analytics dashboards featuring live KPIs, operational insights, capacity planning, anomaly detection, and predictive reporting to support data-driven decision making.",
      "Designed the platform with AI-native architecture, enabling future integration of LLM-powered copilots, agentic workflows, RAG, MCP, semantic search, structured outputs, and intelligent workflow automation.",
      "Applied modern software engineering practices including distributed systems design, event-driven architecture, CI/CD, Docker, GitHub Actions, observability, OpenTelemetry, automated testing, feature flags, and continuous performance optimization.",
      "Partnered with cross-functional teams to rapidly deliver production software, transforming complex operational requirements into scalable, resilient, and developer-friendly systems built for long-term growth and AI-driven innovation.",
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
      "Operated within Amazon's large-scale, cloud-native logistics ecosystem, supporting high-throughput operational workflows and real-time shipment visibility across globally distributed carrier networks.",
      "Investigated complex data synchronization issues across multiple internal platforms, validating event consistency and ensuring accurate state transitions throughout the package lifecycle.",
      "Analyzed real-time operational signals to identify delivery anomalies, resolve workflow bottlenecks, and maintain high platform reliability under strict service-level objectives (SLOs).",
      "Collaborated across cross-functional operational and technical teams to improve workflow efficiency, enhance data quality, and optimize end-to-end customer experience using data-driven decision making.",
      "Worked extensively with internal dashboards, operational analytics, and monitoring systems to diagnose failures, correlate system events, and accelerate incident resolution.",
      "Maintained accurate operational documentation and audit trails, ensuring data integrity, traceability, and consistent knowledge sharing across distributed teams.",
      "Thrived in a high-scale, fast-paced environment built around operational excellence, continuous improvement, and iterative process optimization.",
      "Strengthened expertise in systems thinking, distributed operations, observability, incident response, and large-scale platform workflows while supporting millions of package lifecycle events.",
    ],
    skills: [
      SkillNames.AWS,
      SkillNames.LINUX,
    ],
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

