import { motion } from "framer-motion";

const benefits = [
  {
    title: "More Patient Bookings",
    desc: "Up to 40% increase with clear CTAs and automated reminders.",
  },
  {
    title: "Enhanced Credibility",
    desc: "Premium presence that builds trust at first glance.",
  },
  {
    title: "Streamlined Operations",
    desc: "Automation reduces no-shows and saves staff time.",
  },
  {
    title: "Sustainable Growth",
    desc: "SEO-ready, analytics informed, and future-proof.",
  },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Transform Your Practice with Kozkare
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <div className="mx-auto h-2 w-10 rounded-full bg-accent" />
            <p className="mt-4 text-lg font-medium">{b.title}</p>
            <p className="mt-1 text-sm text-foreground/70">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
