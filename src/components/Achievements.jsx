import { motion } from "framer-motion";
import { Award, GraduationCap, BadgeCheck, ExternalLink } from "lucide-react";
import { competitions, certifications, education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-[#05070a] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="06" title="Education & Achievements" label="honors/" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45 }}
              className="panel rounded-lg p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-[color:var(--color-accent-2)]">
                <GraduationCap size={18} />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-300">Education</h3>
              </div>
              <h4 className="font-semibold text-slate-100">{education.degree}</h4>
              <p className="mt-1 font-mono text-sm text-slate-400">{education.school}</p>
              <p className="font-mono text-xs text-slate-600">{education.period} · {education.location}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-500">
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Competitions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="panel rounded-lg p-6"
            >
              <div className="mb-4 flex items-center gap-2 text-[color:var(--color-accent)]">
                <Award size={18} />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-300">Competitions</h3>
              </div>
              <div className="space-y-4">
                {competitions.map((c) => (
                  <div key={c.name}>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-slate-100">{c.name}</h4>
                      <span className="shrink-0 font-mono text-[10px] text-slate-600">{c.date}</span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{c.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="panel rounded-lg p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-2 text-[color:var(--color-accent-3)]">
              <BadgeCheck size={18} />
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-300">
                Certifications <span className="text-slate-600">({certifications.length})</span>
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.name} className="text-xs">
                  {c.url ? (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-start gap-1 text-slate-200 transition-colors hover:text-[color:var(--color-accent)]"
                    >
                      <span>{c.name}</span>
                      <ExternalLink size={11} className="mt-0.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <div className="text-slate-200">{c.name}</div>
                  )}
                  <div className="font-mono text-[10px] text-slate-600">{c.org} · {c.date}</div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
