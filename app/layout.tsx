import type { Metadata } from "next";
import Script from "next/script";
import { Caprasimo, Figtree } from "next/font/google";
import { SpoilerProvider } from "@/components/Spoiler";
import "./globals.css";

const caprasimo = Caprasimo({ weight: "400", subsets: ["latin"], variable: "--font-caprasimo", display: "swap" });
const figtree = Figtree({ weight: ["400", "600", "700"], subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: { default: "J. Martin Lutece — Summons of The Eighth Divinity", template: "%s · J. Martin Lutece" },
  description:
    "Official site of J. Martin Lutece, author of Summons of The Eighth Divinity: The Complete Edition. Pre-order the book, explore the Codex of the Eight, and get in touch.",
  metadataBase: new URL("https://martin-lutece.vercel.app"),
  openGraph: { title: "J. Martin Lutece — Summons of The Eighth Divinity", type: "website", images: ["/assets/cover-wrap.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${figtree.variable}`} suppressHydrationWarning>
      <body>
        <Script id="js-flag" strategy="beforeInteractive">{"document.documentElement.classList.add('js')"}</Script>
        <SpoilerProvider>{children}</SpoilerProvider>
      </body>
    </html>
  );
}
