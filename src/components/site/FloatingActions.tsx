import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/914024417302?text=Hi%20Orient%20Opticals%2C%20I'd%20like%20to%20enquire%20about%20eyewear."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-[var(--shadow-card)] transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:04024417302"
        aria-label="Call Orient Opticals"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
