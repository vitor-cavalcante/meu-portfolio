"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function NavbarEn() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/en", { scroll: false });
  };

  const handleContactClick = () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
    window.open(`mailto:${email}`, "_blank", "noopener,noreferrer");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      {/* justify-between garante que os blocos das pontas se afastem */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* LADO ESQUERDO: Logo */}
        <div className="flex flex-none items-center">
          <Link
            href="/en"
            onClick={scrollToTop}
            className="z-50 transition-opacity hover:opacity-80"
          >
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
              Vitor Cavalcante
            </span>
          </Link>
        </div>

        {/* CENTRO: Links (Centralização absoluta em relação à largura da tela) */}
        <div className="hidden absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-sm font-medium text-slate-300 md:flex">
          <Link href="#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="#experience" className="transition hover:text-white">
            Experience
          </Link>
          <Link href="#education" className="transition hover:text-white">
            Education
          </Link>

          {/* Language Switcher */}
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-blue-400 border-l border-slate-800 pl-4"
            title="Mudar para Português"
          >
            <Globe size={14} />
            PT 🇧🇷
          </Link>
        </div>

        {/* LADO DIREITO: Botão de Contato */}
        <div className="hidden md:flex flex-none items-center">
          <button
            onClick={handleContactClick}
            className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black transition hover:bg-slate-200"
          >
            Contact
          </button>
        </div>

        {/* MOBILE: Botão Hambúrguer */}
        <button
          className="z-50 ml-auto block text-slate-300 transition hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Open menu"
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
            <Link
              href="#about"
              onClick={toggleMenu}
              className="hover:text-white"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={toggleMenu}
              className="hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              onClick={toggleMenu}
              className="hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="#education"
              onClick={toggleMenu}
              className="hover:text-white"
            >
              Education
            </Link>

            <Link
              href="/"
              onClick={toggleMenu}
              className="flex items-center gap-2 text-lg font-bold text-blue-400"
            >
              <Globe size={20} />
              PT 🇧🇷
            </Link>

            <button
              onClick={handleContactClick}
              className="mt-4 rounded-full bg-white px-8 py-3 text-sm font-bold text-black transition hover:bg-slate-200"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
