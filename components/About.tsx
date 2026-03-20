export default function About() {
  return (
    <section id="sobre" className="bg-slate-950 py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* grid-cols-1 para mobile, lg:grid-cols-2 para desktop */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Lado Esquerdo: Texto de Perfil */}
          <div className="space-y-8">
            <h2 className="flex items-center gap-4 text-2xl font-bold text-white md:text-3xl">
              <span className="h-8 w-1 rounded-full bg-blue-500"></span>
              Sobre Mim
            </h2>

            <div className="space-y-6 text-base leading-relaxed text-slate-400 md:text-lg">
              <p className="text-lg text-slate-200 md:text-xl">
                Minha trajetória profissional é definida pela interseção entre a{" "}
                <strong className="text-emerald-400 font-semibold">
                  rigorosidade analítica das Ciências Biológicas
                </strong>{" "}
                e a{" "}
                <strong className="text-blue-400 font-semibold">
                  lógica estruturada dos Sistemas de Informação
                </strong>
                .
              </p>

              <p>
                Atualmente, atuo como{" "}
                <strong className="text-slate-200">Coordenador de TI</strong>,
                onde exploro a diversidade do ecossistema tecnológico. Tenho um
                profundo interesse pelos diversos ramos da área — desde a
                robustez da infraestrutura e os fundamentos da segurança da
                informação até o desenvolvimento de software. Busco
                constantemente consolidar meus conhecimentos em linguagens e
                ferramentas como{" "}
                <span className="text-slate-300">
                  C++, Python, Java e TypeScript
                </span>
                , além de tecnologias web como{" "}
                <span className="text-slate-300">React, Node.js e Next.js</span>
                .
              </p>

              <p>
                Acredito na prática como a melhor forma de aprendizado. Por
                isso, dedico meu tempo livre a projetos pessoais que desafiam
                minha capacidade técnica, como o desenvolvimento em{" "}
                <strong className="text-blue-400">Unreal Engine 5</strong> e
                futuras implementações que unem lógica de jogo e sistemas
                complexos.
              </p>

              <p className="border-l-2 border-slate-800 pl-6 italic">
                Meu objetivo atual é canalizar essa versatilidade para a{" "}
                <strong className="text-emerald-400">Bioinformática</strong>,
                uma área que considero fundamental para o futuro da humanidade,
                onde pretendo aplicar tecnologia de ponta para solucionar
                problemas biológicos e impulsionar inovações científicas.
              </p>
            </div>
          </div>

          {/* Lado Direito: Grid de Cards */}
          {/* pt-0 no mobile e lg:pt-20 no desktop para manter o alinhamento visual */}
          <div className="grid grid-cols-1 gap-4 pt-0 sm:grid-cols-2 lg:pt-20">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/50">
              <h3 className="mb-2 font-bold text-blue-400">
                Híbrido por Natureza
              </h3>
              <p className="text-sm text-slate-500">
                Unindo o rigor científico da academia com a agilidade da TI
                moderna.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/50">
              <h3 className="mb-2 font-bold text-emerald-400">
                Foco em Bioinformática
              </h3>
              <p className="text-sm text-slate-500">
                Busca ativa por especialização em dados genômicos e biologia
                computacional.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-blue-500/50">
              <h3 className="mb-2 font-bold text-blue-400">
                Exploração Técnica
              </h3>
              <p className="text-sm text-slate-500">
                Desenvolvimento autodidata em UE5, C++ e arquitetura de
                sistemas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/50">
              <h3 className="mb-2 font-bold text-emerald-400">
                Gestão Estratégica
              </h3>
              <p className="text-sm text-slate-500">
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
