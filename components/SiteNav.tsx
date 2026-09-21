"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/book", label: "The Book" },
  { href: "/codex", label: "Codex" },
  { href: "/#author", label: "Author" },
  { href: "/press", label: "Press" },
];

export default function SiteNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const current = (href: string) => (href === "/" ? path === "/" : href.startsWith("/#") ? false : path.startsWith(href));
  return (
    <nav className="site-nav" aria-label="Main">
      <Link href="/" className="nav-brand">J. Martin Lutece</Link>
      <div className={`nav-links${open ? " is-open" : ""}`}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} aria-current={current(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
      </div>
      <Link href="/book" className="btn btn-primary nav-cta">Pre-order</Link>
      <button type="button" className="btn btn-secondary btn-icon nav-menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
    </nav>
  );
}
