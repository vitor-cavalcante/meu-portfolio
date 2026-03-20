import Image from "next/image";

export default function HeroEn() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-16 pt-32 lg:pb-32 lg:pt-48">
      <div className="container relative z-10 mx-auto px-6">
        {/* 'text-center' for mobile and 'lg:text-left' for desktop */}
        <div className="grid grid-cols-1 items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
          {/* COLUMN: TEXT & BUTTONS */}
          {/* 'order-2' places text below the photo on mobile, 'lg:order-1' back to normal on desktop */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-blue-400 md:text-sm">
              IT Coordinator | Systems Analyst
            </h2>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
              IT Strategy &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Development
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg lg:mx-0">
              IT Professional with a hybrid background in{" "}
              <span className="font-semibold text-slate-200">
                Systems Analysis (ADS)
              </span>{" "}
              and{" "}
              <span className="font-semibold text-slate-200">
                Biological Sciences
              </span>
              . Specialist in digital planning, SEO, and technical
              infrastructure.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#experience"
                className="rounded-lg bg-white px-8 py-4 text-center font-bold text-black transition hover:bg-slate-200"
              >
                View Experience
              </a>
              <a
                href="#education"
                className="rounded-lg border border-slate-700 px-8 py-4 text-center font-bold text-white transition hover:bg-slate-900"
              >
                View Education
              </a>
            </div>
          </div>

          {/* COLUMN: IMAGE */}
          {/* 'order-1' places the photo at the top on mobile */}
          <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
            {/* Responsive sizes: h-64/w-64 (mobile), h-80/w-80 (tablet), h-450/w-450 (desktop) */}
            <div className="relative h-64 w-64 animate-float md:h-80 md:w-80 lg:h-[450px] lg:w-[450px]">
              {/* Background decorative element */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-2xl"></div>

              <Image
                src="/vitor-foto.jpg"
                alt="Vitor Cavalcante"
                fill
                className="relative rounded-3xl border border-slate-800 object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute right-0 top-0 -z-10 h-1/2 w-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>
    </section>
  );
}
