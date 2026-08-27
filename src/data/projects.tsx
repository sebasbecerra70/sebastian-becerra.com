export type Project = {
  id: string;
  /** Short mono label above the title. */
  kind: string;
  title: string;
  /** One line: what it is. */
  summary: string;
  /** Three lines: the problem, what he built, what came of it. */
  facets: { label: string; body: string }[];
  stack: string[];
  /** Optional real screenshot. No mockups. An entry with no image renders as type. */
  image?: { src: string; alt: string };
  live?: string;
  /** Shown instead of a live link when the work is internal or under NDA. */
  note?: string;
};

/**
 * Three real projects.
 *
 * The five that used to sit here (Orion Forecast, LedgerFlow, RoutePulse, MarketWeave,
 * Sentinel Risk) had no live links and were illustrated with hand-drawn SVG mockups
 * containing invented data such as "Studio Marlowe · 1,284 profile views". Reviewers spot that
 * instantly and it discredits the real work next to it.
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
        body: "The full platform on Next.js, React, TypeScript, Node.js and Python, plus the money layer end to end: Stripe Connect payouts, billing and settlement, and the transaction model behind carrier payments and shipper invoicing. AI copilots read the documents, triaged exceptions, and let users run logistics work conversationally, always behind a human review gate.",
      },
      {
        label: "Result",
        body: "300+ carrier companies onboarded, representing 3,000+ trucks of capacity, running on event-driven services and WebSockets underneath.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Stripe Connect",
      "LLM / RAG",
      "MCP",
      "Docker",
      "AWS",
    ],
    image: {
      src: "/assets/projects-screenshots/ship-ai/tracking.jpg",
      alt: "Ship AI live tracking view showing delivery status, route progress and cargo protection",
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
        body: "One-click OAuth integrations that read metrics directly from source platforms, with no passwords and no API keys to manage, then an AI layer that finds patterns across them and surfaces the insight. Output is a public or private proof page with a verified badge on every metric, embeddable anywhere.",
      },
      {
        label: "Result",
        body: "Live at itsproofbase.com, tracking metrics daily for businesses, artists and creators.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Python",
      "OAuth 2.0",
      "LLM",
    ],
    image: {
      src: "/assets/projects-screenshots/proofbase-ai/landing.jpg",
      alt: "Proofbase AI landing page showing connected platform integrations",
    },
    live: "https://itsproofbase.com/",
  },
  {
    id: "dispatch-4-now",
    kind: "System of record",
    title: "Dispatch 4 Now",
    summary:
      "The internal platform my own freight company ran on, built by the person who had to use it at 6am.",
    facets: [
      {
        label: "Problem",
        body: "I founded and ran the operation, so every gap in the tooling cost me margin directly. Off-the-shelf TMS products priced for enterprises and modelled work we didn't do.",
      },
      {
        label: "Built",
        body: "A system of record in TypeScript, React, Next.js, Node.js, Python, PostgreSQL and Redis covering dispatch, shipment lifecycle, route optimization and driver assignment, plus live dashboards for unit economics, anomaly detection and predictive reporting. Carrier APIs, GPS and telematics providers and mapping services all fed one operational dataset, tracked in real time over WebSockets.",
      },
      {
        label: "Result",
        body: "Several million dollars of freight moved over four years, with daily pricing and allocation calls made off those dashboards. The SOPs and training built around it let the operation absorb new lanes without adding headcount.",
      },
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Telematics APIs",
    ],
    note: "Private company system. No public demo.",
  },
];

export default projects;
