import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="page codex home">
      <SiteNav />
      <div className="container" style={{ padding: "96px 56px 120px", maxWidth: 720 }}>
        <span className="kicker">404</span>
        <h1 className="display" style={{ fontSize: 56, lineHeight: 1.04 }}>This page is not in the Codex.</h1>
        <p style={{ fontSize: 17, lineHeight: "28px", margin: "24px 0 32px", color: "var(--color-accent-2-200)" }}>The Summons did not reach it, or it never existed. Try the archive or head home.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}><Link href="/" className="btn btn-primary">Home</Link><Link href="/codex" className="btn btn-secondary">Open the Codex</Link></div>
      </div>
      <SiteFooter />
    </div>
  );
}
