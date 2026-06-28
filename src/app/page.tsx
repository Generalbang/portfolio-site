<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Ojo Dare Johnson | Full-Stack Developer</title>
<meta name="description" content="Full-Stack Developer specializing in Node.js, TypeScript, Next.js, and PostgreSQL. Building scalable web apps and AI-powered products. Open to remote roles."/>
<meta name="author" content="Ojo Dare Johnson"/>
<meta property="og:title" content="Ojo Dare Johnson | Full-Stack Developer"/>
<meta property="og:description" content="Full-Stack Developer building scalable web apps and AI-powered products. Open to remote roles worldwide."/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="https://codrex-portfolio.vercel.app"/>
<meta property="og:image" content="https://codrex-portfolio.vercel.app/avatar-placeholder.png"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:creator" content="@0x_codrex"/>
<meta name="twitter:title" content="Ojo Dare Johnson | Full-Stack Developer"/>
<meta name="twitter:description" content="Full-Stack Developer building scalable web apps and AI-powered products."/>
<meta name="twitter:image" content="https://codrex-portfolio.vercel.app/avatar-placeholder.png"/>
<link rel="canonical" href="https://codrex-portfolio.vercel.app"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
/* ── TOKENS ─────────────────────────────────── */
:root {
  --bg:       #0d1117;
  --surface:  #161b22;
  --panel:    #1c2333;
  --card:     #21262d;
  --border:   #30363d;
  --border2:  #21262d;
  --green:    #00ff9f;
  --green-dim:#00cc7a;
  --blue:     #58a6ff;
  --red:      #ff7b72;
  --yellow:   #e3b341;
  --purple:   #bc8cff;
  --text:     #e6edf3;
  --dim:      #8b949e;
  --dimmer:   #484f58;
  --mono:     'Fira Code', 'Cascadia Code', 'Consolas', monospace;
}

/* ── RESET ───────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--mono);
  font-size: 14px;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "liga" 1, "calt" 1;
}
a { color: inherit; text-decoration: none; }
button { font-family: var(--mono); cursor: pointer; border: none; background: none; }
::selection { background: rgba(0,255,159,0.2); color: var(--text); }

/* ── SCROLLBAR ───────────────────────────────── */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--dimmer); }

/* ── BOOT SCREEN ─────────────────────────────── */
#boot-screen {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  font-size: 13px;
}
#boot-lines { display: flex; flex-direction: column; gap: 4px; max-width: 680px; }
.boot-line { opacity: 0; white-space: pre; }
.boot-line.show { opacity: 1; }
.boot-ok    { color: var(--green); }
.boot-info  { color: var(--blue); }
.boot-warn  { color: var(--yellow); }
.boot-dim   { color: var(--dim); }
.boot-cursor {
  display: inline-block;
  width: 8px; height: 14px;
  background: var(--green);
  vertical-align: middle;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
#boot-screen.fade-out {
  animation: bootFade 0.6s ease forwards;
}
@keyframes bootFade { to { opacity:0; pointer-events:none; } }

/* ── MAIN LAYOUT ─────────────────────────────── */
#app {
  display: flex;
  min-height: 100vh;
  opacity: 0;
  transition: opacity 0.4s ease;
}
#app.visible { opacity: 1; }

/* ── SIDEBAR ─────────────────────────────────── */
#sidebar {
  width: 240px;
  min-height: 100vh;
  background: var(--surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  flex-shrink: 0;
}
.sidebar-header {
  padding: 16px 16px 12px;
  border-bottom: 1px solid var(--border);
}
.sidebar-traffic {
  display: flex;
  gap: 6px;
  margin-bottom: 12px;
}
.traffic-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
}
.dot-red    { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green  { background: #27c93f; }
.sidebar-title {
  font-size: 11px;
  color: var(--dim);
  letter-spacing: 0.05em;
}
.sidebar-title .prompt { color: var(--green); }
.sidebar-title .at { color: var(--dim); }

.sidebar-section { padding: 12px 0; }
.sidebar-section-label {
  font-size: 10px;
  color: var(--dimmer);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0 16px 8px;
}
.sidebar-nav { list-style: none; }
.sidebar-nav li a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  font-size: 12px;
  color: var(--dim);
  transition: background 0.15s, color 0.15s;
  border-left: 2px solid transparent;
}
.sidebar-nav li a:hover {
  background: var(--panel);
  color: var(--text);
}
.sidebar-nav li a.active {
  color: var(--green);
  border-left-color: var(--green);
  background: rgba(0,255,159,0.06);
}
.sidebar-nav li a .nav-icon { color: var(--dimmer); font-size: 11px; width: 14px; }
.sidebar-nav li a.active .nav-icon { color: var(--green); }

.sidebar-bottom {
  margin-top: auto;
  padding: 12px 16px;
  border-top: 1px solid var(--border);
}
.sidebar-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--green);
  margin-bottom: 8px;
}
.sidebar-status::before {
  content: '';
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse-dot 2s ease infinite;
}
@keyframes pulse-dot {
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:0.4; transform:scale(0.8); }
}
.sidebar-links {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.sidebar-links a {
  font-size: 10px;
  color: var(--dimmer);
  transition: color 0.15s;
}
.sidebar-links a:hover { color: var(--blue); }

/* ── MAIN CONTENT ────────────────────────────── */
#main {
  flex: 1;
  min-width: 0;
  padding: 32px;
  max-width: 900px;
}

/* ── TERMINAL WINDOW ─────────────────────────── */
.term-window {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
}
.term-titlebar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--panel);
  border-bottom: 1px solid var(--border);
}
.term-dots { display: flex; gap: 6px; }
.term-dot { width: 11px; height: 11px; border-radius: 50%; }
.t-red    { background: #ff5f56; }
.t-yellow { background: #ffbd2e; }
.t-green  { background: #27c93f; }
.term-name {
  flex: 1;
  text-align: center;
  font-size: 11px;
  color: var(--dim);
  margin-right: 56px; /* optical center */
}
.term-body { padding: 20px 24px; }

/* ── PROMPT LINE ─────────────────────────────── */
.prompt-line {
  display: flex;
  align-items: baseline;
  gap: 0;
  margin-bottom: 4px;
  flex-wrap: wrap;
}
.p-user  { color: var(--green); font-weight: 600; }
.p-at    { color: var(--dim); }
.p-host  { color: var(--blue); font-weight: 600; }
.p-colon { color: var(--dim); }
.p-path  { color: var(--purple); }
.p-dollar{ color: var(--dim); margin: 0 8px; }
.p-cmd   { color: var(--text); }
.p-arg   { color: var(--yellow); }
.p-flag  { color: var(--dim); }
.p-str   { color: var(--green); }

.cmd-output { margin-top: 12px; }

/* ── HERO SECTION ────────────────────────────── */
#hero { margin-bottom: 0; }
.hero-name {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  color: var(--green);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 6px;
}
.hero-title {
  font-size: 16px;
  color: var(--blue);
  margin-bottom: 16px;
  font-weight: 500;
}
.hero-bio {
  font-size: 13px;
  color: var(--dim);
  max-width: 560px;
  line-height: 1.8;
  margin-bottom: 24px;
}
.hero-bio .hl-green  { color: var(--green); }
.hero-bio .hl-blue   { color: var(--blue); }
.hero-bio .hl-yellow { color: var(--yellow); }
.hero-bio .hl-text   { color: var(--text); }

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}
.badge {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 3px;
  font-weight: 500;
  border: 1px solid;
}
.badge-green  { color: var(--green);  border-color: rgba(0,255,159,0.3);  background: rgba(0,255,159,0.07); }
.badge-blue   { color: var(--blue);   border-color: rgba(88,166,255,0.3);  background: rgba(88,166,255,0.07); }
.badge-yellow { color: var(--yellow); border-color: rgba(227,179,65,0.3);  background: rgba(227,179,65,0.07); }

.hero-actions { display: flex; flex-wrap: wrap; gap: 10px; }
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 4px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 600;
  transition: all 0.15s;
  cursor: pointer;
}
.btn-green {
  background: rgba(0,255,159,0.12);
  border: 1px solid rgba(0,255,159,0.4);
  color: var(--green);
}
.btn-green:hover { background: rgba(0,255,159,0.2); border-color: var(--green); }
.btn-ghost {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--dim);
}
.btn-ghost:hover { border-color: var(--blue); color: var(--blue); }

/* ── STATS ROW ───────────────────────────────── */
.stats-row {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;
}
.stat-cell {
  flex: 1;
  padding: 14px 16px;
  border-right: 1px solid var(--border);
  text-align: center;
}
.stat-cell:last-child { border-right: none; }
.stat-val {
  font-size: 20px;
  font-weight: 700;
  color: var(--green);
  display: block;
  line-height: 1;
  margin-bottom: 4px;
}
.stat-key { font-size: 10px; color: var(--dim); }

/* ── SECTION HEADINGS ────────────────────────── */
.sec-prompt { margin-bottom: 20px; }

/* ── EXPERIENCE ──────────────────────────────── */
.git-log { display: flex; flex-direction: column; gap: 0; }
.git-entry {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 0;
  border-bottom: 1px solid var(--border2);
  padding: 20px 0;
}
.git-entry:last-child { border-bottom: none; }
.git-left { padding-right: 20px; }
.git-hash  { font-size: 11px; color: var(--yellow); margin-bottom: 4px; font-weight: 600; }
.git-date  { font-size: 10px; color: var(--dimmer); margin-bottom: 8px; }
.git-company { font-size: 11px; color: var(--dim); }
.git-right {}
.git-role {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.git-type {
  display: inline-block;
  font-size: 10px;
  padding: 1px 7px;
  border-radius: 2px;
  margin-bottom: 10px;
  font-weight: 600;
  letter-spacing: 0.05em;
}
.type-remote   { background: rgba(88,166,255,0.15); color: var(--blue); }
.type-contract { background: rgba(0,255,159,0.12); color: var(--green); }
.git-bullets { list-style: none; display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
.git-bullets li {
  font-size: 12px;
  color: var(--dim);
  padding-left: 14px;
  position: relative;
  line-height: 1.6;
}
.git-bullets li::before {
  content: '#';
  position: absolute;
  left: 0;
  color: var(--dimmer);
  font-size: 11px;
}
.git-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.git-tag {
  font-size: 10px;
  padding: 2px 8px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--dim);
}

/* ── PROJECTS ────────────────────────────────── */
.proj-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.proj-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.15s, transform 0.15s;
  position: relative;
}
.proj-card:hover {
  border-color: var(--green);
  transform: translateY(-2px);
}
.proj-card.featured {
  grid-column: span 2;
  border-color: rgba(0,255,159,0.25);
  background: linear-gradient(135deg, rgba(0,255,159,0.04) 0%, var(--card) 60%);
}
.proj-card.featured:hover { border-color: var(--green); }
.proj-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}
.proj-name-row { flex: 1; }
.proj-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 3px;
}
.proj-status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  font-weight: 600;
}
.proj-status::before {
  content: '';
  width: 5px; height: 5px;
  border-radius: 50%;
}
.status-live { color: var(--green); }
.status-live::before { background: var(--green); }
.status-wip  { color: var(--yellow); }
.status-wip::before { background: var(--yellow); animation: pulse-dot 2s ease infinite; }
.proj-links-row { display: flex; gap: 6px; flex-shrink: 0; }
.proj-link {
  font-size: 10px;
  color: var(--dimmer);
  border: 1px solid var(--border);
  padding: 3px 8px;
  border-radius: 3px;
  transition: all 0.15s;
}
.proj-link:hover { color: var(--blue); border-color: var(--blue); }
.proj-desc {
  font-size: 12px;
  color: var(--dim);
  line-height: 1.7;
  flex: 1;
}
.proj-tags { display: flex; flex-wrap: wrap; gap: 5px; }
.proj-tag {
  font-size: 10px;
  padding: 2px 7px;
  border-radius: 2px;
  background: var(--panel);
  border: 1px solid var(--border);
  color: var(--dim);
}
.proj-tag.hl { color: var(--green); border-color: rgba(0,255,159,0.3); background: rgba(0,255,159,0.06); }

/* ── SKILLS ──────────────────────────────────── */
.skills-output { display: flex; flex-direction: column; gap: 10px; }
.skill-row { display: grid; grid-template-columns: 120px 1fr; gap: 12px; align-items: baseline; }
.skill-key { font-size: 11px; color: var(--dim); text-align: right; }
.skill-key .colon { color: var(--dimmer); }
.skill-vals { display: flex; flex-wrap: wrap; gap: 5px; }
.skill-val {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 2px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--dim);
  transition: all 0.15s;
}
.skill-val:hover { color: var(--text); border-color: var(--dimmer); }
.skill-val.primary { color: var(--blue); border-color: rgba(88,166,255,0.3); background: rgba(88,166,255,0.07); }
.skill-val.accent  { color: var(--green); border-color: rgba(0,255,159,0.3); background: rgba(0,255,159,0.06); }

/* ── CONTACT ─────────────────────────────────── */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.contact-list { display: flex; flex-direction: column; gap: 8px; }
.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.15s;
}
.contact-item:hover { border-color: var(--green); }
.contact-key { color: var(--purple); min-width: 60px; }
.contact-eq  { color: var(--dimmer); margin: 0 4px; }
.contact-val { color: var(--green); }
.contact-val a { color: inherit; }
.contact-val a:hover { text-decoration: underline; }

/* Contact form */
.cform { display: flex; flex-direction: column; gap: 10px; }
.cform-field { display: flex; flex-direction: column; gap: 4px; }
.cform-label { font-size: 10px; color: var(--dim); }
.cform-label .key { color: var(--purple); }
.cform-label .eq  { color: var(--dimmer); }
.cform-input, .cform-textarea {
  background: var(--card);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: var(--mono);
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.15s;
  width: 100%;
}
.cform-input:focus, .cform-textarea:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 2px rgba(0,255,159,0.08);
}
.cform-input::placeholder, .cform-textarea::placeholder { color: var(--dimmer); }
.cform-textarea { resize: vertical; min-height: 90px; }
.cform-submit {
  background: rgba(0,255,159,0.1);
  border: 1px solid rgba(0,255,159,0.35);
  color: var(--green);
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
  width: 100%;
}
.cform-submit:hover { background: rgba(0,255,159,0.18); }

/* ── FOOTER ──────────────────────────────────── */
#footer-bar {
  border-top: 1px solid var(--border);
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--dimmer);
  background: var(--surface);
  flex-wrap: wrap;
  gap: 8px;
}
.footer-left { display: flex; gap: 16px; align-items: center; }
.footer-right { display: flex; gap: 16px; }
.footer-right a { color: var(--dimmer); transition: color 0.15s; }
.footer-right a:hover { color: var(--text); }
.footer-branch { color: var(--purple); }
.footer-status { color: var(--green); }
.footer-enc { color: var(--blue); }

/* ── SECTION SCROLL REVEAL ───────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}
.reveal.shown {
  opacity: 1;
  transform: translateY(0);
}

/* ── MOBILE ──────────────────────────────────── */
#mobile-nav {
  display: none;
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 10px 16px;
  align-items: center;
  justify-content: space-between;
}
.mobile-logo { font-size: 13px; color: var(--green); font-weight: 600; }
.mobile-logo span { color: var(--dim); }
#mobile-toggle {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  cursor: pointer;
  background: none;
  border: none;
}
#mobile-toggle span {
  display: block;
  width: 18px; height: 2px;
  background: var(--dim);
  border-radius: 1px;
  transition: all 0.2s;
}
#mobile-toggle.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
#mobile-toggle.open span:nth-child(2) { opacity: 0; }
#mobile-toggle.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

#mobile-menu {
  display: none;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
  flex-direction: column;
  gap: 4px;
  position: sticky;
  top: 45px;
  z-index: 49;
}
#mobile-menu.open { display: flex; }
#mobile-menu a {
  padding: 8px 12px;
  font-size: 12px;
  color: var(--dim);
  border-radius: 4px;
  transition: background 0.15s, color 0.15s;
}
#mobile-menu a:hover { background: var(--panel); color: var(--text); }

@media (max-width: 768px) {
  #sidebar { display: none; }
  #mobile-nav { display: flex; }
  #main { padding: 16px; }
  .proj-grid { grid-template-columns: 1fr; }
  .proj-card.featured { grid-column: span 1; }
  .contact-grid { grid-template-columns: 1fr; }
  .stats-row { flex-wrap: wrap; }
  .stat-cell { min-width: 45%; }
  .git-entry { grid-template-columns: 1fr; gap: 4px; }
  .git-left { display: flex; gap: 10px; align-items: center; padding-right: 0; }
  .skill-row { grid-template-columns: 100px 1fr; }
}

@media (max-width: 480px) {
  .hero-name { font-size: 24px; }
  .stats-row { display: grid; grid-template-columns: 1fr 1fr; }
  .stat-cell { border-right: none; border-bottom: 1px solid var(--border); }
  .stat-cell:nth-child(odd) { border-right: 1px solid var(--border); }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  #boot-screen { display: none !important; }
  #app { opacity: 1 !important; }
}
</style>
</head>
<body>

<!-- ── BOOT SCREEN ──────────────────────────── -->
<div id="boot-screen" role="status" aria-label="Loading portfolio">
  <div id="boot-lines"></div>
</div>

<!-- ── MOBILE NAV ───────────────────────────── -->
<div id="mobile-nav" aria-label="Mobile navigation">
  <span class="mobile-logo">codrex<span>.dev</span></span>
  <button id="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</div>
<nav id="mobile-menu" aria-label="Mobile menu">
  <a href="#hero"       onclick="closeMobileMenu()">~/home</a>
  <a href="#experience" onclick="closeMobileMenu()">~/experience</a>
  <a href="#projects"   onclick="closeMobileMenu()">~/projects</a>
  <a href="#skills"     onclick="closeMobileMenu()">~/skills</a>
  <a href="#contact"    onclick="closeMobileMenu()">~/contact</a>
  <a href="/resume.pdf" target="_blank" rel="noopener" style="color:var(--green);">↓ resume.pdf</a>
</nav>

<!-- ── MAIN APP ──────────────────────────────── -->
<div id="app">

  <!-- SIDEBAR -->
  <aside id="sidebar" aria-label="Site navigation">
    <div class="sidebar-header">
      <div class="sidebar-traffic">
        <div class="traffic-dot dot-red"></div>
        <div class="traffic-dot dot-yellow"></div>
        <div class="traffic-dot dot-green"></div>
      </div>
      <div class="sidebar-title">
        <span class="prompt">dare</span><span class="at">@</span><span style="color:var(--blue)">codrex</span><span class="at">:~</span>
      </div>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Navigation</div>
      <ul class="sidebar-nav">
        <li><a href="#hero" class="active" data-section="hero">
          <span class="nav-icon">~</span> home
        </a></li>
        <li><a href="#experience" data-section="experience">
          <span class="nav-icon">$</span> experience
        </a></li>
        <li><a href="#projects" data-section="projects">
          <span class="nav-icon">▸</span> projects
        </a></li>
        <li><a href="#skills" data-section="skills">
          <span class="nav-icon">#</span> skills
        </a></li>
        <li><a href="#contact" data-section="contact">
          <span class="nav-icon">@</span> contact
        </a></li>
      </ul>
    </div>

    <div class="sidebar-section">
      <div class="sidebar-section-label">Quick Links</div>
      <ul class="sidebar-nav">
        <li><a href="https://github.com/generalbang" target="_blank" rel="noopener">
          <span class="nav-icon">⎇</span> github
        </a></li>
        <li><a href="https://linkedin.com/in/codrex" target="_blank" rel="noopener">
          <span class="nav-icon">◈</span> linkedin
        </a></li>
        <li><a href="https://twitter.com/0x_codrex" target="_blank" rel="noopener">
          <span class="nav-icon">✕</span> @0x_codrex
        </a></li>
        <li><a href="https://helucid.vercel.app" target="_blank" rel="noopener">
          <span class="nav-icon">⬡</span> helucid.app
        </a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noopener" style="color:var(--green)">
          <span class="nav-icon" style="color:var(--green)">↓</span> resume.pdf
        </a></li>
      </ul>
    </div>

    <div class="sidebar-bottom">
      <div class="sidebar-status">open to hire</div>
      <div class="sidebar-links">
        <a href="mailto:js.dev.ojodare@gmail.com">email</a>
        <a href="https://helucid.vercel.app" target="_blank" rel="noopener">helucid</a>
        <a href="/resume.pdf" target="_blank" rel="noopener">cv</a>
      </div>
    </div>
  </aside>

  <!-- MAIN CONTENT -->
  <div style="flex:1; display:flex; flex-direction:column; min-width:0;">
  <main id="main">

    <!-- ── HERO ──────────────────────────────── -->
    <section id="hero" aria-label="Introduction">
      <div class="term-window">
        <div class="term-titlebar">
          <div class="term-dots">
            <div class="term-dot t-red"></div>
            <div class="term-dot t-yellow"></div>
            <div class="term-dot t-green"></div>
          </div>
          <span class="term-name">dare@codrex: ~/profile</span>
        </div>
        <div class="term-body">
          <div class="prompt-line">
            <span class="p-user">dare</span><span class="p-at">@</span><span class="p-host">codrex</span><span class="p-colon">:</span><span class="p-path">~</span><span class="p-dollar">$</span>
            <span class="p-cmd">cat</span>&nbsp;<span class="p-arg">profile.json</span>
          </div>
          <div class="cmd-output">
            <div class="hero-name">Ojo Dare Johnson</div>
            <div class="hero-title">// Full-Stack Developer · Node.js · TypeScript · Next.js</div>
            <p class="hero-bio">
              Self-taught dev from <span class="hl-yellow">Ibadan, Nigeria</span>. Jumped from IT hardware to software in 2022 and haven't stopped shipping since.<br/><br/>
              I work across the full stack — <span class="hl-blue">Node.js + Express</span> on the backend, <span class="hl-blue">React + Next.js</span> on the frontend, <span class="hl-green">PostgreSQL + MongoDB</span> for data. Most recently built <span class="hl-green">Helucid</span>, an AI Socratic tutor with misconception tracking powered by Groq's LLaMA models.<br/><br/>
              Honest about my gaps. Fast at filling them. <span class="hl-text">Open to remote roles worldwide.</span>
            </p>
            <div class="hero-badges">
              <span class="badge badge-green">● open to hire</span>
              <span class="badge badge-blue">remote · full-time · contract</span>
              <span class="badge badge-yellow">WAT · UTC+1 · Ibadan, NG</span>
            </div>
            <div class="hero-actions">
              <a href="#projects" class="btn btn-green">./view-projects.sh</a>
              <a href="#contact" class="btn btn-ghost">--contact</a>
              <a href="/resume.pdf" target="_blank" rel="noopener" class="btn btn-ghost">↓ resume.pdf</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-row reveal">
        <div class="stat-cell">
          <span class="stat-val">3+</span>
          <span class="stat-key">years_exp</span>
        </div>
        <div class="stat-cell">
          <span class="stat-val">5+</span>
          <span class="stat-key">prod_roles</span>
        </div>
        <div class="stat-cell">
          <span class="stat-val">10+</span>
          <span class="stat-key">projects_shipped</span>
        </div>
        <div class="stat-cell">
          <span class="stat-val">2</span>
          <span class="stat-key">ai_products</span>
        </div>
      </div>
    </section>

    <!-- ── EXPERIENCE ─────────────────────────── -->
    <section id="experience" aria-label="Work experience">
      <div class="term-window reveal">
        <div class="term-titlebar">
          <div class="term-dots">
            <div class="term-dot t-red"></div>
            <div class="term-dot t-yellow"></div>
            <div class="term-dot t-green"></div>
          </div>
          <span class="term-name">dare@codrex: ~/experience</span>
        </div>
        <div class="term-body">
          <div class="prompt-line sec-prompt">
            <span class="p-user">dare</span><span class="p-at">@</span><span class="p-host">codrex</span><span class="p-colon">:</span><span class="p-path">~/experience</span><span class="p-dollar">$</span>
            <span class="p-cmd">git</span>&nbsp;<span class="p-arg">log</span>&nbsp;<span class="p-flag">--oneline</span>&nbsp;<span class="p-flag">--format=fuller</span>
          </div>
          <div class="git-log">

            <div class="git-entry">
              <div class="git-left">
                <div class="git-hash">a3f9c12</div>
                <div class="git-date">May – Aug 2025</div>
                <div class="git-company">1791 Technology</div>
              </div>
              <div class="git-right">
                <div class="git-role">Backend Engineer</div>
                <span class="git-type type-remote">REMOTE</span>
                <ul class="git-bullets">
                  <li>Built multi-tenant SaaS with OTP + JWT auth and full RBAC system</li>
                  <li>Integrated KillBill for subscription billing + Authorize.net for payments with automated workflows</li>
                  <li>Implemented audit logging pipeline and transactional email flows via Postmark</li>
                  <li>Designed and shipped validated REST APIs with production-grade error handling</li>
                </ul>
                <div class="git-tags">
                  <span class="git-tag">Node.js</span><span class="git-tag">TypeScript</span><span class="git-tag">Express.js</span><span class="git-tag">KillBill</span><span class="git-tag">Authorize.net</span><span class="git-tag">PostgreSQL</span><span class="git-tag">JWT/RBAC</span><span class="git-tag">Postmark</span>
                </div>
              </div>
            </div>

            <div class="git-entry">
              <div class="git-left">
                <div class="git-hash">b7d2e45</div>
                <div class="git-date">Sep 2025</div>
                <div class="git-company">African Genius Academy</div>
              </div>
              <div class="git-right">
                <div class="git-role">Frontend Developer</div>
                <span class="git-type type-contract">CONTRACT</span>
                <ul class="git-bullets">
                  <li>Built fully responsive school website with React + TypeScript + Tailwind CSS</li>
                  <li>Implemented Formspree-powered contact forms, dynamic gallery, news sections, and navigation</li>
                  <li>Optimized for Core Web Vitals across mobile and desktop</li>
                </ul>
                <div class="git-tags">
                  <span class="git-tag">React</span><span class="git-tag">TypeScript</span><span class="git-tag">Tailwind CSS</span><span class="git-tag">Formspree</span>
                </div>
              </div>
            </div>

            <div class="git-entry">
              <div class="git-left">
                <div class="git-hash">c1a8f03</div>
                <div class="git-date">Feb – May 2025</div>
                <div class="git-company">Visibuy</div>
              </div>
              <div class="git-right">
                <div class="git-role">Frontend Developer</div>
                <span class="git-type type-remote">REMOTE</span>
                <ul class="git-bullets">
                  <li>Built responsive e-commerce frontend with React, Tailwind CSS, and Redux Toolkit + Persist</li>
                  <li>Integrated product catalog, cart, inventory, and checkout APIs</li>
                  <li>Implemented complex cart + checkout state management patterns</li>
                </ul>
                <div class="git-tags">
                  <span class="git-tag">React</span><span class="git-tag">Redux Toolkit</span><span class="git-tag">Tailwind CSS</span><span class="git-tag">REST APIs</span>
                </div>
              </div>
            </div>

            <div class="git-entry">
              <div class="git-left">
                <div class="git-hash">d5e3c78</div>
                <div class="git-date">Aug – Nov 2024</div>
                <div class="git-company">Techwitclan / BookIt</div>
              </div>
              <div class="git-right">
                <div class="git-role">Backend Developer</div>
                <span class="git-type type-remote">REMOTE</span>
                <ul class="git-bullets">
                  <li>Built and maintained backend services for booking platform with Node.js and MongoDB</li>
                  <li>Completed Python + Django backend development training through Techwitclan</li>
                </ul>
                <div class="git-tags">
                  <span class="git-tag">Node.js</span><span class="git-tag">MongoDB</span><span class="git-tag">Python</span><span class="git-tag">Django</span>
                </div>
              </div>
            </div>

            <div class="git-entry">
              <div class="git-left">
                <div class="git-hash">e9b1a56</div>
                <div class="git-date">May 2023 – Jan 2024</div>
                <div class="git-company">VarryHealth</div>
              </div>
              <div class="git-right">
                <div class="git-role">Frontend Developer</div>
                <span class="git-type type-remote">REMOTE</span>
                <ul class="git-bullets">
                  <li>Improved UI/UX across health information platform — 40% reduction in load times</li>
                  <li>Integrated APIs for scheduling, notifications, and patient data management</li>
                </ul>
                <div class="git-tags">
                  <span class="git-tag">React</span><span class="git-tag">JavaScript</span><span class="git-tag">CSS</span><span class="git-tag">REST APIs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── PROJECTS ───────────────────────────── -->
    <section id="projects" aria-label="Projects">
      <div class="term-window reveal">
        <div class="term-titlebar">
          <div class="term-dots">
            <div class="term-dot t-red"></div>
            <div class="term-dot t-yellow"></div>
            <div class="term-dot t-green"></div>
          </div>
          <span class="term-name">dare@codrex: ~/projects</span>
        </div>
        <div class="term-body">
          <div class="prompt-line sec-prompt">
            <span class="p-user">dare</span><span class="p-at">@</span><span class="p-host">codrex</span><span class="p-colon">:</span><span class="p-path">~/projects</span><span class="p-dollar">$</span>
            <span class="p-cmd">ls</span>&nbsp;<span class="p-flag">-la</span>&nbsp;<span class="p-flag">--sort=time</span>
          </div>
          <div class="proj-grid">

            <!-- Helucid – FEATURED -->
            <div class="proj-card featured">
              <div class="proj-top">
                <div class="proj-name-row">
                  <div class="proj-name">📡 helucid</div>
                  <div class="proj-status status-live">live production</div>
                </div>
                <div class="proj-links-row">
                  <a href="https://helucid.vercel.app" target="_blank" rel="noopener" class="proj-link">↗ live</a>
                </div>
              </div>
              <p class="proj-desc">
                AI-powered Socratic tutor — teaches through guided questioning, not direct answers. Built on Next.js 14, Supabase, and Groq's LLaMA 3.3-70b + LLaMA-4 Scout vision. Features: misconception tracking with pgvector memory, understanding state machine, session branching, multi-thread conversation sidebar, learning analytics dashboard, and admin panel. Full jailbreak resistance built in.
              </p>
              <div class="proj-tags">
                <span class="proj-tag hl">Next.js 14</span>
                <span class="proj-tag hl">Supabase</span>
                <span class="proj-tag hl">Groq AI</span>
                <span class="proj-tag">TypeScript</span>
                <span class="proj-tag">pgvector</span>
                <span class="proj-tag">LLaMA 3.3-70b</span>
                <span class="proj-tag">Tailwind CSS</span>
              </div>
            </div>

            <!-- LEDJA -->
            <div class="proj-card">
              <div class="proj-top">
                <div class="proj-name-row">
                  <div class="proj-name">📱 ledja</div>
                  <div class="proj-status status-wip">in development</div>
                </div>
              </div>
              <p class="proj-desc">
                WhatsApp-native bookkeeping SaaS for Nigerian SMEs. Business owners record transactions by chatting — LEDJA tracks, categorizes, and auto-generates PDF invoices. Built with Node.js, TypeScript, Meta Cloud API, MongoDB, and Paystack.
              </p>
              <div class="proj-tags">
                <span class="proj-tag">Node.js</span>
                <span class="proj-tag">TypeScript</span>
                <span class="proj-tag">Meta Cloud API</span>
                <span class="proj-tag">MongoDB</span>
                <span class="proj-tag">Paystack</span>
                <span class="proj-tag">pdf-lib</span>
              </div>
            </div>

            <!-- Ledger -->
            <div class="proj-card">
              <div class="proj-top">
                <div class="proj-name-row">
                  <div class="proj-name">📊 ledger-dashboard</div>
                  <div class="proj-status status-live">live</div>
                </div>
                <div class="proj-links-row">
                  <a href="https://ledger-nu-ruby.vercel.app" target="_blank" rel="noopener" class="proj-link">↗ live</a>
                  <a href="https://github.com/generalbang" target="_blank" rel="noopener" class="proj-link">⎇ src</a>
                </div>
              </div>
              <p class="proj-desc">
                Bloomberg Terminal-inspired personal finance dashboard. Real-time charts, category breakdowns, transaction management. Technical assessment for Lyncs Africa.
              </p>
              <div class="proj-tags">
                <span class="proj-tag">React</span>
                <span class="proj-tag">TypeScript</span>
                <span class="proj-tag">Vite</span>
                <span class="proj-tag">Recharts</span>
                <span class="proj-tag">Tailwind CSS</span>
              </div>
            </div>

            <!-- Job Tracker -->
            <div class="proj-card">
              <div class="proj-top">
                <div class="proj-name-row">
                  <div class="proj-name">🗂 job-tracker</div>
                  <div class="proj-status status-live">live</div>
                </div>
                <div class="proj-links-row">
                  <a href="https://job-tracker-v-one.vercel.app" target="_blank" rel="noopener" class="proj-link">↗ live</a>
                  <a href="https://github.com/Generalbang/job-tracker" target="_blank" rel="noopener" class="proj-link">⎇ src</a>
                </div>
              </div>
              <p class="proj-desc">
                Full-stack job application tracker with NextAuth, CRUD, drag-and-drop Kanban, and a stats dashboard. Next.js 16 App Router + Prisma + PostgreSQL on Neon DB.
              </p>
              <div class="proj-tags">
                <span class="proj-tag">Next.js 16</span>
                <span class="proj-tag">TypeScript</span>
                <span class="proj-tag">Prisma</span>
                <span class="proj-tag">PostgreSQL</span>
                <span class="proj-tag">NextAuth</span>
              </div>
            </div>

            <!-- NewsLet -->
            <div class="proj-card">
              <div class="proj-top">
                <div class="proj-name-row">
                  <div class="proj-name">📰 newslet</div>
                  <div class="proj-status status-live">live</div>
                </div>
                <div class="proj-links-row">
                  <a href="https://github.com/Generalbang" target="_blank" rel="noopener" class="proj-link">⎇ src</a>
                </div>
              </div>
              <p class="proj-desc">
                Community-driven news platform — MERN stack with JWT auth, RBAC, creator tools, article metrics, and lazy loading.
              </p>
              <div class="proj-tags">
                <span class="proj-tag">MongoDB</span>
                <span class="proj-tag">Express.js</span>
                <span class="proj-tag">React</span>
                <span class="proj-tag">Node.js</span>
                <span class="proj-tag">JWT</span>
                <span class="proj-tag">RBAC</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- ── SKILLS ─────────────────────────────── -->
    <section id="skills" aria-label="Technical skills">
      <div class="term-window reveal">
        <div class="term-titlebar">
          <div class="term-dots">
            <div class="term-dot t-red"></div>
            <div class="term-dot t-yellow"></div>
            <div class="term-dot t-green"></div>
          </div>
          <span class="term-name">dare@codrex: ~/skills</span>
        </div>
        <div class="term-body">
          <div class="prompt-line sec-prompt">
            <span class="p-user">dare</span><span class="p-at">@</span><span class="p-host">codrex</span><span class="p-colon">:</span><span class="p-path">~/skills</span><span class="p-dollar">$</span>
            <span class="p-cmd">cat</span>&nbsp;<span class="p-arg">stack.config.json</span>
          </div>
          <div class="skills-output">
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"frontend"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val primary">React</span>
                <span class="skill-val primary">Next.js</span>
                <span class="skill-val primary">TypeScript</span>
                <span class="skill-val">Tailwind CSS</span>
                <span class="skill-val">Redux Toolkit</span>
                <span class="skill-val">React Query</span>
                <span class="skill-val">Framer Motion</span>
                <span class="skill-val">Zod</span>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"backend"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val accent">Node.js</span>
                <span class="skill-val accent">Express.js</span>
                <span class="skill-val">REST APIs</span>
                <span class="skill-val">JWT / OAuth</span>
                <span class="skill-val">RBAC</span>
                <span class="skill-val">Python</span>
                <span class="skill-val">Django</span>
                <span class="skill-val">Postmark</span>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"databases"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val accent">PostgreSQL</span>
                <span class="skill-val accent">MongoDB</span>
                <span class="skill-val">Prisma</span>
                <span class="skill-val">Mongoose</span>
                <span class="skill-val">Supabase</span>
                <span class="skill-val">Neon DB</span>
                <span class="skill-val">pgvector</span>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"ai_tools"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val accent">Groq AI</span>
                <span class="skill-val">LLaMA 3.3-70b</span>
                <span class="skill-val">LLaMA-4 Scout</span>
                <span class="skill-val">pgvector</span>
                <span class="skill-val">Prompt Engineering</span>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"payments"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val">KillBill</span>
                <span class="skill-val">Authorize.net</span>
                <span class="skill-val">Paystack</span>
                <span class="skill-val">Stripe</span>
                <span class="skill-val">Meta Cloud API</span>
              </div>
            </div>
            <div class="skill-row">
              <div class="skill-key"><span style="color:var(--purple)">"devops"</span><span class="colon">:</span></div>
              <div class="skill-vals">
                <span class="skill-val">Git / GitHub</span>
                <span class="skill-val">GitHub Actions</span>
                <span class="skill-val">Docker</span>
                <span class="skill-val">Vercel</span>
                <span class="skill-val">Railway</span>
                <span class="skill-val">Linux</span>
                <span class="skill-val">Jest</span>
                <span class="skill-val">Supertest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CONTACT ────────────────────────────── -->
    <section id="contact" aria-label="Contact">
      <div class="term-window reveal">
        <div class="term-titlebar">
          <div class="term-dots">
            <div class="term-dot t-red"></div>
            <div class="term-dot t-yellow"></div>
            <div class="term-dot t-green"></div>
          </div>
          <span class="term-name">dare@codrex: ~/contact</span>
        </div>
        <div class="term-body">
          <div class="prompt-line sec-prompt">
            <span class="p-user">dare</span><span class="p-at">@</span><span class="p-host">codrex</span><span class="p-colon">:</span><span class="p-path">~/contact</span><span class="p-dollar">$</span>
            <span class="p-cmd">echo</span>&nbsp;<span class="p-str">"open to opportunities"</span>&nbsp;<span class="p-flag">&amp;&amp;</span>&nbsp;<span class="p-cmd">./connect.sh</span>
          </div>
          <div style="margin-top:12px; font-size:12px; color:var(--dim); margin-bottom:16px;">
            <span style="color:var(--green)">✓</span> &nbsp;open to opportunities: <span style="color:var(--text)">true</span><br/>
            <span style="color:var(--green)">✓</span> &nbsp;available_immediately: <span style="color:var(--text)">true</span><br/>
            <span style="color:var(--green)">✓</span> &nbsp;remote_preference: <span style="color:var(--text)">true</span><br/>
            <span style="color:var(--dim)">→</span> &nbsp;loading contact channels...
          </div>
          <div class="contact-grid">
            <div class="contact-list">
              <div class="contact-item">
                <span class="contact-key">email</span>
                <span class="contact-eq">=</span>
                <span class="contact-val"><a href="mailto:js.dev.ojodare@gmail.com">js.dev.ojodare@gmail.com</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-key">github</span>
                <span class="contact-eq">=</span>
                <span class="contact-val"><a href="https://github.com/generalbang" target="_blank" rel="noopener">generalbang</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-key">linkedin</span>
                <span class="contact-eq">=</span>
                <span class="contact-val"><a href="https://linkedin.com/in/codrex" target="_blank" rel="noopener">in/codrex</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-key">twitter</span>
                <span class="contact-eq">=</span>
                <span class="contact-val"><a href="https://twitter.com/0x_codrex" target="_blank" rel="noopener">@0x_codrex</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-key">phone</span>
                <span class="contact-eq">=</span>
                <span class="contact-val"><a href="tel:+2348100307953">+234 810 030 7953</a></span>
              </div>
              <div class="contact-item">
                <span class="contact-key">location</span>
                <span class="contact-eq">=</span>
                <span class="contact-val" style="color:var(--yellow)">Ibadan, Nigeria (WAT)</span>
              </div>
            </div>
            <div>
              <form class="cform" id="contact-form" onsubmit="handleSubmit(event)">
                <div class="cform-field">
                  <label class="cform-label" for="cname"><span class="key">name</span><span class="eq"> = </span></label>
                  <input class="cform-input" type="text" id="cname" name="name" placeholder="// your name" required/>
                </div>
                <div class="cform-field">
                  <label class="cform-label" for="cemail"><span class="key">email</span><span class="eq"> = </span></label>
                  <input class="cform-input" type="email" id="cemail" name="email" placeholder="// your@email.com" required/>
                </div>
                <div class="cform-field">
                  <label class="cform-label" for="csubject"><span class="key">subject</span><span class="eq"> = </span></label>
                  <input class="cform-input" type="text" id="csubject" name="subject" placeholder="// job / project / collaboration"/>
                </div>
                <div class="cform-field">
                  <label class="cform-label" for="cmsg"><span class="key">message</span><span class="eq"> = </span></label>
                  <textarea class="cform-textarea" id="cmsg" name="message" placeholder="// tell me what you're building..." required></textarea>
                </div>
                <button type="submit" class="cform-submit" id="cform-btn">$ send --message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- STATUS BAR FOOTER -->
  <div id="footer-bar" role="contentinfo">
    <div class="footer-left">
      <span class="footer-branch">⎇ main</span>
      <span class="footer-status">● open to hire</span>
      <span class="footer-enc">UTF-8</span>
      <span style="color:var(--dimmer)">Node.js · TypeScript · Next.js</span>
    </div>
    <div class="footer-right">
      <a href="https://github.com/generalbang" target="_blank" rel="noopener">github</a>
      <a href="https://linkedin.com/in/codrex" target="_blank" rel="noopener">linkedin</a>
      <a href="https://twitter.com/0x_codrex" target="_blank" rel="noopener">@0x_codrex</a>
      <a href="/resume.pdf" target="_blank" rel="noopener">cv</a>
      <span style="color:var(--dimmer)">© 2025 Ojo Dare Johnson</span>
    </div>
  </div>
  </div>
</div><!-- /#app -->

<script>
// ── BOOT SEQUENCE ──────────────────────────────
const bootLines = [
  { text: 'Initializing codrex.dev...', cls: 'boot-dim',  delay: 0 },
  { text: 'Loading kernel modules: [node.js] [typescript] [next.js]', cls: 'boot-info', delay: 120 },
  { text: 'Mounting filesystems: /experience /projects /skills', cls: 'boot-info', delay: 280 },
  { text: '[  OK  ] Started PostgreSQL connection pool.', cls: 'boot-ok', delay: 460 },
  { text: '[  OK  ] Started MongoDB adapter.', cls: 'boot-ok', delay: 560 },
  { text: '[  OK  ] Groq AI interface ready.', cls: 'boot-ok', delay: 660 },
  { text: '[  OK  ] Supabase auth layer initialized.', cls: 'boot-ok', delay: 760 },
  { text: '', cls: 'boot-dim', delay: 860 },
  { text: '██████████████████████ 100%', cls: 'boot-ok', delay: 900 },
  { text: '', cls: 'boot-dim', delay: 980 },
  { text: 'Welcome to codrex.dev — Ojo Dare Johnson\'s portfolio', cls: 'boot-info', delay: 1020 },
  { text: 'Full-Stack Developer · Node.js · TypeScript · Next.js · Ibadan, NG', cls: 'boot-dim', delay: 1120 },
  { text: '', cls: 'boot-dim', delay: 1200 },
  { text: 'dare@codrex:~$ ', cls: 'boot-ok', delay: 1280, cursor: true },
];

const container = document.getElementById('boot-lines');
let totalDelay = 0;

bootLines.forEach(line => {
  const el = document.createElement('div');
  el.className = `boot-line ${line.cls}`;
  el.textContent = line.text;
  if (line.cursor) {
    const cur = document.createElement('span');
    cur.className = 'boot-cursor';
    el.appendChild(cur);
  }
  container.appendChild(el);

  setTimeout(() => el.classList.add('show'), line.delay);
  totalDelay = Math.max(totalDelay, line.delay);
});

// After boot finishes
setTimeout(() => {
  const boot = document.getElementById('boot-screen');
  boot.classList.add('fade-out');
  boot.addEventListener('animationend', () => {
    boot.style.display = 'none';
  });
  const app = document.getElementById('app');
  app.classList.add('visible');
}, totalDelay + 900);

// ── MOBILE NAV ─────────────────────────────────
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu   = document.getElementById('mobile-menu');

mobileToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  mobileToggle.classList.toggle('open', isOpen);
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
});

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileToggle.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', e => {
  if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ── SCROLL REVEAL ───────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('shown');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── ACTIVE NAV ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.sidebar-nav [data-section]');

const navObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === e.target.id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => navObs.observe(s));

// ── CONTACT FORM ────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn  = document.getElementById('cform-btn');
  const name    = document.getElementById('cname').value;
  const email   = document.getElementById('cemail').value;
  const subject = document.getElementById('csubject').value || 'Portfolio contact';
  const msg     = document.getElementById('cmsg').value;

  btn.textContent = '$ sending...';
  btn.disabled = true;

  const mailto = `mailto:js.dev.ojodare@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${msg}`)}`;
  window.location.href = mailto;

  setTimeout(() => {
    btn.textContent = '✓ message sent';
    btn.style.color = 'var(--green)';
  }, 600);
}
</script>
</body>
</html>

// import Navbar from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-black text-white relative">
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }
