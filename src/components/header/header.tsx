"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { links } from "./config";
import { cn } from "@/lib/utils";
import FunnyThemeToggle from "../theme/funny-theme-toggle";
import { config } from "@/data/config";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

/**
 * Nav is visible on desktop rather than hidden behind a hamburger. A reviewer
 * skimming for "work" or "experience" shouldn't have to open a menu to find them.
 */
const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * Section links scroll the page directly instead of routing.
   *
   * `<Link href="/#work">` re-navigated the route without moving the viewport.
   * clicking a nav item did nothing except replay the hero's entrance
   * animations. Lenis owns the scroll position, so it has to do the scrolling.
   */
  const goToSection = (hash: string) => (e: React.MouseEvent) => {
    if (!document.querySelector(hash)) return;
    e.preventDefault();
    setOpen(false);
    scrollToSection(hash);
    history.replaceState(null, "", hash);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "enter fixed inset-x-0 top-0 z-[1000] transition-colors duration-300",
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-mono text-[13px] tracking-tight text-foreground hover:text-brand transition-colors"
        >
          {config.author}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href.replace("/", "")}
              onClick={goToSection(item.href.replace("/", ""))}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <FunnyThemeToggle className="w-5 h-5" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-1.5 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <ul className="flex flex-col px-6 py-3">
              {links.map((item) => {
                const hash = item.href.replace("/", "");
                return (
                  <li key={item.href}>
                    <a
                      href={hash}
                      onClick={goToSection(hash)}
                      className="block py-3 text-base text-foreground/90 hover:text-brand transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
