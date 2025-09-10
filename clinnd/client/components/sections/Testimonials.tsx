import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Kozkare transformed our clinic’s digital presence. Patients trust us more and booking is effortless.",
    name: "Dr. Neha Kapoor",
    role: "Physician, Modern Care Clinic",
  },
  {
    quote:
      "Our Ayurvedic center finally has a website that feels true to our values—calm, premium, and effective.",
    name: "Ananya Rao",
    role: "Ayurvedic Practitioner, Kerala Wellness",
  },
  {
    quote:
      "Professional, reliable, and growth-focused. Kozkare is a true digital partner for healthcare.",
    name: "Dr. Rohan Iyer",
    role: "Dentist, SmileCraft Dental",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          What Professionals Say
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
            className="rounded-2xl border bg-card/70 p-6 shadow-sm"
          >
            <blockquote
              className="text-lg font-medium"
              style={{
                fontFamily: "Playfair Display, serif",
              }}
            >
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-foreground/70">
              <span className="font-medium text-foreground">{t.name}</span> —{" "}
              {t.role}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
