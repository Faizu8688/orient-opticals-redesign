import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

const WA_URL = "https://wa.me/919652471875?text=Hello%20Orient%20Opticals,%20I%20am%20interested%20in%20your%20products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Orient Opticals — Chatta Bazaar, Hyderabad" },
      { name: "description", content: "Visit Orient Opticals in Chatta Bazaar, Hyderabad. Call 040 2441 7302 or chat on WhatsApp. Open daily till late night." },
      { property: "og:title", content: "Contact Orient Opticals — Chatta Bazaar, Hyderabad" },
      { property: "og:description", content: "Visit our showroom, call us, or chat on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const ADDRESS = "Shop No. 22-8-587/4/A, Lakkad Kote, Chatta Bazaar, Hyderabad, Telangana – 500002";
const MAPS_QUERY = "Orient+Opticals+Chatta+Bazaar+Hyderabad";

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.187-.73.187-1.117 0-.244-.058-.473-.245-.658-.302-.302-1.846-.973-2.245-1.118zM16.063 4C9.928 4 4.95 8.978 4.95 15.113c0 1.97.518 3.852 1.488 5.526l-1.892 5.59 5.79-1.85a11.04 11.04 0 0 0 5.727 1.585c6.135 0 11.113-4.978 11.113-11.113 0-2.974-1.158-5.77-3.262-7.873A11.045 11.045 0 0 0 16.063 4zm0 20.058c-1.762 0-3.482-.473-4.974-1.36l-.358-.214-3.687 1.175 1.205-3.582-.235-.372a8.937 8.937 0 0 1-1.39-4.79c0-4.945 4.022-8.967 8.967-8.967 4.946 0 8.968 4.022 8.968 8.967 0 4.946-4.022 9.143-8.496 9.143z" />
    </svg>
  );
}

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-deep">Get in touch</p>
          <h1 className="mt-3 font-display text-5xl font-semibold text-foreground md:text-6xl">Visit Orient Opticals</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            We'd love to welcome you in store. Drop by, call ahead, or message us on WhatsApp.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href="tel:04024417302"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-gold)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a
              href={WA_URL}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-medium text-white shadow-[var(--shadow-soft)]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <InfoCard
              icon={MapPin}
              title="Address"
              content={ADDRESS}
              actionLabel="Get Directions"
              actionHref={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
            />
            <InfoCard
              icon={Phone}
              title="Phone"
              content="040 2441 7302"
              actionLabel="Call Now"
              actionHref="tel:04024417302"
            />
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-[var(--shadow-soft)]"
                  style={{ background: "var(--whatsapp)" }}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground">WhatsApp</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Quick replies during open hours • +91 96524 71875
                  </p>
                  <a
                    href={WA_URL}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-4 py-2 text-sm font-medium text-white"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
            <InfoCard
              icon={Clock}
              title="Opening Hours"
              content="Open daily • Till late night"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-primary/30 bg-card shadow-[var(--shadow-card)]">
            <iframe
              title="Orient Opticals location map"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[460px] w-full md:h-full"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon: Icon,
  title,
  content,
  actionLabel,
  actionHref,
}: {
  icon: typeof MapPin;
  title: string;
  content: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-gold)]">
      <div className="flex items-start gap-4">
        <span
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-foreground shadow-[var(--shadow-gold)]"
          style={{ background: "var(--gradient-gold)" }}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{content}</p>
          {actionLabel && actionHref && (
            <a
              href={actionHref}
              target={actionHref.startsWith("http") ? "_blank" : undefined}
              rel={actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary-deep hover:underline"
            >
              {actionLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
