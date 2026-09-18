import { motion } from "framer-motion";

export default function SectionHeading({ index, title, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex items-baseline gap-3"
    >
      <span className="font-mono text-sm text-accent-2" style={{ color: "var(--color-accent-2)" }}>
        {index}
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">
        {title}
      </h2>
      <span className="ml-2 hidden font-mono text-xs uppercase tracking-widest text-slate-600 sm:inline">
        // {label}
      </span>
      <span className="h-px flex-1 bg-line" style={{ background: "var(--color-line)" }} />
    </motion.div>
  );
}
