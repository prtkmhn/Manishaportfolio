export type ThemePreference = "auto" | "light" | "dark";

export const profile = {
  name: "Manisha Deshpande",
  shortName: "MD",
  role: "Software Development Engineer I",
  employer: "Amazon Web Services (AWS)",
  location: "Redmond, WA",
  email: "dmanisha.work@gmail.com",
  phoneDisplay: "(602) 768-7074",
  phoneHref: "+16027687074",
  linkedin: "https://www.linkedin.com/in/manisha-deshpande/",
  github: "https://github.com/manisha-deshpande",
  portfolio: "https://manisha-deshpande.github.io/portfolio/",
  image: "images/myProfile.jpg",
  headline: "Building dependable database systems from first design to production.",
  intro:
    "I build dependable database systems, backend services, and APIs. My work spans system design, performance, security, release delivery, and operational ownership.",
  summary:
    "Software Development Engineer with 5+ years of experience building database platforms, backend services, APIs, and scalable software systems. Owns ambiguous projects from design through delivery, validation, and production support.",
  impact: [
    { value: "99%", label: "latency improvement" },
    { value: "4+", label: "engineers unblocked" },
    { value: "Multiple", label: "customer migrations supported" },
    { value: "25+", label: "primary on-call shifts" },
  ],
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      url: "https://aws.amazon.com/",
      location: "Redmond, WA",
      roles: [{ title: "Software Development Engineer I", dates: "Aug 2024 – Present" }],
      summary:
        "Owns database-platform and API initiatives across design, implementation, performance, security, release quality, and production operations.",
      highlights: [
        "Owned the design and delivery of distributed database capabilities and supporting APIs, taking ambiguous requirements from technical discovery through production-ready implementation and validation.",
        "Built reusable compatibility and quality tooling that identified platform gaps, shaped release-readiness priorities, and enabled four or more engineers to deliver related work more efficiently.",
        "Improved latency by 99% for a customer-facing database workflow through root-cause analysis, architecture evaluation, cross-component implementation, and performance validation.",
        "Expanded database compatibility and removed migration blockers for multiple enterprise customers through well-tested platform enhancements and clear customer-facing guidance.",
        "Led security hardening for database services, coordinated remediation across teams and supported releases, and partnered with security reviewers through formal validation.",
        "Strengthened operational and team effectiveness through 25+ primary on-call shifts, incident response, release validation, intern mentorship, onboarding, and high-signal peer reviews.",
      ],
    },
    {
      company: "Akamai Technologies",
      url: "https://www.akamai.com/",
      location: "Bengaluru, India",
      roles: [
        { title: "Software Engineer II", dates: "Jul 2021 – Jul 2022" },
        { title: "Software Engineer I", dates: "Jul 2019 – Jun 2021" },
        { title: "Software Engineering Intern", dates: "Jan 2019 – Apr 2019" },
      ],
      summary:
        "Progressed from intern to Software Engineer II while building product-management platforms, REST APIs, pricing workflows, and customer-facing interfaces.",
      highlights: [
        "Architected Java REST APIs and database workflows, migrated 200,000 product records, and enabled reliable data operations across product and DevOps teams.",
        "Automated complex pricing workflows through backend APIs, eliminating manual processes, saving more than 100 hours monthly, and supporting 500+ customers.",
        "Enhanced product-catalog interfaces with Angular and TypeScript, increasing engagement by 15% and improving task completion across core workflows.",
        "Shipped two defect-free releases on schedule, remediated vulnerabilities across four backend systems, and mentored three new hires, reducing onboarding time by 40%.",
      ],
    },
  ],
  capabilityStories: [
    {
      eyebrow: "Architecture & ownership",
      title: "Made a complex database capability easier to operate",
      description:
        "Started with an open-ended customer and operational need, aligned partner teams on a durable design, and carried the solution through implementation, validation, and production delivery.",
      outcome: "Ambiguity → cross-team production delivery",
    },
    {
      eyebrow: "Performance",
      title: "Turned seconds into milliseconds",
      description:
        "Root-caused a customer-visible database delay, evaluated multiple architectural approaches, and delivered a cross-component optimization validated under realistic load.",
      outcome: "99% latency improvement",
    },
    {
      eyebrow: "Scale & influence",
      title: "Converted platform findings into a roadmap",
      description:
        "Built a repeatable quality-analysis workflow, separated genuine product gaps from noise, and turned the results into an implementation plan used across the team.",
      outcome: "4+ engineers unblocked",
    },
  ],
  skills: [
    { group: "Languages", items: ["Java", "Python", "SQL", "TypeScript", "JavaScript", "C"] },
    { group: "Database systems", items: ["PostgreSQL", "MySQL", "T-SQL", "SQL parsing", "ANTLR", "Query processing"] },
    { group: "Backend", items: ["Distributed systems", "Spring Boot", "REST APIs", "Performance optimization", "Security"] },
    { group: "Delivery", items: ["Docker", "Git", "CI/CD", "JUnit", "End-to-end testing", "On-call operations"] },
  ],
  projects: [
    {
      title: "Game Night Recommender",
      description:
        "Led a Scrum team building a multiplayer game recommendation system that combines Steam and Discord signals to model group preferences.",
      image: "images/portfolio/gnr/p1.png",
      technologies: ["React", "Express", "JavaScript", "AWS"],
      href: "https://github.com/manisha-deshpande/GameNightRecommender",
      note: "ASU Innovation Showcase nominee",
    },
    {
      title: "Snake Programming Language",
      description:
        "Designed a Python-inspired language with a tokenizer, parser, evaluator, and semantic analyzer that runs across macOS, Linux, and Windows.",
      image: "images/portfolio/snakelang/p2.png",
      technologies: ["Python", "Prolog", "Bash", "Language design"],
      href: "https://github.com/manisha-deshpande/SAANP-Programming-Lang",
      note: "Compiler and runtime design",
    },
    {
      title: "Portable Fetal Monitoring",
      description:
        "Co-developed a patent-awarded portable monitoring prototype using signal processing and low-cost hardware for third-trimester care.",
      image: "images/portfolio/fetalmonitor/p1.png",
      technologies: ["Python", "Arduino", "Signal processing", "Research"],
      href: "https://github.com/prtkmhn/Fetal-Heart-Rate-Analysis-System",
      note: "Patent-awarded research",
    },
  ],
  education: [
    {
      degree: "Master of Science, Software Engineering",
      school: "Arizona State University",
      location: "Tempe, AZ",
      dates: "Aug 2022 – May 2024",
      detail: "GPA 3.87/4.0",
    },
    {
      degree: "Bachelor of Technology, Computer Science & Engineering",
      school: "PES University",
      location: "Bengaluru, India",
      dates: "Aug 2015 – Jul 2019",
      detail: "GPA 9.03/10.0 · C. N. R. Rao Merit Scholar",
    },
  ],
  leadership: [
    "Mentored an engineering intern from milestone planning through design, testing, and code review.",
    "Founded and served as Core Officer and Treasurer for the Google Developer Student Club at ASU Polytechnic.",
    "Supported ASU students as a Graduate Services Assistant through grading, technical troubleshooting, and office hours.",
  ],
} as const;
