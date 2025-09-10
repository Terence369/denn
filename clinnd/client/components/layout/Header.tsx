import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md/80 bg-background/70 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="inline-flex items-center gap-2 group">
          <span
            className="text-2xl font-semibold tracking-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              color: "hsl(var(--accent))",
            }}
          >
            KozKare
          </span>
          <span className="h-2 w-2 rounded-full bg-primary/80 group-hover:bg-primary transition-colors" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
          >
            Book Free Consultation
            <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-transparent group-hover:ring-primary/30 transition" />
          </a>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation"
              className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-foreground/80"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] border-l">
              <div className="relative h-full w-full bg-[radial-gradient(80%_50%_at_100%_0%,hsl(var(--muted))_0%,transparent_70%)]">
                <div className="mt-12 flex flex-col gap-6 px-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-base text-foreground/90"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="mt-2 inline-flex items-center justify-center rounded-full border border-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
