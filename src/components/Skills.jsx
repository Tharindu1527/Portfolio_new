import { motion } from "framer-motion";
import { skillGroups } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#05070a] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="02" title="Tech Stack" label="skills.json" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
              className="panel group rounded-lg p-5 transition-colors hover:border-[color:var(--color-accent)]/40"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent-2)]" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-300">
                  {group.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-slate-400 transition-colors group-hover:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
