import { motion } from "framer-motion";

const items = [
  {
    label: "Modern Clinics",
    img: "https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F51f887c7df5d4a989ce1de0592c0af9f",
  },
  {
    label: "Dental Practices",
    img: "https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F6a4cb4d14239443ab3a764c26e8d9cf9",
  },
  {
    label: "Ayurvedic & Wellness Centers",
    img: "https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F785901edeba64e6dbdf49c8e70680fa4",
  },
  {
    label: "Diagnostic Labs",
    img: "https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F708d720eac8949e4993f7d3f8e544bb2",
  },
  {
    label: "Specialty Doctors",
    img: "https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F808d79e5a6b248f6829fb9b7aea387a2",
  },
];

export default function Trust() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#4A4A4A]">
          Trusted by Healthcare & Wellness Professionals
        </h2>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="overflow-hidden rounded-xl border bg-card/60 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.label}
                decoding="async"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-lg font-medium">{item.label}</p>
              <p className="mt-1 text-sm text-foreground/70">
                Premium web experiences designed for trust, clarity, and
                conversion.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
