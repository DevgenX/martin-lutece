import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import BioBox from "@/components/BioBox";
import { BUY, EVENTS } from "@/lib/data";

export const metadata: Metadata = { title: "Press & Contact" };

export default function PressPage() {
  return (
    <div className="page press">
      <SiteNav />
      <div className="press-head">
        <span className="kicker">Press &amp; contact</span>
        <h1 className="display press-title">Reviewers, booksellers, podcasters: start here.</h1>
      </div>
      <div className="press-grid">
        <div className="press-main">
          <div className="press-cards">
            <Link href="#" className="card lore-link press-card grad-terra">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-700)" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12m0 0 4-4m-4 4-4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
              <div><div className="card-title">Press kit</div><p className="card-body">Cover in print and web sizes, author photos, bio in three lengths, logo files. ZIP, 48 MB.</p></div>
            </Link>
            <a href={BUY.netgalley} target="_blank" rel="noreferrer" className="card lore-link press-card grad-sage">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-2-800)" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              <div><div className="card-title">Advance review copy</div><p className="card-body">Free ARCs via NetGalley for reviewers, bloggers and booksellers ahead of 31 October.</p></div>
            </a>
          </div>
          <BioBox />
          <div className="events">
            <h2>Upcoming events</h2>
            <div>
              {EVENTS.map((ev) => (
                <div className="event" key={ev.title}>
                  <span className="event-date">{ev.date}</span>
                  <div><div className="event-title">{ev.title}</div><div className="event-where">{ev.where}</div></div>
                  <span className={`tag ${ev.tagClass}`}>{ev.kind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
      <SiteFooter />
    </div>
  );
}
