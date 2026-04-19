import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Star, ShieldCheck, Sparkles, HeartHandshake, Glasses, Sun, Eye, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-eyewear.jpg";
import catEyeglasses from "@/assets/cat-eyeglasses.jpg";
import catSunglasses from "@/assets/cat-sunglasses.jpg";
import catLenses from "@/assets/cat-lenses.jpg";
import catBranded from "@/assets/cat-branded.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orient Opticals — Trusted Optical Store in Hyderabad" },
      { name: "description", content: "Affordable, stylish eyeglasses, sunglasses & lenses in Chatta Bazaar, Hyderabad. 10+ years of trusted service. Call 040 2441 7302." },
      { property: "og:title", content: "Orient Opticals — Trusted Optical Store in Hyderabad" },
      { property: "og:description", content: "Affordable, stylish eyeglasses, sunglasses & lenses in Chatta Bazaar, Hyderabad." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Glasses, title: "Wide Variety of Frames", desc: "Hundreds of frames across classic, modern and designer styles." },
  { icon: ShieldCheck, title: "Affordable Pricing", desc: "Honest, transparent prices on every pair — no hidden costs." },
  { icon: HeartHandshake, title: "Excellent Service", desc: "Friendly staff guiding you to the perfect fit, every time." },
];

const categories = [
  { img: catEyeglasses, title: "Eyeglasses", desc: "Lightweight, durable frames for everyday clarity." },
  { img: catSunglasses, title: "Sunglasses", desc: "UV-protected styles to match every face and mood." },
  { img: catLenses, title: "Prescription Lenses", desc: "Anti-glare, blue-cut and progressive options." },
  { img: catBranded, title: "Branded Frames", desc: "Authentic designer brands at fair, local prices." },
];

const services = [
  { icon: Eye, title: "Eye Testing", desc: "Comprehensive checks with modern equipment." },
  { icon: Glasses, title: "Frame Selection", desc: "Personal guidance on style and fit." },
  { icon: Sparkles, title: "Lens Fitting & Replacement", desc: "Precise lens cutting and fitting on the spot." },
  { icon: Wrench, title: "Repairs & Adjustments", desc: "Quick fixes to keep your eyewear comfortable." },
];

const testimonials = [
  { name: "Ravi K.", text: "Best variety, reasonable rates and amazing service. Highly recommend Orient Opticals." },
  { name: "Sana M.", text: "Wide range of brands at affordable prices. Found exactly what I wanted." },
  { name: "Ajay R.", text: "Excellent service and friendly staff. They took time to help me pick the right frame." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
              <Star className="h-3.5 w-3.5 fill-current" /> 4.5 ★ on Google
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Your Trusted <span className="text-primary">Optical Store</span> in Hyderabad
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Affordable, stylish, and high-quality eyewear — handpicked frames,
              precise lenses, and warm, expert service in the heart of Chatta Bazaar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:04024417302" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-[1.03]">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Orient+Opticals+Chatta+Bazaar+Hyderabad"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl font-semibold text-foreground">10+</span><div>Years</div></div>
              <div className="h-8 w-px bg-border" />
              <div><span className="font-display text-2xl font-semibold text-foreground">5k+</span><div>Happy customers</div></div>
              <div className="h-8 w-px bg-border" />
              <div><span className="font-display text-2xl font-semibold text-foreground">200+</span><div>Frame styles</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Curated eyewear collection at Orient Opticals"
              width={1536}
              height={1024}
              className="relative w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="rounded-3xl bg-[var(--gradient-hero)] px-6 py-12 text-primary-foreground md:px-14 md:py-16">
          <div className="grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl font-semibold md:text-4xl">A decade of caring for Hyderabad's eyes</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                For over 10 years, Orient Opticals has been a familiar name in
                Chatta Bazaar — known for honest pricing, quality eyewear, and
                the kind of friendly advice you'd expect from family.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-primary-soft">
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-primary">Our Collection</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">Eyewear for every style</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-primary hover:underline md:inline">View all →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">Services made easy</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Loved by locals</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">What our customers say</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground">"{t.text}"</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <div className="rounded-3xl border border-border bg-card px-6 py-12 text-center shadow-[var(--shadow-card)] md:px-14">
          <Sun className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">Visit us today in Chatta Bazaar</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Walk in for a free frame trial or call us — we're open till late night, every day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:04024417302" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
              <Phone className="h-4 w-4" /> 040 2441 7302
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary">
              <MapPin className="h-4 w-4" /> Find us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
