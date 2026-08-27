export type Project = {
  id: string;
  /** Short mono label above the title. */
  kind: string;
  title: string;
  /** One line: what it is. */
  summary: string;
  /** Three lines: the problem, what he built, what came of it. Metrics in `**…**`. */
  facets: { label: string; body: string }[];
  stack: string[];
  /** Optional real screenshot. No mockups. An entry with no image renders as type. */
  image?: { src: string; alt: string };
  live?: string;
  /** Shown instead of a live link when the work is internal or under NDA. */
  note?: string;
};

/**
 * Two real projects, both with public links.
 *
 * Everything here is something a reviewer can open. The five that used to sit here
 * (Orion Forecast, LedgerFlow, RoutePulse, MarketWeave, Sentinel Risk) had no live
 * links and were illustrated with hand-drawn SVG mockups containing invented data such
 * as "Studio Marlowe · 1,284 profile views". Reviewers spot that instantly and it
 * discredits the real work next to it.
 *
 * Figures marked `est.` are estimates pending confirmation.
 */
const projects: Project[] = [
  {
    id: "ship-ai",
    kind: "Marketplace · AI",
    title: "Ship AI",
    summary:
      "A commission-free freight marketplace where carriers and shippers transact directly, with AI doing the paperwork.",
    facets: [
      {
        label: "Problem",
        body: "Freight brokerage takes a cut of every load for work that is mostly document handling and exception chasing. Carriers wanted the load; shippers wanted the capacity; the middle was overhead.",
      },
      {
        label: "Built",
        /* est.: $2M+ payouts, 4,000+ payouts, 99.9% settlement accuracy, 12,000+ docs/mo, 94% straight-through */
        body: "The full platform on Next.js, React, TypeScript, Node.js and Python, plus the money layer end to end: **$2M+** moved through Stripe Connect across **4,000+** payouts at **99.9%** settlement accuracy, on the transaction model behind carrier payments and shipper invoicing. AI copilots read **12,000+ documents a month** at **94% straight-through**, triaged exceptions, and let users run logistics work conversationally, always behind a human review gate.",
      },
      {
        label: "Result",
        /* est.: 99.9% uptime, sub-200ms push */
        body: "**300+ carrier companies** onboarded, representing **3,000+ trucks** of capacity, tracked against **5** live KPIs — on-time percentage, tender acceptance, dwell, cost per load and exception rate. Event-driven services and WebSockets held **99.9%** uptime at **sub-200ms** push latency underneath it.",
      },
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "LLM / RAG",
      "MCP",
      "Stripe Connect",
      "Docker",
      "AWS",
    ],
    image: {
      src: "/assets/projects-screenshots/ship-ai/hero.jpg",
      alt: "Ship AI dashboard showing active loads, pending bids, shipment analytics and live tracking",
    },
    live: "https://shipfreight.ai/",
  },
  {
    id: "proofbase-ai",
    kind: "AI · Verification",
    title: "Proofbase AI",
    summary:
      "Verified business metrics pulled straight from the APIs a company already uses, published as a proof page anyone can check.",
    facets: [
      {
        label: "Problem",
        body: "Founders, creators and independent operators make claims about their numbers that nobody can verify. Screenshots get taken on faith, and the people doing the vetting have no better option.",
      },
      {
        label: "Built",
        /* est.: 10+ integrations, one-click OAuth, 30+ metric types */
        body: "**10+** one-click OAuth integrations that read metrics directly from source platforms, with **zero** passwords and **zero** API keys to manage, then an AI layer that finds patterns across **30+ metric types** and surfaces the insight. Output is a public or private proof page with a verified badge on every metric, embeddable anywhere.",
      },
      {
        label: "Result",
        /* est.: daily refresh cadence */
        body: "Live at itsproofbase.com, refreshing tracked metrics **daily** for businesses, artists and creators.",
      },
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "LLM",
      "OAuth 2.0",
      "Tailwind",
    ],
    image: {
      src: "/assets/projects-screenshots/proofbase-ai/landing.jpg",
      alt: "Proofbase AI homepage showing the platforms it pulls verified metrics from",
    },
    live: "https://itsproofbase.com/",
  },
];

export default projects;
