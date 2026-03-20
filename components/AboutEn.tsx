"use client";

export default function AboutEn() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-16 lg:py-24 border-t border-slate-900/50 scroll-mt-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lado Esquerdo: Texto de Perfil */}
          <div className="space-y-8">
            <h2 className="flex items-center gap-4 text-2xl font-bold text-white md:text-3xl">
              <span className="h-8 w-1 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
              About Me
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-slate-400 md:text-lg">
              <p className="text-lg text-slate-200 md:text-xl leading-relaxed">
                My professional journey is defined by the intersection of the{" "}
                <strong className="text-emerald-400 font-semibold italic">
                  analytical rigor of Biological Sciences
                </strong>{" "}
                and the{" "}
                <strong className="text-blue-400 font-semibold italic">
                  structured logic of Information Systems
                </strong>
                .
              </p>

              <p>
                As an <strong className="text-slate-200">IT Coordinator</strong>
                , I coordinate infrastructure with a focus on B2B efficiency. My
                technical interests span from security to high-performance
                development using{" "}
                <span className="text-slate-200 font-medium">
                  C++, Python, and TypeScript
                </span>
                .
              </p>

              <p>
                In my personal projects, I explore the synergy between
                storytelling and complex systems within{" "}
                <strong className="text-blue-400">Unreal Engine 5</strong>,
                applying Jungian archetypes to narrative game design.
              </p>

              <p className="border-l-2 border-emerald-500/30 pl-6 italic text-slate-300 bg-emerald-500/5 py-4 rounded-r-xl">
                My primary goal is to channel this versatility into{" "}
                <strong className="text-emerald-400">Bioinformatics</strong>,
                leveraging cutting-edge technology to drive global scientific
                innovation.
              </p>
            </div>
          </div>

          {/* Lado Direito: Feature Cards */}
          <div className="grid grid-cols-1 gap-4 pt-0 sm:grid-cols-2 lg:pt-20">
            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1">
              <h3 className="mb-2 font-bold text-blue-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Hybrid by Nature
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Blending academic scientific rigor with the agility of modern IT
                processes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-emerald-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1">
              <h3 className="mb-2 font-bold text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Bioinformatics
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Specializing in genomic data analysis and computational biology
                research.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:-translate-y-1">
              <h3 className="mb-2 font-bold text-blue-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Tech Mastery
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Hands-on development in UE5, C++, and systems architecture.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-emerald-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:-translate-y-1">
              <h3 className="mb-2 font-bold text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                IT Leadership
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Expertise in SEO, digital planning, and B2B administrative
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
