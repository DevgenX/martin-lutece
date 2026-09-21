import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SubscribeForm from "@/components/SubscribeForm";
import { SpoilerScope, SpoilerSwitch } from "@/components/Spoiler";
import { CatBar, Divider, Sigil, Stars } from "@/components/CodexBits";
import { FAQ, GLOSSARY, GUIDES, ROSTER } from "@/lib/data";

export const metadata: Metadata = { title: "The Codex of the Eight", description: "A companion to Tales of The Eighth Divinity: the Vesiks, the seven worlds, the Ghyans, the machines and the Summons itself." };

export default function CodexPage() {
  return (
    <SpoilerScope className="page codex">
      <SiteNav />
      <div className="codex-hero">
        <Stars />
        <div className="codex-glow" />
        <div className="codex-hero-grid">
          <div>
            <span className="codex-kicker">Tales of The Eighth Divinity · Companion</span>
            <h1 className="display codex-title">The Codex<br />of the Eight</h1>
            <p className="codex-lede">Everything the ancient visitors left behind, and everyone who answered. Seven Vesiks, seven worlds, the Ghyans, the machines, and the Summons itself. Read before the book, or after.</p>
          </div>
          <div className="codex-tools">
            <input className="input" type="search" placeholder="Search the Codex…" aria-label="Search" />
            <SpoilerSwitch name="sp-codex" />
          </div>
        </div>
        <CatBar />
      </div>

      <section className="codex-section" id="vesiks">
        <div className="section-head">
          <Sigil />
          <div><h2>The Vesiks</h2><p>Seven Earth-born. One who crosses universes to assemble them.</p></div>
          <Link href="/codex/vesiks/eg-boothby" className="btn btn-secondary">All Vesiks →</Link>
        </div>
        <div className="roster">
          {ROSTER.map((v) => (
            <Link key={v.glyph} href={`/codex/vesiks/${v.slug}`} className="lore-link roster-card">
              <span className={`glyph glyph-64${v.spoiler ? " spoil" : ""}`}>{v.glyph}</span>
              <span className={`roster-role${v.spoiler ? " spoil" : ""}`}>{v.role}</span>
              <span className={`roster-name${v.spoiler ? " spoil" : ""}`}>{v.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <Divider />

      <section className="guides" id="guides">
        {GUIDES.map((g) => (
          <Link key={g.name} href="/codex/vesiks/eg-boothby" className="lore-link guide">
            <div className="washed guide-art" style={{ background: g.bg }}>
              {g.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={g.img} alt={`${g.name} key art`} />
              ) : (
                <div className="placeholder">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: "0 auto" }}><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="9" cy="9" r="2" /><path d="m21 15-5-5L5 21" /></svg>
                  <span>{g.name} key art</span>
                </div>
              )}
            </div>
            <div className="guide-body">
              <span className="guide-kicker">{g.kicker}</span>
              <span className="guide-name">{g.name}</span>
              <span className="guide-blurb">{g.blurb}</span>
              <span className="guide-more">{g.count} entries · Read more →</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="codex-two" id="glossary">
        <div>
          <h2>Glossary of the Summons</h2>
          <div className="glossary">
            {GLOSSARY.map((t) => (
              <Link key={t.term} href="/codex/vesiks/eg-boothby" className="lore-link gloss">
                <span className={`gloss-term${t.s ? " spoil" : ""}`}>{t.term}</span>
                <span className={`gloss-def${t.s ? " spoil" : ""}`}>{t.def}</span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>Before you read</h2>
          <div className="faq">
            {FAQ.map((q) => (
              <details key={q.q}><summary>{q.q}<span>+</span></summary><p>{q.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <div className="codex-sub">
        <div>
          <div className="codex-sub-title">The Codex grows with the series</div>
          <p>New entries land with each episode. Subscribe to hear when the Codex updates, and for a chance to win a signed poster.</p>
        </div>
        <SubscribeForm />
      </div>
    </SpoilerScope>
  );
}
