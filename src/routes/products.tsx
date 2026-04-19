import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import catEyeglasses from "@/assets/cat-eyeglasses.jpg";
import catSunglasses from "@/assets/cat-sunglasses.jpg";
import catLenses from "@/assets/cat-lenses.jpg";
import catBranded from "@/assets/cat-branded.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Eyeglasses, Sunglasses & Lenses | Orient Opticals" },
      { name: "description", content: "Explore eyeglasses, sunglasses, prescription lenses and branded frames at Orient Opticals, Hyderabad." },
      { property: "og:title", content: "Products — Eyeglasses, Sunglasses & Lenses | Orient Opticals" },
      { property: "og:description", content: "Explore eyeglasses, sunglasses, prescription lenses and branded frames." },
      { property: "og:image", content: catBranded },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  {
    img: catEyeglasses,
    title: "Eyeglasses",
    desc: "Everyday frames in lightweight metal, acetate and TR90. Round, square, cat-eye, aviator — pick a shape that flatters you.",
    points: ["Men, women & kids", "Featherlight options", "Trial fitting on-site"],
  },
  {
    img: catSunglasses,
    title: "Sunglasses",
    desc: "UV-400 protected sunglasses in a range of tints, polarised and gradient lenses. Style meets total eye protection.",
    points: ["100% UV protection", "Polarised lenses", "Sport & fashion shapes"],
  },
  {
    img: catLenses,
    title: "Prescription Lenses",
    desc: "From everyday single-vision to advanced progressives. Add anti-glare, blue-cut, photochromic and high-index options.",
    points: ["Single vision & progressive", "Blue-cut & anti-glare", "Photochromic available"],
  },
  {
    img: catBranded,
    title: "Branded Frames",
    desc: "Authentic designer eyewear at fair, local prices. Choose from popular Indian and international brands in stock.",
    points: ["Authentic only", "New arrivals regularly", "Affordable luxury"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Our Products</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Eyewear, lenses & accessories
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Explore our collection — visit the store to try them on, or call us
            and we'll guide you to the perfect pair.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="space-y-12">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className={`grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] md:grid-cols-2 md:items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="aspect-square w-full bg-muted md:aspect-auto md:h-full">
                <img src={c.img} alt={c.title} loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
              </div>
              <div className="p-7 md:p-10">
                <h2 className="font-display text-2xl font-semibold text-foreground md:text-3xl">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{c.desc}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:04024417302"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-foreground shadow-[var(--shadow-gold)]"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919652471875?text=Hello%20Orient%20Opticals,%20I%20am%20interested%20in%20your%20products"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 py-2.5 text-sm font-medium text-white"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
