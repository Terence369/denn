import { motion } from "framer-motion";

const tiers = [
  {
    name: "Clinics",
    features: [
      "Modern, credible website",
      "Appointment scheduling",
      "HIPAA-aware setup",
    ],
  },
  {
    name: "Wellness Centers",
    featured: true,
    features: [
      "Wellness-inspired design",
      "Packages & programs support",
      "Consultation flows",
    ],
  },
  {
    name: "Custom Solutions",
    features: [
      "Labs, specialty practices",
      "Integrations & automations",
      "Advanced analytics",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,hsl(var(--muted))_0%,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Flexible Plans for Every Practice
          </h2>
          <p className="mt-2 text-foreground/75">
            Designed to fit your growth stage
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className={`rounded-2xl border p-6 shadow-sm ${
                t.featured ? "bg-primary text-primary-foreground" : "bg-card"
              }`}
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm opacity-80">
                Designed to fit your growth stage
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${t.featured ? "bg-accent" : "bg-primary"}`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition ${
                  t.featured
                    ? "border-accent text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Request a Custom Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
