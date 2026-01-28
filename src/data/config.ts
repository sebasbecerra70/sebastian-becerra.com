const config = {
  title: "Sebastian Becerra | Software Engineer",
  description: {
    long:
      "Portfolio of Sebastian Becerra, a software engineer crafting reliable web experiences, thoughtful UX, and polished interactions.",
    short: "Sebastian Becerra | Software Engineer portfolio",
  },
  keywords: [
    "Sebastian Becerra",
    "software engineer",
    "web developer",
    "frontend",
    "full-stack",
    "Next.js",
    "React",
    "Tailwind",
    "TypeScript",
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
