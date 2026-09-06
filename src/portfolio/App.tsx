import { useEffect, useState } from "react";
import { profile, type ThemePreference } from "../data/profile";

const navItems = [
  ["top", "Home", "⌂"], ["about", "About", "◎"], ["experience", "Experience", "▣"],
  ["projects", "Projects", "◇"], ["skills", "Skills", "⌘"], ["education", "Education", "△"],
  ["contact", "Contact", "✉"],
] as const;

const rotatingTitles = ["Software Development Engineer at AWS", "Database & Backend Engineer", "SDE II–ready Technical Owner"] as const;
const projectDates: Record<string, string> = { "Game Night Recommender": "Apr 2024", "Snake Programming Language": "Apr 2023", "Portable Fetal Monitoring": "Jun 2019" };
const otherRoles = [
  { title: "Graduate Services Assistant", org: "Arizona State University", dates: "Jan 2024 – May 2024", logo: "images/logos/asu.png" },
  { title: "Core Officer & Treasurer", org: "Google Developer Student Club · ASU Polytechnic", dates: "Aug 2023 – Jan 2024", logo: "images/logos/gdsc.png" },
  { title: "Engineering Research Intern", org: "Cloud Computing & Big Data Center · PES University", dates: "Jun 2017 – Jun 2019", logo: "images/logos/pesu.png" },
] as const;
const notableEvents = [
  { title: "ASU Innovation Showcase", date: "Apr 2024", image: "images/portfolio/innovationshowcase/p1.jpg", description: "Presented a group-focused game recommendation platform integrating social and gaming signals." },
  { title: "ASU Open Door", date: "Feb 2024", image: "images/portfolio/opendoor/p2.jpeg", description: "Led hands-on technology activities for prospective students and families." },
  { title: "Machine Learning Workshop", date: "Nov 2023", image: "images/portfolio/gdscworkshop/p1.jpg", description: "Organized a beginner-friendly TensorFlow workshop with a practical coding session." },
] as const;

function ThemeControl({ value, onChange }: { value: ThemePreference; onChange: (theme: ThemePreference) => void }) {
  const labels: Record<ThemePreference, string> = { light: "☀️", auto: "A", dark: "🦉" };
  return <div className="og-theme-control" aria-label="Color theme">{(["light", "auto", "dark"] as ThemePreference[]).map((theme) => <button type="button" key={theme} className={value === theme ? "active" : ""} aria-label={theme === "auto" ? "Use system theme" : `Use ${theme} theme`} aria-pressed={value === theme} onClick={() => onChange(theme)}>{labels[theme]}</button>)}</div>;
}

function LaptopCodeIcon() {
  return <svg className="hero-code-icon" viewBox="0 0 120 96" role="img" aria-label="Laptop with code"><rect x="19" y="15" width="82" height="56" rx="5" /><path d="M8 78h104l-7 7H15zM48 36l-12 8 12 8M72 36l12 8-12 8M65 31 55 57" /></svg>;
}

function CompanyMark({ company }: { company: string }) {
  return company.startsWith("Akamai") ? <img src="images/logos/akamai.png" alt="" /> : <span>AWS</span>;
}

export function App() {
  const [theme, setTheme] = useState<ThemePreference>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" || saved === "dark" || saved === "auto" ? saved : "auto";
  });
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => { root.dataset.theme = theme === "auto" ? (media.matches ? "dark" : "light") : theme; };
    applyTheme(); localStorage.setItem("portfolio-theme", theme); media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setTitleIndex((index) => (index + 1) % rotatingTitles.length), 2600);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="floating-nav" aria-label="Primary navigation">
      {navItems.map(([id, label, icon]) => <a key={id} href={`#${id}`} aria-label={label}><span aria-hidden="true">{icon}</span><strong>{label}</strong></a>)}
      <a href="resume/" aria-label="Résumé"><span aria-hidden="true">▤</span><strong>Résumé</strong></a>
    </nav>

    <header className="og-hero" id="top">
      <div className="hero-tools"><ThemeControl value={theme} onChange={setTheme} /></div>
      <div className="hero-center"><LaptopCodeIcon /><p className="hello-line">Hello, I’m</p><h1>{profile.name}</h1><div className="rotating-title" aria-live="polite">{rotatingTitles[titleIndex]}</div><p className="hero-location">{profile.employer} · {profile.location}</p><div className="hero-actions"><a className="og-button primary" href="#about">Explore my work</a><a className="og-button" href="resume/">View résumé ↗</a></div></div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About">⌄</a>
    </header>

    <main id="main-content">
      <section className="og-section white-section" id="about"><div className="section-shell"><div className="og-section-title"><span>About me</span></div><div className="about-grid">
        <figure className="polaroid profile-polaroid"><img src={profile.image} alt="Manisha Deshpande" width="760" height="1062" /><figcaption>Java · Databases · APIs · Python</figcaption></figure>
        <div className="window-card"><div className="window-bar" aria-hidden="true"><i /><i /><i /></div><div className="window-body"><p className="greeting">👋 Hi, I’m Manisha.</p><p>{profile.summary}</p><p>{profile.intro}</p><p>I enjoy turning complex customer and engineering problems into dependable software, while helping the people around me move faster.</p><div className="inline-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={`mailto:${profile.email}`}>Email ↗</a></div></div></div>
      </div></div></section>

      <section className="og-section sand-section" id="experience"><div className="section-shell"><div className="og-section-title"><span>Industry Experience</span></div>
        <div className="impact-ribbon" aria-label="Selected impact">{profile.impact.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        <div className="timeline">{profile.experience.map((job) => <article className="timeline-item" key={job.company}><div className="timeline-mark"><CompanyMark company={job.company} /></div><div className="timeline-card"><div className="timeline-heading"><div><a href={job.url} target="_blank" rel="noreferrer"><h3>{job.company} ↗</h3></a><span>{job.location}</span></div><div className="role-stack">{job.roles.map((role) => <p key={role.title}><strong>{role.title}</strong><span>{role.dates}</span></p>)}</div></div><p>{job.summary}</p><ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div>
        <div className="ownership-grid">{profile.capabilityStories.map((story) => <article key={story.title}><span>{story.eyebrow}</span><h3>{story.title}</h3><p>{story.description}</p><strong>{story.outcome}</strong></article>)}</div>
      </div></section>

      <section className="og-section white-section" id="projects"><div className="section-shell"><div className="og-section-title"><span>Projects</span></div><div className="polaroid-grid">{profile.projects.map((project) => <article className="project-polaroid" key={project.title}><a href={project.href} target="_blank" rel="noreferrer"><div className="project-photo"><img src={project.image} alt={`${project.title} preview`} loading="lazy" /></div><time>{projectDates[project.title]}</time><h3>{project.title}</h3></a><p>{project.description}</p><ul>{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></article>)}</div></div></section>

      <section className="og-section sand-section" id="skills"><div className="section-shell"><div className="og-section-title"><span>Skills</span></div><p className="section-intro">A practical toolkit developed through building, shipping, and operating real systems.</p><div className="skill-groups">{profile.skills.map((skill) => <article key={skill.group}><h3>{skill.group}</h3><ul>{skill.items.map((item) => <li key={item}><span aria-hidden="true">⌁</span>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="og-section white-section" id="education"><div className="section-shell"><div className="og-section-title"><span>Education</span></div><div className="education-grid">{profile.education.map((item, index) => <article className="education-card" key={item.school}><img src={index === 0 ? "images/logos/asu.png" : "images/logos/pesu.png"} alt="" /><div><time>{item.dates}</time><h3>{item.degree}</h3><p>{item.school} · {item.location}</p><strong>{item.detail}</strong></div></article>)}</div><h2 className="subsection-title">Other Roles</h2><div className="role-grid">{otherRoles.map((role) => <article key={role.title}><img src={role.logo} alt="" /><div><time>{role.dates}</time><h3>{role.title}</h3><p>{role.org}</p></div></article>)}</div></div></section>

      <section className="og-section sand-section events-section"><div className="section-shell"><div className="og-section-title"><span>Notable Events</span></div><div className="event-grid">{notableEvents.map((event) => <article key={event.title}><img src={event.image} alt={`${event.title} event`} loading="lazy" /><time>{event.date}</time><h3>{event.title}</h3><p>{event.description}</p></article>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><p>Let’s build something dependable.</p><h2>{profile.name}</h2><a href={`mailto:${profile.email}`}>{profile.email}</a><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href="resume/">Résumé</a></div></div></section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#top">Back to top ↑</a></footer>
  </>;
}
