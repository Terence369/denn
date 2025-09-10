import { motion } from "framer-motion";
import { CalendarCheck2, ShieldCheck, LineChart, Layout } from "lucide-react";

const solutions = [
  {
    icon: CalendarCheck2,
    title: "Smart Appointment Scheduling",
    desc: "Automated reminders, calendar sync, and fewer no-shows.",
  },
  {
    icon: Layout,
    title: "Wellness-Focused Web Design",
    desc: "Elegant, credible interfaces tailored for clinics and Ayurveda.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable Infrastructure",
    desc: "Privacy-first, HIPAA-aware, and built for scale.",
  },
  {
    icon: LineChart,
    title: "Growth-Ready Digital Marketing",
    desc: "SEO-friendly, analytics-driven, and conversion focused.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--muted))_0%,transparent_100%)] py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Digital Solutions for Clinics & Wellness
          </h2>
          <p className="mt-2 text-foreground/75">
            Everything you need to build trust and grow your practice.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <s.icon className="h-7 w-7 text-primary" />
              <p className="mt-4 text-lg font-medium">{s.title}</p>
              <p className="mt-1 text-sm text-foreground/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
