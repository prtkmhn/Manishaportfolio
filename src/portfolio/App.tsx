import { useEffect, useState } from "react";
import { profile, type ThemePreference } from "../data/profile";

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["education", "Education"],
] as const;

function ThemeControl({ value, onChange }: { value: ThemePreference; onChange: (theme: ThemePreference) => void }) {
  return (
    <div className="theme-control" aria-label="Color theme">
      {(["auto", "light", "dark"] as ThemePreference[]).map((theme) => (
        <button
          type="button"
          key={theme}
          className={value === theme ? "active" : ""}
          aria-pressed={value === theme}
          onClick={() => onChange(theme)}
        >
          {theme === "auto" ? "System" : theme[0].toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export function App() {
  const [theme, setTheme] = useState<ThemePreference>(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved === "light" || saved === "dark" || saved === "auto" ? saved : "auto";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const applyTheme = () => {
      root.dataset.theme = theme === "auto" ? (media.matches ? "dark" : "light") : theme;
    };
    applyTheme();
    localStorage.setItem("portfolio-theme", theme);
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [theme]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Manisha Deshpande, home">
          <span>{profile.shortName}</span>
          <strong>{profile.name}</strong>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /> <span />
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-resume" href="resume/">Résumé</a>
        </nav>
        <ThemeControl value={theme} onChange={setTheme} />
      </header>

      <main id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{profile.employer} · {profile.location}</p>
            <h1>Systems that stay clear under complexity.</h1>
            <p className="hero-lede">{profile.headline}</p>
            <p className="hero-detail">{profile.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="resume/">View résumé <ArrowIcon /></a>
              <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src={profile.image} alt="Manisha Deshpande" width="760" height="1062" fetchPriority="high" />
            </div>
            <p><span /> {profile.role}</p>
          </div>
        </section>

        <section className="impact-bar" aria-label="Selected impact">
          <div className="section-shell impact-grid">
            {profile.impact.map((item) => (
              <div className="impact-stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell section-grid intro-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Engineer, owner, and multiplier.</h2>
          </div>
          <div className="prose-large">
            <p>{profile.summary}</p>
            <p>
              I care about the work around the code too: understanding the real problem, choosing a durable design,
              creating the right test strategy, helping other engineers move faster, and staying accountable after launch.
            </p>
          </div>
        </section>

        <section className="section-shell" id="experience">
          <div className="section-heading wide">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Work measured by outcomes.</h2>
            </div>
            <p>From product platforms to distributed database infrastructure.</p>
          </div>
          <div className="experience-list">
            {profile.experience.map((job) => (
              <article className="experience-card" key={job.company}>
                <div className="experience-meta">
                  <a href={job.url} target="_blank" rel="noreferrer">{job.company} <ArrowIcon /></a>
                  <span>{job.location}</span>
                  <p>{job.summary}</p>
                </div>
                <div className="experience-body">
                  <div className="role-list">
                    {job.roles.map((role) => (
                      <div className="role-row" key={role.title}>
                        <strong>{role.title}</strong><span>{role.dates}</span>
                      </div>
                    ))}
                  </div>
                  <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section">
          <div className="section-shell">
            <div className="section-heading wide">
              <div>
                <p className="eyebrow">Selected impact</p>
                <h2>How I approach hard systems problems.</h2>
              </div>
            </div>
            <div className="case-grid">
              {profile.capabilityStories.map((story, index) => (
                <article className="case-card" key={story.title}>
                  <span className="case-number">0{index + 1}</span>
                  <p className="eyebrow">{story.eyebrow}</p>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                  <strong>{story.outcome}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-heading wide">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Ideas carried into working systems.</h2>
            </div>
          </div>
          <div className="project-grid">
            {profile.projects.map((project) => (
              <article className="project-card" key={project.title}>
                <a href={project.href} target="_blank" rel="noreferrer" className="project-image" aria-label={`View ${project.title} on GitHub`}>
                  <img src={project.image} alt="" loading="lazy" />
                </a>
                <div className="project-copy">
                  <span>{project.note}</span>
                  <h3><a href={project.href} target="_blank" rel="noreferrer">{project.title} <ArrowIcon /></a></h3>
                  <p>{project.description}</p>
                  <ul aria-label="Technologies">{project.technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-shell section-grid">
            <div className="section-heading">
              <p className="eyebrow">Technical toolkit</p>
              <h2>Depth where systems meet data.</h2>
              <p className="section-note">A focused view of technologies used to design, ship, and operate software—not arbitrary proficiency scores.</p>
            </div>
            <div className="skills-list">
              {profile.skills.map((skill) => (
                <div className="skill-row" key={skill.group}>
                  <h3>{skill.group}</h3>
                  <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell" id="education">
          <div className="section-heading wide">
            <div>
              <p className="eyebrow">Education & leadership</p>
              <h2>Strong foundations, shared forward.</h2>
            </div>
          </div>
          <div className="education-grid">
            <div className="education-list">
              {profile.education.map((item) => (
                <article key={item.school}>
                  <span>{item.dates}</span>
                  <h3>{item.degree}</h3>
                  <p>{item.school} · {item.location}</p>
                  <small>{item.detail}</small>
                </article>
              ))}
            </div>
            <div className="leadership-card">
              <p className="eyebrow">Leadership</p>
              <ul>{profile.leadership.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build systems that hold up.</h2>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>{profile.email} <ArrowIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
