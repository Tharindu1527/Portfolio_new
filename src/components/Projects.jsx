import { motion } from "framer-motion";
import { FlaskConical, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#05070a] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="04" title="Experiments" label="projects/" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className={`panel group relative overflow-hidden rounded-lg transition-colors hover:border-[color:var(--color-accent)]/40 ${
                p.featured ? "md:col-span-1 ring-1 ring-[color:var(--color-accent)]/15" : ""
              }`}
            >
              {p.image && (
                <div className="relative aspect-[2/1] w-full overflow-hidden border-b border-white/10 bg-black">
                  <img
                    src={p.image}
                    alt={`${p.title} — repository preview`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                  {p.featured && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-accent-3)] backdrop-blur">
                      <Sparkles size={11} /> featured
                    </div>
                  )}
                </div>
              )}

              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-[color:var(--color-accent-2)]">
                  <FlaskConical size={16} />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    experiment/{p.id}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-snug text-slate-100">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">✓ result</span>
                  <span className="font-mono text-xs text-slate-500">{p.metric}</span>
                </div>

                {p.links?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                    {p.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-slate-500 transition-colors hover:text-[color:var(--color-accent)]"
                      >
                        <FaGithub size={13} /> {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
