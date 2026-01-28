import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiPostgresql,
  SiPython,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  shadcn: {
    title: "shadcn/ui",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  summary: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  live: string;
};

const projects: Project[] = [
  {
    id: "orion-forecast",
    category: "AI & ML",
    title: "Orion Demand Forecasting",
    summary: "ML-powered demand forecasting platform for supply chain optimization",
    src: `${BASE_PATH}/orion-forecast/cover.svg`,
    screenshots: ["cover.svg", "overview.svg", "insights.svg", "workflow.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres, PROJECT_SKILLS.node],
    },
    content: (
      <div className="flex flex-col gap-4">
        <TypographyH3>Orion Demand Forecasting</TypographyH3>
        <TypographyP>
          An AI-powered platform leveraging machine learning algorithms to predict product demand with 94% accuracy. Built for enterprise supply chain teams to optimize inventory levels and reduce overstock costs.
        </TypographyP>
        <SlideShow
          images={["cover.svg", "overview.svg", "insights.svg", "workflow.svg"].map(
            (img) => `${BASE_PATH}/orion-forecast/${img}`
          )}
        />
      </div>
    ),
    live: "",
  },
  {
    id: "ledgerflow",
    category: "Finance",
    title: "LedgerFlow",
    summary: "Real-time financial tracking and analytics dashboard",
    src: `${BASE_PATH}/ledgerflow/cover.svg`,
    screenshots: ["cover.svg", "overview.svg", "insights.svg", "workflow.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    content: (
      <div className="flex flex-col gap-4">
        <TypographyH3>LedgerFlow</TypographyH3>
        <TypographyP>
          A comprehensive financial tracking platform with real-time analytics, automated categorization, and intelligent spending insights. Designed for SMBs and freelancers to manage finances effortlessly.
        </TypographyP>
        <SlideShow
          images={["cover.svg", "overview.svg", "insights.svg", "workflow.svg"].map(
            (img) => `${BASE_PATH}/ledgerflow/${img}`
          )}
        />
      </div>
    ),
    live: "",
  },
  {
    id: "routepulse",
    category: "Supply Chain",
    title: "RoutePulse",
    summary: "Intelligent route optimization for logistics networks",
    src: `${BASE_PATH}/routepulse/cover.svg`,
    screenshots: ["cover.svg", "overview.svg", "insights.svg", "workflow.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    content: (
      <div className="flex flex-col gap-4">
        <TypographyH3>RoutePulse</TypographyH3>
        <TypographyP>
          An intelligent route optimization engine that uses advanced algorithms to minimize delivery time and fuel costs. Real-time tracking and dynamic rerouting for logistics companies of any size.
        </TypographyP>
        <SlideShow
          images={["cover.svg", "overview.svg", "insights.svg", "workflow.svg"].map(
            (img) => `${BASE_PATH}/routepulse/${img}`
          )}
        />
      </div>
    ),
    live: "",
  },
  {
    id: "marketweave",
    category: "Marketplaces",
    title: "MarketWeave",
    summary: "Multi-vendor marketplace platform with advanced search and recommendations",
    src: `${BASE_PATH}/marketweave/cover.svg`,
    screenshots: ["cover.svg", "overview.svg", "insights.svg", "workflow.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres],
    },
    content: (
      <div className="flex flex-col gap-4">
        <TypographyH3>MarketWeave</TypographyH3>
        <TypographyP>
          A full-featured multi-vendor marketplace platform with AI-powered recommendations, vendor analytics, and secure payment processing. Built to scale for thousands of concurrent sellers and buyers.
        </TypographyP>
        <SlideShow
          images={["cover.svg", "overview.svg", "insights.svg", "workflow.svg"].map(
            (img) => `${BASE_PATH}/marketweave/${img}`
          )}
        />
      </div>
    ),
    live: "",
  },
  {
    id: "sentinel-risk",
    category: "Risk Management",
    title: "Sentinel Risk Analytics",
    summary: "Predictive risk assessment and compliance monitoring",
    src: `${BASE_PATH}/sentinel-risk/cover.svg`,
    screenshots: ["cover.svg", "overview.svg", "insights.svg", "workflow.svg"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres, PROJECT_SKILLS.docker],
    },
    content: (
      <div className="flex flex-col gap-4">
        <TypographyH3>Sentinel Risk Analytics</TypographyH3>
        <TypographyP>
          An advanced risk assessment platform using machine learning to identify and predict potential compliance violations and operational risks. Trusted by financial institutions for regulatory adherence.
        </TypographyP>
        <SlideShow
          images={["cover.svg", "overview.svg", "insights.svg", "workflow.svg"].map(
            (img) => `${BASE_PATH}/sentinel-risk/${img}`
          )}
        />
      </div>
    ),
    live: "",
  },
];

export { projects as default, PROJECT_SKILLS };
