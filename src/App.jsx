import React, { useState, useEffect, useRef } from "react";
import {
  Play, Pause, SkipBack, SkipForward, ChevronUp, ChevronDown,
  Link2, Mail, Users, Library, User, MessageCircle,
  ExternalLink, Volume2, Disc3,
} from "lucide-react";

/* ============================================================================
   CUSTOMIZE ME
   - Update PROFILE with your name / role / bio / links
   - Update PROJECTS with your own work. Each project is a "track".
   - Swap colorA/colorB per project for different cover-art gradients.
   - Change --accent / --accent-2 / --accent-deep in the <style> block below
     to re-theme the whole site.
   ========================================================================== */

const PROFILE = {
  name: "Joshua Kweon",
  handle: "@joshuakweon.dev",
  role: "Currently Looking",
  location: "Based in Boston, MA",
  bio:
    "I build products end to end — from database schema to the pixel that ships. Most of what's here started as a small itch to fix something, and turned into a project I couldn't stop refining. I like fast feedback loops, clean APIs, and interfaces that get out of the way.",
  stats: [
    { label: "Years shipping", value: "6" },
    { label: "Projects released", value: "24" },
    { label: "Favorite stack", value: "TS + Postgres" },
  ],
  credits: [
    "TypeScript", "React", "Node.js", "PostgreSQL", "Python",
    "GraphQL", "Docker", "AWS", "Figma", "Rust",
  ],
  email: "kweonjosh@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
};

const PROJECTS = [
  {
    id: 1,
    title: "Nimbus",
    tag: "Web App",
    year: "2025",
    duration: "4:12",
    colorA: "#35c56a",
    colorB: "#0e4a26",
    description:
      "A cloud cost dashboard that pulls usage data from AWS, GCP, and Azure into one view, so teams stop finding out about a billing spike three weeks after it happens. I built the ingestion pipeline to normalize wildly different billing APIs into one schema, then designed the alerting layer so it flags anomalies same-day instead of at end of month.",
    role: "Solo project — design, backend, and infra",
    stack: ["TypeScript", "Next.js", "PostgreSQL", "AWS Lambda", "Recharts"],
    outcome: "Adopted by two small startups to track multi-cloud spend; cut one team's monthly overage by 31%.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
  {
    id: 2,
    title: "Pathfinder",
    tag: "Data Viz",
    year: "2024",
    duration: "3:47",
    colorA: "#7ee2a0",
    colorB: "#1f6b3f",
    description:
      "An interactive visualizer for route-optimization algorithms — Dijkstra, A*, and a couple of greedy heuristics — rendered on real city grids so you can watch the search frontier expand step by step. Built mainly to make a hard CS concept click for people learning it, myself included.",
    role: "Solo project — algorithms and frontend",
    stack: ["React", "D3.js", "Web Workers"],
    outcome: "Used in two university intro-algorithms courses as a teaching aid.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
  {
    id: 3,
    title: "Echo",
    tag: "Full-Stack",
    year: "2024",
    duration: "5:03",
    colorA: "#4ade80",
    colorB: "#14532d",
    description:
      "A real-time chat app with sub-100ms message delivery, built to understand WebSocket scaling under real load. Handles presence, typing indicators, and read receipts across horizontally scaled nodes using Redis pub/sub, with a reconnect strategy that survives flaky mobile connections.",
    role: "Team of 2 — I owned the backend and infra",
    stack: ["Node.js", "Socket.io", "Redis", "Docker", "React"],
    outcome: "Load-tested to 10k concurrent connections on a single small instance cluster.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
  {
    id: 4,
    title: "Loom",
    tag: "Open Source",
    year: "2023",
    duration: "6:29",
    colorA: "#22c55e",
    colorB: "#052e16",
    description:
      "A small, opinionated component library for internal tools — accessible by default, themeable in one file, and built to be deleted from a project as easily as it was added. Started because I was tired of re-solving the same dropdown-focus-trap bug on every new project.",
    role: "Solo project, now maintained with 3 contributors",
    stack: ["TypeScript", "React", "Radix UI", "Vitest"],
    outcome: "420+ GitHub stars, used in production by a handful of teams I've never met.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
  {
    id: 5,
    title: "Sift",
    tag: "ML / AI",
    year: "2023",
    duration: "4:55",
    colorA: "#16a34a",
    colorB: "#052e16",
    description:
      "A lightweight content-moderation classifier for a community forum with under 50k posts — too small for enterprise moderation tools, too much volume for manual review. Fine-tuned a small transformer model on labeled forum data and wrapped it in a review queue so moderators approve edge cases instead of drowning in all of them.",
    role: "Solo project — data, modeling, and tooling",
    stack: ["Python", "PyTorch", "FastAPI", "PostgreSQL"],
    outcome: "Cut moderator review volume by roughly 70% while keeping false-negatives low.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
  {
    id: 6,
    title: "Wayfarer",
    tag: "Mobile",
    year: "2022",
    duration: "3:18",
    colorA: "#86efac",
    colorB: "#166534",
    description:
      "A trip planner that builds a day-by-day itinerary from a rough list of places you want to see, factoring in opening hours and walking distance so you're not zigzagging across a city. My first shipped mobile app, and the project that got me comfortable with offline-first data sync.",
    role: "Solo project — full mobile app",
    stack: ["React Native", "SQLite", "Mapbox"],
    outcome: "Personal project turned side-tool — used it to plan three of my own trips.",
    links: { github: "https://github.com/", live: "https://example.com/" },
  },
];

const TAGS = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];
const DEMO_SECONDS = 18; // how long the fake "playback" takes per track, purely cosmetic

function formatTime(pct, totalLabel) {
  const [m, s] = totalLabel.split(":").map(Number);
  const totalSeconds = m * 60 + s;
  const elapsed = Math.floor((pct / 100) * totalSeconds);
  const em = Math.floor(elapsed / 60);
  const es = String(elapsed % 60).padStart(2, "0");
  return `${em}:${es}`;
}

export default function Portfolio() {
  const [view, setView] = useState("library"); // library | about | contact
  const [activeTag, setActiveTag] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const intervalRef = useRef(null);

  const filtered =
    activeTag === "All" ? PROJECTS : PROJECTS.filter((p) => p.tag === activeTag);

  const current = currentIndex !== null ? PROJECTS[currentIndex] : null;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            goNext();
            return 0;
          }
          return p + 100 / (DEMO_SECONDS * 10);
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentIndex]);

  function playTrack(index) {
    if (currentIndex === index) {
      setIsPlaying((p) => !p);
    } else {
      setCurrentIndex(index);
      setProgress(0);
      setIsPlaying(true);
    }
  }

  function goNext() {
    setCurrentIndex((i) => {
      const next = i === null ? 0 : (i + 1) % PROJECTS.length;
      setProgress(0);
      return next;
    });
  }

  function goPrev() {
    setCurrentIndex((i) => {
      const prev = i === null ? 0 : (i - 1 + PROJECTS.length) % PROJECTS.length;
      setProgress(0);
      return prev;
    });
  }

  return (
    <div className="pf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .pf-root {
          --bg: #0a0a0b;
          --bg-elevated: #131315;
          --surface: #18181b;
          --border: #232326;
          --text: #f2f1ec;
          --text-dim: #8e8c88;
          --text-faint: #595754;
          --accent: #35c56a;
          --accent-2: #7ee2a0;
          --accent-deep: #0e4a26;
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          width: 100%;
          height: 100vh;
          display: flex;
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
        }
        .pf-root *, .pf-root *::before, .pf-root *::after { box-sizing: border-box; }
        .pf-display { font-family: 'Space Grotesk', sans-serif; }
        .pf-mono { font-family: 'JetBrains Mono', monospace; }
        .pf-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .pf-scroll { flex: 1; overflow-y: auto; min-height: 0; }
        .pf-scroll::-webkit-scrollbar { width: 8px; }
        .pf-scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
        .pf-scroll::-webkit-scrollbar-track { background: transparent; }

        /* SIDEBAR */
        .pf-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: var(--bg-elevated);
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          padding: 1.75rem 1.25rem;
          gap: 2.25rem;
        }
        .pf-sidebar-header { display: flex; align-items: center; gap: 0.65rem; padding: 0 0.15rem; }
        .pf-logo-mark {
          width: 36px; height: 36px; border-radius: 10px;
          background: var(--accent); color: #0a0a0b;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 1rem; flex-shrink: 0;
        }
        .pf-sidebar-name { font-size: 1rem; font-weight: 600; letter-spacing: -0.01em; }
        .pf-nav { display: flex; flex-direction: column; gap: 0.3rem; }
        .pf-navitem {
          display: flex; align-items: center; gap: 0.8rem;
          padding: 0.65rem 0.9rem; border-radius: 8px;
          color: var(--text-dim); cursor: pointer;
          font-weight: 500; font-size: 0.92rem;
          transition: color 0.15s, background 0.15s;
          border: none; background: transparent; width: 100%; text-align: left;
        }
        .pf-navitem:hover { color: var(--text); background: var(--surface); }
        .pf-navitem.active { color: var(--text); background: var(--surface); }
        .pf-navitem.active svg { color: var(--accent); }
        .pf-sidebar-footer {
          margin-top: auto; padding: 0 0.15rem;
          font-size: 0.75rem; line-height: 1.7; color: var(--text-faint);
        }

        .pf-iconbtn {
          background: transparent; border: none; color: var(--text-dim);
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: color 0.15s;
        }
        .pf-iconbtn:hover { color: var(--text); }
        .pf-iconbtn:focus-visible, .pf-navitem:focus-visible, .pf-chip:focus-visible, .pf-playbtn:focus-visible {
          outline: 2px solid var(--accent); outline-offset: 2px;
        }

        /* MAIN */
        .pf-main { flex: 1; display: flex; flex-direction: column; min-width: 0; position: relative; }
        .pf-content { max-width: 1180px; margin: 0 auto; width: 100%; padding: 3.25rem 3.5rem 2rem; }

        /* HERO */
        .pf-hero { display: flex; align-items: flex-end; gap: 2rem; margin-bottom: 2.75rem; flex-wrap: wrap; }
        .pf-hero-cover {
          width: 168px; height: 168px; border-radius: 16px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, var(--accent), var(--accent-deep));
        }
        .pf-eyebrow { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-dim); }
        .pf-hero-title {
          font-size: clamp(2.75rem, 4.2vw, 4rem); font-weight: 700;
          margin: 0.5rem 0 0.9rem; letter-spacing: -0.02em; line-height: 1.05;
        }
        .pf-hero-meta { font-size: 1rem; color: var(--text-dim); margin-bottom: 1.4rem; }
        .pf-playbtn {
          border-radius: 50%; background: var(--accent); color: #0a0a0b;
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer; flex-shrink: 0; transition: transform 0.1s;
        }
        .pf-playbtn:hover { transform: scale(1.05); }
        .pf-playbtn:active { transform: scale(0.96); }
        .pf-playbtn-lg { width: 3.5rem; height: 3.5rem; }
        .pf-playbtn-sm { width: 2.2rem; height: 2.2rem; }

        /* CHIPS */
        .pf-chip-row { display: flex; gap: 0.65rem; margin-bottom: 2.25rem; overflow-x: auto; padding-bottom: 0.3rem; }
        .pf-chip {
          padding: 0.45rem 1.05rem; border-radius: 999px; flex-shrink: 0;
          border: 1px solid var(--border); color: var(--text-dim);
          font-size: 0.86rem; font-weight: 500; cursor: pointer;
          background: transparent; white-space: nowrap;
          transition: all 0.15s;
        }
        .pf-chip:hover { border-color: var(--text-dim); color: var(--text); }
        .pf-chip.active { background: var(--accent); border-color: var(--accent); color: #0a0a0b; }

        /* TRACK LIST */
        .pf-track-header {
          display: grid;
          grid-template-columns: 2.5rem 1fr 5rem 4.5rem;
          gap: 1.25rem; align-items: center;
          padding: 0 1rem 0.75rem;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em;
          color: var(--text-faint);
          border-bottom: 1px solid var(--border);
          margin-bottom: 0.4rem;
        }
        .pf-track-header .pf-th-right { text-align: right; }

        .pf-track-row {
          display: grid;
          grid-template-columns: 2.5rem 1fr 5rem 4.5rem;
          gap: 1.25rem; align-items: center;
          padding: 0.85rem 1rem; border-radius: 10px;
          cursor: pointer; transition: background 0.12s;
        }
        .pf-track-row:hover { background: var(--surface); }
        .pf-track-row.playing { background: var(--surface); }

        .pf-track-index {
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace; font-size: 0.88rem; color: var(--text-faint);
        }
        .pf-track-row.playing .pf-track-index { color: var(--accent); }

        .pf-track-main { display: flex; align-items: center; gap: 1rem; min-width: 0; }
        .pf-cover {
          border-radius: 7px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Space Grotesk', sans-serif; font-weight: 700;
          color: rgba(0,0,0,0.55);
        }
        .pf-track-text { min-width: 0; }
        .pf-track-title { font-size: 1.02rem; font-weight: 600; margin-bottom: 3px; }
        .pf-track-row.playing .pf-track-title { color: var(--accent); }
        .pf-track-sub { font-size: 0.85rem; color: var(--text-dim); }

        .pf-track-meta {
          font-family: 'JetBrains Mono', monospace; font-size: 0.82rem;
          color: var(--text-faint); text-align: right;
        }

        .pf-eq { display: flex; align-items: flex-end; justify-content: center; gap: 2px; height: 14px; }
        .pf-eq span {
          width: 3px; background: var(--accent); border-radius: 1px;
          animation: eq 0.9s ease-in-out infinite;
        }
        .pf-eq span:nth-child(1) { animation-delay: 0s; height: 40%; }
        .pf-eq span:nth-child(2) { animation-delay: 0.2s; height: 100%; }
        .pf-eq span:nth-child(3) { animation-delay: 0.4s; height: 60%; }
        @keyframes eq { 0%, 100% { height: 30%; } 50% { height: 100%; } }

        /* LYRICS / DETAIL PANEL */
        .pf-lyrics-overlay {
          position: absolute; inset: 0; background: var(--bg);
          transform: translateY(100%);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 30; display: flex; flex-direction: column;
        }
        .pf-lyrics-overlay.open { transform: translateY(0); }
        .pf-lyrics-content { max-width: 760px; margin: 0 auto; width: 100%; padding: 3.5rem 2.5rem 3rem; }
        .pf-back-btn {
          display: flex; align-items: center; gap: 0.4rem;
          font-size: 0.92rem; margin-bottom: 2.25rem; padding: 0;
        }
        .pf-lyrics-head { display: flex; align-items: center; gap: 1.35rem; margin-bottom: 2rem; }
        .pf-lyrics-title { font-size: 2.1rem; font-weight: 700; margin: 0.6rem 0 0; letter-spacing: -0.01em; }
        .pf-lyrics-role { font-size: 0.92rem; color: var(--text-dim); margin-top: 0.4rem; }
        .pf-lyrics-body { font-size: 1.05rem; line-height: 1.75; margin-bottom: 2rem; color: var(--text); }

        .pf-tag-pill {
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.04em;
          padding: 0.25rem 0.7rem; border-radius: 999px;
          background: var(--surface); color: var(--accent-2);
          border: 1px solid var(--border); text-transform: uppercase;
        }

        .pf-section { margin-bottom: 2rem; }
        .pf-section-label {
          font-size: 0.74rem; font-weight: 600; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--text-faint); margin-bottom: 0.6rem;
        }
        .pf-section-body { font-size: 0.95rem; line-height: 1.65; color: var(--text-dim); }

        .pf-pill-row { display: flex; flex-wrap: wrap; gap: 0.55rem; }
        .pf-stack-pill { font-size: 0.82rem; padding: 0.35rem 0.8rem; border-radius: 7px; background: var(--surface); color: var(--text-dim); border: 1px solid var(--border); }

        .pf-link-row { display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 0.5rem; }
        .pf-link-btn {
          display: inline-flex; align-items: center; gap: 0.55rem;
          padding: 0.7rem 1.25rem; border-radius: 9px;
          font-size: 0.92rem; font-weight: 500; text-decoration: none;
          transition: opacity 0.15s, border-color 0.15s;
        }
        .pf-link-btn:hover { opacity: 0.85; }
        .pf-link-btn.primary { background: var(--accent); color: #0a0a0b; }
        .pf-link-btn.secondary { border: 1px solid var(--border); color: var(--text); }
        .pf-link-btn.secondary:hover { border-color: var(--accent); }

        /* PLAYER BAR */
        .pf-player-bar {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; align-items: center; gap: 1.5rem;
          padding: 0 1.5rem; height: 5.5rem; z-index: 40;
          background: var(--bg-elevated); border-top: 1px solid var(--border);
        }
        .pf-player-track { width: 200px; min-width: 0; }
        .pf-player-track-title { font-size: 0.95rem; font-weight: 600; }
        .pf-player-track-sub { font-size: 0.82rem; color: var(--text-dim); }
        .pf-player-center { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.4rem; max-width: 38rem; margin: 0 auto; min-width: 0; }
        .pf-transport { display: flex; align-items: center; gap: 1.4rem; }
        .pf-progress-row { display: flex; align-items: center; gap: 0.7rem; width: 100%; font-size: 0.72rem; color: var(--text-faint); }
        .pf-progress-track { height: 3px; flex: 1; background: var(--border); border-radius: 999px; cursor: pointer; }
        .pf-progress-fill { height: 100%; background: var(--text); border-radius: 999px; }
        .pf-progress-track:hover .pf-progress-fill { background: var(--accent); }
        .pf-player-right { display: flex; align-items: center; gap: 1rem; flex-shrink: 0; }
        .pf-details-label { font-size: 0.82rem; color: var(--text-dim); margin-left: 0.3rem; }

        /* ABOUT */
        .pf-about-title { font-size: clamp(2.25rem, 3.6vw, 3rem); font-weight: 700; margin: 0.5rem 0 0.3rem; letter-spacing: -0.02em; }
        .pf-about-role { font-size: 1rem; color: var(--accent-2); margin-bottom: 1.75rem; }
        .pf-about-bio { font-size: 1.05rem; line-height: 1.75; margin-bottom: 2.5rem; max-width: 620px; }
        .pf-stats-grid { display: grid; grid-template-columns: repeat(3, minmax(120px, 1fr)); gap: 1.5rem; margin-bottom: 2.75rem; max-width: 620px; }
        .pf-stat-item { padding-left: 0.9rem; border-left: 2px solid var(--accent); }
        .pf-stat-value { font-size: 1.7rem; font-weight: 700; }
        .pf-stat-label { font-size: 0.8rem; color: var(--text-dim); margin-top: 0.15rem; }

        /* CONTACT */
        .pf-contact-title { font-size: clamp(2.25rem, 3.6vw, 3rem); font-weight: 700; margin: 0.5rem 0 0.9rem; letter-spacing: -0.02em; }
        .pf-contact-intro { font-size: 1.02rem; line-height: 1.7; color: var(--text-dim); margin-bottom: 2.5rem; max-width: 520px; }
        .pf-contact-list { display: flex; flex-direction: column; gap: 0.9rem; max-width: 480px; }
        .pf-contact-row {
          display: flex; align-items: center; gap: 1rem;
          padding: 1.1rem 1.25rem; border-radius: 12px;
          background: var(--surface); border: 1px solid var(--border);
          text-decoration: none; color: inherit;
          transition: border-color 0.15s;
        }
        .pf-contact-row:hover { border-color: var(--accent); }
        .pf-contact-row-title { font-size: 0.98rem; font-weight: 600; }
        .pf-contact-row-sub { font-size: 0.85rem; color: var(--text-dim); margin-top: 2px; }

        @media (prefers-reduced-motion: reduce) {
          .pf-eq span, .pf-lyrics-overlay { animation: none !important; transition: none !important; }
        }

        @media (max-width: 860px) {
          .pf-sidebar { display: none; }
          .pf-content { padding: 2.25rem 1.5rem 1.5rem; }
          .pf-track-header, .pf-track-row { grid-template-columns: 2rem 1fr 4rem; }
          .pf-th-year, .pf-track-year { display: none; }
          .pf-player-track { width: 130px; }
          .pf-vol-icon, .pf-details-label { display: none; }
        }
      `}</style>

      {/* SIDEBAR */}
      <aside className="pf-sidebar">
        <div className="pf-sidebar-header">
          <div className="pf-display pf-logo-mark">JL</div>
          <div className="pf-display pf-sidebar-name">{PROFILE.name}</div>
        </div>

        <nav className="pf-nav">
          <button className={`pf-navitem ${view === "library" ? "active" : ""}`} onClick={() => setView("library")}>
            <Library size={18} /> Selected Works
          </button>
          <button className={`pf-navitem ${view === "about" ? "active" : ""}`} onClick={() => setView("about")}>
            <User size={18} /> About
          </button>
          <button className={`pf-navitem ${view === "contact" ? "active" : ""}`} onClick={() => setView("contact")}>
            <MessageCircle size={18} /> Contact
          </button>
        </nav>

        <div className="pf-sidebar-footer pf-mono">
          {PROFILE.handle}
          <br />
          {PROFILE.location}
        </div>
      </aside>

      {/* MAIN */}
      <main className="pf-main">
        <div className="pf-scroll" style={{ paddingBottom: current ? "5.5rem" : 0 }}>
          {view === "library" && (
            <LibraryView
              filtered={filtered}
              activeTag={activeTag}
              setActiveTag={setActiveTag}
              currentIndex={currentIndex}
              isPlaying={isPlaying}
              playTrack={playTrack}
            />
          )}
          {view === "about" && <AboutView />}
          {view === "contact" && <ContactView />}
        </div>

        {/* LYRICS / DETAIL OVERLAY */}
        {current && (
          <div className={`pf-lyrics-overlay ${expanded ? "open" : ""}`}>
            <div className="pf-scroll">
              <LyricsPanel project={current} onClose={() => setExpanded(false)} />
            </div>
          </div>
        )}

        {/* PLAYER BAR */}
        {current && (
          <div className="pf-player-bar">
            <div
              className="pf-cover"
              style={{ width: 52, height: 52, background: `linear-gradient(135deg, ${current.colorA}, ${current.colorB})`, fontSize: "1.15rem" }}
            >
              {current.title[0]}
            </div>

            <div className="pf-player-track">
              <div className="pf-player-track-title pf-truncate">{current.title}</div>
              <div className="pf-player-track-sub pf-truncate">{PROFILE.name}</div>
            </div>

            <div className="pf-player-center">
              <div className="pf-transport">
                <button className="pf-iconbtn" onClick={goPrev} aria-label="Previous project">
                  <SkipBack size={18} fill="currentColor" />
                </button>
                <button
                  className="pf-playbtn pf-playbtn-sm"
                  onClick={() => setIsPlaying((p) => !p)}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" style={{ marginLeft: 2 }} />}
                </button>
                <button className="pf-iconbtn" onClick={goNext} aria-label="Next project">
                  <SkipForward size={18} fill="currentColor" />
                </button>
              </div>
              <div className="pf-progress-row pf-mono">
                <span>{formatTime(progress, current.duration)}</span>
                <div className="pf-progress-track"><div className="pf-progress-fill" style={{ width: `${progress}%` }} /></div>
                <span>{current.duration}</span>
              </div>
            </div>

            <div className="pf-player-right">
              <Volume2 size={16} className="pf-vol-icon" style={{ color: "var(--text-faint)" }} />
              <button
                className="pf-iconbtn"
                onClick={() => setExpanded((e) => !e)}
                aria-label={expanded ? "Hide project details" : "Show project details"}
                title="Tell me more about this project"
                style={{ display: "flex", alignItems: "center" }}
              >
                {expanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                <span className="pf-details-label">Details</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function LibraryView({ filtered, activeTag, setActiveTag, currentIndex, isPlaying, playTrack }) {
  return (
    <div className="pf-content">
      <div className="pf-hero">
        <div className="pf-hero-cover">
          <Disc3 size={58} color="rgba(0,0,0,0.4)" />
        </div>
        <div>
          <h1 className="pf-display pf-hero-title">Selected Works</h1>
          <div className="pf-hero-meta">
            {PROFILE.name} · {PROJECTS.length} tracks · press play to hear more about any of them
          </div>
          <button className="pf-playbtn pf-playbtn-lg" onClick={() => playTrack(0)} aria-label="Play all projects">
            <Play size={22} fill="currentColor" style={{ marginLeft: 3 }} />
          </button>
        </div>
      </div>

      <div className="pf-chip-row">
        {TAGS.map((tag) => (
          <button key={tag} className={`pf-chip ${activeTag === tag ? "active" : ""}`} onClick={() => setActiveTag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      <div className="pf-track-header pf-mono">
        <span>#</span>
        <span>TITLE</span>
        <span className="pf-th-year">YEAR</span>
        <span className="pf-th-right">TIME</span>
      </div>

      <div>
        {filtered.map((p) => {
          const globalIndex = PROJECTS.findIndex((x) => x.id === p.id);
          const isCurrent = currentIndex === globalIndex;
          return (
            <div
              key={p.id}
              className={`pf-track-row ${isCurrent ? "playing" : ""}`}
              onClick={() => playTrack(globalIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && playTrack(globalIndex)}
            >
              <div className="pf-track-index">
                {isCurrent && isPlaying ? (
                  <div className="pf-eq"><span /><span /><span /></div>
                ) : (
                  String(globalIndex + 1).padStart(2, "0")
                )}
              </div>

              <div className="pf-track-main">
                <div className="pf-cover" style={{ width: 44, height: 44, fontSize: "1rem", background: `linear-gradient(135deg, ${p.colorA}, ${p.colorB})` }}>
                  {p.title[0]}
                </div>
                <div className="pf-track-text">
                  <div className="pf-track-title pf-truncate">{p.title}</div>
                  <div className="pf-track-sub pf-truncate">{p.tag} · {p.stack.slice(0, 2).join(", ")}</div>
                </div>
              </div>

              <div className="pf-track-meta pf-track-year">{p.year}</div>
              <div className="pf-track-meta">{p.duration}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LyricsPanel({ project, onClose }) {
  return (
    <div className="pf-lyrics-content">
      <button className="pf-iconbtn pf-back-btn" onClick={onClose}>
        <ChevronDown size={18} /> Back to playback
      </button>

      <div className="pf-lyrics-head">
        <div className="pf-cover" style={{ width: 76, height: 76, borderRadius: 12, fontSize: "1.7rem", background: `linear-gradient(135deg, ${project.colorA}, ${project.colorB})` }}>
          {project.title[0]}
        </div>
        <div>
          <span className="pf-tag-pill">{project.tag}</span>
          <h2 className="pf-display pf-lyrics-title">{project.title}</h2>
          <div className="pf-lyrics-role">{project.role} · {project.year}</div>
        </div>
      </div>

      <p className="pf-lyrics-body">{project.description}</p>

      <div className="pf-section">
        <div className="pf-section-label">Outcome</div>
        <p className="pf-section-body">{project.outcome}</p>
      </div>

      <div className="pf-section">
        <div className="pf-section-label">Built with</div>
        <div className="pf-pill-row">
          {project.stack.map((s) => <span key={s} className="pf-stack-pill">{s}</span>)}
        </div>
      </div>

      <div className="pf-link-row">
        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="pf-link-btn primary">
          <ExternalLink size={16} /> View live
        </a>
        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="pf-link-btn secondary">
          <Link2 size={16} /> Source
        </a>
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="pf-content">
      <h1 className="pf-display pf-about-title">{PROFILE.name}</h1>
      <div className="pf-about-role">{PROFILE.role}</div>
      <p className="pf-about-bio">{PROFILE.bio}</p>

      <div className="pf-stats-grid">
        {PROFILE.stats.map((s) => (
          <div key={s.label} className="pf-stat-item">
            <div className="pf-display pf-stat-value">{s.value}</div>
            <div className="pf-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="pf-section-label">Credits</div>
      <div className="pf-pill-row">
        {PROFILE.credits.map((c) => <span key={c} className="pf-stack-pill">{c}</span>)}
      </div>
    </div>
  );
}

function ContactView() {
  return (
    <div className="pf-content">
      <h1 className="pf-display pf-contact-title">Get in touch</h1>
      <p className="pf-contact-intro">
        Open to full-time roles, freelance work, or just talking shop about something you're building.
      </p>

      <div className="pf-contact-list">
        <a href={`mailto:${PROFILE.email}`} className="pf-contact-row">
          <Mail size={20} style={{ color: "var(--accent)" }} />
          <div>
            <div className="pf-contact-row-title">Email</div>
            <div className="pf-contact-row-sub">{PROFILE.email}</div>
          </div>
        </a>
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="pf-contact-row">
          <Link2 size={20} style={{ color: "var(--accent)" }} />
          <div>
            <div className="pf-contact-row-title">GitHub</div>
            <div className="pf-contact-row-sub">See the source behind these tracks</div>
          </div>
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="pf-contact-row">
          <Users size={20} style={{ color: "var(--accent)" }} />
          <div>
            <div className="pf-contact-row-title">LinkedIn</div>
            <div className="pf-contact-row-sub">Let's connect</div>
          </div>
        </a>
      </div>
    </div>
  );
}