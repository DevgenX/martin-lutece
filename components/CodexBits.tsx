import Link from "next/link";
import { CODEX_NAV, STARS } from "@/lib/data";

export const Stars = () => (
  <>
    {STARS.map(([x, y, s, d, dl], i) => (
      <span key={i} className="star" style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDuration: `${d}s`, animationDelay: `${dl}s` }} />
    ))}
  </>
);

export const Sigil = () => (
  <div className="sigil" aria-hidden>
    <span className="sigil-ring" />
    <span className="sigil-orbit">
      <i style={{ left: "50%", top: -3, marginLeft: -3 }} /><i style={{ left: "50%", bottom: -3, marginLeft: -3 }} />
      <i style={{ top: "50%", left: -3, marginTop: -3 }} /><i style={{ top: "50%", right: -3, marginTop: -3 }} />
      <i style={{ top: "11%", left: "11%" }} /><i style={{ top: "11%", right: "11%" }} />
      <i style={{ bottom: "11%", left: "11%" }} /><i style={{ bottom: "11%", right: "11%" }} />
    </span>
  </div>
);

export const Divider = () => (
  <div className="divider" aria-hidden><div><span className="l" /><span className="d" /><span className="o" /><span className="d" /><span className="r" /></div></div>
);

const HREFS = ["/codex#vesiks", "/codex#guides", "/codex#guides", "/codex#guides", "/codex#glossary", "/codex#guides", "/codex#glossary"];
export const codexNavItems = CODEX_NAV.map((name, i) => ({ name, href: HREFS[i] }));

export const CatBar = () => (
  <div className="codex-catbar">
    {codexNavItems.map((n, i) => (
      <Link key={n.name} href={n.href} className={`lore-link catpill${i === 0 ? " is-active" : ""}`}><i />{n.name}</Link>
    ))}
  </div>
);
