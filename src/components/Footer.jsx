import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070a] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <p className="font-mono text-xs text-slate-600">
          designed & built by {profile.name} · © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-[11px] text-slate-700">
          React · Vite · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
