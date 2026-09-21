"use client";
import { useState } from "react";
import { BIO } from "@/lib/data";

const LONG = "Born in the Pacific Northwest, Lutece spent two decades in software and statistics before moving to the Southwest to write full time. Summons of The Eighth Divinity began as two self-published episodes; the Complete Edition collects them with the new third episode, Rhykeng, and the eight Letters of Divinity. When not writing, he performs piano locally and online and consults on data for technology companies.";

export default function BioBox() {
  const [copied, setCopied] = useState(false);
  const [long, setLong] = useState(false);
  const copy = async () => { try { await navigator.clipboard.writeText(BIO); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} };
  return (
    <div className="bio-box">
      <h2>Short bio</h2>
      <p>{BIO}</p>
      {long && <p className="bio-long">{LONG}</p>}
      <div className="row">
        <button type="button" className="btn btn-secondary" style={{ background: "var(--color-bg)" }} onClick={copy}>{copied ? "Copied" : "Copy bio"}</button>
        <button type="button" className="btn btn-ghost" onClick={() => setLong(!long)}>{long ? "Long bio ↑" : "Long bio ↓"}</button>
      </div>
    </div>
  );
}
