import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { BUY, EPISODES } from "@/lib/data";
import { Book3D } from "@/components/HeroBook";

export const metadata: Metadata = { title: "Summons of The Eighth Divinity — The Book" };

export default function BookPage() {
  return (
    <div className="page codex bookpage">
      <SiteNav />
      <div className="bookpage-grid">
        <div className="bookpage-side">
          <Book3D compact />
          <div className="buy-stack">
            <a href={BUY.kindle} className="btn btn-primary btn-tall" target="_blank" rel="noreferrer">Pre-order · Kindle</a>
            <a href={BUY.nook} className="btn btn-secondary btn-tall btn-glass" target="_blank" rel="noreferrer">Pre-order · Nook</a>
            <a href={BUY.paperback} className="btn btn-secondary btn-tall btn-glass" target="_blank" rel="noreferrer">Paperback · coming 31 Oct</a>
            <Link href="/press" className="btn btn-ghost">Request a review copy</Link>
          </div>
          <div className="book-meta">Independently published · 444 pages · ISBN 9798344919539 · Cover by Daniel Schmelling</div>
        </div>
        <div>
          <span className="kicker">Tales of The Eighth Divinity · Book one</span>
          <h1 className="display bookpage-title">Summons of<br />The Eighth Divinity</h1>
          <p className="epigraph">“There are lights in the sky, and I know why they appear.” — E.G. Boothby, Ufologist</p>
          <div className="synopsis">
            <p>In the 21st century the human race enjoyed technical success in computing, genomics and nanotechnology. It should have been a time of wonder, but civilization faltered under existential threats: nuclear proliferation, catastrophic climate change, sweeping pandemics.</p>
            <p>There had been a plan for Earth, designed by ancient visitors whose motivations were as mysterious as the devices they left behind. Manifesting over the eight decades since our first nuclear test, these machines attracted the attention of the Ghyans, an advanced species from a sister world.</p>
            <p>From America’s Southwest to the barren cold of Siberia, the Vesiks confront international intrigue, corporate conspiracy, crippling disease and interstellar invasion. Among them are a nurse, a fracker, an engineer, a ufologist, an evangelical, a physician and a physicist. The eighth Vesik would cross universes to assemble and empower the others.</p>
          </div>
          <h2>Inside the Complete Edition</h2>
          <div>
            {EPISODES.map((ep) => (
              <div className="episode" key={ep.title}>
                <div className="episode-num" style={{ background: ep.bg, color: ep.ink }}>{ep.num}</div>
                <div>
                  <div className="episode-title"><span>{ep.title}</span>{ep.isNew && <span className="tag tag-accent-2">New</span>}</div>
                  <p>{ep.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="brainscribed">
            <div>
              <div className="brainscribed-title">100% Brainscribed™</div>
              <p>The series is written by a human without the aid of generative AI. Artwork by Daniel Schmelling and Henry Acuatico.</p>
            </div>
            <Link href="/codex#vesiks" className="btn btn-secondary">Meet the Vesiks →</Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
