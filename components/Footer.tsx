"use client";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  // Inicializa o ano. Se estiver no navegador, pega o atual, senão usa 2026.
  const [year] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return new Date().getFullYear();
    }
    return 2026;
  });

  // Função para garantir que o e-mail abra em uma nova aba/janela
  const handleContactClick = () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    window.open(`mailto:${email}`, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <span className="text-xl font-bold text-white">
              Vitor Cavalcante
            </span>
            <p className="mt-2 font-mono text-sm text-slate-500">
              Coordenador de TI & Analista de Sistemas
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/vitor-cavalcante"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-white"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/vitor-cavalcante-lima"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-blue-400"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            {/* Ícone de e-mail com a nova lógica de aba */}
            <button
              onClick={handleContactClick}
              className="text-slate-400 transition-colors hover:text-white"
              title="E-mail"
            >
              <Mail size={24} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-900 pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-slate-600">
            © Todos os direitos reservados • {year} • São Paulo, Brasil
          </p>
          <p className="text-xs text-slate-600">
            Desenvolvido com Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
