import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "../data/profile";

function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="relative border-y border-white/10 bg-[#070a10] py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center sm:text-left"
          >
            <div className="text-3xl font-bold text-[color:var(--color-accent)] sm:text-4xl">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-200">{s.label}</div>
            <div className="mt-0.5 font-mono text-xs text-slate-500">{s.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
