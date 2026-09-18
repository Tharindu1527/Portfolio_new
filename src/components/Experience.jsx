import { motion } from "framer-motion";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#070a10] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="03" title="Experience" label="git log --oneline" />

        <div className="relative border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.org}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span
                className={`absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[49px] ${
                  job.status === "active"
                    ? "border-[color:var(--color-accent)] bg-[color:var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]"
                    : "border-slate-600 bg-[#070a10]"
                }`}
              />

              <div className="panel rounded-lg p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">{job.role}</h3>
                    <p className="font-mono text-sm text-[color:var(--color-accent-2)]">
                      {job.org} <span className="text-slate-500">· {job.type}</span>
                    </p>
                  </div>
                  <div className="text-right font-mono text-xs text-slate-500">
                    <div>{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>

                {job.status === "active" && (
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-accent)]">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[color:var(--color-accent)]" /> current
                  </span>
                )}

                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1 font-mono text-[color:var(--color-accent)]">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
