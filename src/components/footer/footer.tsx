import React from "react";
import Link from "next/link";
import { config } from "@/data/config";
import { SiLinkedin, SiX } from "react-icons/si";

const LINKS = [
  { label: "LinkedIn", href: config.social.linkedin, Icon: SiLinkedin },
  { label: "X", href: config.social.twitter, Icon: SiX },
].filter((l) => Boolean(l.href));

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          © {year} {config.author}. Miami, FL
        </p>
        <div className="flex items-center gap-5">
          {LINKS.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              aria-label={label}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={17} />
            </Link>
          ))}
          <a
            href={`mailto:${config.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {config.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
