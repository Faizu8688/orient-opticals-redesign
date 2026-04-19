import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Eye } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground shadow-[var(--shadow-gold)] ring-1 ring-primary/40"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Eye className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Orient <span className="text-shimmer">Opticals</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary-deep"
              activeProps={{ className: "text-primary-deep" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:04024417302"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.04]"
          style={{ background: "var(--gradient-gold)" }}
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "text-primary-deep bg-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:04024417302"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-4 w-4" /> Call Now — 040 2441 7302
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
