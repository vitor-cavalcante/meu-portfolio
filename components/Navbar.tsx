"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/", { scroll: false });
  };

  const handleContactClick = () => {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  window.open(`mailto:${email}`, "_blank", "noopener,noreferrer");
};

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      {/* Usamos grid ou flex com justify-between. 
        Para garantir o botão na borda, o container principal deve ser justify-between.
      */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 1. LADO ESQUERDO: Logo */}
        <div className="flex flex-none items-center">
          <Link
            href="/"
            onClick={scrollToTop}
            className="z-50 transition-opacity hover:opacity-80"
          >
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
              Vitor Cavalcante
            </span>
          </Link>
        </div>

        {/* 2. CENTRO: Links (Escondidos no Mobile) */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-sm font-medium text-slate-300 md:flex">
          <Link href="#sobre" className="transition hover:text-white">
            Sobre
          </Link>
          <Link href="#projetos" className="transition hover:text-white">
            Projetos
          </Link>
          <Link href="#experiencia" className="transition hover:text-white">
            Experiência
          </Link>
          <Link href="#formacao" className="transition hover:text-white">
            Formação
          </Link>

          {/* Language Switcher */}
          <Link
            href="/en"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-blue-400 border-l border-slate-800 pl-4"
            title="Switch to English"
          >
            <Globe size={14} />
            EN 🇬🇧
          </Link>
        </div>

        {/* 3. LADO DIREITO: Botão de Contato */}
        <div className="hidden md:flex flex-none items-center">
          <button
            onClick={handleContactClick}
            className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-slate-200"
          >
            Contato
          </button>
        </div>

        {/* MOBILE: Botão Hambúrguer (ml-auto garante que ele fique na direita se o resto sumir) */}
        <button
          className="z-50 ml-auto block text-slate-300 transition hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile Overlay (Omitido para brevidade, mas permanece igual) */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-950 transition-all duration-300 ease-in-out md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl font-medium text-slate-300">
            <Link href="#sobre" onClick={toggleMenu}>
              Sobre
            </Link>
            <Link href="#projetos" onClick={toggleMenu}>
              Projetos
            </Link>
            <Link href="#experiencia" onClick={toggleMenu}>
              Experiência
            </Link>
            <Link href="#formacao" onClick={toggleMenu}>
              Formação
            </Link>
            <Link
              href="/en"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-blue-400"
            >
              <Globe size={20} />
              EN 🇬🇧
            </Link>
            <button
              onClick={handleContactClick}
              className="mt-4 rounded-full bg-white px-8 py-3 text-sm font-bold text-black"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
