import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Glasses, Sparkles, Wrench, Search, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Eye Testing, Fitting & Repairs | Orient Opticals" },
      { name: "description", content: "Eye testing, frame selection, lens fitting and on-the-spot repairs at Orient Opticals, Chatta Bazaar, Hyderabad." },
      { property: "og:title", content: "Services — Eye Testing, Fitting & Repairs | Orient Opticals" },
      { property: "og:description", content: "Eye testing, frame selection, lens fitting and on-the-spot repairs." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Eye, title: "Eye Testing", desc: "Comprehensive vision checks using modern equipment to find your accurate prescription." },
  { icon: Glasses, title: "Frame Selection Assistance", desc: "Personal styling — we help you pick a frame that fits your face, lifestyle and budget." },
  { icon: Sparkles, title: "Lens Fitting & Replacement", desc: "Precise lens cutting and fitting, including anti-glare, blue-cut and progressive lenses." },
  { icon: Wrench, title: "Repairs & Adjustments", desc: "Loose screws, bent arms, nose-pad changes — quick fixes, often while you wait." },
  { icon: Search, title: "Sunglass Lens Tinting", desc: "Custom tints and UV protection added to your favourite frames." },
  { icon: ShieldCheck, title: "After-sales Care", desc: "Free adjustments and ongoing care for every pair purchased from us." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Our Services</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Everything your eyes need, in one place
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            From routine eye tests to specialist lens fitting and quick repairs —
            walk in any time we're open.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-primary/40">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[var(--gradient-hero)] px-6 py-10 text-center text-primary-foreground md:px-12 md:py-14">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Not sure what you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base">
            Give us a call — we'll happily guide you over the phone or schedule a quick visit.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:04024417302" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-primary">
              Call 040 2441 7302
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
