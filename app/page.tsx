import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import HeroBook from "@/components/HeroBook";
import { BIO, BUY, LORE_CATS } from "@/lib/data";

const QUOTES = [
  "“Flights of imagination that somehow manage to remain grounded in the human experience.”",
  "“For fans of character-driven science fiction, this book is a must-read!”",
  "“I can imagine seeing this book adapted for the screen. A real page-turner!”",
];

export default function Home() {
  return (
    <div className="page codex home">
      <SiteNav />

      <HeroBook />

      <div className="retailers">
        <span className="kicker">Pre-order from</span>
        <div className="retailers-list">
          <a href={BUY.kindle} className="btn btn-secondary btn-glass" target="_blank" rel="noreferrer">Amazon Kindle</a>
          <a href={BUY.nook} className="btn btn-secondary btn-glass" target="_blank" rel="noreferrer">Barnes &amp; Noble Nook</a>
          <Link href="/book" className="btn btn-secondary btn-glass">Paperback</Link>
          <a href={BUY.netgalley} className="btn btn-secondary btn-glass" target="_blank" rel="noreferrer">NetGalley ARC</a>
        </div>
      </div>

      <section className="edition">
        <div className="edition-intro">
          <span className="kicker">In the Complete Edition</span>
          <h2>Three episodes. Eight letters. One volume.</h2>
          <p>The original two episodes, the new third, the Letters of Divinity, and brand-new character and landscape artwork by Daniel Schmelling and Henry Acuatico.</p>
        </div>
        <div className="edition-grid">
          <div className="card is-terra"><span className="card-kicker">Episode I</span><span className="card-title">Preskamon</span><p className="card-body">The call arrives. Seven lives on Earth interrupted, one by one.</p></div>
          <div className="card is-terra"><span className="card-kicker">Episode II</span><span className="card-title">Verafaj</span><p className="card-body">The Vesiks begin to find each other, and are found.</p></div>
          <div className="card"><span className="card-kicker">Episode III · New</span><span className="card-title">Rhykeng</span><p className="card-body">The continuation: the Vesiks make their way to Siberia.</p></div>
          <div className="card"><span className="card-kicker">Appendix</span><span className="card-title">The Letters of Divinity</span><p className="card-body">Eight letters, collected for the first time.</p></div>
        </div>
      </section>

      <section className="archive">
        <span className="kicker kicker--sage">The Archive</span>
        <div className="archive-head">
          <h2>Seven Vesiks. Seven worlds. One call.</h2>
          <p>A browsable companion to the series: the characters, the worlds the ancient super-species built, the Ghyans, and a timeline of the episodes, with a spoiler switch so nothing is given away until you want it to be.</p>
        </div>
        <div className="archive-bubbles">
          {LORE_CATS.map((c) => (
            <Link key={c.name} href={c.href} className="lore-link bubble" style={{ width: 176 }}>
              <span className="bubble-count">{c.count}</span>
              <span className="bubble-name">{c.name}</span>
            </Link>
          ))}
          <Link href="/codex" className="btn btn-primary archive-cta">Open the archive →</Link>
        </div>
      </section>

      <section className="author" id="author">
        <figure className="washed author-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/author-photo.jpg" alt="J. Martin Lutece at a signing table with copies of his books" width={1024} height={577} />
        </figure>
        <div>
          <span className="kicker">The author</span>
          <h2>J. Martin Lutece</h2>
          <p className="author-bio">{BIO}</p>
          <p className="author-brain">The series is 100% Brainscribed™ — written by a human without generative AI.</p>
          <div className="author-actions">
            <Link href="/press" className="btn btn-secondary">About the author</Link>
            <Link href="/press" className="btn btn-ghost">Press kit ↓</Link>
          </div>
        </div>
      </section>

      <section className="quotes">
        <span className="kicker kicker--muted">What readers say</span>
        <div className="quotes-grid">
          {QUOTES.map((q) => (
            <figure key={q} className="quote">
              <div className="quote-stars">★★★★★</div>
              <blockquote>{q}</blockquote>
            </figure>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
