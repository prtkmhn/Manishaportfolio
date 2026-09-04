import { profile } from "../data/profile";

const resumeSkills = [
  ["Languages", "Java, Python, SQL, TypeScript, JavaScript, C"],
  ["Database & systems", "Distributed systems, PostgreSQL, MySQL, T-SQL, SQL parsing, ANTLR, query processing"],
  ["Engineering", "Spring Boot, REST APIs, performance optimization, security, Docker, Git, CI/CD, JUnit, E2E testing"],
] as const;

export function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-toolbar" aria-label="Résumé actions">
        <a href="../">← Portfolio</a>
        <button type="button" onClick={() => window.print()}>Print / Save PDF</button>
      </div>
      <article className="resume-sheet">
        <header className="resume-header">
          <h1>{profile.name}</h1>
          <p className="resume-title">Software Development Engineer · Distributed Systems & Database Infrastructure</p>
          <address>
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phoneHref}`}>{profile.phoneDisplay}</a>
            <a href={profile.linkedin}>linkedin.com/in/manisha-deshpande</a>
            <a href={profile.github}>github.com/manisha-deshpande</a>
          </address>
        </header>

        <section className="resume-section resume-summary">
          <h2>Summary</h2>
          <p>{profile.summary}</p>
        </section>

        <section className="resume-section resume-skills">
          <h2>Technical Skills</h2>
          {resumeSkills.map(([label, value]) => <p key={label}><strong>{label}:</strong> {value}</p>)}
        </section>

        <section className="resume-section resume-experience">
          <h2>Experience</h2>
          {profile.experience.map((job) => (
            <div className="resume-job" key={job.company}>
              <div className="resume-job-heading">
                <div>
                  <h3>{job.roles[0].title}</h3>
                  <p>{job.company}</p>
                </div>
                <div>
                  <strong>{job.roles[0].dates}</strong>
                  <span>{job.location}</span>
                </div>
              </div>
              {job.roles.length > 1 && (
                <p className="prior-roles">
                  Earlier roles: {job.roles.slice(1).map((role) => `${role.title} (${role.dates})`).join(" · ")}
                </p>
              )}
              <ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {profile.education.map((item) => (
            <div className="resume-education" key={item.school}>
              <div><h3>{item.degree}</h3><p>{item.school}</p></div>
              <div><strong>{item.dates}</strong><span>{item.location}</span></div>
            </div>
          ))}
        </section>

        <section className="resume-section resume-innovation">
          <h2>Selected Innovation</h2>
          <p><strong>Patent-awarded Portable Fetal Monitoring System:</strong> Co-developed a low-cost third-trimester monitoring prototype using Python, Arduino, and signal processing.</p>
        </section>
      </article>
    </div>
  );
}
