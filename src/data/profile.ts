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
    "I build distributed database capabilities, compatibility tooling, and production-critical infrastructure. My work spans system design, query processing, performance, security, release delivery, and operational ownership.",
  summary:
    "Software Development Engineer with 5+ years of experience building distributed database capabilities, compatibility tooling, and scalable backend systems. Owns ambiguous projects from research and design through implementation, testing, multi-version delivery, and operational support.",
  impact: [
    { value: "99%", label: "parse-latency reduction" },
    { value: "~19K", label: "SQL statements analyzed" },
    { value: "5", label: "engine versions secured" },
    { value: "25+", label: "primary on-call shifts" },
  ],
  experience: [
    {
      company: "Amazon Web Services (AWS)",
      url: "https://aws.amazon.com/",
      location: "Redmond, WA",
      roles: [{ title: "Software Development Engineer I", dates: "Aug 2024 – Present" }],
      summary:
        "Owns database-engine and distributed-routing work across design, implementation, compatibility, performance, security, release quality, and operations.",
      highlights: [
        "Owned the design and delivery of distributed SQL routing diagnostics across PostgreSQL and MySQL dialects, benchmarking six industry systems and building an extensible metadata-injection architecture with end-to-end validation.",
        "Built reusable parser-qualification tooling that evaluated approximately 19,000 PostgreSQL regression statements, converted compatibility findings into a prioritized GA-readiness plan, and unblocked four or more engineers.",
        "Reduced stored-procedure first-execution parsing latency by 99%—from 2,031 ms to 15 ms—through architecture evaluation, cross-repository implementation, 1,000-connection stress testing, and multi-version delivery.",
        "Designed and shipped T-SQL UNPIVOT compatibility using ANTLR grammar and PostgreSQL transformations, with 100+ test scenarios that removed migration blockers for four enterprise customers.",
        "Led a security audit of dynamic catalog operations, coordinated remediation of 14+ privilege-escalation paths, and delivered an engine-level fix across five supported versions following formal threat-model review.",
        "Strengthened operational and team effectiveness through 25+ primary on-call shifts, production incident response, release validation, intern mentorship, onboarding, and high-signal peer reviews.",
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
        "Architected Java REST APIs and database workflows for Product Master 2.0, migrating 200,000 product records and enabling reliable CRUD operations across product and DevOps teams.",
        "Automated context-specific pricing through a Digital Price List API, eliminating manual CSV workflows and saving more than 100 hours monthly; delivered structured exports used by 500+ customers.",
        "Enhanced product-catalog interfaces with Angular and TypeScript, increasing engagement by 15% and improving task completion across core workflows.",
        "Shipped two defect-free releases on schedule, remediated vulnerabilities across four backend systems, and mentored three new hires, reducing onboarding time by 40%.",
      ],
    },
  ],
  capabilityStories: [
    {
      eyebrow: "Architecture & ownership",
      title: "Made distributed routing explainable",
      description:
        "Started with an open-ended product question, studied six comparable systems, aligned teams on a design, and carried an extensible solution through implementation and end-to-end testing.",
      outcome: "Cross-team design → production delivery",
    },
    {
      eyebrow: "Performance",
      title: "Turned seconds into milliseconds",
      description:
        "Root-caused a customer-visible stored-procedure delay, evaluated competing serialization designs, and delivered a cross-repository parse cache validated under load.",
      outcome: "2,031 ms → 15 ms",
    },
    {
      eyebrow: "Scale & influence",
      title: "Converted parser noise into a roadmap",
      description:
        "Built a repeatable corpus-analysis workflow, separated genuine gaps from tooling artifacts, and turned the results into an implementation plan used across the team.",
      outcome: "~19K statements · 4+ engineers unblocked",
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
