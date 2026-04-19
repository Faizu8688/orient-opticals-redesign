import { Phone } from "lucide-react";

const WA_URL = "https://wa.me/919652471875?text=Hello%20Orient%20Opticals,%20I%20am%20interested%20in%20your%20products";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_0_8px_oklch(0.65_0.17_145/0.18)]"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--whatsapp)] opacity-30" />
        {/* Official WhatsApp glyph */}
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.187-.73.187-1.117 0-.244-.058-.473-.245-.658-.302-.302-1.846-.973-2.245-1.118zM16.063 4C9.928 4 4.95 8.978 4.95 15.113c0 1.97.518 3.852 1.488 5.526l-1.892 5.59 5.79-1.85a11.04 11.04 0 0 0 5.727 1.585c6.135 0 11.113-4.978 11.113-11.113 0-2.974-1.158-5.77-3.262-7.873A11.045 11.045 0 0 0 16.063 4zm0 20.058c-1.762 0-3.482-.473-4.974-1.36l-.358-.214-3.687 1.175 1.205-3.582-.235-.372a8.937 8.937 0 0 1-1.39-4.79c0-4.945 4.022-8.967 8.967-8.967 4.946 0 8.968 4.022 8.968 8.967 0 4.946-4.022 9.143-8.496 9.143z" />
        </svg>
      </a>
      <a
        href="tel:04024417302"
        aria-label="Call Orient Opticals"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gradient-gold)] bg-cover text-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-110 md:hidden"
        style={{ background: "var(--gradient-gold)" }}
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
