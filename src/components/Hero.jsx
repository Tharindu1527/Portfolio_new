import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NeuralBackground from "./NeuralBackground";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";

const ROLES = [
  "Fine-tuning LLMs with QLoRA",
  "Building multi-agent AI systems",
  "Shipping production ML pipelines",
  "Researching biomedical signal ML",
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden bg-grid pt-24">
      <div className="pointer-events-none absolute inset-0">
        <NeuralBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070a]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-accent)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
          </span>
          open to opportunities · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
        >
          Hi, I'm <span className="gradient-text text-glow">{profile.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 h-8 font-mono text-lg text-slate-300 sm:text-xl"
        >
          <span className="text-slate-600">$</span> <span>{typed}</span>
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-0.5 animate-pulse bg-[color:var(--color-accent)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-[color:var(--color-accent)] px-5 py-3 font-mono text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            view_experiments()
          </a>
          <a
            href="#contact"
            className="rounded-md border border-white/15 px-5 py-3 font-mono text-sm text-slate-200 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            get_in_touch()
          </a>

          <div className="ml-1 flex items-center gap-4 pl-2 text-slate-500">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-200"><FaGithub size={20} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-200"><FaLinkedin size={20} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-slate-200"><Mail size={20} /></a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 hover:text-slate-300"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
