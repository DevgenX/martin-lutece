import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";
import { Stars } from "@/components/CodexBits";
import { AUTHOR_FACETS, AUTHOR_POSTS, AUTHOR_SITE, AUTHOR_TIMELINE, BIO, SERIES_ABOUT, SOCIAL_LINKS } from "@/lib/data";

export const metadata: Metadata = { title: "About the author", description: BIO };

export default function AuthorPage() {
  return (
    <div className="page codex authorpage">
      <SiteNav />
      <div className="author-hero">
        <Stars />
        <div className="codex-glow" style={{ right: "auto", left: -160 }} />
        <div className="author-hero-grid">
          <Reveal className="author-hero-copy">
            <span className="kicker">The author</span>
            <h1 className="display author-hero-title">J. Martin Lutece</h1>
            <p className="author-hero-lede">{BIO}</p>
            <div className="author-roles">
              <span className="tag tag-accent">Author</span><span className="tag tag-neutral">Musician</span><span className="tag tag-neutral">Statistician</span><span className="tag tag-neutral">Tucson, Arizona</span>
            </div>
            <div className="hero-actions" style={{ marginTop: 28 }}>
              <Link href="/press" className="btn btn-primary">Press &amp; contact</Link>
              <a href={AUTHOR_SITE} className="btn btn-secondary btn-glass" target="_blank" rel="noreferrer">theeighthdivinity.com</a>
            </div>
          </Reveal>
          <Reveal className="author-hero-photo" delay={150}>
            <figure className="washed author-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/author-photo.jpg" alt="J. Martin Lutece at a signing table with copies of Summons of The Eighth Divinity" width={1024} height={577} />
            </figure>
            <span className="author-portrait-caption">At a signing, with the Episode I and II editions and the Complete Edition</span>
          </Reveal>
        </div>
      </div>

      <section className="author-section">
        <Reveal><span className="kicker">Three lives, one voice</span></Reveal>
        <div className="facets">
          {AUTHOR_FACETS.map((f, i) => (
            <Reveal key={f.title} className="facet night-panel" delay={i * 120}>
              <span className="glyph glyph-44">{f.glyph}</span>
              <span className="facet-title">{f.title}</span>
              <p className="facet-body">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="author-section author-series">
        <Reveal className="author-series-copy">
          <span className="kicker">The series</span>
          <h2>Tales of The Eighth Divinity</h2>
          <p>{SERIES_ABOUT}</p>
          <p className="author-brain">The series is 100% Brainscribed™ — written by a human without generative AI. Artwork by Daniel Schmelling and Henry Acuatico.</p>
          <div className="hero-actions" style={{ marginTop: 24 }}>
            <Link href="/book" className="btn btn-secondary btn-glass">About the book</Link>
            <Link href="/codex" className="btn btn-ghost">Open the Codex →</Link>
          </div>
        </Reveal>
        <Reveal className="author-series-art" delay={150}>
          <div className="washed author-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/vesiks-ghyans.png" alt="The Vesiks and the Ghyans, character art" />
          </div>
        </Reveal>
      </section>

      <section className="author-section author-two">
        <div>
          <Reveal><h2 className="author-h2">On the road</h2></Reveal>
          <ol className="timeline">
            {AUTHOR_TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.title + t.when} className="timeline-item" delay={i * 80}>
                <span className="timeline-dot" />
                <span className="timeline-when">{t.when}</span>
                <div>
                  <div className="timeline-title">{t.href ? <a href={t.href} target="_blank" rel="noreferrer">{t.title}</a> : t.title}</div>
                  <div className="timeline-where">{t.where}</div>
                </div>
                <span className={`tag ${t.tagClass}`}>{t.kind}</span>
              </Reveal>
            ))}
          </ol>
        </div>
        <div>
          <Reveal><h2 className="author-h2">From the blog</h2></Reveal>
          <div className="posts">
            {AUTHOR_POSTS.map((p, i) => (
              <Reveal key={p.href} delay={i * 100}>
                <a href={p.href} target="_blank" rel="noreferrer" className="lore-link post night-panel">
                  <span className="post-date">{p.date}</span>
                  <span className="post-title">{p.title}</span>
                  <span className="post-excerpt">{p.excerpt}</span>
                  <span className="guide-more">Read on theeighthdivinity.com →</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="follow night-panel">
              <span className="kicker" style={{ marginBottom: 12 }}>Follow along</span>
              <div className="socials">
                {SOCIAL_LINKS.map((s) => <a key={s.name} href={s.href} target="_blank" rel="noreferrer">{s.name}</a>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
