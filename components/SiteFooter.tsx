import { SOCIALS } from "@/lib/data";
import SubscribeForm from "./SubscribeForm";

export default function SiteFooter() {
  return (
    <div className="site-footer dark">
      <div className="footer-sub">
        <div>
          <h3>Subscribe for a chance to win a signed poster</h3>
          <p>Subscribers receive a NetGalley widget for an advance review copy, plus launch news and new archive entries. A few letters a year.</p>
        </div>
        <SubscribeForm />
      </div>
      <footer className="footer-bar">
        <span>© 2026 J. Martin Lutece · Press &amp; review copies: contact form · ToTED Store</span>
        <div className="socials">
          {SOCIALS.map((s) => <a key={s} href="#" aria-label={s}>{s}</a>)}
        </div>
      </footer>
    </div>
  );
}
