import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Star, ShieldCheck, Sparkles, HeartHandshake, Glasses, Sun, Eye, Wrench } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import heroImg from "@/assets/hero-eyewear.jpg";
import storeEntrance from "@/assets/store-entrance.jpg";
import catEyeglasses from "@/assets/cat-eyeglasses.jpg";
import catSunglasses from "@/assets/cat-sunglasses.jpg";
import catLenses from "@/assets/cat-lenses.jpg";
import catBranded from "@/assets/cat-branded.jpg";

const WA_URL = "https://wa.me/919652471875?text=Hello%20Orient%20Opticals,%20I%20am%20interested%20in%20your%20products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orient Opticals — Premium Eyewear Showroom in Hyderabad" },
      { name: "description", content: "A premium optical showroom in Chatta Bazaar, Hyderabad. Curated eyeglasses, sunglasses & lenses. Call 040 2441 7302 or chat on WhatsApp." },
      { property: "og:title", content: "Orient Opticals — Premium Eyewear Showroom in Hyderabad" },
      { property: "og:description", content: "Curated eyewear, expert fitting and warm service in Chatta Bazaar, Hyderabad." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Glasses, title: "Curated Frame Library", desc: "Hundreds of styles — from classic to contemporary designer pieces." },
  { icon: ShieldCheck, title: "Honest, Fair Pricing", desc: "Transparent prices on every pair, with no hidden costs." },
  { icon: HeartHandshake, title: "White-glove Service", desc: "Patient guidance and precise fitting from experienced opticians." },
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

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.187-.73.187-1.117 0-.244-.058-.473-.245-.658-.302-.302-1.846-.973-2.245-1.118zM16.063 4C9.928 4 4.95 8.978 4.95 15.113c0 1.97.518 3.852 1.488 5.526l-1.892 5.59 5.79-1.85a11.04 11.04 0 0 0 5.727 1.585c6.135 0 11.113-4.978 11.113-11.113 0-2.974-1.158-5.77-3.262-7.873A11.045 11.045 0 0 0 16.063 4zm0 20.058c-1.762 0-3.482-.473-4.974-1.36l-.358-.214-3.687 1.175 1.205-3.582-.235-.372a8.937 8.937 0 0 1-1.39-4.79c0-4.945 4.022-8.967 8.967-8.967 4.946 0 8.968 4.022 8.968 8.967 0 4.946-4.022 9.143-8.496 9.143z" />
    </svg>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-soft)]" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-3 py-1 text-xs font-medium text-primary-deep">
              <Star className="h-3.5 w-3.5 fill-current" /> 4.5 ★ on Google • 10+ years
            </span>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
              Hyderabad's <span className="text-shimmer">Premium</span> Optical Showroom
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A curated collection of designer frames, precision lenses, and warm,
              expert service — all in the heart of Chatta Bazaar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:04024417302"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.04]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.04]"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Orient+Opticals+Chatta+Bazaar+Hyderabad"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary-deep"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-3xl font-semibold text-foreground">10+</span><div>Years</div></div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-3xl font-semibold text-foreground">5k+</span><div>Happy customers</div></div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-3xl font-semibold text-foreground">200+</span><div>Frame styles</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-[var(--gradient-gold)] opacity-30 blur-3xl" />
            <div className="relative overflow-hidden arch-frame border border-primary/30 bg-card shadow-[var(--shadow-card)]">
              <img
                src={heroImg}
                alt="Curated eyewear collection at Orient Opticals"
                width={1536}
                height={1024}
                className="h-[480px] w-full object-cover md:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-gold)]">
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full text-foreground shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visit Our Store — featured arch image */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-primary/15 blur-2xl" />
            <div className="relative overflow-hidden arch-top border border-primary/30 shadow-[var(--shadow-card)]">
              <img
                src={storeEntrance}
                alt="Orient Opticals showroom entrance with elegant arch design"
                loading="lazy"
                width={1536}
                height={1024}
                className="h-[460px] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-deep">Visit Our Store</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
              Step into our <span className="text-shimmer">showroom</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Walk through our signature arched entrance into a calm, well-lit
              space designed for unhurried browsing. Try on hundreds of frames,
              talk through prescriptions with our opticians, and leave wearing
              eyewear that truly suits you.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" />
                Shop No. 22-8-587/4/A, Lakkad Kote, Chatta Bazaar, Hyderabad – 500002
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" />
                040 2441 7302 — open daily till late night
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Orient+Opticals+Chatta+Bazaar+Hyderabad"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={WA_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary-deep"
              >
                <WhatsAppIcon className="h-4 w-4 text-[var(--whatsapp)]" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-white md:px-14 md:py-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Our Story</p>
              <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">A decade of caring for Hyderabad's eyes</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
                For over 10 years, Orient Opticals has been a familiar name in
                Chatta Bazaar — known for honest pricing, quality eyewear, and
                the kind of friendly advice you'd expect from family.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground"
                style={{ background: "var(--gradient-gold)" }}
              >
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
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-deep">Our Collection</p>
            <h2 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">Eyewear for every style</h2>
          </div>
          <Link to="/products" className="hidden text-sm font-medium text-primary-deep hover:underline md:inline">View all →</Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-gold)]">
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-deep">What we do</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">Services made effortless</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <span
                className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full text-foreground shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-deep">Loved by locals</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-foreground md:text-5xl">What our customers say</h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary-deep">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : "fill-current opacity-50"}`} />
              ))}
            </div>
            4.5 / 5 on Google
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-gold)]">
              <div className="flex gap-1 text-primary-deep">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 font-display text-lg leading-relaxed text-foreground">"{t.text}"</p>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <div className="rounded-[2.5rem] border border-primary/30 bg-card px-6 py-12 text-center shadow-[var(--shadow-card)] md:px-14">
          <Sun className="mx-auto h-10 w-10 text-primary-deep" />
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">Visit us today in Chatta Bazaar</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            Walk in for a free frame trial or call us — we're open till late night, every day.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:04024417302"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-gold)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-4 w-4" /> 040 2441 7302
            </a>
            <a
              href={WA_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-medium text-white"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary-deep">
              <MapPin className="h-4 w-4" /> Find us
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
