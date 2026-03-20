export default function About() {
  return (
    <section
      id="sobre"
      className="bg-slate-950 py-16 lg:py-24 border-t border-slate-900/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lado Esquerdo: Texto de Perfil */}
          <div className="space-y-8">
            <h2 className="flex items-center gap-4 text-2xl font-bold text-white md:text-3xl">
              <span className="h-8 w-1 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></span>
              Sobre Mim
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-slate-400 md:text-lg">
              <p className="text-lg text-slate-200 md:text-xl leading-relaxed">
                Minha trajetória profissional é definida pela interseção entre a{" "}
                <strong className="text-emerald-400 font-semibold italic">
                  rigorosidade analítica das Ciências Biológicas
                </strong>{" "}
                e a{" "}
                <strong className="text-blue-400 font-semibold italic">
                  lógica estruturada dos Sistemas de Informação
                </strong>
                .
              </p>

              <p>
                Atualmente, atuo como{" "}
                <strong className="text-slate-200">Coordenador de TI</strong>,
                explorando a versatilidade do ecossistema tecnológico. Tenho um
                profundo interesse pela robustez da infraestrutura, fundamentos
                de segurança e o desenvolvimento de software de alta performance
                em{" "}
                <span className="text-slate-200 font-medium">
                  C++, Python e TypeScript
                </span>
                .
              </p>

              <p>
                Acredito na prática como o motor do aprendizado. Dedico meu
                tempo livre a projetos que desafiam minha capacidade técnica,
                como o desenvolvimento em{" "}
                <strong className="text-blue-400">Unreal Engine 5</strong>, onde
                uno narrativa e sistemas complexos.
              </p>

              <p className="border-l-2 border-emerald-500/30 pl-6 italic text-slate-300 bg-emerald-500/5 py-4 rounded-r-xl">
                Meu objetivo é canalizar essa versatilidade para a{" "}
                <strong className="text-emerald-400">Bioinformática</strong>,
                aplicando tecnologia de ponta para solucionar problemas
                biológicos e impulsionar inovações científicas globais.
              </p>
            </div>
          </div>

          {/* Lado Direito: Grid de Cards Informativos */}
          <div className="grid grid-cols-1 gap-4 pt-0 sm:grid-cols-2 lg:pt-20">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
              <h3 className="mb-2 font-bold text-blue-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Híbrido por Natureza
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Unindo o rigor científico da academia com a agilidade da TI
                moderna.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-emerald-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="mb-2 font-bold text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Bioinformática
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Foco em dados genômicos e biologia computacional aplicada.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20_rgba(59,130,246,0.1)]">
              <h3 className="mb-2 font-bold text-blue-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Exploração Técnica
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Desenvolvimento em UE5, C++ e arquitetura de sistemas
                escaláveis.
              </p>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:border-emerald-500/50 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <h3 className="mb-2 font-bold text-emerald-400 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Gestão Estratégica
              </h3>
              <p className="text-sm text-slate-500 leading-snug">
                Coordenação de infraestrutura e planejamento focado em
                resultados B2B.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
