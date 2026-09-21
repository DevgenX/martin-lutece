import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { SpoilerScope, SpoilerVeil } from "@/components/Spoiler";
import { codexNavItems } from "@/components/CodexBits";
import { ROSTER } from "@/lib/data";

export function generateStaticParams() { return ROSTER.map((v) => ({ slug: v.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = ROSTER.find((r) => r.slug === slug);
  return { title: v ? `${v.name === "[Name]" || v.spoiler ? v.role : v.name} — Codex` : "Codex" };
}

export default async function VesikEntry({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = ROSTER.findIndex((r) => r.slug === slug);
  if (idx < 0) notFound();
  const v = ROSTER[idx];
  const isBoothby = v.slug === "eg-boothby";
  const title = isBoothby ? "E.G. Boothby" : v.role;
  const roleWord = v.role.replace(/^The /, "");
  const prev = ROSTER[(idx + ROSTER.length - 1) % ROSTER.length];
  const next = ROSTER[(idx + 1) % ROSTER.length];
  const others = ROSTER.filter((r) => r.slug !== slug && !r.spoiler);
  const infobox = [
    { k: "Role", v: `Vesik · ${roleWord}`, s: false },
    { k: "World", v: "Earth", s: false },
    { k: "Region", v: "[Placeholder]", s: false },
    { k: "Status", v: "Revealed in Rhykeng", s: true },
    { k: "First seen", v: v.spoiler ? "Rhykeng" : "Preskamon", s: v.spoiler },
    { k: "Voice", v: "Point-of-view character", s: false },
  ];

  return (
    <SpoilerScope className="page codex codex-entry">
      <SiteNav />
      <div className="banner">
        <div className="washed" style={{ position: "absolute", inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/vesiks-ghyans.png" alt="Key art: the Vesiks and the Ghyans" />
        </div>
        <div className="banner-shade" />
        <div className="banner-body">
          <div>
            <div className="crumbs"><Link href="/codex">Codex</Link><span>/</span><Link href="/codex#vesiks">The Vesiks</Link><span>/</span><span className={`cur${v.spoiler ? " spoil" : ""}`}>{title}</span></div>
            <div className="tags"><span className="tag tag-accent">Vesik</span><span className={`tag tag-neutral${v.spoiler ? " spoil" : ""}`}>{roleWord}</span><span className="tag tag-neutral">Earth</span></div>
            <h1 className={`display entry-title${v.spoiler ? " spoil" : ""}`}>{title}</h1>
          </div>
          <div className="glyph glyph-96">{v.glyph}</div>
        </div>
      </div>

      <div className="entry-grid">
        <aside className="entry-side">
          <div className="side-label">Codex</div>
          {codexNavItems.map((n, i) => <Link key={n.name} href={n.href} className={`lore-link side-link${i === 0 ? " is-active" : ""}`}>{n.name}</Link>)}
          <div className="side-label mt">On this page</div>
          <a href="#overview" className="lore-link side-sub">Overview</a>
          <a href="#lights" className="lore-link side-sub">{isBoothby ? "The lights" : "Before the Summons"}</a>
          <a href="#episodes" className="lore-link side-sub">In the episodes</a>
          <a href="#bonds" className="lore-link side-sub">Bonds</a>
        </aside>

        <article className="entry-article">
          {isBoothby ? (
            <>
              <p className="entry-quote">“There are lights in the sky, and I know why they appear.”</p>
              <h2 id="overview">Overview</h2>
              <p>One of the seven Earth-born Vesiks. A ufologist whose lifelong watching of the sky turns out to have been the right instinct: the lights are real, and the Summons is for him too. <em className="ph">[Placeholder: full entry from the manuscript.]</em></p>
              <h2 id="lights">The lights</h2>
              <p>Manifesting over the eight decades since the first nuclear test, the ancient machines drew the attention of the Ghyans. Boothby is the Vesik who has been counting the sightings the longest. <em className="ph">[Placeholder]</em></p>
            </>
          ) : (
            <>
              <p className="entry-quote">{v.spoiler ? "“The eighth would cross universes to assemble and empower the others.”" : `“${v.role}: one of the seven who answered the Summons.”`}</p>
              <h2 id="overview">Overview</h2>
              <p className={v.spoiler ? "spoil" : ""}>{v.spoiler ? "The eighth Vesik, who follows the footsteps of the primal architect and crosses universes to assemble the seven." : `One of the seven Earth-born Vesiks. ${v.role}, whose ordinary life is interrupted by the call.`} <em className="ph">[Placeholder: full entry from the manuscript.]</em></p>
              <h2 id="lights">Before the Summons</h2>
              <p><em className="ph">[Placeholder: background, location, what life looked like before the call.]</em></p>
            </>
          )}
          <h2 id="episodes">In the episodes</h2>
          <div className="spoiler-box">
            <p className="spoil"><em>[Placeholder spoiler content]</em> What {isBoothby ? "Boothby" : "this Vesik"} learns about the Ghyans in Rhykeng, and the role {isBoothby ? "he plays" : "they play"} as the Vesiks move toward Siberia.</p>
            <SpoilerVeil />
          </div>
          <h2 id="bonds" style={{ marginBottom: 16 }}>Bonds</h2>
          <div className="bonds">
            {others.map((o) => (
              <Link key={o.slug} href={`/codex/vesiks/${o.slug}`} className="lore-link bond">
                <span className="glyph glyph-44">{o.glyph}</span>
                <span className="bond-role">{o.role}</span>
              </Link>
            ))}
          </div>
          <div className="entry-pager">
            <Link href={`/codex/vesiks/${prev.slug}`} className={`lore-link${prev.spoiler ? " spoil" : ""}`}>← {prev.role}</Link>
            <Link href={`/codex/vesiks/${next.slug}`} className={`lore-link${next.spoiler ? " spoil" : ""}`}>{next.role} →</Link>
          </div>
        </article>

        <aside className="infobox">
          <div className="infobox-label">Vesik record</div>
          {infobox.map((row) => (
            <div className="infobox-row" key={row.k}><span>{row.k}</span><span className={row.s ? "spoil" : ""}>{row.v}</span></div>
          ))}
          <div className="infobox-appears">
            <div className="infobox-label">Appears in</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {!v.spoiler && <><span className="tag tag-accent">Preskamon</span><span className="tag tag-accent">Verafaj</span></>}
              <span className="tag tag-neutral spoil">Rhykeng</span>
            </div>
          </div>
          <div className="infobox-credit">Art: Daniel Schmelling &amp; Henry Acuatico</div>
        </aside>
      </div>
      <SiteFooter />
    </SpoilerScope>
  );
}
