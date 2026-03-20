export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-slate-950 py-24 border-t border-slate-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="flex items-center gap-4 text-3xl font-bold text-white mb-12">
          <span className="h-8 w-1 rounded-full bg-emerald-500"></span>
          Projetos
        </h2>

        <div className="relative overflow-hidden rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 p-12 text-center">
          {/* Efeito de brilho sutil */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-2xl">
              🚀
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Novas experiências em construção
            </h3>

            <p className="mx-auto max-w-lg text-slate-400 leading-relaxed">
              Atualmente mergulhado no desenvolvimento de ambientes e mecânicas
              na
              <span className="text-blue-400"> Unreal Engine 5</span> e
              explorando soluções em
              <span className="text-emerald-400"> Bioinformática</span>. Em
              breve, esta seção exibirá estudos de caso, repositórios e
              protótipos funcionais.
            </p>

            <div className="mt-8 flex gap-2">
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></span>
              <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.5s]"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
