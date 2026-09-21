"use client";
import { useState } from "react";

export default function SubscribeForm({ inputStyle }: { inputStyle?: React.CSSProperties }) {
  const [done, setDone] = useState(false);
  if (done) return <p className="sub-ok">Thank you. Watch your inbox for the NetGalley widget.</p>;
  return (
    <form className="sub-form" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input className="input" type="email" required placeholder="Type your email…" aria-label="Email" style={inputStyle} />
      <button type="submit" className="btn btn-primary">Subscribe</button>
    </form>
  );
}
