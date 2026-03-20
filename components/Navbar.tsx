"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Função genérica para scroll suave (usada para o Nome e para as Seções)
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false); // Fecha o menu mobile se estiver aberto

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push("/", { scroll: false });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Pega a altura do navbar para compensar o scroll (offset)
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Atualiza a URL sem dar o pulo brusco do navegador
        router.push(`/#${id}`, { scroll: false });
      }
    }
  };

  const handleContactClick = () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    window.open(`mailto:${email}`, "_blank", "noopener,noreferrer");
  };

  const contactBtnClass =
    "rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition-all duration-300 hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]";

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 1. Logo (Scroll para o Topo) */}
        <div className="flex flex-none items-center">
          <Link
            href="/"
            onClick={(e) => handleScroll(e, "top")}
            className="z-50 transition-opacity hover:opacity-80"
          >
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
              Vitor Cavalcante
            </span>
          </Link>
        </div>

        {/* 2. Menu Central (Desktop) */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#sobre"
            onClick={(e) => handleScroll(e, "sobre")}
            className="transition hover:text-white cursor-pointer"
          >
            Sobre
          </a>
          <a
            href="#projetos"
            onClick={(e) => handleScroll(e, "projetos")}
            className="transition hover:text-white cursor-pointer"
          >
            Projetos
          </a>
          <a
            href="#experiencia"
            onClick={(e) => handleScroll(e, "experiencia")}
            className="transition hover:text-white cursor-pointer"
          >
            Experiência
          </a>
          <a
            href="#formacao"
            onClick={(e) => handleScroll(e, "formacao")}
            className="transition hover:text-white cursor-pointer"
          >
            Formação
          </a>

          <Link
            href="/en"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-blue-400 border-l border-slate-800 pl-4"
            title="Switch to English"
          >
            <Globe size={14} />
            EN 🇬🇧
          </Link>
        </div>

        {/* 3. Botão de Contato */}
        <div className="hidden md:flex flex-none items-center">
          <button onClick={handleContactClick} className={contactBtnClass}>
            Contato
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="z-50 ml-auto block text-slate-300 transition hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Mobile Overlay */}
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-950 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col items-center space-y-8 text-xl font-medium text-slate-300">
            <a href="#sobre" onClick={(e) => handleScroll(e, "sobre")}>
              Sobre
            </a>
            <a href="#projetos" onClick={(e) => handleScroll(e, "projetos")}>
              Projetos
            </a>
            <a
              href="#experiencia"
              onClick={(e) => handleScroll(e, "experiencia")}
            >
              Experiência
            </a>
            <a href="#formacao" onClick={(e) => handleScroll(e, "formacao")}>
              Formação
            </a>

            <Link
              href="/en"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-blue-400"
            >
              <Globe size={20} /> EN 🇬🇧
            </Link>

            <button
              onClick={handleContactClick}
              className={`${contactBtnClass} text-sm px-8 py-3`}
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
