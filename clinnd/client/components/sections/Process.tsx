import { motion } from "framer-motion";
import { PhoneCall, PenTool, Code2, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    desc: "Understand goals, patients, and brand.",
  },
  { icon: PenTool, title: "Design", desc: "Premium, wellness-inspired UI/UX." },
  {
    icon: Code2,
    title: "Development",
    desc: "Fast, secure, and scalable build.",
  },
  { icon: LifeBuoy, title: "Support", desc: "Continuous improvements & care." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          A Simple 4-Step Process
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.15 }}
            className="rounded-xl border bg-card p-6 text-center"
          >
            <s.icon className="mx-auto h-7 w-7 text-primary" />
            <p className="mt-4 text-lg font-medium">{s.title}</p>
            <p className="mt-1 text-sm text-foreground/70">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
