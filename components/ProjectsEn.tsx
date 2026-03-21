"use client";

export default function ProjectsEn() {
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

        {/* Placeholder Card with Glow and Hover Effects */}
        <div className="group relative overflow-hidden rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/40">
          {/* Dynamic background lights */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] transition-opacity group-hover:opacity-100 opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Icon with glow pulse */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 border border-slate-800 text-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
              🚀
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              New experiences under construction
            </h3>

            <p className="mx-auto max-w-lg text-slate-400 leading-relaxed">
              Currently immersed in developing systems and narrative mechanics
              in
              <span className="text-blue-400 font-medium ml-1">
                Unreal Engine 5
              </span>{" "}
              and exploring computational solutions for
              <span className="text-emerald-400 font-medium ml-1">
                Bioinformatics
              </span>
              . Soon, this section will showcase case studies, documentation,
              and functional prototypes.
            </p>

            {/* Status/Loading Indicator */}
            <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950/50 border border-slate-800">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] [animation-delay:-0.3s]"></span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] [animation-delay:-0.5s]"></span>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                Compiling assets...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
