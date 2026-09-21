"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { BUY, LAUNCH } from "@/lib/data";

const N = 4;
const LEAVES = [
  { cover: true, backKicker: "Tales of The Eighth Divinity", backTitle: "Summons of The Eighth Divinity", backBody: "The Complete Edition\nJ. Martin Lutece\n\nCover art by Daniel Schmelling", backNo: "" },
  { frontKicker: "In this edition", frontTitle: "Three episodes, eight letters", frontBody: "I · Preskamon\nII · Verafaj\nIII · Rhykeng (new)\n\nThe eight Letters of Divinity\nNew character and landscape artwork", frontNo: "i", backKicker: "Epigraph", backTitle: "“There are lights in the sky, and I know why they appear.”", backBody: "— E.G. Boothby, Ufologist", backNo: "ii" },
  { frontKicker: "The Vesiks", frontTitle: "Seven, Earth-born", frontBody: "A nurse\nA fracker\nAn engineer\nA ufologist\nAn evangelical\nA physician\nA physicist\n\nThe eighth would cross universes to assemble them.", frontNo: "iii", backKicker: "The Ghyans", backTitle: "From a sister world", backBody: "An advanced species drawn by the machines that manifested on Earth in the eight decades since the first nuclear test. Their agents are already here, vying for control of the seven.", backNo: "iv" },
  { frontKicker: "Keep reading", frontTitle: "Pre-order the Complete Edition", frontBody: "Out 31 October 2026.", frontCta: true, frontNo: "v", backKicker: "", backTitle: "", backBody: "", backNo: "" },
];

const Chevron = ({ dir }: { dir: "l" | "r" }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "l" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
  </svg>
);

export default function HeroBook() {
  const [page, setPage] = useState(0);
  const [rx, setRx] = useState(6);
  const [ry, setRy] = useState(-26);
  const [spun, setSpun] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [daysLeft, setDaysLeft] = useState(0);
  const drag = useRef<{ x: number; y: number; rx: number; ry: number } | null>(null);
  const moved = useRef(false);
  const open = page > 0;
  const restRy = open ? -6 : -26;

  useEffect(() => { setDaysLeft(Math.max(0, Math.ceil((LAUNCH.getTime() - Date.now()) / 86400000))); }, []);

  const go = useCallback((p: number) => {
    if (moved.current) { moved.current = false; return; }
    const np = Math.max(0, Math.min(N, p));
    setPage(np); setRy(np > 0 ? -6 : -26); setRx(6); setSpun(false);
  }, []);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current) {
      const dx = e.clientX - drag.current.x, dy = e.clientY - drag.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) moved.current = true;
      setRy(drag.current.ry + dx * 0.6);
      setRx(Math.max(-40, Math.min(40, drag.current.rx - dy * 0.3)));
      setSpun(true);
      return;
    }
    if (spun || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
    setRy((open ? -6 : -26) + px * (open ? 14 : 44));
    setRx(6 - py * (open ? 10 : 26));
  };
  const onLeave = () => { drag.current = null; setDragging(false); if (!spun) { setRx(6); setRy(restRy); } };
  const onUp = () => { drag.current = null; setDragging(false); };
  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault(); moved.current = false;
    drag.current = { x: e.clientX, y: e.clientY, rx, ry }; setDragging(true);
  };
  const reset = () => { setSpun(false); setRx(6); setRy(restRy); };

  const shift = typeof window !== "undefined" && window.innerWidth < 900 ? 90 : 150;

  return (
    <div className="hero" onPointerMove={onMove} onPointerLeave={onLeave} onPointerUp={onUp}>
      <div className="hero-blob-a" />
      <div className="hero-blob-b" />
      <div className="hero-grid">
        <div className="hero-copy hero-head">
          <span className="kicker">The Complete Edition · 31 October 2026</span>
          <h1 className="display hero-title">Summons of<br />The Eighth Divinity</h1>
        </div>
        <div className="hero-copy hero-body">
          <p className="hero-lede">Seven strangers on Earth — a nurse, a fracker, an engineer, a ufologist, an evangelical, a physician and a physicist — receive the same call. Governments and corporations want them. So do visitors from a sister world. Book one of a character-driven science fiction series, now complete in one volume.</p>
          <div className="hero-actions">
            <Link href="/book" className="btn btn-primary btn-lg">Pre-order the book</Link>
            <button type="button" className="btn btn-secondary btn-lg" style={{ background: "rgba(255,255,255,.35)" }} onClick={() => go(open ? 0 : 1)}>{open ? "Close the book" : "Open the book"}</button>
            <Link href="/codex" className="btn btn-ghost" style={{ fontSize: 15 }}>Explore the lore →</Link>
          </div>
          <div className="hero-count">
            <span className="pulse" />
            <span><strong>{daysLeft} days</strong> until launch · eBook pre-orders open on Kindle and Nook</span>
          </div>
        </div>

        <div className="book-stage">
          <div className="book-persp">
            <div className="book-float">
              <div
                className={`book${dragging ? " is-dragging" : ""}`}
                style={{ transform: `translateX(${open ? shift : 0}px) rotateX(${rx}deg) rotateY(${ry}deg)` }}
                onPointerDown={onDown}
                onDoubleClick={reset}
                role="img"
                aria-label="Summons of The Eighth Divinity, interactive book. Click to open, drag to spin."
              >
                <div className="book-block">
                  <div className="book-pages" />
                  <div className="book-back" />
                </div>
                <div className="book-spine" style={{ opacity: open ? 0 : 1 }}>
                  <span>Summons of The Eighth Divinity · Lutece</span>
                </div>
                {LEAVES.map((d, i) => {
                  const flipped = i < page, k = (N - i) * 1.6;
                  return (
                    <div
                      key={i}
                      className="leaf"
                      style={{ transform: flipped ? `rotateY(-178deg) translateZ(${k}px)` : `rotateY(0deg) translateZ(${k}px)` }}
                      onClick={(e) => { e.stopPropagation(); go(flipped ? i : i + 1); }}
                    >
                      <div className={`leaf-face leaf-front${d.cover ? " is-cover" : ""}`}>
                        {!d.cover && (
                          <div className="leaf-inner">
                            <span className="leaf-kicker">{d.frontKicker}</span>
                            <span className="leaf-title">{d.frontTitle}</span>
                            <span className="leaf-body">{d.frontBody}</span>
                            {d.frontCta && (
                              <div className="leaf-cta" onClick={(e) => e.stopPropagation()}>
                                <a href={BUY.kindle} className="btn btn-primary" target="_blank" rel="noreferrer">Kindle</a>
                                <a href={BUY.nook} className="btn btn-secondary" target="_blank" rel="noreferrer">Nook</a>
                                <Link href="/book" className="btn btn-secondary">Paperback</Link>
                              </div>
                            )}
                            <span className="leaf-no">{d.frontNo}</span>
                          </div>
                        )}
                      </div>
                      <div className="leaf-face leaf-back">
                        <div className="leaf-inner">
                          <span className="leaf-kicker">{d.backKicker}</span>
                          <span className="leaf-title">{d.backTitle}</span>
                          <span className="leaf-body">{d.backBody}</span>
                          <span className="leaf-no">{d.backNo}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="book-controls">
            <button type="button" className="btn btn-secondary btn-icon btn-glass" aria-label="Previous page" onClick={() => go(page - 1)}><Chevron dir="l" /></button>
            <div className="book-status">
              <span>{page === 0 ? "Closed · click to open" : page >= N ? "Last spread" : `Spread ${page} of ${N - 1}`}</span>
              <span>{spun ? "Drag to spin · double-click to reset" : "Drag to spin the book · click to open"}</span>
            </div>
            <button type="button" className="btn btn-secondary btn-icon btn-glass" aria-label="Next page" onClick={() => go(page + 1)}><Chevron dir="r" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
