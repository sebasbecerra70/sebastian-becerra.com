"use client";

import Link from "next/link";

interface NavProps {
  setIsActive: (value: boolean) => void;
}

export default function Nav({ setIsActive }: NavProps) {
  return (
    <nav
      style={{
        position: "absolute",
        top: "4rem",
        right: "1.5rem",
        background: "rgba(0,0,0,0.8)",
        borderRadius: "0.75rem",
        padding: "1rem",
      }}
    >
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {[
          { href: "#home", label: "Home" },
          { href: "#work", label: "Work" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <li key={item.href} style={{ marginBottom: "0.75rem" }}>
            <Link href={item.href} onClick={() => setIsActive(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
