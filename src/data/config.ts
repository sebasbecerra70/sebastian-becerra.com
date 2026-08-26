const config = {
  title: "Sebastian Becerra | Software Engineer & Operations Leader",
  description: {
    long:
      "Portfolio of Sebastian Becerra, a software engineer who runs the operations he builds for - full-stack products, AI-assisted automation, and the data systems behind live logistics networks.",
    short: "Sebastian Becerra | Software engineer who runs real operations",
  },
  keywords: [
    "Sebastian Becerra",
    "software engineer",
    "full-stack developer",
    "AI engineer",
    "LLM",
    "RAG",
    "agent orchestration",
    "operations",
    "logistics technology",
    "capacity planning",
    "data engineering",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "portfolio",
  ],
  author: "Sebastian Becerra",
  email: "sebasbecerra70@gmail.com",
  site: "https://sebasbecerra.com",

  // for github stars button
  githubUsername: "",
  githubRepo: "",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Sebasbecerrax",
    linkedin: "https://www.linkedin.com/in/sebastian-becerra-8b499b231/",
    instagram: "https://www.instagram.com/sebasflx/",
    facebook: "",
    github: "",
  },
};
export { config };
