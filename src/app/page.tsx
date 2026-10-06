"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Artifact = {
  id: string;
  label: string;
  title: string;
  body: string;
  detail: string;
  accent: string;
};

const artifacts: Artifact[] = [
  { id: "alignment", label: "01 / algorithms", title: "Smith–Waterman accelerator", body: "An FPGA accelerator for Smith–Waterman sequence alignment. I implemented a systolic array in Verilog and benchmarked it against SPOA.", detail: "30× speedup over SPOA · Verilog · FPGA", accent: "rust" },
  { id: "chess", label: "02 / software", title: "Jester chess engine", body: "A C++ chess engine built to learn how bitboards, search, evaluation, and pruning work together in a real program.", detail: "C++ · minimax · alpha-beta pruning", accent: "blue" },
  { id: "bubble", label: "03 / systems", title: "Bubble", body: "A team-built location-sharing and messaging system. The backend work focused on Rust services and encrypted messaging.", detail: "Rust · Axum · encrypted messaging", accent: "green" },
];

const heroBitArt = `GGGGGGGGG      SSSSSSSS
GGGGGGGGGG   SSSSSSSSSS
GGG             SSSS
GGG           SSSSSSSS
GGG  GGGGGG  SSSSSSSSS
GGG     GGG        SSS
GGGGGGGGGG  SSSSSSSSSS
 GGGGGGGG    SSSSSSSS`;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}>{children}</div>;
}

export default function Portfolio() {
  const [selected, setSelected] = useState(artifacts[0]);

  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Gannon Smith home">GS<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a><a href="#about">About</a>
          <a className="nav-contact" href="mailto:gannonsmithr@gmail.com">Say hello <span>↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Cincinnati, OH · software engineer at P&amp;G</p>
          <h1>I build software<br /><em>across the stack.</em></h1>
          <p className="hero-intro">I&apos;m Gannon Smith. I build software, then keep digging into the systems underneath it—from backend services to C++ and FPGA projects.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <span>↓</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/gannonsmith/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a className="text-link" href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-bit-art" aria-label="Gannon Smith initials rendered in characters"><div className="bit-art-header"><span>GANNON SMITH</span><span>EST. 2026</span></div><pre>{heroBitArt}</pre><div className="bit-art-footer"><span>SOFTWARE / SYSTEMS</span><span>GS-01</span></div></aside>
      </section>


      <section id="work" className="section-wrap work-section">
        <Reveal className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Projects I&apos;ve built<br /><em>to learn by building.</em></h2></div><p className="heading-note">These projects span hardware acceleration, search, and backend systems.</p></Reveal>
        <div className="workbench">
          <div className="artifact-list" role="tablist" aria-label="Project artifacts">
            {artifacts.map((artifact) => <button key={artifact.id} className={`artifact-tab ${selected.id === artifact.id ? "is-selected" : ""}`} onClick={() => setSelected(artifact)} role="tab" aria-selected={selected.id === artifact.id}><span className={`artifact-number ${artifact.accent}`}>{artifact.label.split(" ")[0]}</span><span><strong>{artifact.title}</strong><small>{artifact.detail}</small></span><span className="tab-arrow">{selected.id === artifact.id ? "↗" : "→"}</span></button>)}
            <a className="all-work" href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">See more on GitHub <span>↗</span></a>
          </div>
          <article className={`artifact-card ${selected.accent}`} role="tabpanel"><div className="card-topline"><span>{selected.label}</span><span>project overview</span></div><div className={`artifact-visual visual-${selected.id}`} aria-hidden="true"><div className="visual-grid" /><div className="visual-wave wave-a" /><div className="visual-wave wave-b" /><div className="visual-pulse" /><div className="visual-path" /><span className="visual-ascii">{selected.id === "alignment" ? "[||||]" : selected.id === "chess" ? "e4  e5" : "{•••}"}</span><span className="visual-metric">{selected.id === "alignment" ? "30×" : selected.id === "chess" ? "∞" : "01"}</span></div><h3>{selected.title}</h3><p>{selected.body}</p><div className="card-footer"><span>{selected.detail}</span><span className="card-mark">GS / {selected.id}</span></div></article>
        </div>
      </section>


      <section id="about" className="about-section"><div className="section-wrap about-inner"><p className="eyebrow">A short introduction</p><div className="about-content"><h2>Serious about the work.<br /><em>Not too serious about myself.</em></h2><div><p>I&apos;m a software engineer at Procter &amp; Gamble and a University of Michigan engineer by training. I like ambitious projects with real constraints, then figuring out how to make them fast, understandable, and useful.</p><p>When I&apos;m away from the terminal, I&apos;m usually thinking about chess engines, aquariums, plants, or some system that is more interesting than it first appears.</p><a className="text-link dark-link" href="mailto:gannonsmithr@gmail.com">Let&apos;s talk <span>↗</span></a></div></div></div></section>
      <footer className="site-footer section-wrap"><span>© 2026 Gannon Smith</span><span>Designed and built by Gannon Smith.</span><div><a href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/gannonsmith/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </main>
  );
}
