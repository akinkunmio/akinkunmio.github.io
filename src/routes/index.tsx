import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import alatImg from "@/assets/work-alat.jpg";
import coophubImg from "@/assets/work-coophub.jpg";
import quicktellerImg from "@/assets/work-quickteller.jpg";
import ajovaultImg from "@/assets/work-ajovault.jpg";
import { projects } from "@/data/projects";
import { Reveal, SectionLabel, SiteFooter, SiteHeader, TechTag } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akinkunmi Okunola | Senior Software Engineer & Technical Lead" },
      {
        name: "description",
        content:
          "Akinkunmi Okunola is a Senior Software Engineer and Technical Lead specialising in C#, .NET, backend engineering, microservices, fintech, banking technology and scalable enterprise systems.",
      },
      {
        property: "og:title",
        content: "Akinkunmi Okunola | Senior Software Engineer & Technical Lead",
      },
      {
        property: "og:description",
        content:
          "Backend, fintech and enterprise systems built with C#/.NET — microservices, distributed architecture and technical leadership across banking and payments.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Akinkunmi Okunola | Senior Software Engineer & Technical Lead" },
      {
        name: "twitter:description",
        content:
          "Backend, fintech and enterprise systems built with C#/.NET — microservices, distributed architecture and technical leadership across banking and payments.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* Ambient brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 z-0 size-[640px] rounded-full bg-brand/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 z-0 size-[560px] rounded-full bg-accent/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_20%,oklch(0.3_0.04_262_/_50%),transparent_60%)]"
      />

      <SiteHeader />
      <main>
        <Hero />
        <MetricsBand />
        <About />
        <Expertise />
        <Work />
        <StackAndBuilding />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */

function HeroDiagram() {
  return (
    <svg
      viewBox="0 0 360 250"
      className="h-auto w-full"
      role="img"
      aria-label="System architecture: clients, APIs, microservices, messaging, databases and financial systems"
    >
      <defs>
        <linearGradient id="flowStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-brand)" />
          <stop offset="100%" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>
      {/* Connection lines */}
      <path
        className="flow-line"
        d="M50 62 C 95 62 95 45 140 45"
        fill="none"
        stroke="url(#flowStroke)"
        strokeWidth="1.5"
      />
      <path
        className="flow-line"
        d="M196 45 C 240 45 240 62 280 62"
        fill="none"
        stroke="url(#flowStroke)"
        strokeWidth="1.5"
      />
      <path
        className="flow-line"
        d="M168 59 C 168 100 110 100 110 140"
        fill="none"
        stroke="url(#flowStroke)"
        strokeWidth="1.5"
      />
      <path
        className="flow-line"
        d="M110 168 C 110 205 155 205 190 205"
        fill="none"
        stroke="url(#flowStroke)"
        strokeWidth="1.5"
      />
      <path
        className="flow-line"
        d="M280 90 C 280 130 245 130 245 160"
        fill="none"
        stroke="url(#flowStroke)"
        strokeWidth="1.5"
      />
      {/* Nodes */}
      <g fontSize="9" fontWeight="600" textAnchor="middle" fill="var(--color-foreground)">
        <rect x="22" y="48" width="56" height="28" rx="9" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="50" y="65">Clients</text>
        <rect x="140" y="31" width="56" height="28" rx="9" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="168" y="48">APIs</text>
        <rect x="252" y="48" width="70" height="28" rx="9" fill="var(--color-brand-soft)" stroke="var(--color-brand)" />
        <text x="287" y="65" fill="var(--color-accent)">Microservices</text>
        <rect x="82" y="140" width="56" height="28" rx="9" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="110" y="157">Messaging</text>
        <rect x="190" y="191" width="60" height="28" rx="9" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="220" y="208">Databases</text>
        <rect x="242" y="146" width="80" height="28" rx="9" fill="var(--color-card)" stroke="var(--color-border)" />
        <text x="282" y="163">Financial Sys.</text>
      </g>
      <circle className="glow-node" cx="168" cy="45" r="4" fill="var(--color-accent)" />
      <circle className="glow-node" cx="110" cy="154" r="4" fill="var(--color-brand)" />
      <circle className="glow-node" cx="220" cy="205" r="4" fill="var(--color-accent)" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-20 md:pt-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            Open to senior backend &amp; fintech engagements
          </span>
          <h1
            className="heading-display animate-rise mt-6 text-[clamp(2.75rem,6.5vw,5.25rem)] font-normal text-foreground"
            style={{ animationDelay: "120ms" }}
          >
            Backend systems
            <br />
            that hold
            <br />
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              under load.
            </span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
            style={{ animationDelay: "220ms" }}
          >
            I build scalable backend, fintech and enterprise systems with C#/.NET — microservices,
            distributed architecture and production engineering across banking and payments.
          </p>
          <p
            className="animate-rise mt-3 max-w-md text-sm leading-relaxed text-muted-foreground"
            style={{ animationDelay: "260ms" }}
          >
            Nearly a decade across banking, fintech and enterprise technology — building APIs,
            distributed systems, financial platforms and production software.
          </p>
          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "320ms" }}>
            <a
              href="/#work"
              className="rounded-full bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="https://linkedin.com/in/akinkunmi-okunola"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-panel"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="animate-rise mt-10 flex flex-wrap gap-10 text-sm" style={{ animationDelay: "380ms" }}>
            <div>
              <div className="font-display text-2xl text-foreground">7+</div>
              <div className="text-muted-foreground">Years of engineering</div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">10,000+</div>
              <div className="text-muted-foreground">Businesses served</div>
            </div>
            <div>
              <div className="font-display text-2xl text-foreground">100M+</div>
              <div className="text-muted-foreground">Monthly transactions</div>
            </div>
          </div>
        </div>

        <div className="animate-rise relative" style={{ animationDelay: "360ms" }}>
          <div
            aria-hidden
            className="absolute -inset-6 -rotate-6 rounded-[2rem] bg-gradient-to-br from-brand/30 via-accent/10 to-transparent blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-panel p-4 shadow-2xl backdrop-blur-xl md:-rotate-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                System architecture
              </span>
              <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" />
                live
              </span>
            </div>
            <div className="rounded-2xl bg-background/40 p-3">
              <HeroDiagram />
            </div>
            <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-background/50 px-4 py-3 backdrop-blur-md">
              <div>
                <div className="text-xs text-muted-foreground">Now building</div>
                <div className="text-sm font-semibold text-foreground">AjoVault · Community finance platform</div>
              </div>
              <span className="font-display text-lg text-accent">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Metrics ----------------------------- */

const metrics = [
  { value: "7+", label: "Years of professional software engineering" },
  { value: "10,000+", label: "Businesses supported through ALAT for Business" },
  { value: "50+", label: "APIs across major enterprise & fintech platforms" },
  {
    value: "100M+",
    label: "Transactions handled monthly by the ALAT for Business platform",
  },
];

function MetricsBand() {
  return (
    <section aria-label="Professional metrics" className="relative z-10 border-y border-border bg-panel">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {metrics.map((m) => (
          <Reveal key={m.value}>
            <div className="font-display text-4xl tracking-tight text-foreground">{m.value}</div>
            <div className="mt-1 text-sm leading-snug text-muted-foreground">{m.label}</div>
          </Reveal>
        ))}
      </div>
      <p className="mx-auto max-w-6xl px-6 pb-6 text-xs text-muted-foreground">
        Metrics describe the scale of the systems I contributed to — not individual ownership of
        every transaction.
      </p>
    </section>
  );
}

/* ----------------------------- About ------------------------------ */

function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionLabel>About me</SectionLabel>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            Engineering depth, business awareness.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              I am a Senior Software Engineer and Technical Lead with extensive experience building
              backend and enterprise applications, particularly within banking and fintech
              environments. My strongest area is backend engineering with C# and the .NET ecosystem
              — APIs, distributed systems, microservices, integrations and transaction-driven
              applications.
            </p>
            <p>
              I have worked across the full engineering lifecycle, from understanding business
              requirements and designing solutions to implementation, testing, deployment, production
              support and technical leadership. My career includes significant work with Wema
              Bank/ALAT and Interswitch, contributing to products serving businesses, financial
              institutions and end users.
            </p>
            <p className="border-l-2 border-accent pl-4 text-foreground">
              Leadership for me means technical coordination, mentoring, code reviews and turning
              product requirements into engineering work that ships.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Expertise ---------------------------- */

const expertise = [
  {
    title: "Backend Engineering",
    body: "C#, .NET, ASP.NET Core, REST APIs and enterprise applications — including high-volume transaction processing and API integrations.",
  },
  {
    title: "Microservices & Distributed Systems",
    body: "Service decomposition, messaging and event-driven systems with RabbitMQ, Azure Service Bus and distributed processing.",
  },
  {
    title: "FinTech & Banking",
    body: "Digital and business banking, financial transactions, payment systems and HMO/financial integrations in production.",
  },
  {
    title: "Cloud & DevOps",
    body: "Azure, Azure DevOps, Kubernetes, Jenkins and CI/CD — containerisation and automated, repeatable deployments.",
  },
  {
    title: "Software Architecture",
    body: "Domain-driven design, SOLID and clean architecture principles applied to microservice, API and integration architecture.",
  },
  {
    title: "Technical Leadership",
    body: "Code reviews, mentoring, team coordination, engineering standards, Scrum and technical decision-making alongside product teams.",
  },
];

function Expertise() {
  return (
    <section id="expertise" className="relative z-10 border-y border-border bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            Where I add depth.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <div className="font-display text-sm text-accent">0{i + 1}</div>
                <h3 className="mt-3 text-base font-semibold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Work ------------------------------ */

const featuredCards = [
  { slug: "coophub", image: coophubImg, tag: "FinTech Platform · Wema Bank" },
  { slug: "quickteller-for-business", image: quicktellerImg, tag: "Payments · Interswitch" },
  { slug: "ajovault", image: ajovaultImg, tag: "Community Finance · SafeTransact" },
];

function Work() {
  const flagship = projects.find((p) => p.slug === "alat-for-business")!;
  const compact = projects.filter((p) => ["nexquiz", "power-hmo"].includes(p.slug));

  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mb-10 flex items-end justify-between gap-6">
        <div>
          <SectionLabel>Selected work</SectionLabel>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
            Case studies.
          </h2>
        </div>
        <span className="hidden text-sm text-muted-foreground sm:block">6 projects · banking to product building</span>
      </Reveal>

      {/* Flagship */}
      <Reveal>
        <Link
          to="/work/$slug"
          params={{ slug: flagship.slug }}
          className="group block overflow-hidden rounded-[2rem] border border-border bg-card transition-colors hover:border-accent/40"
        >
          <div className="grid md:grid-cols-2">
            <div className="order-2 p-8 md:order-1 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Flagship case study · {flagship.company}
              </span>
              <h3 className="heading-display mt-3 text-3xl text-foreground md:text-4xl">{flagship.title}</h3>
              <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">{flagship.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {flagship.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-panel px-2.5 py-1 text-xs text-foreground/90">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">
                Read the case study →
              </span>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={alatImg}
                alt="Abstract visual of the ALAT for Business banking platform"
                width={1024}
                height={640}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </Link>
      </Reveal>

      {/* Grid */}
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {featuredCards.map(({ slug, image, tag }, i) => {
          const p = projects.find((x) => x.slug === slug)!;
          return (
            <Reveal key={slug} delay={i * 100}>
              <Link
                to="/work/$slug"
                params={{ slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/40"
              >
                <img
                  src={image}
                  alt={`Abstract visual for ${p.title}`}
                  width={1024}
                  height={640}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{tag}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      {/* Compact cards */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {compact.map((p, i) => (
          <Reveal key={p.slug} delay={i * 100}>
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{p.category}</span>
              <h3 className="mt-2 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              <span className="mt-4 text-sm font-semibold text-accent transition-all group-hover:gap-1">
                Case study →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Stack + AjoVault ------------------------ */

const stackGroups = [
  { name: "Languages", items: ["C#", "Java", "JavaScript / TypeScript"] },
  { name: ".NET", items: [".NET Framework", ".NET Core", "ASP.NET Core", "WCF", "Entity Framework"] },
  { name: "Architecture", items: ["Microservices", "DDD", "SOLID", "TDD", "REST", "SOAP", "Event-driven", "Design Patterns"] },
  { name: "Messaging", items: ["RabbitMQ", "Azure Service Bus"] },
  { name: "Cloud", items: ["Microsoft Azure"] },
  { name: "DevOps", items: ["Azure DevOps", "Jenkins", "Kubernetes", "CI/CD", "Git"] },
  { name: "Databases", items: ["SQL Server", "MongoDB"] },
  { name: "Testing", items: ["xUnit", "NUnit", "Moq", "Postman"] },
];

function StackAndBuilding() {
  return (
    <section id="stack" className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
      <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border bg-card p-8 backdrop-blur-xl">
            <SectionLabel>Technology wall</SectionLabel>
            <h2 className="heading-display mt-3 text-2xl text-foreground md:text-3xl">The stack I reach for</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {stackGroups.map((g) => (
                <div key={g.name}>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{g.name}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <TechTag key={item}>{item}</TechTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/25 to-accent/10 p-8 backdrop-blur-xl">
            <SectionLabel>Now building</SectionLabel>
            <h2 className="heading-display mt-3 text-2xl text-foreground md:text-3xl">AjoVault</h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              A community finance platform digitising informal group savings — Ajo, Esusu, Adashe and
              cooperative savings — for Nigeria and eventually West Africa. Built through SafeTransact
              Integrated Services Ltd, where I serve as Technical Lead.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">
              The MVP is complete and being tested with pilot groups.
            </p>
            <div className="mt-5 flex gap-8">
              <div>
                <div className="font-display text-3xl text-foreground">10</div>
                <div className="text-xs text-foreground/70">Ajo groups in pilot</div>
              </div>
              <div>
                <div className="font-display text-3xl text-foreground">100+</div>
                <div className="text-xs text-foreground/70">Members in pilot</div>
              </div>
            </div>
            <Link
              to="/work/$slug"
              params={{ slug: "ajovault" }}
              className="mt-auto inline-block rounded-full bg-foreground px-5 py-2 pt-2 text-sm font-semibold text-background transition-opacity hover:opacity-90 mt-6"
            >
              Read the AjoVault story
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Experience --------------------------- */

const timeline = [
  {
    company: "SafeTransact Integrated Services Ltd",
    title: "Technical Lead",
    period: "December 2025 – Present",
    body: "Building AjoVault — product design, backend architecture and delivery for a community finance platform.",
  },
  {
    company: "Wema Bank / ALAT",
    title: "Senior Software Engineer / Technical Lead",
    period: "February 2021 – May 2026",
    body: "ALAT for Business backend evolution and, from 2024, Lead Engineer on CoopHub — coordinating a five-person engineering team with three direct reports.",
  },
  {
    company: "Interswitch",
    title: "Software Engineer / Founding Developer",
    period: "July 2019 – February 2021",
    body: "Founding developer on Quickteller for Business — early-stage microservices in .NET Core 2.1/2.2.",
  },
  {
    company: "NexTekk / NexQuiz",
    title: "Software Engineer",
    period: "Earlier career",
    body: "Assessment platform engineering — .NET Core, Angular, Identity Server, MongoDB and distributed workflows.",
  },
];

const principles = [
  { name: "SOLID", body: "Maintainable, extensible software." },
  { name: "TDD", body: "Automated tests as confidence in behaviour." },
  { name: "DDD", body: "Model the domain around meaningful concepts." },
  { name: "KISS", body: "Simple over unnecessarily complex." },
  { name: "YAGNI", body: "Don't build it before it's needed." },
  { name: "DRY", body: "Practical abstractions, not dogma." },
  { name: "Production First", body: "Deployment, observability, security, reliability — designed in." },
];

function Experience() {
  return (
    <section id="experience" className="relative z-10 border-y border-border bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="heading-display mt-4 text-4xl text-foreground md:text-5xl">
                A record, not a résumé.
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-8 border-l border-border pl-6">
              {timeline.map((t, i) => (
                <Reveal key={t.company} delay={i * 80}>
                  <li className="relative">
                    <span
                      aria-hidden
                      className={`absolute -left-[27px] top-1.5 size-2.5 rounded-full ${
                        i === 0 ? "bg-accent" : "bg-border"
                      }`}
                    />
                    <div className="text-xs text-muted-foreground">{t.period}</div>
                    <div className="mt-1 text-base font-semibold text-foreground">{t.company}</div>
                    <div className="text-sm text-accent">{t.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="space-y-5">
            <Reveal>
              <div className="rounded-2xl border border-border bg-card p-7">
                <SectionLabel>Engineering leadership</SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  My experience is not limited to writing code. I lead engineering delivery —
                  mentoring engineers, reviewing pull requests, coordinating backend work and Scrum,
                  and translating product requirements into engineering tasks with Product Managers.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  <li>· Led a five-person engineering team with three direct reports (CoopHub)</li>
                  <li>· Backend PR reviews and engineering standards across teams</li>
                  <li>· Mentoring junior developers into stronger, more independent engineers</li>
                  <li>· Technical coordination between product, engineering and stakeholders</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-card p-7">
                <SectionLabel>How I engineer</SectionLabel>
                <div className="mt-4 space-y-3">
                  {principles.map((p) => (
                    <div key={p.name} className="flex items-baseline gap-3 text-sm">
                      <span className="font-display text-xs uppercase tracking-wide text-accent">
                        {p.name}
                      </span>
                      <span className="text-muted-foreground">{p.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-border bg-card p-7">
                <SectionLabel>Education &amp; certification</SectionLabel>
                <div className="mt-4 text-sm font-semibold text-foreground">
                  B.Sc. Computer Science with Mathematics
                </div>
                <div className="text-sm text-muted-foreground">Obafemi Awolowo University</div>
                <div className="mt-4 text-sm font-semibold text-foreground">
                  KCNA — Kubernetes and Cloud Native Associate
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ---------------------------- */

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.trim().length < 10) next.message = "Please include a short message (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-accent/40 bg-accent/10 p-8 text-center">
        <h3 className="heading-display text-2xl text-foreground">Message received</h3>
        <p className="mt-2 text-sm text-foreground/85">
          Thank you, {name.trim()}. I'll get back to you at {email.trim()}.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          className={inputClass}
          placeholder="Your name"
        />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          className={inputClass}
          placeholder="you@company.com"
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          className={inputClass}
          placeholder="Tell me about the role, project or system you have in mind."
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="rounded-full bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send message
      </button>
    </form>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="heading-display mt-4 text-4xl text-foreground md:text-6xl">
            Let's build something great.
          </h2>
          <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
            I'm open to conversations about senior engineering, technical leadership, backend
            systems, fintech, enterprise technology and challenging software engineering problems.
          </p>
          <a
            href="https://linkedin.com/in/akinkunmi-okunola"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-block rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30 hover:bg-panel"
          >
            linkedin.com/in/akinkunmi-okunola
          </a>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-base font-semibold text-foreground">Send a message</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              The fastest route is LinkedIn — but a note here works too.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
