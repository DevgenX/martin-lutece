"use client";
import { useState } from "react";
import { SOCIALS } from "@/lib/data";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <aside className="card elev-sm contact">
      <div className="card-title">Get in touch</div>
      <p className="card-body">Interviews, signings, review copies, rights enquiries. Replies within a few days.</p>
      {sent ? (
        <p style={{ fontSize: 14, margin: 0, color: "var(--color-accent-2-800)", fontWeight: 600 }}>Message sent. Thank you — you will hear back within a few days.</p>
      ) : (
        <form style={{ display: "contents" }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="field"><label htmlFor="c-name">Your name</label><input id="c-name" className="input" type="text" placeholder="Name" required /></div>
          <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" className="input" type="email" placeholder="you@example.com" required /></div>
          <div className="field"><label>I am a…</label>
            <div className="seg">
              {["Reviewer", "Bookseller", "Media", "Reader"].map((w, i) => (
                <label key={w} className="seg-opt"><input type="radio" name="who" defaultChecked={i === 0} />{w}</label>
              ))}
            </div>
          </div>
          <div className="field"><label htmlFor="c-msg">Message</label><textarea id="c-msg" className="input" placeholder="What can we help with?" required /></div>
          <button type="submit" className="btn btn-primary btn-block btn-tall" style={{ marginTop: 0 }}>Send message</button>
        </form>
      )}
      <div className="contact-or">Or find the author on</div>
      <div className="contact-socials">{SOCIALS.map((s) => <a key={s} href="#" className="tag tag-neutral">{s}</a>)}</div>
    </aside>
  );
}
