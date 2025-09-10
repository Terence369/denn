import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-accent/30 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div
              className="text-2xl font-semibold"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              KozKare
            </div>
            <p className="mt-3 text-sm/6 text-primary-foreground/80 max-w-xs">
              Premium digital partner for clinics, dental practices, Ayurveda &
              wellness centers across India.
            </p>
          </div>

          <nav className="grid gap-2 text-sm">
            <p className="mb-2 font-medium text-accent">Explore</p>
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a
              href="#solutions"
              className="hover:text-accent transition-colors"
            >
              Solutions
            </a>
            <a href="#pricing" className="hover:text-accent transition-colors">
              Pricing
            </a>
            <a
              href="#testimonials"
              className="hover:text-accent transition-colors"
            >
              Testimonials
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="grid gap-2 text-sm">
            <p className="mb-2 font-medium text-accent">Contact</p>
            <a
              href="mailto:hello@kozkare.com"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" /> hello@kozkare.com
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" /> +91 99999 99999
            </a>
            <p className="inline-flex items-start gap-2 text-primary-foreground/80">
              <MapPin className="mt-0.5 h-4 w-4" /> Kerala, India
            </p>
          </div>

          <div className="grid gap-3">
            <p className="font-medium text-accent">Book a free consultation</p>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-primary-foreground hover:text-primary"
            >
              Schedule now <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="text-xs text-primary-foreground/70">
              We respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-accent/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-primary-foreground/80 sm:flex-row">
          <p>© {new Date().getFullYear()} KozKare. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
