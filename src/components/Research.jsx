import { motion } from "framer-motion";
import { Activity, Microscope } from "lucide-react";
import { research } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Research() {
  return (
    <section id="research" className="relative bg-[#070a10] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" title="Active Research" label="research.log" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="panel relative overflow-hidden rounded-lg p-6 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[color:var(--color-accent-2)]/10 blur-3xl" />

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--color-accent-2)]/30 bg-[color:var(--color-accent-2)]/10 text-[color:var(--color-accent-2)]">
              <Microscope size={18} />
            </div>
            <h3 className="text-xl font-semibold text-slate-100">{research.title}</h3>
            <span className="flex items-center gap-1.5 rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-accent)]">
              <Activity size={11} className="animate-pulse" /> {research.status}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {research.tags.map((t) => (
              <span key={t} className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400">
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-3">
            {research.points.map((point, idx) => (
              <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                <span className="mt-1 font-mono text-[color:var(--color-accent-2)]">›</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-mono text-xs text-slate-600">
            target: peer-reviewed publication (Elsevier / Springer)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
