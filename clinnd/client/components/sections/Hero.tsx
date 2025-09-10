import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leafRef = useRef<SVGSVGElement | null>(null);
  const lotusRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!leafRef.current || !lotusRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(leafRef.current, {
        y: -20,
        rotate: -5,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: leafRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(lotusRef.current, {
        y: 16,
        rotate: 6,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: lotusRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-28">
      <img
        src="https://source.unsplash.com/1600x900/?clinic,interior,clean,reception"
        alt="Modern clinic interior"
        decoding="async"
        loading="eager"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_0%_0%,rgb(237,243,242)_0%,transparent_60%)]" />
      <div
        className="mx-auto max-w-7xl px-6 pb-20 pt-12 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F5e88fd722d9e48768c8d20415bd38c45)",
          backgroundColor: "rgba(155, 155, 155, 1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-[40px] sm:text-[50px] md:text-[61px] font-semibold leading-[48px] md:leading-[60px] text-[#4A4A4A]">
            Professional Websites & Appointment Solutions for Clinics & Wellness
            Centers
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-black">
            We help doctors, dental practices, and Ayurvedic wellness centers
            build trust, attract more patients, and grow with modern digital
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="animate-breathe inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground"
            >
              Start Your Digital Journey
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
            >
              See Work Samples
            </a>
          </div>
        </motion.div>
      </div>

      {/* Botanical motifs */}
      <svg
        ref={leafRef}
        className="absolute right-[-30px] top-24 h-40 w-40 text-secondary/30"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20 80 C40 40, 60 40, 80 80" />
        <path d="M35 65 C50 50, 50 50, 65 65" />
      </svg>
      <svg
        ref={lotusRef}
        className="absolute left-[-30px] bottom-8 h-36 w-36 text-secondary/25"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M50 70 C40 65, 30 55, 25 45 C35 50, 45 52, 50 40 C55 52, 65 50, 75 45 C70 55, 60 65, 50 70 Z" />
      </svg>
    </section>
  );
}
