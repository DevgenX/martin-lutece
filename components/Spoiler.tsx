"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "before" | "after";
const Ctx = createContext<{ mode: Mode; setMode: (m: Mode) => void }>({ mode: "before", setMode: () => {} });

export function SpoilerProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("before");
  useEffect(() => {
    try { const v = localStorage.getItem("spoiler-mode"); if (v === "after") setModeState("after"); } catch {}
  }, []);
  const setMode = (m: Mode) => { setModeState(m); try { localStorage.setItem("spoiler-mode", m); } catch {} };
  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>;
}

export const useSpoiler = () => useContext(Ctx);

/** Wraps a subtree; adds .is-before so .spoil children blur. */
export function SpoilerScope({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { mode } = useSpoiler();
  return <div className={`${className} ${mode === "before" ? "is-before" : "is-after"}`.trim()}>{children}</div>;
}

export function SpoilerSwitch({ name, short = false }: { name: string; short?: boolean }) {
  const { mode, setMode } = useSpoiler();
  return (
    <div className="spoiler-row">
      <span>Spoilers</span>
      <div className="seg" role="group" aria-label="Spoiler mode">
        <label className="seg-opt"><input type="radio" name={name} checked={mode === "before"} onChange={() => setMode("before")} />{short ? "Before" : "Before reading"}</label>
        <label className="seg-opt"><input type="radio" name={name} checked={mode === "after"} onChange={() => setMode("after")} />{short ? "After" : "After reading"}</label>
      </div>
    </div>
  );
}

export function RevealButton({ className = "btn btn-secondary" }: { className?: string }) {
  const { setMode } = useSpoiler();
  return <button type="button" className={className} onClick={() => setMode("after")}>Reveal this section</button>;
}

export function SpoilerVeil() {
  const { mode } = useSpoiler();
  if (mode !== "before") return null;
  return (
    <div className="spoiler-veil">
      <span>Contains Episode III spoilers</span>
      <RevealButton />
    </div>
  );
}
