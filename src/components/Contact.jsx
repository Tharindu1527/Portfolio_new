import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op, user can still read/select the email
    }
  }

  const cards = [
    {
      icon: Mail,
      label: "email",
      value: profile.email,
      action: copyEmail,
      href: `mailto:${profile.email}`,
      isCopy: true,
    },
    {
      icon: FaGithub,
      label: "github",
      value: `@${profile.githubHandle}`,
      href: profile.github,
    },
    {
      icon: FaLinkedin,
      label: "linkedin",
      value: "/in/tharindu15n",
      href: profile.linkedin,
    },
  ];

  return (
    <section id="contact" className="relative bg-[#070a10] py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="07" title="Get In Touch" label="contact.sh" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="panel rounded-lg p-6 sm:p-10"
        >
          <p className="max-w-xl font-mono text-sm text-slate-500">
            <span className="text-[color:var(--color-accent)]">$</span> echo "Open to AI/ML engineering roles, research
            collaborations, and interesting problems."
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={c.isCopy ? (e) => { e.preventDefault(); c.action(); } : undefined}
                className="group flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-[color:var(--color-accent)]/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <c.icon size={18} className="text-[color:var(--color-accent-2)]" />
                  {c.isCopy && (copied ? <Check size={14} className="text-[color:var(--color-accent)]" /> : <Copy size={14} className="text-slate-600 group-hover:text-slate-400" />)}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-600">{c.label}</div>
                <div className="text-sm text-slate-200 break-all">{c.isCopy && copied ? "copied to clipboard" : c.value}</div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-slate-600">
              {profile.phone} · {profile.location}
            </p>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-md bg-[color:var(--color-accent)] px-4 py-2.5 font-mono text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              <FileDown size={15} /> download_resume.pdf
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
