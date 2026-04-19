import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Orient Opticals — Chatta Bazaar, Hyderabad" },
      { name: "description", content: "Visit Orient Opticals in Chatta Bazaar, Hyderabad. Call 040 2441 7302. Open daily till late night." },
      { property: "og:title", content: "Contact Orient Opticals — Chatta Bazaar, Hyderabad" },
      { property: "og:description", content: "Visit our store, call us, or get directions." },
    ],
  }),
  component: ContactPage,
});

const ADDRESS = "Shop No. 22-8-587/4/A, Lakkad Kote, Chatta Bazaar, Hyderabad, Telangana – 500002";
const MAPS_QUERY = "Orient+Opticals+Chatta+Bazaar+Hyderabad";

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-[var(--gradient-soft)]">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 md:py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Get in touch</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Visit Orient Opticals</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            We'd love to see you in store. Drop by, call ahead, or message us on WhatsApp.
          </p>
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
            <InfoCard
              icon={MessageCircle}
              title="WhatsApp"
              content="Quick replies during open hours"
              actionLabel="Chat on WhatsApp"
              actionHref="https://wa.me/914024417302"
            />
            <InfoCard
              icon={Clock}
              title="Opening Hours"
              content="Open daily • Till late night"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            <iframe
              title="Orient Opticals location map"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full md:h-full"
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
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{content}</p>
          {actionLabel && actionHref && (
            <a
              href={actionHref}
              target={actionHref.startsWith("http") ? "_blank" : undefined}
              rel={actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              {actionLabel} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
