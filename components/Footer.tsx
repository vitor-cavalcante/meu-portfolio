"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear =
    typeof window !== "undefined" ? new Date().getFullYear() : 2026;

  const handleContactClick = () => {
    const email =
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "seu-email@exemplo.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors cursor-default">
              Vitor Cavalcante
            </span>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              IT Coordinator & Systems Analyst
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/vitor-cavalcante"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 transition-all duration-300 hover:text-white hover:border-slate-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              title="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/vitor-cavalcante-lima"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 transition-all duration-300 hover:text-blue-400 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <button
              onClick={handleContactClick}
              className="group relative p-3 rounded-full bg-slate-900/50 border border-slate-800 text-slate-400 transition-all duration-300 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]"
              title="E-mail"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-900/50 pt-8 md:flex-row">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
              © {currentYear} • Todos os direitos reservados
            </p>
            <p className="text-[10px] text-slate-700">
              São Paulo, Brasil •{" "}
              <span className="text-blue-500/50 italic">
                Híbrido por Natureza
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600">
            <span className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
              <span className="h-1 w-1 rounded-full bg-blue-500/50"></span>
              Next.js
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
              <span className="h-1 w-1 rounded-full bg-emerald-500/50"></span>
              Tailwind
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
              <span className="h-1 w-1 rounded-full bg-cyan-500/50"></span>
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
