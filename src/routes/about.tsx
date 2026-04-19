import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Orient Opticals — 10+ Years in Hyderabad" },
      { name: "description", content: "Learn the story of Orient Opticals — a decade of trusted eyewear, honest pricing and friendly service in Chatta Bazaar, Hyderabad." },
      { property: "og:title", content: "About Orient Opticals — 10+ Years in Hyderabad" },
      { property: "og:description", content: "A decade of trusted eyewear, honest pricing and friendly service in Chatta Bazaar." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "Honest advice and transparent pricing on every visit." },
  { icon: Award, title: "Quality", desc: "Carefully sourced frames and precision lens fitting." },
  { icon: HeartHandshake, title: "Service", desc: "Warm, patient guidance — no rush, ever." },
  { icon: Users, title: "Community", desc: "Proudly serving Hyderabad families for 10+ years." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-24">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Our Story</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Caring for Hyderabad's vision, one frame at a time
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tucked into the busy lanes of Chatta Bazaar, Orient Opticals began over a
            decade ago with a simple promise — quality eyewear at honest prices, with
            time and attention for every customer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="prose prose-neutral max-w-none">
          <p className="text-base leading-relaxed text-foreground">
            What started as a small neighbourhood shop has grown into one of the most
            trusted optical destinations in old Hyderabad. Customers return to us not
            just for the wide range of eyeglasses, sunglasses and prescription lenses,
            but because they know they'll be looked after — with patient eye testing,
            honest recommendations, and a frame fitting that actually fits.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Today we stock hundreds of frames spanning everyday classics, sleek modern
            designs and authentic branded eyewear, alongside premium lens options like
            anti-glare, blue-cut and progressives. Whether it's your first pair or your
            fiftieth, our goal is the same: to send you out seeing — and feeling —
            your best.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
            Plan your visit →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
