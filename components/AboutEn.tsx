export default function AboutEn() {
  return (
    <section id="about" className="bg-slate-950 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* grid-cols-1 for mobile, lg:grid-cols-2 for desktop */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side: Profile Text */}
          <div className="space-y-8">
            <h2 className="flex items-center gap-4 text-2xl font-bold text-white md:text-3xl">
              <span className="h-8 w-1 rounded-full bg-blue-500"></span>
              About Me
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-slate-400 md:text-lg">
              <p className="text-lg text-slate-200 md:text-xl">
                My professional journey is defined by the intersection of the{" "}
                <strong className="text-emerald-400 font-semibold">
                  analytical rigor of Biological Sciences
                </strong>{" "}
                and the{" "}
                <strong className="text-blue-400 font-semibold">
                  structured logic of Information Systems
                </strong>
                .
              </p>

              <p>
                Currently, I serve as an{" "}
                <strong className="text-slate-200">IT Coordinator</strong>,
                exploring the diversity of the technological ecosystem. I have a
                deep interest in various fields—from infrastructure robustness
                and information security fundamentals to software development. I
                am constantly consolidating my knowledge in languages and tools
                such as{" "}
                <span className="text-slate-300">
                  C++, Python, Java, and TypeScript
                </span>
                , as well as web technologies like{" "}
                <span className="text-slate-300">
                  React, Node.js, and Next.js
                </span>
                .
              </p>

              <p>
                I believe in practice as the best form of learning. Therefore, I
                dedicate my free time to personal projects that challenge my
                technical skills, such as development in{" "}
                <strong className="text-blue-400">Unreal Engine 5</strong>
                and future implementations merging game logic with complex
                systems.
              </p>

              <p className="border-l-2 border-slate-800 pl-6 italic">
                My current goal is to channel this versatility into{" "}
                <strong className="text-emerald-400">Bioinformatics</strong>, a
                field I consider fundamental for the future of humanity, where I
                intend to apply cutting-edge technology to solve biological
                problems and drive scientific innovation.
              </p>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          {/* pt-0 on mobile and lg:pt-20 on desktop to maintain visual alignment */}
          <div className="grid grid-cols-1 gap-4 pt-0 sm:grid-cols-2 lg:pt-20">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/50">
              <h3 className="mb-2 font-bold text-blue-400">Hybrid by Nature</h3>
              <p className="text-sm text-slate-500">
                Blending academic scientific rigor with the agility of modern
                IT.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/50">
              <h3 className="mb-2 font-bold text-emerald-400">
                Bioinformatics Focus
              </h3>
              <p className="text-sm text-slate-500">
                Active pursuit of specialization in genomic data and
                computational biology.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/50">
              <h3 className="mb-2 font-bold text-blue-400">
                Technical Exploration
              </h3>
              <p className="text-sm text-slate-500">
                Self-taught development in UE5, C++, and systems architecture.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/50">
              <h3 className="mb-2 font-bold text-emerald-400">
                Strategic Management
              </h3>
              <p className="text-sm text-slate-500">
                IT infrastructure coordination and planning focused on B2B
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
