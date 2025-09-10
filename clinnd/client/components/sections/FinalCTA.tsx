import { useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export default function FinalCTA() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const float = useSpring({
    y: focused || value ? -18 : 0,
    scale: focused || value ? 0.92 : 1,
    config: { tension: 240, friction: 18 },
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2F544f25392732453c9e2d93a3dfefdb02%2F4fc715b9653045d282606262d1c56db1)",
      }}
    >
      <img
        src="https://source.unsplash.com/1600x900/?kerala,wellness,spa,calm"
        alt="Kerala-inspired wellness backdrop"
        decoding="async"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-50"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_100%_0%,hsl(var(--muted))_0%,transparent_70%)]" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Ready to Grow Your Practice?
        </h2>
        <p className="mt-2 text-foreground/75">
          Join doctors and wellness centers across India who trust Kozkare.
        </p>
        <form
          className="mx-auto mt-8 max-w-md rounded-2xl border bg-card/70 p-4 text-left shadow-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative">
            <animated.label
              style={float}
              className="pointer-events-none absolute left-3 top-3 origin-left text-sm text-foreground/60"
            >
              Your email
            </animated.label>
            <input
              aria-label="Your email"
              type="email"
              className="w-full rounded-xl border bg-background px-3 py-4 pt-6 text-sm outline-none ring-accent/30 focus:ring-2"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder=""
              required
            />
          </div>
          <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:bg-primary hover:text-primary-foreground">
            Schedule Consultation
          </button>
        </form>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            View Case Studies
          </a>
        </div>
      </div>
    </section>
  );
}
