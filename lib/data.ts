export const LAUNCH = new Date("2026-10-31T00:00:00");
export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://www.instagram.com/jmartinlutece" },
  { name: "TikTok", href: "https://www.tiktok.com/@theeighthdivinity" },
  { name: "Bluesky", href: "https://bsky.app/profile/jmartinlutece.bsky.social" },
  { name: "X", href: "https://x.com/eighthdivinity" },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61594056084965" },
  { name: "Reddit", href: "https://www.reddit.com/user/jmartinlutece/" },
];
export const SOCIALS = SOCIAL_LINKS.map((s) => s.name);
export const AUTHOR_SITE = "https://theeighthdivinity.com";

export const SERIES_ABOUT =
  "Tales of THE EIGHTH DIVINITY is a science fiction series exploring our world's history and present through the vantage point of seven very different people who discover their connection to each other and the greater multiverse. Some are good, some are bad, and all have access to an ancient power capable of saving this world. Governments, corporations and extraterrestrials want it too. The story spans America, Japan, Norway and Russia, with local color and complex relationships.";

export const AUTHOR_FACETS = [
  { glyph: "I", title: "Author", body: "A science fiction fan since childhood. Summons of The Eighth Divinity began as two self-published episodes and now returns as the Complete Edition with a new third episode and the eight Letters of Divinity." },
  { glyph: "II", title: "Musician", body: "A pianist who performs locally in Tucson and streams online. Expect a piano set alongside the readings at launch events." },
  { glyph: "III", title: "Statistician", body: "Two decades in high tech in the Pacific Northwest before moving to the Southwest to write. He still consults in tech, and exhibits at conventions under the Algo-Stats banner." },
];

export const AUTHOR_TIMELINE = [
  { when: "Sep 2026", title: "eBook pre-orders open", where: "Kindle and Nook", kind: "Launch", tagClass: "tag-accent", href: "https://theeighthdivinity.com/2026/09/14/presales-are-ready-for-ebooks/" },
  { when: "Sep 2026", title: "Tucson Comic-Con", where: "Artist alley, booth AA226 · advance review copies and prizes", kind: "Convention", tagClass: "tag-accent-2", href: "https://theeighthdivinity.com/2026/09/04/tucson-comic-con-is-here/" },
  { when: "Jul 2026", title: "San Diego Comic-Con", where: "Co-hosted vendor table · signings, signed original art by Daniel Schmelling, raffles", kind: "Convention", tagClass: "tag-accent-2", href: "https://www.comic-con.org/cc/" },
  { when: "May 2025", title: "Signing, Q&A and readings", where: "Stacks Book Club, Oro Valley, AZ", kind: "Signing", tagClass: "tag-neutral" },
  { when: "Apr 2025", title: "Book signing", where: "Barnes & Noble East Broadway, Tucson, AZ", kind: "Signing", tagClass: "tag-neutral" },
  { when: "Mar 2025", title: "Book signing", where: "Barnes & Noble Westside, Tucson, AZ", kind: "Signing", tagClass: "tag-neutral" },
];

export const AUTHOR_POSTS = [
  { date: "14 Sep 2026", title: "Presales are ready for eBooks!", excerpt: "You can pre-order electronic copies of the book through Kindle and Nook.", href: "https://theeighthdivinity.com/2026/09/14/presales-are-ready-for-ebooks/" },
  { date: "4 Sep 2026", title: "Tucson Comic-Con is here!", excerpt: "Come see me! Booth AA226.", href: "https://theeighthdivinity.com/2026/09/04/tucson-comic-con-is-here/" },
  { date: "24 Aug 2026", title: "Is SoTED for you?", excerpt: "A quiz to find out whether the series is for you, with prizes.", href: "https://theeighthdivinity.com/2026/08/24/is-soted-for-you/" },
];

export const BIO =
  "J. Martin Lutece is an American author, musician, and statistician. A fan of science fiction since childhood, he transitioned from high tech in the Northwest to storytelling in the Southwest. He continues to consult in tech, and he performs piano locally and online. He lives with his husband and two cats.";

export const LORE_CATS = [
  { name: "The Vesiks", count: 7, size: "220px", grad: "grad-sage-deep", ink: "var(--color-accent-2-800)", blurb: "The seven Earth-born, and the eighth who crosses universes.", href: "/codex#vesiks" },
  { name: "Seven Worlds", count: 7, size: "170px", grad: "grad-terra", ink: "var(--color-accent-700)", blurb: "Built by an ancient super-species. Earth is one.", href: "/codex#guides" },
  { name: "The Ghyans", count: 5, size: "190px", grad: "grad-sage", ink: "var(--color-accent-2-800)", blurb: "The sister world, its agents and what they want.", href: "/codex#guides" },
  { name: "Episodes", count: 11, size: "150px", grad: "grad-neutral", ink: "var(--color-neutral-800)", blurb: "Three episodes and the eight Letters of Divinity.", href: "/codex#guides" },
];

export const ROSTER = [
  { glyph: "I", role: "The Nurse", name: "[Name]", slug: "the-nurse", spoiler: false },
  { glyph: "II", role: "The Fracker", name: "[Name]", slug: "the-fracker", spoiler: false },
  { glyph: "III", role: "The Engineer", name: "[Name]", slug: "the-engineer", spoiler: false },
  { glyph: "IV", role: "The Ufologist", name: "E.G. Boothby", slug: "eg-boothby", spoiler: false },
  { glyph: "V", role: "The Evangelical", name: "[Name]", slug: "the-evangelical", spoiler: false },
  { glyph: "VI", role: "The Physician", name: "[Name]", slug: "the-physician", spoiler: false },
  { glyph: "VII", role: "The Physicist", name: "[Name]", slug: "the-physicist", spoiler: false },
  { glyph: "VIII", role: "The Eighth Vesik", name: "Revealed in Rhykeng", slug: "the-eighth-vesik", spoiler: true },
];

export const CODEX_NAV = ["The Vesiks", "Seven Worlds", "The Ghyans", "Ancient Machines", "The Summons", "Episodes & Letters", "Glossary"];

export const GUIDES = [
  { kicker: "Worlds", name: "The Seven Worlds", count: 7, bg: "var(--color-accent-2-800)", img: "/assets/map-earth.jpg", blurb: "Built by an ancient super-species. Earth is one of them; the sister world of the Ghyans is another." },
  { kicker: "Faction", name: "The Ghyans", count: 5, bg: "var(--color-neutral-800)", img: "/assets/vesiks-ghyans.png", blurb: "An advanced species drawn to Earth by the machines. Their agents are here, vying for control of the seven." },
  { kicker: "Artifacts", name: "The Ancient Machines", count: 8, bg: "var(--color-accent-800)", img: "", blurb: "Devices left by visitors whose motives were as mysterious as the machines themselves, manifesting since the first nuclear test." },
  { kicker: "Story", name: "Episodes & Letters", count: 11, bg: "var(--color-accent-2-800)", img: "/assets/cover-wrap.png", blurb: "Preskamon, Verafaj and the new Rhykeng, plus the eight Letters of Divinity, in reading order." },
];

export const GLOSSARY = [
  { term: "Vesik", def: "One of the eight who carry the ancient endowment.", s: false },
  { term: "Preskamon", def: "The undeniable pull that draws the Vesiks together.", s: false },
  { term: "The Summons", def: "The call that wakes the seven to each other.", s: false },
  { term: "Ghyan", def: "Of the sister world; here to capture the seven.", s: false },
  { term: "Verafaj", def: "Episode II. [Placeholder: in-world meaning]", s: false },
  { term: "The Eighth Divinity", def: "The primal architect whose footsteps the eighth must follow.", s: true },
];

export const FAQ = [
  { q: "Do I need to read anything first?", a: "No. The Complete Edition collects everything so far: Preskamon, Verafaj, the new Rhykeng and the eight Letters." },
  { q: "Is this science fiction or fantasy?", a: "Both: character-driven science fiction with an ancient-visitors mythology. Seven ordinary people, a genetic inheritance, and a species from a sister world." },
  { q: "Will the Codex spoil the book?", a: "Not unless you ask it to. Everything from Episode III is blurred until you switch to After reading." },
  { q: "Is the series written with AI?", a: "No. The series is 100% Brainscribed™, written by a human without generative AI." },
];

export const EPISODES = [
  { num: "I", title: "Preskamon", isNew: false, bg: "var(--color-accent-200)", ink: "var(--color-accent-700)", blurb: "The call arrives. Seven Earth-born lives interrupted one by one, and the pull toward each other that none of them can explain." },
  { num: "II", title: "Verafaj", isNew: false, bg: "var(--color-accent-200)", ink: "var(--color-accent-700)", blurb: "The Vesiks begin to find one another while governments, corporations and the Ghyans close in." },
  { num: "III", title: "Rhykeng", isNew: true, bg: "var(--color-accent-2-200)", ink: "var(--color-accent-2-800)", blurb: "New to this edition: the continuation, as the Vesiks make their way to Siberia." },
  { num: "✦", title: "The Letters of Divinity", isNew: true, bg: "var(--color-neutral-200)", ink: "var(--color-neutral-800)", blurb: "The eight Letters, collected for the first time, with new character and landscape artwork." },
];

export const EVENTS = [
  { date: "31 Oct", title: "Complete Edition release", where: "Kindle, Nook, paperback", kind: "Launch", tagClass: "tag-accent" },
  { date: "Nov", title: "Launch reading and signing", where: "[Placeholder: venue, city]", kind: "In person", tagClass: "tag-accent-2" },
  { date: "Nov", title: "Piano set and Q&A, streamed", where: "Online", kind: "Online", tagClass: "tag-neutral" },
];

export const STARS: [number, number, number, number, number][] = [
  [6, 18, 5, 3.2, 0], [14, 62, 3, 4.1, 0.7], [22, 30, 4, 2.8, 1.4], [31, 74, 3, 3.6, 0.3], [40, 12, 5, 4.4, 2],
  [47, 50, 3, 3.1, 1.1], [55, 84, 4, 2.6, 0.5], [62, 26, 3, 3.9, 1.8], [70, 60, 5, 3.3, 0.9], [78, 10, 3, 4.6, 2.4],
  [86, 44, 4, 2.9, 0.2], [92, 78, 3, 3.7, 1.6], [36, 42, 2, 3.4, 2.2], [83, 22, 2, 4.2, 1.3],
];

export const BUY = {
  kindle: "https://www.amazon.com/s?k=Summons+of+The+Eighth+Divinity+Lutece",
  nook: "https://www.barnesandnoble.com/s/Summons%20of%20The%20Eighth%20Divinity",
  paperback: "https://www.amazon.com/s?k=Summons+of+The+Eighth+Divinity+Lutece+paperback",
  netgalley: "https://www.netgalley.com/",
};
