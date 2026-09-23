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
  { id: "alignment", label: "01 / algorithms", title: "Smith–Waterman accelerator", body: "A systolic-array implementation that makes sequence alignment feel physical: data enters, waves through the grid, and the best score emerges.", detail: "30× speedup over SPOA · Verilog · FPGA", accent: "rust" },
  { id: "chess", label: "02 / software", title: "Jester chess engine", body: "A C++ engine built to understand the machinery behind a move: bitboards, search, evaluation, and the satisfying violence of pruning a tree.", detail: "C++ · minimax · alpha-beta pruning", accent: "blue" },
  { id: "bubble", label: "03 / systems", title: "Bubble", body: "A secure location-sharing and messaging system. A team project where the interesting work lived below the interface.", detail: "Rust · Axum · encrypted messaging", accent: "green" },
];

const notes = [
  ["reading", "A Tour of C++", "still finding corners I missed the first time"],
  ["building", "a better portfolio", "this is the first sketch"],
  ["playing", "Rocket League", "mechanics remain humbling"],
];

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
          <a href="#work">Work</a><a href="#notes">Notes</a><a href="#about">About</a>
          <a className="nav-contact" href="mailto:gannonsmithr@gmail.com">Say hello <span>↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Cincinnati, OH · currently at P&amp;G</p>
          <h1>I like finding out<br /><em>how things work.</em></h1>
          <p className="hero-intro">I&apos;m Gannon Smith, a software engineer who moves comfortably between the application and the architecture underneath it.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore the work <span>↓</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/gannonsmith/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a className="text-link" href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="hero-scribble" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="orbit-node node-one" /><div className="orbit-node node-two" /><div className="orbit-core">⌁</div><span className="scribble-label label-top">software</span><span className="scribble-label label-right">hardware</span><span className="scribble-label label-bottom">curiosity</span><span className="scribble-arrow">↗</span></div>
      </section>

      <section className="signal-strip" aria-label="Selected facts"><div><strong>01</strong><span>systems thinker</span></div><div><strong>02</strong><span>builder at heart</span></div><div><strong>03</strong><span>always learning</span></div><p>Good engineering is a conversation<br />between constraints and imagination.</p></section>

      <section id="work" className="section-wrap work-section">
        <Reveal className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A few things I&apos;ve made<br /><em>and what they taught me.</em></h2></div><p className="heading-note">I&apos;m most interested in the places where software meets a physical limit: memory, latency, silicon, or simply another person.</p></Reveal>
        <div className="workbench">
          <div className="artifact-list" role="tablist" aria-label="Project artifacts">
            {artifacts.map((artifact) => <button key={artifact.id} className={`artifact-tab ${selected.id === artifact.id ? "is-selected" : ""}`} onClick={() => setSelected(artifact)} role="tab" aria-selected={selected.id === artifact.id}><span className={`artifact-number ${artifact.accent}`}>{artifact.label.split(" ")[0]}</span><span><strong>{artifact.title}</strong><small>{artifact.detail}</small></span><span className="tab-arrow">{selected.id === artifact.id ? "↗" : "→"}</span></button>)}
            <a className="all-work" href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">See more on GitHub <span>↗</span></a>
          </div>
          <article className={`artifact-card ${selected.accent}`} role="tabpanel"><div className="card-topline"><span>{selected.label}</span><span>field notes / 2025</span></div><div className={`artifact-visual visual-${selected.id}`} aria-hidden="true"><div className="visual-grid" /><div className="visual-wave wave-a" /><div className="visual-wave wave-b" /><div className="visual-pulse" /><div className="visual-path" /><span className="visual-metric">{selected.id === "alignment" ? "30×" : selected.id === "chess" ? "∞" : "01"}</span></div><h3>{selected.title}</h3><p>{selected.body}</p><div className="card-footer"><span>{selected.detail}</span><span className="card-mark">GS / {selected.id}</span></div></article>
        </div>
      </section>

      <section id="notes" className="section-wrap notes-section"><Reveal className="section-heading compact"><div><p className="eyebrow">A little more human</p><h2>Current <em>notes.</em></h2></div><p className="heading-note">A running list of things occupying my attention. It changes as I do.</p></Reveal><div className="notes-grid">{notes.map(([kind, title, detail], index) => <Reveal className="note" delay={index * 90} key={kind}><span className="note-index">0{index + 1}</span><p className="note-kind">{kind}</p><h3>{title}</h3><p>{detail}</p></Reveal>)}</div></section>

      <section id="about" className="about-section"><div className="section-wrap about-inner"><p className="eyebrow">A short introduction</p><div className="about-content"><h2>Serious about the work.<br /><em>Not too serious about myself.</em></h2><div><p>I&apos;m a software engineer at Procter &amp; Gamble and a University of Michigan engineer by training. My favorite projects are the ones that make me learn a new layer of the stack.</p><p>When I&apos;m away from the terminal, I&apos;m probably at the gym, playing something competitive, or trying to explain why a seemingly small detail matters.</p><a className="text-link dark-link" href="mailto:gannonsmithr@gmail.com">Let&apos;s talk <span>↗</span></a></div></div></div></section>
      <footer className="site-footer section-wrap"><span>© 2025 Gannon Smith</span><span>Built with care, curiosity, and too many tabs.</span><div><a href="https://github.com/gannonsmith" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/gannonsmith/" target="_blank" rel="noreferrer">LinkedIn</a></div></footer>
    </main>
  );
}
