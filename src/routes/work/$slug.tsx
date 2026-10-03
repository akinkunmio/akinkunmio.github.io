import { createFileRoute, Link } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { Reveal, SectionLabel, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/work/$slug")({
  component: CaseStudy,
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project
      ? `${project.title} | Akinkunmi Okunola`
      : "Case Study | Akinkunmi Okunola";
    const description = project?.summary ?? "Engineering case study by Akinkunmi Okunola.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
});

function CaseStudy() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 py-32 text-center">
          <h1 className="heading-display text-5xl">Case study not found</h1>
          <p className="mt-4 text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="mt-8 rounded-full bg-gradient-to-r from-brand to-accent px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Back to home
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-40 z-0 size-[560px] rounded-full bg-brand/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_15%,oklch(0.3_0.04_262_/_50%),transparent_60%)]"
      />
      <SiteHeader />
      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-12">
          <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            ← All work
          </Link>
          <Reveal>
            <span className="mt-8 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {project.category}
            </span>
            <h1 className="heading-display mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] text-foreground">
              {project.title}
            </h1>
            <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">{project.subtitle}</p>
          </Reveal>
          <Reveal delay={120}>
            <dl className="mt-10 grid gap-6 border-y border-border py-6 sm:grid-cols-3">
              {project.company && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Company
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{project.company}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  My role
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Period
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{project.period}</dd>
              </div>
            </dl>
          </Reveal>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionLabel>The problem</SectionLabel>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <SectionLabel>Impact</SectionLabel>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  {project.impact.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionLabel>Context &amp; my role</SectionLabel>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                {project.story.map((para, i) => (
                  <p key={i} className={i === 1 ? "border-l-2 border-accent pl-4 text-foreground" : undefined}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Solution */}
        <section className="border-y border-border bg-panel">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2">
            <Reveal>
              <SectionLabel>Solution</SectionLabel>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
                {project.solution.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <SectionLabel>Architecture</SectionLabel>
              <div className="mt-4 space-y-3">
                {project.architecture.map((layer, i) => (
                  <div key={layer.label} className="flex items-start gap-3">
                    <span className="font-display mt-0.5 text-xs text-accent">0{i + 1}</span>
                    <div className="flex-1 rounded-xl border border-border bg-card px-4 py-3">
                      <div className="text-sm font-semibold text-foreground">{layer.label}</div>
                      <div className="text-xs text-muted-foreground">{layer.detail}</div>
                    </div>
                  </div>
                ))}
                <div
                  aria-hidden
                  className="mx-auto h-px w-2/3"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, var(--color-border) 0 6px, transparent 6px 12px)",
                  }}
                />
                <p className="text-center text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Request flow · top to bottom
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Technology + lessons */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <SectionLabel>Technology</SectionLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-accent/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <SectionLabel>Lessons</SectionLabel>
              <p className="mt-4 border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-foreground">
                {project.lessons}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Next project */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <Link
              to="/work/$slug"
              params={{ slug: nextProject.slug }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/40"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Next case study
                </span>
                <h2 className="heading-display mt-2 text-2xl text-foreground md:text-3xl">
                  {nextProject.title}
                </h2>
              </div>
              <span className="font-display text-2xl text-accent transition-all group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
