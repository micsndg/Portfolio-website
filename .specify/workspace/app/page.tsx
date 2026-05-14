export default function Home() {
  const format =
    process.env.NEXT_PUBLIC_PORTFOLIO_FORMAT?.toLowerCase() ?? "all-black-template1";

  const techStack = [
    "Swift",
    "SwiftUI",
    "Objective-C",
    "Firebase",
    "REST APIs",
    "GitHub Copilot",
  ];

  const projects = [
    {
      name: "Alaska Airlines",
      stack: "Objective-C, Swift, SwiftUI",
      summary:
        "Built features in the Alaska Hawaiian app that help travelers discover flight options, book trips, check in smoothly, and move through airports with less friction from pre-flight to boarding.",
      links: {
        appStore: "https://apps.apple.com/us/app/alaska-hawaiian/id356143077",
        website: "",
        github: "",
        other: "",
      },
    },
    {
      name: "Grill'd",
      stack: "Swift, MVVM-C",
      summary:
        "Delivered mobile ordering experiences for delivery, takeaway, and in-restaurant table service, with full Relish loyalty integration, dietary and nutrition filters, and Local Matters community voting features.",
      links: {
        appStore: "https://apps.apple.com/au/app/grilld/id1228060909",
        website: "",
        github: "",
        other: "https://appetiser.com.au/portfolio/grilld/",
      },
    },
    {
      name: "Good Empire",
      stack: "Swift, MVVM-C",
      summary:
        "Helped build a social action platform that gamifies sustainability through challenges mapped to the 17 UN Sustainable Development Goals, including daily actions, video submissions, and a ripple score that tracks measurable real-world impact.",
      links: {
        appStore: "",
        website: "",
        github: "",
        other: "https://appetiser.com.au/portfolio/good-empire/",
      },
    },
    {
      name: "Activfy",
      stack: "Swift, MVVM-C",
      summary:
        "Developed experiences for a fitness marketplace connecting users, trainers, and gyms, enabling personalized coaching journeys, stronger client engagement, wider service reach for fitness providers, and monetization opportunities through affiliate and product channels.",
      links: {
        appStore: "",
        website: "",
        github: "",
        other: "https://appetiser.com.au/portfolio/activfy/",
      },
    },
    {
      name: "OneRaise / AHF",
      stack: "Swift, MVVM-C",
      summary:
        "Contributed to a dedicated fundraising platform for AIDS Healthcare Foundation that improves campaign reach, streamlines donor participation, and supports advocacy initiatives through mobile-first giving flows.",
      links: {
        appStore: "",
        website: "",
        github: "",
        other: "https://appetiser.com.au/portfolio/ahf-oneraise/",
      },
    },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Cognizant (Multinational Airlines Company)",
      period: "October 2023 - March 2026",
      summary:
        "Led iOS delivery, mentored engineers, and owned incident and release workflows for a large-scale airline platform.",
    },
    {
      role: "Senior iOS Developer",
      company: "Appetiser App",
      period: "July 2020 - September 2023",
      summary:
        "Designed and shipped multiple Swift and SwiftUI apps with MVVM-C architecture in cross-functional Agile teams.",
    },
    {
      role: "Senior iOS Developer",
      company: "TOWA Technologies",
      period: "July 2019 - June 2020",
      summary:
        "Improved app stability and usability through focused maintenance, UX collaboration, and feature optimization.",
    },
    {
      role: "Senior iOS Developer",
      company: "Nessotech Inc.",
      period: "January 2018 - July 2019",
      summary:
        "Developed and released production apps including Pinoy Fitness and Moneygment with payment integrations.",
    },
  ];

  if (format === "executive") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
            <div className="text-sm font-semibold tracking-[0.14em] text-slate-900">
              MICHAEL SAN DIEGO
            </div>
            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
              <a href="#home" className="hover:text-slate-900">Home</a>
              <a href="#projects" className="hover:text-slate-900">Projects</a>
              <a href="#experience" className="hover:text-slate-900">Experience</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1100px] px-5 pb-16 pt-12 sm:px-8" id="home">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Senior Software Engineer | Native iOS Developer
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Building production-grade iOS apps with reliability, speed, and craftsmanship.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              I am Michael San Diego, with 10+ years of experience delivering native iOS
              applications using Swift, SwiftUI, and Objective-C across enterprise and consumer products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white"
              >
                Get In Touch
              </a>
              <a
                href="/resume-michael-san-diego.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800"
              >
                Download CV
              </a>
            </div>
          </section>

          <section className="mt-12">
            <p className="text-center text-sm font-semibold tracking-[0.2em] text-slate-500">
              EXPERIENCE WITH
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-14" id="projects">
            <h2 className="text-center text-3xl font-extrabold text-slate-900">Projects</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-[11px] font-bold tracking-wider text-slate-500">
                    SELECTED WORK
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold text-slate-900">{project.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{project.stack}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
                  {Object.values(project.links).some(Boolean) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-slate-500"
                        >
                          App Store
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-slate-500"
                        >
                          Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-slate-500"
                        >
                          GitHub
                        </a>
                      )}
                      {project.links.other && (
                        <a
                          href={project.links.other}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-slate-500"
                        >
                          Related Link
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14" id="experience">
            <h2 className="text-center text-3xl font-extrabold text-slate-900">Experience</h2>
            <div className="mt-7 space-y-5">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.role} at {item.company}
                    </h3>
                    <p className="text-sm text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer id="contact" className="border-t border-slate-200 bg-slate-100">
          <div className="mx-auto w-full max-w-[1100px] px-5 py-12 sm:px-8">
            <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Open to senior iOS engineering and technical leadership opportunities.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-800 sm:grid-cols-2">
              <p>Phone: +63 917 506 2548</p>
              <p>Email: micsndg@gmail.com</p>
              <p>
                GitHub:{" "}
                <a className="underline" href="https://github.com/micsndg" target="_blank" rel="noopener noreferrer">
                  github.com/micsndg
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a className="underline" href="https://www.linkedin.com/in/micsndg" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/micsndg
                </a>
              </p>
              <p>Location: Makati, Philippines</p>
              <p>
                Resume:{" "}
                <a className="underline" href="/resume-michael-san-diego.pdf" download>
                  Download PDF
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (format === "black-white-template") {
    return (
      <div className="min-h-screen bg-[#161513] text-white">
        <header className="border-b border-white/10 bg-[#0a0a0a]">
          <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-5 sm:px-12">
            <div className="text-sm font-bold tracking-[0.18em] text-white">
              MSD
            </div>
            <nav className="hidden items-center gap-10 text-sm font-semibold text-white/80 md:flex">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#experience" className="hover:text-white transition">Experience</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-[1400px] px-5 pb-0 pt-16 sm:px-12" id="home">
          <section className="text-center border-b border-white/10 pb-16">
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
              I build native iOS apps and
              <br />
              <span className="text-white/90">create practical engineering impact.</span>
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/70">
              I am Michael San Diego, a Senior Software Engineer (Native iOS Developer)
              with 10+ years of experience delivering high-performance mobile applications.
              My work focuses on Swift, SwiftUI, Objective-C, and scalable architecture.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-white px-8 py-3 text-base font-semibold text-[#161513] hover:bg-white/90 transition"
              >
                Get In Touch
              </a>
              <a
                href="/resume-michael-san-diego.pdf"
                download
                className="rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white hover:border-white transition"
              >
                Download CV
              </a>
            </div>
          </section>

          <section className="mt-16 text-center border-b border-white/10 pb-16">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/60">TECHNOLOGY STACK</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2 text-sm font-semibold tracking-wide text-white/80 border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-16 border-b border-white/10 pb-16" id="projects">
            <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="border border-white/10 p-6 hover:border-white/30 transition">
                  <p className="text-xs font-bold tracking-wider text-white/50">SELECTED WORK</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-white/60 font-semibold">{project.stack}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{project.summary}</p>
                  {Object.values(project.links).some(Boolean) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-white/30 px-3 py-1 text-xs font-semibold text-white/90 hover:border-white"
                        >
                          App Store
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-white/30 px-3 py-1 text-xs font-semibold text-white/90 hover:border-white"
                        >
                          Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-white/30 px-3 py-1 text-xs font-semibold text-white/90 hover:border-white"
                        >
                          GitHub
                        </a>
                      )}
                      {project.links.other && (
                        <a
                          href={project.links.other}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-white/30 px-3 py-1 text-xs font-semibold text-white/90 hover:border-white"
                        >
                          Related Link
                        </a>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 border-b border-white/10 pb-16" id="experience">
            <h2 className="text-4xl font-bold text-white mb-10">Experience</h2>
            <div className="space-y-8">
              {experience.map((item) => (
                <article key={`${item.company}-${item.period}`} className="border-l-2 border-white/20 pl-6 hover:border-white/40 transition">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm text-white/60 mt-1">{item.company}</p>
                    </div>
                    <p className="text-sm text-white/50 font-semibold">{item.period}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.summary}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer id="contact" className="bg-[#0a0a0a] border-t border-white/10">
          <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-12">
            <h2 className="text-3xl font-bold text-white">Contact</h2>
            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/70">
              Open to senior iOS engineering and technical leadership opportunities.
              I am available for remote and hybrid roles based in Makati, Philippines.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-white/80 sm:grid-cols-2">
              <p>Phone: +63 917 506 2548</p>
              <p>Email: micsndg@gmail.com</p>
              <p>
                GitHub:{" "}
                <a className="text-white underline hover:text-white/80" href="https://github.com/micsndg" target="_blank" rel="noopener noreferrer">
                  github.com/micsndg
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a className="text-white underline hover:text-white/80" href="https://www.linkedin.com/in/micsndg" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/micsndg
                </a>
              </p>
              <p>Location: Makati, Philippines</p>
              <p>
                Resume:{" "}
                <a className="text-white underline hover:text-white/80" href="/resume-michael-san-diego.pdf" download>
                  Download PDF
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // AllBlackTemplate1 - Default Figma-matched dark theme with gradients
  return (
    <div className="min-h-screen bg-obsidian text-white">
      <header className="border-b border-white/10 bg-carbon/95">
        <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
          <div className="text-sm font-semibold tracking-[0.18em] text-white/90">
            MSD
          </div>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1100px] px-5 pb-0 pt-10 sm:px-8 sm:pt-14" id="home">
        <section className="text-center">
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8660] to-[#9a33ff] p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#111] text-5xl font-bold text-white/90">
              M
            </div>
          </div>

          <h1 className="title-gradient mx-auto mt-8 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            I build native iOS apps and
            <br />
            create practical engineering impact.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-mist">
            I am Michael San Diego, a Senior Software Engineer (Native iOS Developer)
            with 10+ years of experience delivering high-performance mobile applications.
            My work focuses on Swift, SwiftUI, Objective-C, scalable architecture, release
            quality, and engineering leadership.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 text-base font-semibold text-[#161513]"
            >
              Get In Touch
            </a>
            <a
              href="/resume-michael-san-diego.pdf"
              download
              className="rounded-full border border-white px-8 py-3 text-base font-semibold text-white"
            >
              Download CV
            </a>
          </div>
        </section>

        <section className="mt-16 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-mist">EXPERIENCE WITH</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/90"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16" id="projects">
          <h2 className="projects-gradient text-center text-4xl font-extrabold">Projects</h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                <div className="h-40 bg-gradient-to-br from-[#2d2d2d] to-[#1d1d1d]" />
                <div className="px-5 py-4">
                  <p className="text-[11px] font-bold tracking-wider text-mist">CLICK HERE TO VISIT</p>
                  <h3 className="mt-1 text-xl font-extrabold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-white/75">{project.stack}</p>
                  <p className="mt-3 text-sm leading-7 text-mist">{project.summary}</p>
                  {Object.values(project.links).some(Boolean) && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white hover:border-white"
                        >
                          App Store
                        </a>
                      )}
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white hover:border-white"
                        >
                          Website
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white hover:border-white"
                        >
                          GitHub
                        </a>
                      )}
                      {project.links.other && (
                        <a
                          href={project.links.other}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold text-white hover:border-white"
                        >
                          Related Link
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16" id="experience">
          <h2 className="experience-gradient text-center text-4xl font-extrabold">Experience</h2>
          <div className="mt-8 space-y-7">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="border-b border-white/10 pb-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <h3 className="text-2xl font-bold text-white">
                    {item.role} at {item.company}
                  </h3>
                  <p className="text-sm text-muted">{item.period}</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-mist">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-20 bg-[#191919]">
        <div className="mx-auto w-full max-w-[1100px] px-5 py-16 sm:px-8">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-mist">
            Open to senior iOS engineering and technical leadership opportunities.
            I am available for remote and hybrid roles based in Makati, Philippines.
          </p>

          <div className="mt-6 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
            <p>Phone: +63 917 506 2548</p>
            <p>Email: micsndg@gmail.com</p>
            <p>
              GitHub: <a className="text-white underline" href="https://github.com/micsndg" target="_blank" rel="noopener noreferrer">github.com/micsndg</a>
            </p>
            <p>
              LinkedIn: <a className="text-white underline" href="https://www.linkedin.com/in/micsndg" target="_blank" rel="noopener noreferrer">linkedin.com/in/micsndg</a>
            </p>
            <p>Location: Makati, Philippines</p>
            <p>
              Resume: <a className="text-white underline" href="/resume-michael-san-diego.pdf" download>Download PDF</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
