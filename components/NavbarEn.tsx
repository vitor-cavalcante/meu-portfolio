"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";

export default function NavbarEn() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Bloqueia o scroll do corpo da página quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      router.push("/en", { scroll: false });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        router.push(`/en/#${id}`, { scroll: false });
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
    <>
      <nav className="fixed top-0 z-[100] w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex flex-none items-center">
            <Link
              href="/en"
              onClick={(e) => handleScroll(e, "top")}
              className="transition-opacity hover:opacity-80"
            >
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent">
                Vitor Cavalcante
              </span>
            </Link>
          </div>

          {/* CENTER: Links (Desktop) */}
          <div className="hidden absolute left-1/2 -translate-x-1/2 items-center space-x-8 text-sm font-medium text-slate-300 md:flex">
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="transition hover:text-white cursor-pointer"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="transition hover:text-white cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => handleScroll(e, "experience")}
              className="transition hover:text-white cursor-pointer"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, "education")}
              className="transition hover:text-white cursor-pointer"
            >
              Education
            </a>

            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-blue-400 border-l border-slate-800 pl-4"
              title="Switch to Portuguese"
            >
              <Globe size={14} /> PT 🇧🇷
            </Link>
          </div>

          <div className="hidden md:flex flex-none items-center">
            <button onClick={handleContactClick} className={contactBtnClass}>
              Contact
            </button>
          </div>

          {/* Spacer for desktop layout alignment */}
          <div className="w-10 md:hidden"></div>
        </div>
      </nav>

      {/* MOBILE BUTTON: Outside <nav> to bypass backdrop-blur issues */}
      <button
        className="fixed right-5 top-3.5 z-[200] block p-2 text-slate-300 transition hover:text-white md:hidden pointer-events-auto"
        onClick={() => {
          console.log("English menu toggled");
          toggleMenu();
        }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-[190] flex flex-col bg-[#020617] transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-16 items-center px-6 border-b border-slate-900/50">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-lg font-bold text-transparent">
            Navigation
          </span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center space-y-8 text-xl font-medium text-slate-300">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleScroll(e, "experience")}
            className="hover:text-white"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={(e) => handleScroll(e, "education")}
            className="hover:text-white"
          >
            Education
          </a>

          <div className="h-px w-12 bg-slate-800"></div>

          <Link
            href="/"
            onClick={toggleMenu}
            className="flex items-center gap-2 text-blue-400"
          >
            <Globe size={20} /> Portuguese Version 🇧🇷
          </Link>

          <button
            onClick={handleContactClick}
            className="rounded-full bg-white px-10 py-4 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}
