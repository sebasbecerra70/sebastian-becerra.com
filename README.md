# sebastian-becerra.com

Personal site for **Sebastian Becerra** — software engineer in Miami, FL.

Live at **https://sebastian-becerra.com**

## Stack

- **Framework**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix primitives
- **Motion**: Framer Motion, GSAP, Lenis
- **3D**: Spline runtime (interactive keycap scene, lazy-loaded on desktop only)
- **Mail**: Resend

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes, for the contact form | Sends contact-form submissions. Without it the form fails loudly and falls back to a `mailto:` link — it never reports a false success. |
| `UMAMI_DOMAIN` | no | Analytics script src. Omitted entirely when unset. |
| `UMAMI_SITE_ID` | no | Analytics site id. |

## Deployment

Deployed on Vercel from `main`. The Open Graph share card is generated at request time by
`src/app/opengraph-image.tsx`, so it stays in sync with `src/data/config.ts` rather than
living as a checked-in image that can go stale.

After changing metadata, re-run the URL through the
[LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) — LinkedIn caches
previews for roughly a week.

---

Built on the MIT-licensed [3D portfolio template by Naresh Khatri](https://github.com/Naresh-Khatri/Portfolio).
Content, design system, and site architecture are my own.
