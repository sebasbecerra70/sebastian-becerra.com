"use client";

import Link from "next/link";
import { links } from "./config";

interface NavProps {
  setIsActive: (value: boolean) => void;
}

export default function Nav({ setIsActive }: NavProps) {
  return (
    <nav className="absolute top-16 right-6 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md p-2 shadow-lg">
      <ul className="m-0 list-none p-0 min-w-[9rem]">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setIsActive(false)}
              className="block rounded-lg px-4 py-2 text-sm text-zinc-300 hover:bg-white/10 hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
