import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-accent font-display text-sm text-primary-foreground">
            AO
          </span>
          <span className="font-display text-lg uppercase tracking-tight text-foreground">
            Akinkunmi Okunola
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="/#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="/#expertise" className="transition-colors hover:text-foreground">
            Expertise
          </a>
          <a href="/#experience" className="transition-colors hover:text-foreground">
            Experience
          </a>
          <a href="/#stack" className="transition-colors hover:text-foreground">
            Stack
          </a>
        </nav>
        <a
          href="/#contact"
          className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <span className="font-display text-lg uppercase text-foreground">Akinkunmi Okunola</span>
        <span>Senior Software Engineer &amp; Technical Lead · Lagos, Nigeria</span>
        <a
          href="https://linkedin.com/in/akinkunmi-okunola"
          target="_blank"
          rel="noreferrer noopener"
          className="font-medium text-accent transition-opacity hover:opacity-80"
        >
          linkedin.com/in/akinkunmi-okunola
        </a>
      </div>
    </footer>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{children}</p>
  );
}

export function TechTag({ children, highlighted }: { children: ReactNode; highlighted?: boolean }) {
  return (
    <span
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        highlighted
          ? "border border-accent/30 bg-accent/10 text-accent"
          : "border border-border bg-panel text-foreground/90 hover:border-foreground/30",
      )}
    >
      {children}
    </span>
  );
}
