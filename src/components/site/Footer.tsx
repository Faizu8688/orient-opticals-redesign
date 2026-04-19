import { Link } from "@tanstack/react-router";
import { Eye, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[var(--gradient-soft)]">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground shadow-[var(--shadow-gold)]"
                style={{ background: "var(--gradient-gold)" }}
              >
                <Eye className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold text-foreground">
                Orient Opticals
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Hyderabad's premium optical destination — a curated selection of eyeglasses,
              sunglasses and lenses delivered with a decade of caring service in
              the heart of Chatta Bazaar.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary-deep">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-deep">About</Link></li>
              <li><Link to="/products" className="hover:text-primary-deep">Products</Link></li>
              <li><Link to="/services" className="hover:text-primary-deep">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-deep">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-foreground">Visit Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" /> Shop No. 22-8-587/4/A, Lakkad Kote, Chatta Bazaar, Hyderabad – 500002</li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" /> <a href="tel:04024417302" className="hover:text-primary-deep">040 2441 7302</a></li>
              <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-deep" /> Open daily till late night</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Orient Opticals. All rights reserved.</p>
          <p>Crafted with care in Hyderabad, India.</p>
        </div>
      </div>
    </footer>
  );
}
