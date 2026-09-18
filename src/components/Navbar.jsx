import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/profile";

const LINKS = [
  { id: "about", label: "about" },
  { id: "skills", label: "stack" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "experiments" },
  { id: "research", label: "research" },
  { id: "achievements", label: "achievements" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled ? "border-b border-white/10 bg-[#05070a]/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#about" className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-100">
          <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
          td<span style={{ color: "var(--color-accent)" }}>@</span>portfolio<span className="text-slate-600">:~$</span>
        </a>

        <ul className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wide md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`rounded-md px-3 py-2 transition-colors ${
                  active === l.id ? "text-[color:var(--color-accent)]" : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-slate-100">
            <FaGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-slate-100">
            <FaLinkedin size={18} />
          </a>
          <a
            href={profile.resume}
            download
            className="flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
          >
            <FileDown size={14} /> resume.pdf
          </a>
        </div>

        <button className="text-slate-200 md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#05070a]/95 px-5 py-4 font-mono text-sm md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-slate-300 hover:text-[color:var(--color-accent)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-4 border-t border-white/10 pt-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400"><FaGithub size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400"><FaLinkedin size={18} /></a>
            <a href={profile.resume} download className="flex items-center gap-1.5 text-slate-300">
              <FileDown size={14} /> resume.pdf
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
