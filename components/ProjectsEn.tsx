"use client";

import { Github, Dna } from "lucide-react";

export default function ProjectsEn() {
  const projects = [
    {
      title: "C++ Bioparser",
      description:
        "A high-performance processing engine designed for analyzing biological sequences in FASTA format. Optimized for memory efficiency and execution speed using modern C++ standards.",
      tags: ["C++", "Bioinformatics", "STL", "Data Parsing"],
      github: "https://github.com/vitor-cavalcante/bioinfoparser-cpp",
      icon: <Dna className="w-6 h-6 text-emerald-400" />,
      color: "group-hover:border-emerald-500/50",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 py-24 border-t border-slate-900 scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="flex items-center gap-4 text-3xl font-bold text-white mb-12">
          <span className="h-8 w-1 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></span>
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Projects */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/20 p-8 transition-all duration-500 hover:bg-slate-900/40 ${project.color}`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 shadow-lg">
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder Card (Coming Soon) */}
          <div className="group relative overflow-hidden rounded-3xl border border-dashed border-slate-800 bg-slate-900/10 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:border-blue-500/30">
            <div className="absolute -inset-px bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-xl group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all">
                🚀
              </div>
              <h3 className="text-lg font-bold text-white mb-2">UE5 & More</h3>
              <p className="text-xs text-slate-500 max-w-[220px] mb-6 leading-relaxed">
                Currently developing narrative mechanics and bioinformatics
                tools.
              </p>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 border border-slate-800">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500"></span>
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-slate-500">
                  Compiling...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
