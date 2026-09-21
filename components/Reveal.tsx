"use client";
import { useEffect, useRef } from "react";

/** Adds .is-visible when the element scrolls into view. Children with .rv-item stagger. */
export default function Reveal({ children, className = "", as: Tag = "div", delay = 0, id }: { children: React.ReactNode; className?: string; as?: "div" | "section" | "figure" | "li"; delay?: number; id?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (typeof IntersectionObserver === "undefined") { el.classList.add("is-visible"); return; }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const T = Tag as any;
  return <T ref={ref} id={id} className={`reveal ${className}`.trim()} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>{children}</T>;
}
